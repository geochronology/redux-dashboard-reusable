import indicators from "./indicators";

const {
  totalCash,
  available,
  cashReserve,
  netCashFlow,
  runway,
  treasury,
  treasure,
  availableToSpend
} = indicators

export const views = [
  {
    label: "View 1",
    kpis: [
      totalCash,
      available,
      cashReserve,
      netCashFlow
    ]
  }, {
    label: "View 2",
    kpis: [
      totalCash,
      available,
      cashReserve,
      runway
    ]
  }, {
    label: "View 3",
    kpis: [
      treasury,
      treasure,
      availableToSpend
    ]
  },
]
