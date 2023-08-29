import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getProducts } from "../../services";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getProduct(id)
        .then((reponse) =>{
            setItem(reponse);            
        })
        .catch(() => {
            setItem(null);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, [id]);

    return <ItemDetail item={item} isLoading={isLoading} />;
};

export default ItemDetailContainer;
