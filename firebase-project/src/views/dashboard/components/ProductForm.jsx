import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../repositories/firebase/config";

const schema = yup.object().shape({
    nombre: yup.string().min(3).max(50).required(),
    precio: yup.number().min(0).required(),
    stock: yup.number().min(0).required()
});




export const ProductForm = () => {

   const { register, handleSubmit, formState: { errors } } = useForm({
       resolver: yupResolver(schema),
         mode: "onBlur",
            defaultValues: {
               nombre: "",
               precio: 0,
               stock: 0
           },
           reset: () => {
               reset();
           }
   });

   const onSubmit = async (data) => {
        console.log(data);
    

        /* try {
            const docRef = await addDoc(collection(db, "products"), {
                name: data.nombre,
                price: data.precio,
                stock: data.stock
            });
            console.log("Document written with ID: ", docRef.id);
            Toastify({
                text: "Producto agregado exitosamente",
                offset: {
                    x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                    y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
                },
                }).showToast();
        } catch (e) {
            console.error("Error adding document: ", e);
        } */

    }



  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre del Producto</label>
                <input {...register("nombre")} type="text" className="form-control" id="nombre" />
                <div className="invalid-feedback">
                    {errors.nombre?.message}
                </div>
                <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio</label>
                    <input {...register("precio")} type="number" className="form-control" id="precio" />
                    <div className="invalid-feedback">
                        {errors.precio?.message}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="stock" className="form-label">Stock</label>
                    <input {...register("stock")} type="number" className="form-control" id="stock" />
                    <div className="invalid-feedback">
                        {errors.stock?.message}
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Agregar Producto</button>
        </form>
    </div>
  )
}
