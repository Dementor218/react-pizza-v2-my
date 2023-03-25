import React from "react";

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности  (DESC)",
    sortProperty: "raiting",
  });

  React.useEffect(() => {
    setIsLoading(true);

    const orderSortable = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sortType.sortProperty.replace("-", "");

    const categoryForSort = activeIndex > 0 ? `category=${activeIndex}` : "";

    fetch(
      `https://6419621029e7e36438fc1122.mockapi.io/items?${categoryForSort}&sortBy=${sortBy}&order=${orderSortable}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeIndex, sortType]);

  return (
    <React.Fragment>
      <div className="container">
        <div className="content__top">
          <Categories
            activeIndex={activeIndex}
            onClickCategory={(i) => setActiveIndex(i)}
          />
          <Sort sortValue={sortType} onClickSort={(i) => setSortType(i)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
