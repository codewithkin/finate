"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useDataStore } from "@/stores/data.store"

const chartConfig = {
  expenses: {
    label: "Expenses",
    color: "#E10C22"
  },
  receptions: {
    label: "Receptions",
    color: "#00B25A"
  }
} satisfies ChartConfig

export function TransactionsRatio() {
  const expenses = useDataStore(state => state.expenses);
  const receptions = useDataStore(state => state.receipts);

  const transactions = [...expenses, ...receptions];

  const chartData = [
    {
      category: "Expenses",
      number: expenses.length,
    },
    {
      category: "Receptions",
      number: receptions.length,
    },
]

  const transactionsData = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.number, 0)
  }, [])

  return (
    <Card className="flex flex-col pb-4 my-4">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-2xl">Expense - Reception ratio</CardTitle>
      </CardHeader>

          {
            transactions.length > 0 ?
            <>
                  <CardContent className="flex-1 pb-0">
              <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="number"
                nameKey="category"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {transactionsData.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Visitors
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </Pie>
              </PieChart>
               </ChartContainer>
            </CardContent>
            </> : 
            <h2 className="text-body-text text-lg text-center">No transactions yet</h2>
          }
       
    </Card>
  )
}
