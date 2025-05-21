import {
    PieChart, Pie, Cell,
    Label,
} from 'recharts';
import { cn } from "@/lib/utils"
import CustomCalendar from "@/components/shared/CustomCalender"
import CustomSelect from "@/components/shared/CustomSelect";
import { useTheme } from '@/components/theme-provider';
import { DONUT_CHART_DATA, DONUT_CHART_DATA_COLORS, ORDER_STATUS_CATEGORIES, ORDER_STATUS_LIST } from '@/constants';

export default function OrderStatus() {
    return (
        <div className="border w-full rounded-2xl bg-accent overflow-hidden">

            {/* Block Header ****** */}
            <div className="flex flex-col gap-4 sm:flex-row items-center justify-between px-4 py-[19px]">
                <h2 className="block__heading">Order Status</h2>
                <div className="flex flex-col sm:flex-row gap-2 mt-2 md:mt-0">
                    <CustomSelect options={ORDER_STATUS_CATEGORIES} selected={ORDER_STATUS_CATEGORIES[0]?.label} className="w-[146px] bg-background" />
                    <CustomCalendar dateFormat={{ options: { year: "numeric" } }} />
                </div>
            </div>

            {/* Block Content ***** */}

            <div className="border-t flex flex-col md:flex-row md:justify-between">
                <div className="order-1 md:order-2 flex__center">
                    <DonutChart />
                </div>
                <div className="order-2 md:order-1 grid grid-cols-2">
                    <OrderStatusGrid />
                </div>
            </div>
        </div>
    )
}




// -----------------------------------------------
//  These are helper components used in JSX below, This keeps the main component cleaner and easier to read
// -----------------------------------------------


function DonutChart() {
    const { theme } = useTheme()
    const isDarkMode = theme === "dark"
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }: {
        cx: number;
        cy: number;
        midAngle: number;
        innerRadius: number;
        outerRadius: number;
        percent: number;
        index: number;
    }) => {

        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill={isDarkMode ? "#0E253C" : "#ffffff"}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="12"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className="order__status__chart">
            <PieChart width={242} height={242} >
                <Pie
                    data={DONUT_CHART_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                    stroke="none"
                    label={renderCustomizedLabel}
                    labelLine={false}
                >
                    <Label
                        value="250"
                        position="center"
                        style={{
                            fontSize: '28px',
                            fontWeight: 'bold',
                            fill: isDarkMode ? "#ffffff" : "#0E253C"
                        }}
                    />
                    {DONUT_CHART_DATA.map((_, index) => (
                        <Cell key={index} fill={DONUT_CHART_DATA_COLORS[index % DONUT_CHART_DATA_COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
}

function OrderStatusGrid() {
    return <>
        {ORDER_STATUS_LIST.map((status, index) => (
            <div
                key={index}
                className={cn(
                    "px-5 py-8 flex border gap-2",
                    index % 2 === 0 ? "border-l-0" : "border-r-0 border-l-0",
                )}
            >
                <img src={status.icon} alt={status.title} className='h-6 w-6' />
                <div className="w-[121px]">
                    <p className="text-xs mb-1 text-gray-800 dark:text-[#FFFFFFCC]">{status.title}</p>
                    <p className="text-2xl font-bold">{status.value}</p>
                </div>
            </div>
        ))}
    </>
}



