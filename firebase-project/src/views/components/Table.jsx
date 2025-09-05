import { useState } from "react"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../repositories/firebase/config"
import { useEffect } from "react";



export const Table = () => {

    const [products, setProducts] = useState([]);

    //obtener de firebase

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
    <>
    <div className="text-center fw-bold">Table content</div>
    <table className="table table-striped mt-3">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
            </tr>
        </thead>
        <tbody>
            {products.map(({name, price, stock, id}) => (
                <tr key={id}>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>{stock}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}
