import { Dot, Undo } from "lucide-react"
import { BiSolidMessageRoundedDetail } from "react-icons/bi"
import { cn } from "@/lib/utils"
import CustomTabs from "@/components/shared/CustomTabs"

type Activity = {
    id?: string
    user: string
    action: string
    target?: string
    targetType?: string
    time: string
    icon?: "message" | "order" | "reply"
    iconColor?: string
    message?: string
    replies?: Activity[]
}

type ActivityGroup = {
    date: string
    activities: Activity[]
}
const ACTIVITY_DATA: ActivityGroup[] = [
    {
        date: "TODAY",
        activities: [
            {
                id: "1",
                user: "Christian Wood",
                action: "Sent Message to",
                target: "Nikita Houston",
                time: "1 min ago",
                icon: "message",
                iconColor: "bg-orange-500",
                replies: [
                    {
                        id: "2",
                        user: "Nikita Houston",
                        action: "Reply your message",
                        message: "Hello",
                        time: "1 min ago",
                        icon: "reply",
                        iconColor: "bg-gray-400",
                    },
                ],
            },
            {
                id: "3",
                user: "Christian Wood",
                action: "Accept Order from",
                target: "Ebay",
                time: "1 min ago",
                icon: "order",
                iconColor: "bg-pink-600",
                replies: [
                    {
                        id: "4",
                        user: "Rohan Walker",
                        action: "Reply your message",
                        target: "Ebay",
                        time: "1 min ago",
                        icon: "reply",
                        iconColor: "bg-gray-400",
                    },
                    {
                        id: "5",
                        user: "Rohan Walker",
                        action: "Reply your message",
                        target: "Ebay",
                        time: "1 min ago",
                        icon: "reply",
                        iconColor: "bg-gray-400",
                    },
                ],
            },
        ],
    },
    {
        date: "YESTERDAY",
        activities: [
            {
                id: "6",
                user: "Christian Wood",
                action: "Accept Order from",
                target: "Amazon",
                time: "12:30PM",
                icon: "order",
                iconColor: "bg-purple-500",
            },
        ],
    },
    {
        date: "25 MAY 2024",
        activities: [
            {
                id: "7",
                user: "Christian Wood",
                action: "Accept Order from",
                target: "Walmart",
                time: "11:20AM",
                icon: "order",
                iconColor: "bg-blue-500",
            },
        ],
    },
]

const ACTIVITY_TABS = [
    {
        label: "Message",
        value: "messages",
    },
    {
        label: "Email",
        value: "email",
    },
]

export default function RecentActivities() {
    return (
        <div className="w-full rounded-2xl bg-accent border">
            {/* Block Header */}

            <div className="flex flex-col gap-4 sm:flex-row items-center justify-between px-4 py-[19px] border-b">
                <h2 className="block__heading ">Recent Activities</h2>
                <CustomTabs tabs={ACTIVITY_TABS} />
            </div>

            {/* block content */}
            <div className="p-5 space-y-6  max-h-[350px] overflow-y-auto scrollbar__hidden">
                {ACTIVITY_DATA?.map((group) => (
                    <div key={group.date} className="space-y-4">
                        <p className="text-xs">{group.date}</p>
                        <div className="space-y-4">
                            {group.activities.map((activity) => (
                                <ActivityItem key={activity.id} activity={activity} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}


// -----------------------------------------------
//  These are helper components used in JSX below, This keeps the main component cleaner and easier to read
// -----------------------------------------------


function ActivityItem({ activity, isReply = false }: { activity: Activity, isReply?: boolean }) {
    return (
        <div className="space-y-3">
            <div className="flex items-center">
                {/* Activiy Icon */}
                <div
                    className={cn(
                        "flex items-center justify-center w-6 h-6 rounded-full mt-0.5",
                        isReply ? "bg-gray-200 dark:bg-gray-800" : activity.iconColor
                    )}
                >
                    {isReply ? (
                        <Undo className="w-4 h-4 text-black dark:text-white" />
                    ) : (
                        <BiSolidMessageRoundedDetail className="w-4 h-4 text-white" />
                    )}
                </div>

                <div className="ml-3 flex-grow text-sm">
                    <ActivityMessage
                        user={activity.user}
                        action={activity.action}
                        message={activity.message}
                        target={activity.target}
                        time={activity.time}
                    />
                </div>
            </div>

            {/* Recursive replies */}
            {activity.replies && activity.replies?.length > 0 && (
                <div className="pl-7 space-y-3">
                    {activity.replies.map((reply) => (
                        <ActivityItem key={reply.id} activity={reply} isReply />
                    ))}
                </div>
            )}
        </div>
    )
}

function ActivityMessage({ user, action, message, target, time }: Activity) {
    return <div className="flex text-sm items-center text-gray-700 dark:text-[#FFFFFFCC]">
        <div>
            <span className="text-primary font-medium">{user}</span>{" "}
            <span>{action}</span>{" "}
            {message && (
                <span>"{message}"</span>
            )}
            {target && (
                <span className="text-primary font-medium">{target}</span>
            )}
        </div>
        <span className="flex items-center  whitespace-nowrap">
            <Dot className="text-black dark:text-[#FFFFFFCC]" />
            {time}
        </span>
    </div>
}