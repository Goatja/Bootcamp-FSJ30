import { Table } from "../components/Table"
import { Products } from "../products/ProductList"
import { ProductForm } from "./components/ProductForm"


export const DashBoard = () => {
  return (
    <>
        <div className="container mt-5">
            <h2 className="mb-4">Dashboard de Productos</h2>
            <div className=" mb-3 mx-auto text-center bg-light p-4 rounded shadow"> 
            <ProductForm />
            </div>
            {/* <Products /> */}
           <Table />
        </div>  
    </>
  )
}

