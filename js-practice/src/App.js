function App() {

  //--VARIABLES--
  let age = 20;
  const country = "Turkey";


 //--CONDITIONALS--
 let score = 85;
 let grade;
 if(score >= 90){
  grade = "A";
 }else if (score >= 80){
  grade = "B";
 } else {
  grade = "C or below";
 }

 //--Loop--
 let numbers = [];
 for(let i = 1; i <= 5; i++){
  numbers.push(i);
 }

 //--Ternary--
 let result = age >=18 ? "Adult" : "Minor";

 console.log(5 === "5"); //false
 console.log(10 % 3); //1
 console.log(typeof age); //number

 //Practice Question//
 let num = -5;
 let check;
 if(num > 0) {
  check = "Positive";
 }else if (num<0){
  check = "Negative";
 }else {
  check = "Zero";
 }


 return (
  <div style = {{padding:"20px", fontFamily: "monospace"}}>
    <h2>JS Practice Output</h2>
    <p>Country: {country}</p>
    <p>Score: {score} - Grade: {grade}</p>
    <p>Age: {age} - Status: {result}</p>
    <p>Numbers: {numbers.join(", ")}</p>
    <p>Result: {check}</p>
  </div>
  );
}

export default App;