"use client";

import React from "react";
import Image from "next/image";
import {
  ItemList,
  ItemStyled,
  ItemInfo,
  ItemName,
  ItemDay,
  ItemValue,
  ItemButton,
  ItemWrap,
} from "./Item.styled";

type ItemProps = {
  image: string;
  name: string;
  day: string;
  value: number;
  isNegative: boolean;
};

const Item = ({ image, name, day, value, isNegative }: ItemProps) => {

  const handleValue = () => {
    let USDollar = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      
    });
    return USDollar.format(value)
  };

  return (
    <ItemList>
      <ItemStyled>
        <ItemInfo>
          <Image src={image} alt={name} width={30} height={30} />
          <ItemWrap>
            <ItemName>{name}</ItemName>
            <ItemDay>{day}</ItemDay>
          </ItemWrap>
        </ItemInfo>
        {value ? (
          <ItemValue $isNegative={isNegative}>
            {value > 0 ? "+" : ""}
            {handleValue()}
          </ItemValue>
        ) : (
          <ItemValue>
            <ItemButton>Pay</ItemButton>
          </ItemValue>
        )}
      </ItemStyled>
    </ItemList>
  );
};

export default Item;
