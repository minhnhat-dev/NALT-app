import Item from "../Item/Item";
import {
  UpcomingSpentContainer,
  UpcomingSpentTitle,
  UpcomingSpentList,
} from "./UpcomingSpent.styled";

function UpcomingSpent() {
  const data = [
    {
      id: 1,
      name: "Youtube",
      image: "/assets/images/image-6.png",
      day: "Feb 28, 2023",
      value: 0,
    },
    {
      id: 2,
      name: "Electricity",
      image: "/assets/images/image-9.png",
      day: "Mar 28 ,2023",
      value: 0,
    },
    {
      id: 3,
      name: "House Rent",
      image: "/assets/images/image-8.png",
      day: "Mar 31, 2023",
      value: 0,
    },
    {
      id: 4,
      name: "Spotify",
      image: "/assets/images/image-16.png",
      day: "Apr 28, 2023",
      value: 0,
    },
    {
      id: 5,
      name: "Paypal",
      image: "/assets/images/image-5.png",
      day: "May 23, 2023",
      value: 0,
    },
    {
      id: 6,
      name: "Nextflix",
      image: "/assets/images/image-17.png",
      day: "Jun 27, 2023",
      value: 0,
    },
    {
      id: 7,
      name: "UpWork",
      image: "/assets/images/image-13.png",
      day: "Jul 16, 2023",
      value: 0,
    },
  ];

  return (
    <UpcomingSpentContainer>
      <UpcomingSpentTitle>Upcoming Spent</UpcomingSpentTitle>
      <UpcomingSpentList>
        {data.map((item) => (
          <Item
            key={item.id}
            isNegative={ item.value > 0 ? false : true}
            image={item.image}
            name={item.name}
            day={item.day}
            value={item.value}
          />
        ))}
      </UpcomingSpentList>
    </UpcomingSpentContainer>
  );
}

export default UpcomingSpent;
