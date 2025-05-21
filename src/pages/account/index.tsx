import AccountCard from "@/features/account/components/AccountCard";
import AccountButtonGrid from "@/features/account/components/AccountButtonGrid";
import Tabs from "@/features/account/components/Tabs";
import { ACCOUNT_USER } from "@/constants";
import AccountDetails from "@/features/account/components/AccountDetails";

export default function AccountPage() {
    return (
        <div className="flex flex-col xl:flex-row gap-4 w-full">
            {/* Left Panel */}
            <div className="w-full xl:max-w-sm flex-shrink-0 space-y-4">
                <div className="space-y-1 gap-4 grid md:grid-cols-2 xl:grid-cols-1">
                    <AccountCard
                        name={ACCOUNT_USER.NAME}
                        email={ACCOUNT_USER.EMAIL}
                    />
                    <AccountButtonGrid />
                </div>
                <AccountDetails />
            </div>

            {/* Right Panel */}
            <div className="w-full max-w-full overflow-x-auto">
                <Tabs />
            </div>
        </div>
    );
}
