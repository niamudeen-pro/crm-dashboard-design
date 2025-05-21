import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import LOGO from "../../assets/logo.svg";
import OPEN_TOGGLE_ICON from "../../assets/layout_leftbar_open_fill.svg";
import CLOSE_TOGGLE_ICON from "../../assets/layout_leftbar_close_fill.svg";
import { ThemeToggle } from "../theme-toggle";
import { useTheme } from "../theme-provider";
import { IoNotifications } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { HiChevronDown } from "react-icons/hi2";
import { Menu } from "lucide-react";
import { SUPER_ADMIN } from "@/constants";
import { Link } from "react-router-dom";


export default function TopBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const handleSidebarToggle = () => setIsSidebarOpen(true);

    return (
        <div className="flex flex-col w-full bg-background">
            <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
                <SheetTrigger asChild>
                    <Header handleSidebarToggle={handleSidebarToggle} />
                </SheetTrigger>
                <SheetContent side="left" className="w-[250px] sm:w-[300px] p-4">
                    <SheetTitle><BrandLogo /></SheetTitle>
                    <nav className="flex flex-col gap-2 py-8">
                        <Link to="#" className="text-sm">CRM</Link>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
}


function BrandLogo() {
    return (
        <div className="flex items-center gap-2">
            <img src={LOGO} alt="Logo" />
            <p className="font-semibold text-lg">Quotient</p>
        </div>
    );
}

function Header({ handleSidebarToggle }: { handleSidebarToggle: () => void }) {
    const { theme } = useTheme();
    const toggleIcon = theme === "dark" ? OPEN_TOGGLE_ICON : CLOSE_TOGGLE_ICON;
    return (
        <header className="px-4 h-16 border-b flex__between">
            {/* Mobile Menu Button */}
            <button onClick={handleSidebarToggle} className="lg:hidden">
                <Menu className="h-7 w-7 cursor-pointer " />
            </button>
            {/* Desktop Menu  With Logo */}
            <div className="hidden lg:flex items-center gap-[86px]">
                <BrandLogo />
                <button onClick={handleSidebarToggle} className="cursor-pointer border size-7 flex__center rounded-full">
                    <img src={toggleIcon} alt="Toggle Sidebar" className="size-4 hidden md:block" />
                </button>
            </div>
            {/* Search Bar */}
            <div className="hidden md:flex relative max-w-[608px] w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <IoSearchSharp size={20} className="text-gray-400" />
                </div>
                <Input placeholder="Search" className="pl-10 rounded-xl dark:!bg-accent focus-within:ring-1" />
            </div>
            <UserActions />
        </header>
    );
}

function UserActions() {

    const initials = SUPER_ADMIN.NAME.split(" ")
        .map((n) => n[0])
        .join("");

    return (
        <div className="flex items-center gap-4 relative">
            <ThemeToggle />
            {/* Notification Button */}
            <button className="relative drop__shadow p-2 rounded-xl border">
                <IoNotifications size={20} className="cursor-pointer dark:text-[#FFFFFFCC]" />
            </button>

            {/* User Avatar and Dropdown Toggle */}
            <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 border">
                    <AvatarImage src="/placeholder.svg" alt={SUPER_ADMIN.NAME} />
                    <AvatarFallback className="bg-primary text-white text-xs">
                        {initials}
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col text-xs">
                    <p className="whitespace-nowrap">{SUPER_ADMIN.NAME}</p>
                    <p className="text-gray-500 dark:text-gray-300">{SUPER_ADMIN.ROLE}</p>
                </div>
                <HiChevronDown className="h-4 w-4" />
            </div>
        </div>
    );
}





