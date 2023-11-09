import styled from "styled-components";

export const ItemList = styled.li``

export const ItemStyled = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ItemInfo = styled.span`
  display: flex;
  flex-direction: row;
  gap: 14px;
  justify-content: center;
  align-items: center;
  margin-right: 60px;
`;
export const ItemWrap = styled.span`
display:flex;
flex-direction: column;
justify-content: center;
row-gap: 5px;
`;
export const ItemName = styled.span`
  font-size: 16px;
  font-weight: 500;
`;
export const ItemDay = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #666;
`;
export const ItemValue = styled.span <{ $isNegative?: boolean; }>`
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  color:  ${props => props.$isNegative ? "#F95B51" : "#25a969"};
`;
export const ItemButton = styled.button`
  border-radius: 40px;
  background: #ecf9f8;
  width: 109.945px;
  height: 36px;
  padding: 10px;
  color: #438883;
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  border: none;
  cursor: pointer;
`;
