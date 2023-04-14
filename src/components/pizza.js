import React,{useState} from "react";
import react ,{ Modal } from "bootstrap";

export default function Pizza({pizza}){
    const [ Quantity , setQuantity]=useState(1)
    const [ varients , setvarients]=useState("small")
    const [ show , setshow]= useState(false);

    const handleClose =() => setshow(false);
    const handleshow =() => setshow(true);
    return (
        <div className="m-5  shadow-lg p-3 mb-5 bg-white rounded">
            <div onClick={handleshow}>
            <h1>{pizza.name}</h1>
            <img src={pizza.image} className="img-fluid" style={{height:'300px' , width:'300px'}}></img>
            </div>
             <div className="flex-container">
                <div className="w-100 m-1">
                    <p>Varients</p>
                    <select className="form-control" value={varients} onChange={(o)=>{setvarients(o.target.value)}}>
                        {pizza.varients.map(varients=>{
                            return <option value={varients}>{varients}</option>
                        })}
                    </select>
                </div>
                <div className="w-100 m-1">
                  <p>Quantity</p>
                  <select className="form-control" value={Quantity} onChange={(o)=>{setQuantity(o.target.value)}}>
                    {[...Array(10).keys()].map((x,i)=>{
                            return <option value={i+1}>{i+1}</option>
                    })}
                  </select>
                </div>
             </div>
             <div className="flex-container">
                <div className="m-1 w-100">
                   <h1 className="mt-1">Prices: {pizza.prices[0][varients]*Quantity} Rs/-</h1>
                </div>
                <div className="m-1 w-100">
                    <button className="btn">ADD TO CART</button>
                </div>   
           </div>
      </div>   
      
  
    )
}