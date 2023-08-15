import { Route, Routes } from "react-router-dom";
import { AccountType } from "./AccountType";
import { AccountInfo } from "./AccountInfo";
import { BusinessDetails } from "./BusinessDetails";
import { BillingDetails } from "./BillingDetails";
import { Completed } from "./Completed";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<AccountType />} />
      <Route path="account-info" element={<AccountInfo />} />
      <Route path="business-details" element={<BusinessDetails />} />
      <Route path="billing-details" element={<BillingDetails />} />
      <Route path="completed" element={<Completed />} />
    </Routes>
  );
};
