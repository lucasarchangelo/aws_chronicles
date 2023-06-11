import { useNftCollection } from "@/hooks/useNftCollection";
import { useAwsStore } from "@/store/awsStore";
import { useEthersStore } from "@/store/ethersStore";
import { useEffect } from "react";

export const useHome = () => {
  const currentWallet = useEthersStore((state) => state.currentWallet);
  const selectedWeapon = useAwsStore((state) => state.selectedWeapon);
  const { data, isLoading, isError } = useNftCollection(currentWallet);

  useEffect(() => {
    if (!data?.NFTS[0]?.tokenId) return;
    useAwsStore.setState({ selectedWeapon: data?.NFTS[0]?.tokenId });
  }, [data]);

  const selectedWeaponObj = data?.NFTS
    ? data?.NFTS?.find(
        (item: any) =>
          item?.tokenId === (selectedWeapon ?? data?.NFTS[0]?.tokenId)
      )
    : null;

  return {
    data,
    isLoading,
    isError,
    selectedWeaponObj,
    selectedWeapon,
  };
};
