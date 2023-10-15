import React from 'react'
import styled from 'styled-components'
import NarrowInIcon from '@/app/Icons/NarrowInIcon'
import NarrowOutIcon from '@/app/Icons/NarrowOutIcon'

const Container = styled.div`
  display: flex;
  color: #FFF;
  justify-content: space-between;
`
const Title = styled.span`
  color: #D0E5E4;
`
const Statement = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Amount = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
`
type BalanceStatementProps = {
    statement: 'in' | 'out',
    title: string,
    amount: string
}
const BalanceStatement = ({statement, title, amount}: BalanceStatementProps) => {
  return (
    <Container>
      <Statement>
        {statement === 'in' ? <NarrowInIcon/> : <NarrowOutIcon/>}<Title>{title}</Title>
      </Statement>
      <Amount>$ {amount}</Amount>
    </Container>
  )
}
export default BalanceStatement