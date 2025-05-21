import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { cn } from '@/lib/utils';

type Tab = {
    label: string;
    value: string;
};

type CustomTabsProps = {
    tabs: Tab[];
    className?: string;
    setActiveTab?: React.Dispatch<React.SetStateAction<string>>
};

export default function CustomTabs({
    tabs,
    className,
    setActiveTab
}: CustomTabsProps) {

    const handleTabChange = (value: string) => {
        if (setActiveTab) {
            setActiveTab(value);
        }
    }
    return (
        <Tabs defaultValue={tabs[0]?.value} onValueChange={handleTabChange}>
            <TabsList className={cn("border rounded-xl", className)}>
                {tabs.map((tab) => (
                    <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className={cn(
                            "capitalize text-sm px-4 py-2 cursor-pointer rounded-xl transition whitespace-nowrap",
                            "text-muted-foreground",
                            "data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-black",
                            "dark:data-[state=active]:bg-purple-600 dark:data-[state=active]:text-white"
                        )}
                    >
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    );
}
