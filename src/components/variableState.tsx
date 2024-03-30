import { create } from "zustand";

interface CustomType {
  choice: string;
  imageSrc: any;
  imgAltText: string;
}
interface PredictionState {
  prediction: string;
  setPrediction: (prediction: string) => void;
}
interface PlayerState {
  player: CustomType; //choice, imageSrc, imgAltText
  setPlayer: (player: CustomType) => void;
}
interface PcState {
  pc: CustomType;
  setPc: (pc: CustomType) => void;
}

export const usePredictionStore = create<PredictionState>((set) => ({
  prediction: "",
  setPrediction: (prediction: string) => set({ prediction }),
}));
export const usePlayerStore = create<PlayerState>((set) => ({
  player: { choice: "", imageSrc: "", imgAltText: "" },
  setPlayer: (player: CustomType) => set({ player }),
}));
export const usePcStore = create<PcState>((set) => ({
  pc: { choice: "", imageSrc: "", imgAltText: "" },
  setPc: (pc: CustomType) => set({ pc }),
}));
