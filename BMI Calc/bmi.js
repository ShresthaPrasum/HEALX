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
    console.log(bmi);
    if(age<=19){
        console.log("You are a kid")
    }

    if(finalbmi<18.5){
        console.log("You are underweight!");
    }else if(finalbmi<=24.9 && finalbmi >= 18.5){
        console.log("You are normal!");
    }else if(finalbmi<30 && finalbmi >= 25){
        console.log("You are obese");
    }else if(finalbmi >= 30){
        console.log("You have obesity");
    }else{
        console.log("Please enter your details properly again!");
    }
})