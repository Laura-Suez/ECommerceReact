import { useEffect, useState } from "react";
import { getProduct } from "../../../productsMock";
import { useParams, useNavigate } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { Spinner } from "../../common/Spinner";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  console.log(id);

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //  const navigate = useNavigate()

  useEffect(() => {
    getProduct(+id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    console.log(infoProducto);
    // Quiero navegar al carrito
    // navigate("/cart")
  };

  return (
    <>{isLoading ? <Spinner /> : <ItemDetail item={item} onAdd={onAdd} />}</>
  );
};
