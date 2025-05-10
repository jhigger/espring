import { CartesianGrid, LabelList, XAxis } from "recharts";

import { Card, CardContent, CardFooter } from "~/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";

import { Line, LineChart } from "recharts";

export const lineChartData = [
  {
    quarter: "Q1",
    money: 0,
  },
  {
    quarter: "Q2",
    money: 20000,
  },
  {
    quarter: "Q3",
    money: 40000,
  },
  {
    quarter: "Q4",
    money: 60000,
  },
];

const chartConfig = {
  money: {
    label: "Money",
    color: "#006eff67",
  },
  label: {
    color: "hsl(var(--foreground))",
  },
} satisfies ChartConfig;

export default function MyLineChart() {
  return (
    <Card>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={lineChartData}
            margin={{
              top: 24,
              left: 12,
              right: 14,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="quarter"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value: string) => value}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  labelFormatter={(value: string) => {
                    switch (value) {
                      case "Q1":
                        return "First quarter";
                      case "Q2":
                        return "Second quarter";
                      case "Q3":
                        return "Third quarter";
                      case "Q4":
                        return "Fourth quarter";
                    }
                  }}
                />
              }
            />
            <Line
              dataKey="money"
              type="natural"
              stroke="var(--color-money)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-money)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                formatter={(value: number) => `$${value / 1000}k`}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing net annual gain for 100-unit complex
        </div>
      </CardFooter>
    </Card>
  );
}
