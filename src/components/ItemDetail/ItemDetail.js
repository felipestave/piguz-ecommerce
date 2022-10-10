import { useState } from "react";
import Item from "../ItemList/Item"

const ItemDetail = ({ product }) => {
  return (
    <>
      <Item product={product} />

    </>
  );
}
export default ItemDetail;