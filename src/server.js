// MirageJS Server Config
import { Server, Model, Factory } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = new Server(
    {

      routes() {
        this.namespace = "api/v1/banking"

        this.get("/indicators", (schema, request) => {
          return {
            kpis: {
              totalCash: {
                label: 'Total Cash',
                value: 210
              },
              available: {
                label: 'Total Cash',
                value: 200
              },
              availableToSpend: {
                label: 'Available to Spend',
                value: 200
              },
              treasury: {
                label: 'Treasury',
                value: 0
              },
              cashReserve: {
                label: 'Cash Reserve',
                value: 0
              },
              runway: {
                label: 'Runway',
                value: 5.45,
                unit: 'months'
              },
              instantCash: {
                label: 'Instant Cash',
                value: 200
              },
              netCashFlow: {
                label: 'Net Cash Flow',
                value: 0
              },
              idle: {
                label: 'Idle Cash',
                value: 198
              },
              treasure: {
                label: 'Treasure',
                accountNumber: '945bbc15-4459-4a49-a481-fc3f792079'
              },
              flows: {
                inflows: 0,
                outflows: 0
              }
            },
          }
        })
      }
    },
  )
}
