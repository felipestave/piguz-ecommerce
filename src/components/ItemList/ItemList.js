import Item from "./Item";
const ItemList = ({ products }) => {
  return (
    <div className="d-flex mt-5 g-5">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}
 
export default ItemList;