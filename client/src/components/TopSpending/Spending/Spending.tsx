"use client"

import React, { Dispatch, SetStateAction } from 'react'
import {
  InfoStyled, 
  AmountStyled,
  ContainerStyled, 
  AvatarStyled, 
  DateStyled, 
  TitleStyled,
  DetailStyled
} from '../TopSpending.styled'
type SpendingProps = {
  id: number;
  isSelected: boolean;
  title: string;
  date: string;
  amount: string;
  iconUrl: string;
  onSelected: Dispatch<SetStateAction<number>>
}
const Spending = ({ id, isSelected, title, date, amount, iconUrl, onSelected }: SpendingProps) => {
  return (
    <ContainerStyled onClick={() => onSelected(id)} isSelected={isSelected}>
        <InfoStyled>
          <AvatarStyled src={`/assets/images/${iconUrl}`}/>
          <DetailStyled>
            <TitleStyled isSelected={isSelected}>
              {title}
            </TitleStyled>
            <DateStyled isSelected={isSelected}>
              {date}
            </DateStyled>
          </DetailStyled>
        </InfoStyled>
      <AmountStyled isSelected={isSelected}>- ${amount}</AmountStyled>
    </ContainerStyled>
  )
}

export default Spending