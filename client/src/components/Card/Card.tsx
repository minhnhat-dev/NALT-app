"use client";

import React from 'react'
import styled from 'styled-components'
import BalanceStatement from '../BalanceStatement/BalanceStatement';
import { CardStyled, CardContainerStyled, CardFooterStyled, CardHeaderStyled, HeaderStyled, BalanceStyled } from './Card.styled'
type CardProps = {
  balance: string;
  incomeAmount: string;
  expensesAmount: string;
}

const CreditCard = ({ balance, incomeAmount, expensesAmount }: CardProps) => {
  return (
    <CardStyled>
        <CardContainerStyled>
          <CardHeaderStyled>
              <HeaderStyled>Total Balance</HeaderStyled>
              <BalanceStyled>$ { balance }</BalanceStyled>
          </CardHeaderStyled>
          <CardFooterStyled>
            <BalanceStatement 
              statement='in'
              title='Income'
              amount={incomeAmount}
            />
            <BalanceStatement 
              statement='out'
              title='Expenses'
              amount={expensesAmount}
            />
          </CardFooterStyled>
        </CardContainerStyled>
    </CardStyled>
  )
}

export default CreditCard
