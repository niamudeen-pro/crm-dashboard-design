import { useState } from "react";
import { Calendar } from "lucide-react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

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
            <div className="p-4">
                {/* Header controls */}
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 space-y-4">
                    <Tabs defaultValue="revenue" onValueChange={setActiveTab}>
                        <TabsList className="border py-5">
                            {TABS.map((tab) => (
                                <TabsTrigger
                                    key={tab.value}
                                    value={tab.value}
                                    className={cn(
                                        "capitalize p-5 cursor-pointer rounded-lg",
                                        "text-gray-700 dark:text-gray-300",
                                        "data-[state=active]:bg-white data-[state=active]:text-black",
                                        "dark:data-[state=active]:bg-purple-600 dark:data-[state=active]:text-white"
                                    )}
                                >
                                    {tab.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                    <div className="flex gap-2">
                        <Select defaultValue="all">
                            <SelectTrigger className="w-[180px] bg-background">
                                <SelectValue placeholder="All Categories" />
                            </SelectTrigger>
                            <SelectContent>
                                {CATEGORIES.map((cat) => (
                                    <SelectItem
                                        key={cat.value}
                                        value={cat.value}
                                        className="capitalize cursor-pointer"
                                    >
                                        {cat.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Button variant="outline" className="gap-2">
                            Jun 2023
                            <Calendar className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Title and total revenue */}
                <div className="flex justify-between items-center mb-4">
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
