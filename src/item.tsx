import { Button } from "@material-ui/core";
import React from "react";

import { CartItemType } from "./App";

import { Wraper } from "./item.style";

type Props = {
  item: CartItemType;
  // handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item }) => (
  <Wraper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button>Add to cart</Button>
  </Wraper>
);

export default Item;
