const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = document.querySelector('.height').value;
    const age = document.querySelector('.age').value;
    const weight = document.querySelector('.weight').value;
    const weightinlbs = weight * 2.205;
    const target_weight = document.querySelector('.target-weight').value;
    const target_weightinlbs = target_weight* 2.205;
    const weighttolose = target_weightinlbs - weightinlbs;
    const calores = weighttolose * 
    const datee = document.querySelector('.date').value;
    const days = (new Date(datee) - new Date()) /  (1000 * 60 * 60 * 24);
    console.log(days);


    // let bmr;
     
    // const formm = new FormData(form);
    // const gender = formm.get('gender');

    // if(gender.toLowerCase()==="male"){
    //     bmr = (10 * weight) + (6.25 * height) - (5*age) + 5;
    // }else if(gender.toLowerCase()==="female"){
    //     bmr = (10 *weight) + (6.25 * height) - (5 * age) - 161;
    // }else {
    //     alert("BRUHHH");
    //     console.log(gender);
    // }

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
