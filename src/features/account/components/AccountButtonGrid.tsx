import { ACCOUNT_BUTTTONS_GRID_LIST } from "@/constants";

export default function AccountButtonGrid() {
    return (
        <div className="grid grid-cols-4 bg-background py-4 rounded-2xl border">
            {ACCOUNT_BUTTTONS_GRID_LIST?.map((button) => (
                <button
                    key={button.label}
                    className="flex flex-col items-center space-y-1 border-r last:border-none cursor-pointer"
                >
                    {button.icon}
                    <span className="text-xs text-gray-600 dark:text-gray-400 mt-[6px]">{button.label}</span>
                </button>
            ))}
        </div>
    );
}