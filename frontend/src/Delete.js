import React, {useState} from "react";
import axios from 'axios'

const productRegisterUrl = 'https://fgxs385yaa.execute-api.eu-west-2.amazonaws.com/prod/product';

const Delete = () => {

   const [productId, setProductId] = useState('')
  
   const [msg, setMsg] = useState(null)


   const submitHandler = (event, id) => {
      event.preventDefault()
      if (productId.trim() === '' ) {
         setMsg('Product field is required')
         return;
      }
      
      

      axios.delete(productRegisterUrl, {data: {productId : productId}}).then(response => {
        setMsg( 'Product Deleted successfully')
      }) .catch(error => {
        if (error) {
            setMsg(error.response.data.message)
        } else {
            setMsg('Backened server is down try again later')
        }
      }) 
   }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <h5>Delete Product </h5>
                productId: <input type="text" value = {productId} onChange={event => setProductId(event.target.value)} /> <br/>
                
                <input type="submit" value="Delete Product" />
            </form>
            {msg && <p className="msg">{msg}</p>}
        </div>
    )
}

export default Delete