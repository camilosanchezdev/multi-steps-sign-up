import { Route, Routes } from "react-router-dom";
import { AccountType } from "./AccountType";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AccountType />} />
    </Routes>
  );
};
