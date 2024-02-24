import { ProductCard } from "../../common/ProductCard";
import { products } from "../../../productsMock";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  return (
    <div>
      <ItemList />
      <ProductCard />
    </div>
  );
};
