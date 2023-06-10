import { useQuery } from "@tanstack/react-query";

export const useNftCollection = (wallet: string) => {
  return useQuery({
    queryKey: ["nftCollection", wallet],
    queryFn: async () => {
      const res = await fetch(`/api/nft?wallet=${wallet}`, {
        cache: "no-store",
      });
      const data = await res.json();
      return data;
    },
    enabled: !!wallet,
    staleTime: 1000 * 60 * 2,
  });
};
