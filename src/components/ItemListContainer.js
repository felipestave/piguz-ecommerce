const ItemListContainer = ({greeting}) => {
    return (  
        <>
        <div className="text-center">

        <h1>Lista de productos</h1>
        <p>{greeting}</p>
        </div>
        </>
    );
}
 
export default ItemListContainer;