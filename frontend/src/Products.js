import React, {useState} from "react";
import axios from 'axios'

const productRegisterUrl = 'https://fgxs385yaa.execute-api.eu-west-2.amazonaws.com/prod/products';

function Products  () {

    const [display, setDisplay] = useState('')

   

    const getQuote = () => {
        axios.get(productRegisterUrl)
        .then(res => {
            console.log(res.data.products)
            let display = res.data.products[2]
            setDisplay(display)
        }). catch(err => {
            console.log(err)
        })
    }
      
      
      

    //  axios.get(productRegisterUrl).then(response => {
       display.forEach()
    let vals = Object.values(display)


    return (
        <div>
            
                <h5> Products </h5>
               
                
                <button onClick={getQuote}>Get Quote</button>

                {Object.keys(display).map((key) => (
                   <h3>{key}:  {vals}</h3>
                   
                   ))}

              
                   
        </div>
    )
}

export default Products