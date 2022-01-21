import React from "react";
import {
  UserOutlined,
  SearchOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-divider">
        <div className="footer-icon-container">
          <NavLink
            to="/login"
            className={(navData) =>
              navData.isActive ? "active-text" : "menu-text"
            }
          >
            <UserOutlined className="footer-icon" style={{ color: "#fff" }} />
          </NavLink>
        </div>
        <div className="footer-icon-container">
          <SearchOutlined className="footer-icon" style={{ color: "#fff" }} />
        </div>
        <div className="footer-icon-container">
          <ShoppingOutlined className="footer-icon" style={{ color: "#fff" }} />
        </div>
      </div>
    </div>
  );
}
