import { create } from "zustand";

type IAwsStore = {
  selectedWeapon: number | null;
  selectedPower: number | null;
};

export const useAwsStore = create<IAwsStore>((set, get) => ({
  selectedWeapon: null,
  selectedPower: 0,
}));
