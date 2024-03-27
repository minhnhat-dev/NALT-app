import { CategoriesData, CategoryType } from "../types/category.interface";

export const categoriesData: CategoriesData = [
  {
    name: "Upwork",
    type: CategoryType.income,
    image: "upwork.svg",
  },
  {
    name: "Transfer",
    type: CategoryType.expense,
    image: "transfer.svg",
  },
  {
    name: "Paypal",
    type: CategoryType.income,
    image: "paypal.svg",
  },
  {
    name: "Youtube",
    type: CategoryType.expense,
    image: "youtube.svg",
  },
  {
    name: "Starbucks",
    type: CategoryType.expense,
    image: "starbucks.svg",
  },
  {
    name: "Spotify",
    type: CategoryType.expense,
    image: "spotify.svg",
  },
  {
    name: "Electricity",
    type: CategoryType.expense,
    image: "electricity.svg",
  },
  {
    name: "House Rent",
    type: CategoryType.income,
    image: "houseRent.svg",
  },
];
