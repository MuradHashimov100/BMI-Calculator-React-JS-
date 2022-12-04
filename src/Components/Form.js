// import { useState } from "react";






function Form({bmI,setBMI,weight,setWeight,height,setHeight,h}){
    
    
    console.log(h);
    console.log(weight);

     h = height / 100;
     bmI = weight / (h * h);
    //  function result(){
    //     const h = height / 100;
    //     const bmI = weight / (h * h);

    //     return bmI;
    // }

        // const h = height / 100;
        // bmI = weight / (h * h);


   


        function ResetInput(e){
            e.preventDefault();
            setWeight('');
            setHeight('');
            // const h = height / 100;
            // const bmI = weight / (h * h);
            // setBMI(bmI.toFixed(2));
            
        }

        return(

    <div>
        
        <form action="">
             <div className="inputs">
                <div className="weight">
                    <input value={weight} onChange={(e) => setWeight(e.target.value)}  type="text"  placeholder="Weight"/>
                    <label htmlFor="">Weight:{weight}</label>
                </div>
                <div className="weight">
                    <input value={height} onChange={(e) => setHeight(e.target.value)} type="text"  placeholder="Height"/>
                    <label htmlFor="">Height:{height}</label>
                </div>
             </div>
                <button href="#" type="submit" onClick={ResetInput}>Reset</button>
            </form>
            {/* <span>Netice:{Math.ceil(bmI)}</span> */}
            { Math.ceil(bmI) ? <span>Netice:{Math.ceil(bmI)}</span> : ''}
    </div>
    )
    
}



export default Form;

