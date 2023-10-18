import React from 'react'
import NarrowInIcon from '@/components/Icons/ArrowDownIcon'
import NarrowOutIcon from '@/components/Icons/ArrowUpIcon'
import {ContainerStyled, TitleStyled, StatementStyled, AmountStyled } from './BalanceStatement.styled'

type BalanceStatementProps = {
    statement: 'in' | 'out',
    title: string,
    amount: string
}

const BalanceStatement = ({statement, title, amount}: BalanceStatementProps) => {
  return (
    <ContainerStyled>
      <StatementStyled>
        {statement === 'in' ? <NarrowInIcon/> : <NarrowOutIcon/>}<TitleStyled>{title}</TitleStyled>
      </StatementStyled>
      <AmountStyled>$ {amount}</AmountStyled>
    </ContainerStyled>
  )
}
export default BalanceStatement
