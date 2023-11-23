import Item from "../Item/Item";
import {
  TopSendingContainer,
  TopSendingTitle,
  TopSendingList,
} from "./TopSending.styled";

function TopSending() {
  const data = [
    {
      id: 1,
      name: "Upwork",
      image: "/assets/images/image-13.png",
      day: "Today",
      value: -49.32,
    },
    {
      id: 2,
      name: "Paypal",
      image: "/assets/images/image-5.png",
      day: "Yesterday",
      value: -35.46,
    },
    {
      id: 3,
      name: "Youtube",
      image: "/assets/images/image-6.png",
      day: "Jan 30, 2023",
      value: -21.99,
    },
    {
      id: 4,
      name: "Transfer",
      image: "/assets/images/image-7.png",
      day: "Sep 25, 2023",
      value: -15.00,
    },
    {
      id: 5,
      name: "Spotify",
      image: "/assets/images/image-16.png",
      day: "Feb 14, 2023",
      value: -10,
    },
  ];
  return (
    <TopSendingContainer>
      <TopSendingTitle>Top Sending</TopSendingTitle>
      <TopSendingList>
        {data.map((item) => (
          <Item
            key={item.id}
            isNegative={item.value > 0 ? false : true}
            image={item.image}
            name={item.name}
            day={item.day}
            value={item.value}
          />
        ))}
      </TopSendingList>
    </TopSendingContainer>
  );
}
export default TopSending;
