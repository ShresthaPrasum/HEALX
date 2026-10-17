const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = document.querySelector('.height').value;
    const age = document.querySelector('.age').value;
    const date = document.querySelector('.date').value;

    const target_date = new Date(date);
    target_date.setHours(0, 0, 0, 0);
    const current_date = new Date();
    current_date.setHours(0, 0, 0, 0);
    const remaining_days = Math.ceil((target_date - current_date) / (1000 * 60 * 60 * 24));

    const formm = new FormData(form);
    const gender = formm.get('gender');

    const weight = parseFloat(document.querySelector('.weight'));
    const target_weight = parseFloat(document.querySelector('.target-weight'));
    const weighttolose = weight - target_weight;
    const calories = weighttolose * 3500;
    const caloriedeficit = remaining_days > 0 ? (calories / remaining_days) : 0;

    document.querySelector('#output-box').innerHTML = `
    <p class="value-display">
         <span class="number">${Math.round(caloriedeficit)}</span>
         <span class="unit">kcal/day</span>
    </p>
    `;



     

    // if(gender.toLowerCase()==="male"){
    //     bmr = (10 * weight) + (6.25 * height) - (5*age) + 5;
    // }else if(gender.toLowerCase()==="female"){
    //     bmr = (10 *weight) + (6.25 * height) - (5 * age) - 161;
    // }else {
    //     alert("BRUHHH");
    //     console.log(gender);
    // }

    // const calories = weighttolose * 3500;
    // const target_weightinlbs = target_weight* 2.205;

    // const tdee = bmr * pal;
    // const energy_balance = energy_intake - tdee;
    // let energyintake;

    // if(energy_balance > 0){
    //     energyintake= `
    //         <h2> Energy Intake exceeds expenditure </h2>
    //     `;
    // }else if(energy_balance < 0){
    //     energyintake = `
    //         <h2> Energy Intake is below expenditure </h2>
    //     `;
    // }else if(energy_balance == 0){
    //     energyintake = `
    //         <h2> Energy Intake matches expenditure </h2>
    //     `;
    // }else{
    //     alert("BRUHHHH");
    //     console.log(energy_balance);
    // }

    // document.querySelector('#output-box').innerHTML = `
    
    //     ${energyintake}

    //     <p> 
    //       Your Energy balance is ${energy_balance}! 
    //     </p>

    // `;

})