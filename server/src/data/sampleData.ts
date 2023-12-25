import { CategoriesData, CategoryType } from "../types/category.interface";

export const categoriesData: CategoriesData = [
  {
    name: "Upwork",
    type: CategoryType.income,
    image: "images/upwork.svg"
  },
  {
    name: "Transfer",
    type: CategoryType.expense,
    image: "images/transfer.svg"
  },
  {
    name: "Paypal",
    type: CategoryType.income,
    image: "images/paypal.svg"
  },
  {
    name: "Youtube",
    type: CategoryType.expense,
    image: "images/youtube.svg"
  },
  {
    name: "Starbucks",
    type: CategoryType.expense,
    image: "images/starbucks.svg"
  },
  {
    name: "Spotify",
    type: CategoryType.expense,
    image: "images/spotify.svg"
  },
  {
    name: "Electricity",
    type: CategoryType.expense,
    image: "images/electricity.svg"
  },
  {
    name: "House Rent",
    type: CategoryType.income,
    image: "images/houseRent.svg"
  },
];
