import { collection, getDocs } from "firebase/firestore";
import { db } from "../../repositories/firebase/config"
import { useEffect, useState } from "react";
import { Card } from "./components/Card";
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
    <div className="container row g-3">

        {products.map(({name, price, stock, id}) => (
          <div className="col-md-4 col-lg-4 col-xl-3 col-sm-6 mb-3 " key={id}>
              <Card nombre={name} precio={price.toFixed(2)} stock={stock} id={id} />
          </div>
        ))}

    </div>
  )
}



