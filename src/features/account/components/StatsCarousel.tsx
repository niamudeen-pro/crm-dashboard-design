import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { STATS_CAROUSEL_DATA_LIST } from "@/constants";

type StatCard = {
    id: string;
    title: string;
    value: string;
    percentChange: number;
    icon: string;
};

export default function StatsCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [itemsPerRow, setItemsPerRow] = useState(1);

    useEffect(() => {
        // This function calculates how many cards can fit in the container
        const calculateItemsPerRow = () => {
            if (containerRef.current) {
                const width = containerRef.current.offsetWidth;
                const minCardWidth = 272
                const newItems = Math.floor(width / minCardWidth);
                setItemsPerRow(newItems || 1);
            }
        };
        calculateItemsPerRow();
        window.addEventListener("resize", calculateItemsPerRow);
        return () => window.removeEventListener("resize", calculateItemsPerRow);
    }, []);

    return (
        <div className="relative w-full" ref={containerRef}>
            <Carousel>
                <CarouselContent>
                    {STATS_CAROUSEL_DATA_LIST.map((stat) => (
                        <CarouselItem
                            key={stat.id}
                            style={{ flexBasis: `${100 / itemsPerRow}%` }}
                        >
                            <StatCard stat={stat} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-3.5 top-1/2 -translate-y-1/2 z-10 cursor-pointer" />
                <CarouselNext className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 cursor-pointer" />
            </Carousel>
        </div>
    );
}




// -----------------------------------------------
//  These are helper components used in JSX below, This keeps the main component cleaner and easier to read
// -----------------------------------------------



function StatCard({ stat }: { stat: StatCard }) {
    return (
        <div className="w-full rounded-2xl bg-accent stats__carousel__item overflow-hidden border">
            {/* Top section: Icon + Title + Value */}
            <div className="flex gap-4 p-5">
                <div className="p-[15px] flex__center border-[#FF2164] border rounded-xl">
                    <img src={stat.icon} alt="icon" />
                </div>
                <div>
                    <p className="text-xs font-medium text-gray-500 mb-1 dark:text-gray-400">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                </div>
            </div>
            {/* Bottom section: Arrow + Percentage + Note */}
            <div className="bg-background border-t border-b py-3 px-5 flex__between rounded-b-2xl">
                <ChangeIndicator percent={stat.percentChange} />
                <span className="text-xs text-gray-800 dark:text-gray-300">From The Last Month</span>
            </div>
        </div>
    );
}

function ChangeIndicator({ percent }: { percent: number }) {
    const isPositive = percent >= 0;
    return (
        <div className="text-xs flex gap-1">
            <span className="flex w-5 items-center justify-center rounded-full">
                {isPositive ? (
                    <FaArrowTrendUp className="text-green-500" />
                ) : (
                    <FaArrowTrendDown className="text-red-500" />
                )}
            </span>
            <span className={cn(isPositive ? "text-green-500" : "text-red-500")}>
                {Math.abs(percent)}%
            </span>
        </div>
    );
}
