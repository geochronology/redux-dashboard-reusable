import { SWITCH_VIEW } from "./navTypes";

const initialState = {
  // Set the default active tab as the first view
  activeTabIndex: 0
}

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_VIEW: return {
      ...state,
      activeTabIndex: action.payload
    }
    default: return state
  }
}

export default navReducer