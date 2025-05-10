import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardFooter } from "~/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";

export const barChartData = [
  {
    title: "Smart Home Tech",
    description: "Highest Renter Interest",
    percent: 72,
  },
  {
    title: "Health-Focused",
    percent: 68,
    description: "Highest Renter Interest",
  },
  {
    title: "Sustainability",
    percent: 65,
    description: "Growing Renter Interest",
  },
  {
    title: "Traditional",
    percent: 45,
    description: "Standard Renter Interest",
  },
];

const chartConfig = {
  percent: {
    label: "Percent",
    color: "#006eff67",
  },
  label: {
    color: "hsl(var(--foreground))",
  },
} satisfies ChartConfig;

export default function MyBarChart() {
  return (
    <Card>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={barChartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="title"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value: string) => value}
              hide
            />
            <XAxis dataKey="percent" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  labelFormatter={(value: string) =>
                    barChartData.find((d) => d.title === value)?.description
                  }
                />
              }
            />
            <Bar
              dataKey="percent"
              layout="vertical"
              fill="var(--color-percent)"
              radius={4}
            >
              <LabelList
                dataKey="title"
                position="insideLeft"
                offset={8}
                className="fill-black"
                fontSize={12}
              />
              <LabelList
                dataKey="percent"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
                formatter={(value: number) => `${value}%`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="titles-start flex-col gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          With 21M+ apartment units in the U.S., eSpring offers a low-effort,
          high-impact upgrade perfectly aligned with top renter priorities.
        </div>
      </CardFooter>
    </Card>
  );
}
