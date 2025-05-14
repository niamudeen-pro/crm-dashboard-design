import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";

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
    { icon: <BiSolidPhoneCall size={22} />, label: "Call" },
    { icon: <BiSolidMessageRoundedDetail size={20} />, label: "Message" },
    { icon: <FaCalendarAlt size={18} />, label: "Calendar" },
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


