import styled from "styled-components";

export const UpcomingSpentContainer = styled.div`
  width: fit-content;
  min-height: fit-content;
  border: 1px solid white;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 2px 4px 3px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  padding: 0px 28px 30px 28px
`;
export const UpcomingSpentTitle = styled.h1`
  font-size: 1.3rem;
  padding: 20px 0px;
  font-weight: 600;
`;
export const UpcomingSpentList = styled.ul`
  padding: 0px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
