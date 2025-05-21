import { useState } from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";
import CustomTabs from "@/components/shared/CustomTabs";
import CustomSelect from "@/components/shared/CustomSelect";
import CustomCalendar from "@/components/shared/CustomCalender";

const MONTHLY_DATA = [
    { name: "Jan", value: 559.12 },
    { name: "Feb", value: 840.2 },
    { name: "Mar", value: 898.0 },
    { name: "Apr", value: 203.0 },
    { name: "May", value: 400.01 },
    { name: "Jun", value: 920.12 },
    { name: "Jul", value: 398.0 },
    { name: "Aug", value: 882.0 },
    { name: "Sep", value: 390.0 },
    { name: "Oct", value: 910.0 },
    { name: "Nov", value: 410.12 },
    { name: "Dec", value: 840.2 },
];

const totalRevenue = MONTHLY_DATA
    .reduce((sum, item) => sum + item.value, 0)
    .toFixed(2);

const TABS = [
    { label: "Revenue", value: "revenue" },
    { label: "Orders", value: "orders" },
    { label: "Customers", value: "customers" },
];

const CATEGORIES = [
    { label: "All Categories", value: "all" },
    { label: "Electronics", value: "electronics" },
    { label: "Clothing", value: "clothing" },
    { label: "Food", value: "food" },
];


export default function RevenueChart() {
    const [activeTab, setActiveTab] = useState("revenue");
    return (
        <div className="w-full bg-accent border rounded-2xl">
            <div>
                {/* Header controls */}
                <div className="flex  flex-col items-start sm:flex-row justify-between gap-4 px-4 py-3 mb-4 border-b">
                    <CustomTabs tabs={TABS} setActiveTab={setActiveTab} />
                    <div className="flex gap-2">
                        <CustomSelect options={CATEGORIES} selected={CATEGORIES[0]?.label} className="w-[146px] bg-background" />
                        <CustomCalendar dateFormat={{ options: { year: "numeric", month: "short" } }} />
                    </div>
                </div>

                {/* Title and total revenue */}
                <div className="flex justify-between items-center mb-4 px-5">
                    <h2 className="text-xl font-semibold capitalize">{activeTab}</h2>
                    <div className="text-sm text-muted-foreground">
                        Total Revenue:{" "}
                        <span className="font-semibold text-foreground">${totalRevenue}</span>
                    </div>
                </div>

                {/* Chart */}
                <div className="w-full overflow-x-auto">
                    <div className="min-w-[800px] h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={MONTHLY_DATA}
                                margin={{ top: 30, right: 10, left: 10, bottom: 20 }}
                                barCategoryGap={20}
                            >
                                <CartesianGrid
                                    vertical={false}
                                    strokeDasharray="3 3"
                                    stroke="#f0f0f0"
                                />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12 }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12 }}
                                    tickFormatter={(value) => `${value.toFixed(0)}`}
                                    domain={[0, 1000]}
                                    ticks={[0, 200, 400, 600, 800, 1000]}
                                />
                                <Bar
                                    dataKey="value"
                                    fill="#6366f1"
                                    radius={[4, 4, 0, 0]}
                                    label={{
                                        position: "top",
                                        formatter: (value: unknown) => `$${value}`,
                                        fontSize: 12,
                                    }}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Year Label */}
                <div className="flex justify-center items-center mt-4 text-sm">
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                        <span>2023</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
