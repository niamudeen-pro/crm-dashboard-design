import BreadcrumbNavigation from "./BreadcrumbNavigation";
import TopBar from "./TopBar";

export default function DashboardLAyout({ children }: { children?: React.ReactNode }) {
    return (
        <div className="min-h-screen">
            <TopBar />
            <BreadcrumbNavigation />
            <main className="overflow-auto p-4">{children}</main>
        </div>
    )
}
