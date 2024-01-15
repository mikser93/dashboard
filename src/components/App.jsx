import { NavMenu } from "./NavMenu";
import { Customers } from "../pages/Customers";
import "../style.scss";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Product } from "../pages/Product";
import { Income } from "../pages/Income";
import { Promote } from "../pages/Promote";
import { Help } from "../pages/Help";
import { ThemeProvider } from "@mui/material";
import { Theme } from "../theme/Theme2";

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <div className="wraper">
        <NavMenu />
        <div className="right_menu">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/income" element={<Income />} />
            <Route path="/promote" element={<Promote />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
};
