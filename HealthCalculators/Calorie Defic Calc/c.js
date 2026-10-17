const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = Number(document.querySelector('.height'));
    const weight = Number(document.querySelector('.weight'));
    const energy_intake = Number(document.querySelector('.energy-intake'));
    const age = Number(document.querySelector('.age'));
    const pal = Number(document.querySelector('.pal-multiplier'));
    let bmr;
     
    const formm = new FormData(form);
    const gender = formm.get('gender');

    if(gender.toLowerCase()==="male"){
        bmr = (10 * weight) + (6.25 * height) - (5*age) + 5;
    }else if(gender.toLowerCase()==="female"){
        bmr = (10 *weight) + (6.25 * height) - (5 * age) - 161;
    }else {
        alert("BRUHHH");
        console.log(gender);
    }

    const tdee = bmr * pal;
    const energy_balance = energy_intake - tdee;

    
})