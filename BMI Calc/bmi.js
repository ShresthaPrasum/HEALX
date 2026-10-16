const form = document.querySelector('#metric-form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const height = document.querySelector('.height').value;
    const weight = document.querySelector('.weight').value;
    const formdata = new FormData(form);
    const gender = formdata.get('gender');
    console.log(gender);

    const bmi = weight / (height * height);
    let finalbmi = bmi;
    const output = document.querySelector('.output-box');
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
        alert("Please enter your details properly again!");
    }
})

const formm = document.querySelector('#other-form');
formm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const heightt = document.querySelector('.heightt').value;
    const weightt = document.querySelector('.weightt').value;
    const formdataa = new FormData(formm);
    const genderr = formdataa.get('genderr');
    const outputt = document.querySelector('.output-boxx');

    const bmii = (703 *weightt)/ (heightt * heightt);
    console.log(bmii);
    outputt.classList.remove('hide');
    outputt.style.display = "flex";

    if(bmii<18.5){
        outputt.innerHTML = `
            <h2> Underweight </h2>
            <p> Your BMI is ${bmii} </p>
        `;
    }else if(bmii < 25 && bmii >=18.5){
        outputt.innerHTML = `
            <h2> Normal </h2>
            <p> Your BMI is ${bmii} </p> 
        `;
    }else if(bmii< 30 && finalbmi >= 25){
        outputt.innerHTML = `
            <h2> Obese </h2>
            <p> Your BMI is ${bmii} </p>
        `;
    }else if(bmii >= 30){
        outputt.innerHTML = `
            <h2> Obesity </h2>
            <p> Your BMI is ${bmii} </p>
        `;
    }else {
        alert("Please write your details properly again!");
    }
})