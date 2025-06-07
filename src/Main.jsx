import { useState } from "react"
import Buttons from "./Buttons"
import ButtonsData from "./ButtonsData"


export default function Main(){
  const [equation,setEquation] = useState("");

  function display(event){
    if(event.target.value == "="){
      setEquation(calculate(equation));
    }else if(event.target.value == "<"){
      del(event);
    }else if(event.target.value == "C"){
      clear();
    }else{
      setEquation(equation + event.target.value )
    }
  }


  function calculate(equation){
   const f_equation =equation ;
      f_equation.trim();
      let op ;
      if(f_equation.includes("-")){
        op = "-";
      }else if(f_equation.includes("*")){
        op = "*";
      }else if(f_equation.includes("/")){
        op = "/";
      }else if(f_equation.includes("+")){
        op = "+"
      }

      const [a,b] = [f_equation.slice(0,f_equation.indexOf(op)),f_equation.slice(f_equation.indexOf(op)+1)]
      console.log(a +op +b);
      if(op == "+"){
        return a + b ;
      }else if(op == "-"){
        return a - b;
      }else if(op == "*"){
        return a * b ;
      } else if (b==0){
        return "can't devide on 0"
      }else{
        return a / b;
      }

    }


  function onChangeHandler(event){
      setEquation(event.target.value );
  }

  function del(){
      let screen = document.querySelector('input').value;
    
    
    setEquation(screen.slice(0, screen.length - 1));
  }

  function clear(){
      setEquation("");
      
  }

  function switchMode(event) {
  const targets = document.getElementsByClassName("target");

  for (let i = 0; i < targets.length; i++) {
    targets[i].classList.toggle("dark-mode");
  }
  document.getElementById("body").classList.toggle("dark-mode");
  document.getElementById("main").classList.toggle("dark-mode");
}

  return(
    <main id="main">
      <img src="/src/images/darkmode.svg" alt="mode icon" onClick={switchMode} />
      <input type="text" name="f" id="" value={equation} onChange={onChangeHandler}/>
      <div className="buttonsContainer">
        {
          ButtonsData.map((button)=>
            <Buttons className={button.class}  value={button.val} onClick={display}   />
          )
        }
      </div>
    </main>
  )
}