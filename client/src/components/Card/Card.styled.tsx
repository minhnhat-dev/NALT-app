
import styled from 'styled-components'

export const CardStyled = styled.div`
  height: 317px;
  width: 516px;;
  background-image: url('/assets/svgs/card-background.svg');
  background-repeat: no-repeat;
  border-radius: 40px;
  background-size: cover;
  color: #FFF;
`
export const CardContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`
export const CardHeaderStyled = styled.div`
  padding: 47px;
  line-height: 29.419px;
`
export const CardFooterStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 240px;
  margin-left: 38px;
  margin-bottom: 20px;
`
export const HeaderStyled = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
`
export const BalanceStyled = styled.p`
  font-size: 40px;
  font-weight: 600;
  line-height: 65px;
`
export const BalanceStatementStyled = styled.div`
  display: flex;
  color: #FFF;
  justify-content: space-between;
`
export const TitleStyled = styled.span`
  color: #D0E5E4;
`
export const StatementStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const AmountStyled = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
`
