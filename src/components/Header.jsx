import { Divider, Image, Menu } from "antd";
import { Row, Col } from "antd";
import { useState } from "react";
import {
  CloudServerOutlined,
  MenuOutlined,
  CloseOutlined,
  UserOutlined,
  SearchOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { NavLink, Link } from "react-router-dom";
import { allImage } from "../constant";

const { SubMenu } = Menu;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="header-container">
        <div>
          <p className="top-text">
            Free shipping on orders with code FREESHIP. See Terms
          </p>
        </div>
      </div>
      <div className="menu-container">
        <div className="menu-item">
          <img src={allImage.Icon} className="logo-img" />
        </div>
        <div className="menu-item2">
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? "active-text" : "menu-text"
            }
          >
            HOME
          </NavLink>
        </div>

        <div className="menu-item2">
          <NavLink
            to="/shop"
            className={(navData) =>
              navData.active ? "active-text" : "menu-text"
            }
          >
            SHOP
          </NavLink>
        </div>

        <div className="menu-item2">
          <NavLink
            to="/blog"
            className={(navData) =>
              navData.isActive ? "active-text" : "menu-text"
            }
          >
            BLOG
          </NavLink>
        </div>
        <div className="menu-item2">
          <NavLink
            to="/pages"
            className={(navData) =>
              navData.isActive ? "active-text" : "menu-text"
            }
          >
            PAGES
          </NavLink>
        </div>
        <div className="menu-item2">
          <NavLink
            to="/contact"
            className={(navData) =>
              navData.isActive ? "active-text" : "menu-text"
            }
          >
            CONTACT
          </NavLink>
        </div>
        <div className="menu-item1">
          <UserOutlined
            className="menu-icon"
            style={{ color: "#000", paddingRight: "10%" }}
          />
          <SearchOutlined
            className="menu-icon"
            style={{ color: "#000", paddingRight: "10%" }}
          />
          <ShoppingOutlined
            className="menu-icon"
            style={{ color: "#000", paddingRight: "10%" }}
          />
        </div>

        <div className="menu-bar-icon">
          {!isMenuOpen ? (
            <MenuOutlined
              className="menu-icon"
              style={{ color: "#000" }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          ) : (
            <CloseOutlined
              className="menu-icon"
              style={{ color: "#000" }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="menu-bar">
          <span className="menu-bar-item">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={(navData) =>
                navData.isActive ? "active-text" : "menu-text"
              }
            >
              HOME
            </NavLink>
          </span>

          <span className="menu-bar-item">
            <NavLink
              to="/shop"
              onClick={() => setIsMenuOpen(false)}
              className={(navData) =>
                navData.isActive ? "active-text" : "menu-text"
              }
            >
              SHOP
            </NavLink>
          </span>

          <span className="menu-bar-item">
            <NavLink
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={(navData) =>
                navData.isActive ? "active-text" : "menu-text"
              }
            >
              BLOG
            </NavLink>
          </span>

          <span className="menu-bar-item">
            <NavLink
              to="/pages"
              onClick={() => setIsMenuOpen(false)}
              className={(navData) =>
                navData.isActive ? "active-text" : "menu-text"
              }
            >
              PAGES
            </NavLink>
          </span>

          <span className="menu-bar-item">
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={(navData) =>
                navData.isActive ? "active-text" : "menu-text"
              }
            >
              CONTACT
            </NavLink>
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
