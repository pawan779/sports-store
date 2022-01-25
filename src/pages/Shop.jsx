import { Breadcrumb, Skeleton } from "antd";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProdcutCard from "../components/Card";
import { Api } from "../constant";

export default function Shop() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await Api.getProduct();
      setData(response.data.data);
      console.log("getProducts", response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  console.log("data", data);
  return (
    <div style={{ paddingLeft: "5%", paddingRight: "5%" }}>
      <div style={{ marginBottom: "10px" }}>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/shop/">Products</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {!loading ? (
        data.map((item, index) => {
          return (
            <ProdcutCard
              data={item}
              key={index}
              onClick={() => navigate(`/details/${item._id}`, { state: item })}
            />
          );
        })
      ) : (
        <Skeleton active></Skeleton>
      )}
    </div>
  );
}
