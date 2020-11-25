import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { views } from "../config/views";

export const Dashboard = () => {
  const activeTab = useSelector(state => state.nav.activeTabIndex)

  const { kpis } = views[activeTab]

  console.log(kpis)

  return (
    <div>
      {activeTab}
      {
        kpis.map(kpi => (
          <div>
            {kpi.label}
          </div>
        ))
      }
    </div>
  )
}
