import { SWITCH_VIEW } from "./navTypes";

export const switchView = (activeTabIndex = 0) => {
  return {
    type: SWITCH_VIEW,
    payload: activeTabIndex
  }
}