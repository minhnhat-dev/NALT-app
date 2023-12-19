"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Select } from "antd";
const { Option } = Select;

const  testPage = () => {
  const [provinces, setProvinces] = useState([]);
  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await axios({
          method: "get",
          url: "https://nalt-server-test.onrender.com/api/transactions",
        });
        console.log(response.data);
        setProvinces(response.data);
      } catch (error: any) {
        console.log(error);
      }
    };
    callApi();
  }, [

  ]);
  return (
    <Select style={{width: '150px'}}>
      {provinces.map((province:any) => (
        <Option style={{width:'100%'}}>
          {province}
        </Option>
      ))}
    </Select>
  );
}

export default testPage;
