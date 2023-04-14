import React from "react";
import Pizzas from "../pizzadata";
import Pizza from "../components/pizza";

export default function Homescreen(){
    return (
        <div>
            <div className="row">
             {Pizzas.map(pizza=>{
                return <div className="col-md-4 p-3">
                    <div>
                        <Pizza pizza={pizza}/>
                    
                    </div>
                </div>
             })}
            </div>
        </div>
    )
}