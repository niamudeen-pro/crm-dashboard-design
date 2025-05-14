import { Routes, Route } from "react-router-dom";
import DashboardLAyout from "../components/layout/DashbaordLayout";
import AccountPage from "../pages/account";

export const RoutesConfig = () => (
    <DashboardLAyout>
        <Routes>
            <Route path="/" element={<AccountPage />} />
        </Routes>
    </DashboardLAyout>
);
