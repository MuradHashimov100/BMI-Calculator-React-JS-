


function Show({bmI,setBMI,weight,setWeight,height,setHeight}){

    const h = height / 100;
     bmI = weight / (h * h);
     console.log(h);

     function Message(){
        if(bmI<18.5){
            return <h4 className="weight-info">Underweight</h4>
        }
        else if(bmI>18.5 && bmI<24.9){
            return <h4 className="weight-info">Normal weight</h4>
        }
        else if(bmI>25 && bmI<29.9){
            return <h4 className="weight-info">Overheight</h4>
        }   
        else if(bmI>30 && bmI<34.9){
            return <h4 className="weight-info">Obsesity class 1</h4>
        }   
        else if(bmI>35 && bmI<39.9){
            return <h4 className="weight-info">Obsesity class 2</h4>
        }
        else if(bmI>40){
            return <h4 className="weight-info">Obsesity class 2</h4>
        }
        else{
            return <h4 className="weight-info">Your weight</h4>
        }
     }
     
    return(
        <div className="show">

            {/* <h2>Body Mass Index (BMI) = {Math.floor(bmI)} </h2> */}
            {Math.floor(bmI)? <h2>Body Mass Index (BMI) = {Math.floor(bmI)} </h2> :  <h2>Body Mass Index (BMI) = 0.00</h2> }

            {/* <h4 className="weight-info">Normal Weight: </h4> */}
            {Message()}
            
        </div>
    )
}



export default Show;