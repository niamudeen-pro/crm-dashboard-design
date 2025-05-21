import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils"; // or wherever your cn helper is

type CustomSelectProps = {
    options: {
        label: string;
        value: string;
    }[];
    selected?: string;
    className?: string; // allow custom class from parent
};

export default function CustomSelect({
    options,
    selected = "Select",
    className,
}: CustomSelectProps) {
    return (
        <Select>
            <SelectTrigger
                className={cn(
                    "w-full cursor-pointer text-[#0E253C] dark:text-white ring-0 outline-none shadow-none data-[placeholder]:text-[#0E253C] dark:data-[placeholder]:text-white !rounded-xl",
                    className
                )}
            >
                <SelectValue placeholder={selected} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem
                        key={option.value}
                        value={option.value}
                        className="cursor-pointer"
                    >
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
