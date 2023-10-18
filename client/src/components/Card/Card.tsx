"use client";

import React from 'react'
import { CardStyled, CardContainerStyled, CardFooterStyled, CardHeaderStyled, HeaderStyled, BalanceStyled, BalanceStatementStyled, StatementStyled, AmountStyled, TitleStyled } from './Card.styled'
import NarrowInIcon from '@/components/Icons/ArrowDownIcon'
import NarrowOutIcon from '@/components/Icons/ArrowUpIcon'

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
            <BalanceStatementStyled>
              <StatementStyled>
                <NarrowInIcon/><TitleStyled>Income</TitleStyled>
              </StatementStyled>
              <AmountStyled>$ {incomeAmount}</AmountStyled>
            </BalanceStatementStyled>
            <BalanceStatementStyled>
              <StatementStyled>
                <NarrowOutIcon/><TitleStyled>Expenses</TitleStyled>
              </StatementStyled>
              <AmountStyled>$ {expensesAmount}</AmountStyled>
            </BalanceStatementStyled>
          </CardFooterStyled>
        </CardContainerStyled>
    </CardStyled>
  )
}

export default CreditCard
