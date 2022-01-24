import { Breadcrumb } from "antd";
import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export default function ProductDetails() {
  const params = useLocation();
  useEffect(() => {
    // alert("hello");
  }, []);
  console.log("params", params);
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/shop">Products</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <h1>{params.state.name}</h1>
    </div>
  );
}
