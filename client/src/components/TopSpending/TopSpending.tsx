"use client";

import React, { useState } from "react";
import {
  Header,
  ListContainerStyled,
  TopSpendingContainerStyled,
} from "./TopSpending.styled";
import Spending from "./Spending/Spending";
import VectorSvgIcon from "../Icons/VectorIcon";
const SPENDING_FAKE = [
  {
    id: 1,
    title: "Starbucks",
    date: "Jan 12, 2022",
    amount: "85.00",
    iconUrl: "icon-01.png",
  },
  {
    id: 2,
    title: "Transfer",
    date: "Jan 16, 2022",
    amount: "85.00",
    iconUrl: "icon-02.png",
  },
  {
    id: 3,
    title: "Starbucks",
    date: "Jan 12, 2022",
    amount: "85.00",
    iconUrl: "icon-01.png",
  },
  {
    id: 4,
    title: "Transfer",
    date: "Jan 16, 2022",
    amount: "85.00",
    iconUrl: "icon-02.png",
  },
];

const TopSpending = () => {
  const [idSelected, setIdSelected] = useState<number>(0);
  return (
    <TopSpendingContainerStyled>
      <Header>Top Spending<VectorSvgIcon/></Header>
      <ListContainerStyled>
        {SPENDING_FAKE.map((spending) => (
          <Spending
            key={spending.id}
            onSelected={(id) => {
              setIdSelected(id);
            }}
            isSelected={idSelected === spending.id}
            {...spending}
          />
        ))}
      </ListContainerStyled>
    </TopSpendingContainerStyled>
  );
};

export default TopSpending;
