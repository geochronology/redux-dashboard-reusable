import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { views } from "../config/views";
import { useQuery } from "react-query";
import axios from "axios";

export const Dashboard = () => {
  const [kpiData, setKpiData] = useState({})

  useEffect(() => {
    async function fetchKpiData() {
      const response = await axios.get(`/api/v1/banking/indicators`)
        .then(res => setKpiData(res.data))
      // .then(res => console.log(res))
      // return response
    }

    fetchKpiData()
    // console.log('updating data')
    // console.log(data)
  }, [])


  // const activeTab = useSelector(state => state.nav.activeTabIndex)
  // const [kpiData, setKpiData] = useState({})
  // console.log(data)
  // const { kpis } = views[activeTab]

  // if (isLoading) return <div>loading...</div>
  // if (error) return <div>oop!! error ocurred</div>


  // Object.entries(kpiData['kpis'])
  //   .forEach(([key, value]) => console.log(`${key}: ${value.label}`))

  return (
    <div>
      {kpiData ? 'data' : 'no data'}
      {kpiData && console.log(kpiData)}
      {/* {activeTab} */}
      {/* {kpiData.map((kpi) => (
        <span>{kpi.label}</span>
      ))} */}
      {/* {Object.entries(kpiData['kpis'])
        .forEach(([key, value]) => (
          <span>{key}: ${value.label}</span>
        ))} */}
      {Object.entries(kpiData.kpis).map(([key, value]) => (
        <p>{key}: {value.value}</p>
      ))}

    </div>
  )
}

// {
//   kpis.map(kpi => (
//     <div>
//       {kpi.label}
//       {data}
//       {/* {data[kpi].value} */}
//     </div>
//   ))
// }



// {Object.entries(kpiData['kpis']).forEach(([key, value]) => (
//   // console.log(`${key}: ${value}`))
//   <span>
//     {label}: {value}
//   </span>
// ))}