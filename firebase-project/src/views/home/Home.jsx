import { Products } from "../products/ProductList"


export const Home = () => {
  return (
    <>
    <div className="container-fluid" style={{ minHeight: '100vh', backgroundColor: '#ECEEDF', padding: '20px' }}>

        <div className="row">

            <div className="col-12" style={{ backgroundColor: '#ECEEDF', textAlign: 'center', marginTop: '2px'}}>
                 <h1>MySHOP</h1>
                <p>Welcome to the MySHOP!</p>
                        
            </div>
        </div>
        <div className="row mt-4">
             <Products />
        </div>
    </div>
       

    </>
  )
}
