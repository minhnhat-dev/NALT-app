"use client"

import React from 'react'
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
  title: string;
  date: string;
  amount: string;
  iconUrl: string;
}
const Spending = ({ title, date, amount, iconUrl }: SpendingProps) => {
  return (
    <ContainerStyled>
        <InfoStyled>
          <AvatarStyled src={`/assets/images/${iconUrl}`}/>
          <DetailStyled>
            <TitleStyled>
              {title}
            </TitleStyled>
            <DateStyled>
              {date}
            </DateStyled>
          </DetailStyled>
        </InfoStyled>
      <AmountStyled>- ${amount}</AmountStyled>
    </ContainerStyled>
  )
}

export default Spending