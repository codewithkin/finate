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
import { Link, useSearchParams } from "react-router-dom"
import { useDataStore } from "@/stores/data.store"


export default function SavedChart() {
  const [data, setChartData] = React.useState();
  
  const chartConfig = {
    budgeted: {
      label: "Budgeted",
      color: "hsl(var(--chart-1))",
    },
    spent: {
      label: "Spent",
      color: "hsl(var(--chart-2))",
    },
    received: {
      label: "Received",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig

  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0)
  }, [])

  const date = new Date();
  const monthNumber = date.getMonth();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const month = months[monthNumber];

  return (
    <Card className="flex flex-col justify-center items-center">
      <CardHeader className="items-center pb-0">
        <CardTitle>Overall Statistics</CardTitle>
        {
          budgets.length > 0 ?
          <CardDescription>1 - end of {budgets[0].endsOn} 2024</CardDescription> :
          <CardDescription>1 - end of {month} 2024</CardDescription>
        }
      </CardHeader>
      {
        budgets.length > 0 
        || expenses.length > 0 
        || receptions.length > 0 ?
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
              dataKey="type"
              nameKey="amount"
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
                          {totalVisitors.toLocaleString()}
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
        </CardContent> :
        <h2 className="text-body-text text-2xl text-center font-semibold py-4">
          No data yet.
        </h2>
      }
      <CardFooter className="flex-col gap-2 text-sm">
        {budgets.length > 0 ?
                  <div className="flex items-center gap-2 font-medium leading-none">
                  5% Increase in savings <TrendingUp className="h-4 w-}4" />
                </div> :
          <Link className="bg-primary px-8 py-2 hover:bg-purple-700 transition duration-500 rounded-md text-white font-semibold" to="#">Create your first budget</Link>
        }
        {expenses.length > 0 &&
          <div className="leading-none text-muted-foreground">
            Showing your spending. 
          </div>
        }
      </CardFooter>
    </Card>
  )
}