import React from "react";
import dayjs from "dayjs";
import { DatePicker, Space } from "antd";

const dateFormat = "YYYY/MM/DD";
// const date = new Date();

const Date: React.FC = () => (
  <Space direction="vertical" size={20}>
    <DatePicker 
    defaultValue={dayjs()}
    format={dateFormat}/>
  </Space>
);

export default Date;
