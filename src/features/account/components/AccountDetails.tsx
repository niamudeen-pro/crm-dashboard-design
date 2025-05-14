import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Save } from "lucide-react";

export default function AccountDetails() {
    return (
        <div className="mb-4 bg-background p-4 rounded-2xl border">
            <div className="flex items-center justify-between mb-2">
                <h2 className="font-medium text-base">Business Details</h2>
                <div className="flex items-center text-xs font-semibold text-green-600 gap-1">
                    <Save className="h-4 w-4" />
                    Save & Close
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="text-xs mb-1 block">Account Name</label>
                    <Input
                        defaultValue="TRUCK GREAR"
                        className="w-full"
                        placeholder="Account Name"
                    />
                </div>

                <div>
                    <label className="text-xs mb-1 block">Email</label>
                    <Input
                        defaultValue="Jillali@Onechanneladmin.Com"
                        className="w-full"
                        placeholder="Email"
                    />
                </div>

                <div>
                    <label className="text-xs mb-1 block">Phone Number</label>
                    <div className="space-y-2">
                        <PhoneInput defaultValue="+1 344 434 4455" />
                        <PhoneInput defaultValue="+1 344 434 4455" />
                    </div>
                </div>

                <div>
                    <label className="text-xs mb-1 block">Contact Owner</label>
                    <div className="relative">
                        <Input
                            defaultValue="Suchithkumar@Onechanneladmin.Com"
                            className="w-full pr-10"
                        />
                        <ChevronDown className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}
function PhoneInput({ defaultValue }: { defaultValue: string }) {
    return (
        <div className="flex gap-2">
            <div className="flex-none w-20">
                <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-between h-10  rounded-xl"
                >
                    <span className="flex items-center gap-1">
                        <span className="text-xs">🇺🇸</span>
                        <span>US</span>
                    </span>
                    <ChevronDown className="h-3 w-3" />
                </Button>
            </div>
            <Input defaultValue={defaultValue} className="flex-1 rounded-xl" />
            <Button
                variant="outline"
                size="sm"
                className="flex-none text-red-500 text-xs border-red-500 dark:border-red-500  hover:bg-transparent rounded-xl"
            >
                Remove
            </Button>
        </div>
    );
}