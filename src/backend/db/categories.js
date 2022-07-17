import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "React",
    description: "Quizes based React Concepts",
  },
  {
    _id: uuid(),
    categoryName: "JavaScript",
    description: "Quizes based JavaScript Concepts",
  },
  {
    _id: uuid(),
    categoryName: "Node",
    description: "Quizes based NodeJS Concepts",
  },
  {
    _id: uuid(),
    categoryName: "TypeScript",
    description: "Quizes based TypeScript Concepts",
  },
];
