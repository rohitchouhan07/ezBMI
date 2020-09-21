import React, { useState } from 'react';
import Result from './Result'
function Calculator(){
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [bmi, setBmi] = useState("Enter the details to begin");
    const [bmiClass, setBmiClass] = useState();

    const handleHeightChange = (event) => setHeight(event.target.value);
    const handleWeightChange = (event) => setWeight(event.target.value);
    
    const computeBmi = () => {
        let bmiValue = ((weight) / (height) ** 2);
        setBmi(bmiValue);
        let bmiClass = getBmi(bmiValue);
        setBmiClass(bmiClass);
        setHeight("")
        setWeight("")
      };
    
    const getBmi = (bmi) => {
        
        if (bmi < 18.5) {
          return "Underweight";
        }
        if (bmi >= 18.5 && bmi < 24.9) {
          return "Normal weight";
        }
        if (bmi >= 25 && bmi < 29.9) {
          return "Overweight";
        }
        if (bmi >= 30) {
          return "Obesity";
        }
      };
    return(
        <>
        <div class="card mx-auto rounded bg-light mb-4">
             <div class="card-body ">
                <h3 class="card-title"> ez BMI</h3>
                <h6 class="card-subtitle mb-2 text-muted">An ez BMI Calculator</h6>
                <p class="card-text">Body mass index is a value derived from the mass and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m², resulting from mass in kilograms and height in metres.</p>
                
                {/* weight input field */}
                <h5 class="card-title">Enter your Weight</h5>
                
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                         <span class="input-group-text">Mass</span>
                    </div>
                    <input onChange={handleWeightChange}
                     value={weight} type="number" class="form-control" aria-label="Weight (in Kgs)"/>
                    <div class="input-group-append">
                        <span class="input-group-text">Kg</span>
                    </div>
                </div>
                
                {/* height input field */}
                <h5 class="card-title">Enter your Height</h5>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                         <span class="input-group-text">Length</span>
                    </div>
                    <input onChange={handleHeightChange}
                    value={height} type="number" class="form-control" aria-label="Height (in Meters)"/>
                    <div class="input-group-append">
                        <span class="input-group-text">m</span>
                    </div>
                </div>

                <button type="button" onClick = {computeBmi} class="btn btn-dark btn-lg">Calculate</button>
                <div className="row">
                {
          isNaN(bmi)?null:<h3>Your BMI = {bmi}</h3> 
        }
        
                    </div>
                    <div className="row">
                        <h3>{bmiClass}</h3>
                    </div>
                </div>
                
        </div>
            <div className="row">
                    <Result range = {bmi} />
                 </div>
        </>
    );
}




export default Calculator;