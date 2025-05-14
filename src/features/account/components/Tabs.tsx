import { useState } from "react";
import clsx from "clsx";
import { ACCOUNT_TABS } from "@/constants";
import { RecentOrdersTable } from "./RecentOrdersTable";
import RevenueChart from "./RevenueChart";

export default function Tabs() {
    const [activeTab, setActiveTab] = useState("dashboard");
    return (
        <div className="w-full">
            <TabList activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabPanel activeTab={activeTab} />
        </div>
    );
}

function TabList({
    activeTab,
    setActiveTab,
}: {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}) {
    return (
        <div className="overflow-x-auto">
            <div className="flex items-end space-x-1 w-max min-w-full">
                {ACCOUNT_TABS.map(({ label, value }) => {
                    const isActive = activeTab === value;

                    return (
                        <button
                            key={value}
                            onClick={() => setActiveTab(value)}
                            className={clsx(
                                "px-4 text-sm rounded-t-xl cursor-pointer font-normal border capitalize whitespace-nowrap",
                                isActive
                                    ? "py-[9px] bg-background text-primary border-b-transparent"
                                    : "py-[7px] text-muted-foreground border-b"
                            )}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

function TabPanel({ activeTab }: { activeTab: string }) {
    const renderContent = () => {
        switch (activeTab) {
            case "dashboard":
                return <div className="space-y-4">
                    <RecentOrdersTable />
                    <RevenueChart />
                </div>
            default:
                return (
                    <p className="text-sm text-muted-foreground">
                        No content for: <strong>{activeTab}</strong>
                    </p>
                );
        }
    };
    return (
        <div className="bg-background p-4 border border-t-0 rounded-b-xl">
            {renderContent()}
        </div>
    );
}
