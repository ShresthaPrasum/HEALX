const form = document.querySelector("#form");

const weightLabel = document.querySelector("#weight-label");

const unitType = document.querySelector("#unit");

const outputBox = document.querySelector(".output-box");

unitType.addEventListener("change",()=>{
  if(unitType.value === "metric"){
    weightLabel.textContent = "Weight (kg)";
  }
  
  else {
    weightLabel.textContent = "Weight (lbs)";
  }
})

if(unitType.value === "metric"){
  weightLabel.textContent = "Weight (kg)";
  }
  
else {
  weightLabel.textContent = "Weight (lbs)";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector(".name").value;
  const date = document.querySelector(".date").value;
  let unit = unitType.value;

  const target_date = new Date(date);
  const current_date = new Date();

  current_date.setHours(0, 0, 0, 0);
  target_date.setHours(0, 0, 0, 0);

  const diffTime = target_date - current_date;

  const remaining_days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  console.log(remaining_days);

  let weight = parseFloat(document.querySelector(".weight").value);
  let target_weight = parseFloat(document.querySelector(".target-weight").value);

  if(unit === "metric"){
    weight = weight* 2.20462;
    target_weight = target_weight * 2.20462;
  }
    
  const weightDifferernce = target_weight - weight;
  const totalCalories = Math.abs(weightDifferernce) * 3500;

  outputBox.classList.remove("hide");

  if(remaining_days <= 0) {
    outputBox.innerHTML =
    `
    <p>
      <span style="color: #ff6b6b;">Error! Please select a future date.</span>
    </p>
    `;
    return
  }

  const caloriedeficit = remaining_days > 0 ? totalCalories / remaining_days : 0;

  if(weightDifferernce<0){
    outputBox.innerHTML = `
    <p>
      <span>
        ${name}, You have to deficit
      </span>
      <span>
        ${Math.round(caloriedeficit).toLocaleString()}
      </span>
      <span class = 'unit'>kcal/day. Don't eat junk food and always count your calorie before you eat. Exercise and move more. </span>
    </p>
    `
  }

  else if(weightDifferernce>0){
    outputBox.innerHTML= `
    <p>
      <span>
        ${name}, to reach your target weight you must eat more than usual
      </span>
      <span>
        ${Math.round(caloriedeficit).toLocaleString()}
      </span>
      <span class='unit'> 
        kcal/day. Eat nutrient dense food, don't drink alcohol, and lift heavy weights
      </span>
    </p>
    `
  }

  else{
    outputBox.innerHTML= `
      <p>
        <span> Your current weight matches your target weight. You are perfect and beautiful as you are already. Maintain your current weight. </span>
      </p>
      `
  }

});