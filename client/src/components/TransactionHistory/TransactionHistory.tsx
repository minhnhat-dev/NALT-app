import Item from "./Item/Item";
import { TransactionHistoryContainer, TransactionHistoryTitle } from "./TransactionHistory.styled";


function TransactionHistory() {
    return (
    <TransactionHistoryContainer>
        <TransactionHistoryTitle>Transaction History</TransactionHistoryTitle>
        <Item image={'/assets/images/image-13.png'} name={'Upwork'} day={'Today'} value={'+ $85.00'}/>
        <Item image={'/assets/images/image-5.png'} name={'Paypal'} day={'Yesterday'} value={'+ $16.00'}/>
        <Item image={'/assets/images/image-6.png'} name={'Youtube'} day={'Jan 30, 2023'} value={'+ $23.00'}/>
        <Item image={'/assets/images/image-7.png'} name={'Transfer'} day={'Sep 25, 2023'} value={'+ $20.00'}/>
    </TransactionHistoryContainer>
    );
}

export default TransactionHistory;