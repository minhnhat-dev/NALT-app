import styled from 'styled-components'
export const TopSpendingContainerStyled = styled.div`
    padding: 30px 30px 40px 30px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.60);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.20);
    backdrop-filter: blur(2px);
    width: fit-content;
`
export const ListContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
export const Header = styled.h1`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
`
export const TitleStyled = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: #000;
`
export const DateStyled = styled.span`
    font-size: 13px;
    font-weight: 400;
    color: var(--Secondary, #666);
`
export const AmountStyled = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: var(--Red, #F95B51);
`
export const ContainerStyled = styled.div`
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 390px;
    min-height: 70px;
    padding: 10px;
    border-radius: 12px;
    background: #FBFBFB;
    box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.10);
    transition: all 0.5s;
    &:hover {
        ${TitleStyled} {
            color: #FFF;
        }
        background: #29756F;
        box-shadow: 0px 30px 40px 0px rgba(41, 117, 111, 0.35);
        ${DateStyled} {
            color: #FFF;
        }
        ${AmountStyled} {
            color: #FFF;
        }
    }
`
export const AvatarStyled = styled.img`
    width: 50px;
    height: 50px;
    padding: 10px;
`

export const InfoStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
export const DetailStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`