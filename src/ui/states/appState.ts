import type { IAppStateBase } from "@/shared/interfaces";
import { networks } from "luckycoinjs-lib";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { setupStateProxy } from "../utils/setup";

const proxy = setupStateProxy();

export interface IAppState extends IAppStateBase {
  updateAppState: (
    app: Partial<IAppState>,
    updateBack?: boolean
  ) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAppState = create<IAppState>()(
  immer((set) => ({
    isReady: false,
    isUnlocked: false,
    addressBook: [],
    language: "en",
    activeTabs: [],
    network: networks.luckycoin,
    updateAppState: async (app: Partial<IAppState>, updateBack = true) => {
      if (updateBack) {
        await proxy.updateAppState(app);
      } else {
        set(app);
      }
    },
    logout: async () => {
      await proxy.updateAppState({ password: undefined, isUnlocked: false });
      set({ password: undefined, isUnlocked: false });
    },
  }))
);
