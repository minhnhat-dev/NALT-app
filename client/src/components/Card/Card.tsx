"use client";

import React from 'react'
import styled from 'styled-components'
import BalanceStatement from '../BalanceStatement/BalanceStatement';
type CardProps = {
  balance: string;
  incomeAmount: string;
  expensesAmount: string;
}
const Card = styled.div`
  height: 317px;
  width: 516px;;
  background-image: url('/assets/images/bg-card.jpg');
  background-size: 516px 317px;
  background-repeat: no-repeat;
  border-radius: 40px;
  color: #FFF;
`
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`
const CardHeader = styled.div`
  padding: 47px;
  line-height: 29.419px;
`
const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 220px;
  margin-left: 38px;
  margin-bottom: 20px;
`
const Header = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
`
const Balance = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 65px;
`
const CreditCard = ({ balance, incomeAmount, expensesAmount }: CardProps) => {
  return (
    <Card className='card'>
        <CardContainer>
          <CardHeader>
              <Header className='white'>Total Balance</Header>
              <Balance>$ { balance }</Balance>
          </CardHeader>
          <CardFooter>
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
          </CardFooter>
        </CardContainer>
        
    </Card>
  )
}

export default CreditCard