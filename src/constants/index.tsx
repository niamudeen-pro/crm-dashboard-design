import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import ALL_ORDERS_ICON from "../assets/orders/all.svg"
import NEW_ORDERS_ICON from "../assets/orders/new.svg"
import PENDING_ORDERS_ICON from "../assets/orders/pending.svg"
import DELIVERED_ORDERS_ICON from "../assets/orders/delivered.svg"
import DISPATCHED_ORDERS_ICON from "../assets/orders/dispatched.svg"
import CANCELLED_ORDERS_ICON from "../assets/orders/cancelled.svg"
import TOTAL_ORDERS_STATS from "../assets/stats-carousel/total_orders.svg";
import TOTAL_TAKEN_STATS from "../assets/stats-carousel/total_taken.svg";
import TOTAL_REVENUE_STATS from "../assets/stats-carousel/total_revenue.svg";
import PENDING_ORDERS_STATS from "../assets/stats-carousel/pending_orders.svg";
import PENDING_RETURNS_STATS from "../assets/stats-carousel/pending_returns.svg";

export const LOCALES = {
    INDIA: "en-IN",
    US: "en-US",
    UK: "en-GB",
    GERMANY: "de-DE",
    JAPAN: "ja-JP",
}

export const SUPER_ADMIN = {
    NAME: "Manoj Sharma",
    ROLE: "Super Admin"
}

export const BREADCRUMBS_LIST = [
    { label: "CRM", to: "#" },
    { label: "Account", to: "#" },
    { label: "Account Details" },
];

// Account Page Constants **********************************

export const ACCOUNT_USER = {
    NAME: "Trunk Gear",
    EMAIL: "Jillali@Onechanneladmin.Com"
}

export const ACCOUNT_BUTTTONS_GRID_LIST = [
    { icon: <MdEmail size={20} />, label: "Email" },
    { icon: <BiSolidPhoneCall size={20} />, label: "Call" },
    { icon: <BiSolidMessageRoundedDetail size={20} />, label: "Message" },
    { icon: <FaCalendarAlt size={20} />, label: "Calendar" },
];
export const ACCOUNT_TABS = [
    { label: "Dashboard", value: "dashboard" },
    { label: "Orders", value: "orders" },
    { label: "Address", value: "address" },
    { label: "Notes", value: "notes" },
    { label: "Tasks", value: "tasks" },
    { label: "Contacts", value: "contacts" },
    { label: "Credit History", value: "credit-history" },
];


export const COUNTRIES_DIALCDE_LIST = [
    { code: "US", label: "United States", dialCode: "+1", flag: "🇺🇸" },
    { code: "IN", label: "India", dialCode: "+91", flag: "🇮🇳" },
    { code: "GB", label: "UK", dialCode: "+44", flag: "🇬🇧" },
    { code: "CA", label: "Canada", dialCode: "+1", flag: "🇨🇦" },
    { code: "AU", label: "Australia", dialCode: "+61", flag: "🇦🇺" },
]



// Recent Orders Componente Constants **********************************

export const RECENT_ORDERS_LIST = [
    {
        id: "275936",
        quantity: 1,
        product: { name: "iPhone 15 pro max", image: null },
        channel: "ebay",
        customer: { name: "Gabriella Golden", image: null },
        total: 400.0,
        deliveryDate: "Today",
    },
    {
        id: "415368",
        quantity: 4,
        product: { name: "White Denim Tank Male", image: null },
        channel: "walmart",
        customer: { name: "Harris Santana", image: null },
        total: 151.0,
        deliveryDate: "Today",
    },
    {
        id: "275063",
        quantity: 2,
        product: { name: "David Beckham classic", image: null },
        channel: "facebook",
        customer: { name: "Lilia Ponce", image: null },
        total: 167.0,
        deliveryDate: "Tomorrow",
    },
    {
        id: "274778",
        quantity: 3,
        product: { name: "Samsung I-20 series", image: null },
        channel: "amazon",
        customer: { name: "Rehan Chase", image: null },
        total: 262.0,
        deliveryDate: "Tomorrow",
    },
    {
        id: "638032",
        quantity: 5,
        product: { name: "Nykaa Red lipstick", image: null },
        channel: "ebay",
        customer: { name: "Maxim Bray", image: null },
        total: 319.0,
        deliveryDate: "05/01/2023",
    },
];


// Orders Status Componente Constants **********************************

export const ORDER_STATUS_LIST = [
    { title: "All", value: 50, icon: ALL_ORDERS_ICON },
    { title: "New", value: 50, icon: NEW_ORDERS_ICON },
    { title: "Pending", value: 50, icon: PENDING_ORDERS_ICON },
    { title: "Dispatched", value: 50, icon: DISPATCHED_ORDERS_ICON },
    { title: "Delivered", value: 123, icon: DELIVERED_ORDERS_ICON },
    { title: "Cancelled", value: 50, icon: CANCELLED_ORDERS_ICON },
];

export const ORDER_STATUS_CATEGORIES = [
    { label: "All", value: "all" },
    { label: "New", value: "new" },
    { label: "Pending", value: "pending" },
    { label: "Delivered", value: "delivered" },
    { label: "Dispatched", value: "dispatched" },
    { label: "Cancelled", value: "cancelled" },
];

export const DONUT_CHART_DATA = [
    { name: 'A', value: 20 },
    { name: 'B', value: 20 },
    { name: 'C', value: 20 },
    { name: 'D', value: 20 },
    { name: 'E', value: 20 },
];

export const DONUT_CHART_DATA_COLORS = ['#ff6b6b', '#ffa94d', '#ffd43b', '#69db7c', '#8884d8'];




// Status Carousel Componente Constants **********************************

export const STATS_CAROUSEL_DATA_LIST = [
    { id: "total-orders", title: "Total Orders", value: "123", percentChange: 28, icon: TOTAL_ORDERS_STATS },
    { id: "total-taken", title: "Total Taken", value: "123", percentChange: -15, icon: TOTAL_TAKEN_STATS },
    { id: "total-revenue", title: "Total Revenue", value: "123", percentChange: 28, icon: TOTAL_REVENUE_STATS },
    { id: "pending-orders", title: "Pending Orders", value: "$1234.99", percentChange: 28, icon: PENDING_ORDERS_STATS },
    { id: "pending-balance", title: "Pending Balance", value: "$1234.99", percentChange: 28, icon: PENDING_RETURNS_STATS },
    { id: "total-orders-2", title: "Total Orders", value: "123", percentChange: 28, icon: TOTAL_ORDERS_STATS },
    { id: "total-taken-2", title: "Total Taken", value: "123", percentChange: -15, icon: TOTAL_TAKEN_STATS },
    { id: "total-revenue-2", title: "Total Revenue", value: "123", percentChange: 28, icon: TOTAL_REVENUE_STATS },
];
