import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { switchView } from "../redux";

export const Navbar = ({ views }) => {
  const activeTab = useSelector(state => state.nav.activeTabIndex)
  const dispatch = useDispatch()

  return (
    <div style={{ margin: '40px 0 80px 40px' }}>
      {views.map((view, idx) => (
        <button
          tabIndex={idx}
          onClick={() => dispatch(switchView(idx))}
        >{view.label}</button>)
      )}
    </div>
  )
}
