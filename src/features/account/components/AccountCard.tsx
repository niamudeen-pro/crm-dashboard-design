import type { AccountCardProps } from "@/types";

export default function AccountCard({
    name,
    email,
    status = "Business",
    initials = "TG",
}: AccountCardProps) {
    return (
        <div className="p-4 rounded-2xl bg-background w-full h-full border">
            <div className="flex items-center gap-4">
                <Avatar initials={initials} />
                <div className="flex flex-col gap-1 w-full">
                    <div className="flex__between gap-2 w-full">
                        <h2 className="font-medium text-sm flex gap-1">{name}
                            <span className="bg-orange-100 opacity-75 text-orange-400 dark:bg-orange-100/10     text-[10px] px-2 py-0.5 rounded-full uppercase font-medium">
                                {status}
                            </span>
                        </h2>
                        <button className="text-xs text-primary font-medium">Change Status</button>
                    </div>
                    <p className="text-xs text-gray-500">{email}</p>
                </div>
            </div>
        </div>
    );
}

function Avatar({ initials }: { initials: string }) {
    return (
        <div className="relative w-14 h-14">
            <div className="w-full h-full bg-primary text-white flex items-center justify-center rounded-full font-semibold text-lg aspect-square">
                {initials}
            </div>
            <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] text-white">
                Edit
            </span>
        </div>
    );
}
