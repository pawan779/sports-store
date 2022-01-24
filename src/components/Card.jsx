import { DollarOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { allImage, Api } from "../constant";

export default function ProdcutCard({ data = {}, onClick = () => {} }) {
  return (
    <div className="card-container" onClick={onClick}>
      <img
        src={"http://192.168.0.71:3001/" + data.image}
        className="card-img"
      />
      <h4>SHOES, MALE</h4>
      <h3>{data.name}</h3>
      <h2>${data.price}</h2>
      <div className="buy-btn">
        <Button type="primary" icon={<ShoppingCartOutlined />} size={30}>
          Add to cart
        </Button>

        <Button type="default" icon={<ShoppingCartOutlined />} size={30}>
          Buy Now
        </Button>
      </div>
    </div>
  );
}
