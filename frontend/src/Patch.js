import React, {useState} from "react";
import axios from 'axios'

const productRegisterUrl = 'https://fgxs385yaa.execute-api.eu-west-2.amazonaws.com/prod/product';

const Delete = () => {

   const [productId, setProductId] = useState('')
   const [updateKey, setUpdateKey] = useState('')
   const [updateValue, setUpdatValue] = useState('')
   const [msg, setMsg] = useState(null)


   const submitHandler = (event, id) => {
      event.preventDefault()
      if (productId.trim() === '' ) {
         setMsg('Product field is required')
         return;
      }
      
      const requestBody = {
        productId : productId,
        updateKey : updateKey,
        updateValue: updateValue
      }
      

      axios.patch(productRegisterUrl, requestBody).then(response => {
        setMsg( 'Product Updated successfully')
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
                <h5>Update Product </h5>
                productId: <input type="text" value = {productId} onChange={event => setProductId(event.target.value)} /> <br/> 
                updateKey: <input type="text" value = {updateKey} onChange={event => setUpdateKey(event.target.value)} /> <br/>
                updateValue: <input type="text" value = {updateValue} onChange={event => setUpdatValue(event.target.value)} /> <br/>
                
                <input type="submit" value="Update Product" />
            </form>
            {msg && <p className="msg">{msg}</p>}
        </div>
    )
}

export default Delete