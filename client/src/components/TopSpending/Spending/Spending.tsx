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
  title: string;
  date: string;
  amount: string;
  iconUrl: string;
  onSelected: Dispatch<SetStateAction<number>>
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