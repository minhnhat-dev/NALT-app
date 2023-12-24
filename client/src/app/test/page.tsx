"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Select } from "antd";
const { Option } = Select;

const testPage = () => {
  const [provinces, setProvinces] = useState([]);
  const userToken = localStorage.getItem("user");
  useEffect(() => {
    const token = JSON.parse(userToken || "{}");
    const callApi = async () => {
      try {
        const response = await axios({
          method: "get",
          url: "https://nalt-server-test.onrender.com/api/categories",
          headers: { Authorization: `Bearer ${token.access}` },
        });
        console.log(response.data);
        setProvinces(response.data.categories);
      } catch (error: any) {
        console.log(error);
      }
    };
    callApi();
  }, []);

  return (
    <Select size="middle" style={{width: '250px'}}>
      {provinces.map((province: any) => (
        <Option>{province.name}</Option>
      ))}
    </Select>
  );
};

export default testPage;
