import React, {useState} from "react";
import axios from 'axios'

const productRegisterUrl = 'https://fgxs385yaa.execute-api.eu-west-2.amazonaws.com/prod/product';

const ProductRegister = () => {

   const [productId, setProductId] = useState('')
   const [color, setColour] = useState('')
   const [price, setPrice] = useState('')
   const [msg, setMsg] = useState(null)


   const submitHandler = (event) => {
      event.preventDefault()
      if (productId.trim() === '' || color.trim() === '' || price.trim() === '') {
         setMsg('All fields are required')
         return;
      }
      
      const requestBody = {
        productId : productId,
        color : color,
        price: price
      }

      axios.post(productRegisterUrl, requestBody).then(response => {
        setMsg( 'Product Registered successfully')
      }) .catch(error => {
        if (error.response.status === 401 || error.response.status === 403) {
            setMsg(error.response.data.message)
        } else {
            setMsg('Backened server is down try again later')
        }
      }) 
   }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <h5>Product Register</h5>
                productId: <input type="text" value = {productId} onChange={event => setProductId(event.target.value)} /> <br/>
                colour: <input type="text" value = {color} onChange={event => setColour(event.target.value)} /> <br/>
                price: <input type="text" value = {price} onChange={event => setPrice(event.target.value)} /> <br/>
                <input type="submit" value="Register Product" />
            </form>
            {msg && <p className="msg">{msg}</p>}
        </div>
    )
}




export default ProductRegister