import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar"; // shadcn calendar
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaCalendarAlt } from "react-icons/fa";
import { formatShortDate } from "@/lib/date";


type CustomCalendarProps = {
    className?: string;
    dateFormat?: {
        locale?: string;
        options: Intl.DateTimeFormatOptions;
    };
}

export default function CustomCalendar({ className, dateFormat }: CustomCalendarProps) {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    const handleSelect = (selectedDate: Date | undefined) => {
        if (selectedDate) {
            setDate(selectedDate);
            setOpen(false);
        }
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className={cn(
                        "rounded-xl flex items-center gap-2 cursor-pointer hover:bg-background  font-normal",
                        className
                    )}
                >
                    {formatShortDate({ date, options: dateFormat?.options })}
                    <FaCalendarAlt className="size-3.5" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 z-50" align="end">
                <Calendar
                    className="bg-background"
                    mode="single"
                    selected={date}
                    onSelect={handleSelect}
                    initialFocus
                    disabled={(d) => d > new Date() || d < new Date("1900-01-01")}
                />
            </PopoverContent>
        </Popover>
    );
}
