import { collection, getDocs } from "firebase/firestore";
import { db } from "../../repositories/firebase/config"
import { useEffect, useState } from "react";
import { auth } from "../../repositories/firebase/config";
import Card from "../../../Card";
export const Products = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {

        const productsCol = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCol);
        const productsList = productsSnapshot.docs.map(doc => doc.data());
        setProducts(productsList);
        console.log(productsList);
    
  }


    useEffect(() => {
        getProducts();
    }, []);

  return (
    <div className="container row">
        {products.map((product, index) => (
          <Card key={index} nombre={product.name} precio={product.price} stock={product.stock} />
        ))}

    </div>
  )
}


