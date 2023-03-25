import React from "react";

const Categories = ({ activeIndex, onClickCategory }) => {
  const pizzaCategories = [
    "Все",
    "Мясные",
    "Вегетирианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {pizzaCategories.map((value, i) => (
          <li
            key={value}
            onClick={() => onClickCategory(i)}
            className={activeIndex === i ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
