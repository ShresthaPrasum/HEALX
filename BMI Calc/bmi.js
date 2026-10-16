const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const age = document.querySelector('#age').value;
    const formdata = new FormData(form);
    const gender = formdata.get('gender');
    console.log(gender);

    const bmi = weight / (height * height);
    let finalbmi = bmi;
    const output = document.querySelector('#output-box');
    output.classList.remove('hide');
    output.style.display = "flex";

    if(finalbmi<18.5){
        output.innerHTML = `
            <h2> Underweight </h2>
            <p> Your BMI is ${finalbmi} </p>
        `;
    }else if(finalbmi<=24.9 && finalbmi >= 18.5){
        output.innerHTML = `
            <h2> Normal </h2>
            <p> Your BMI is ${finalbmi} </p>
        `;
    }else if(finalbmi<30 && finalbmi >= 25){
        output.innerHTML =`
            <h2> Obese </h2>
            <p> Your BMI is ${finalbmi} </p>
        `;
    }else if(finalbmi >= 30){
        output.innerHTML = `
            <h2> Obesity </h2>
            <p> Your BMI is ${finalbmi} </p>
        `;
    }else{
        console.log("Please enter your details properly again!");
    }
})