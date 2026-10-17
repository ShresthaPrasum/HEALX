const form = document.querySelector('#metric-form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const height = document.querySelector('.height').value;
    const weight = document.querySelector('.weight').value;
    const formdata = new FormData(form);
    let gender = formdata.get('gender');
    console.log(gender);

    const bmi = weight / (height * height);
    let finalbmi = bmi.toFixed(2);
    const output = document.querySelector('.output-box');
    output.classList.remove('hide');
    output.style.display = "flex";

    if(gender.toLowerCase()=== "female"){
        gender = "girl";
    }

    if(finalbmi<18.5){
        output.innerHTML = `
            <h2> Underweight </h2>
            <p> Your BMI is ${finalbmi} </p>
            <p> Try to eat more healthy stuffs and become healthy ${gender}! </p>
        `;
    }else if(finalbmi<=24.9 && finalbmi >= 18.5){
        output.innerHTML = `
            <h2> Normal </h2>
            <p> Your BMI is ${finalbmi} </p>
            <p> One of the most perfect ${gender} in the planet, Keep it up!
        `;
    }else if(finalbmi<30 && finalbmi >= 25){
        output.innerHTML =`
            <h2> Obese </h2>
            <p> Your BMI is ${finalbmi} </p>
            <p> Do some exercise in this winter arc to be a healtthy ${gender}!
        `;
    }else if(finalbmi >= 30){
        output.innerHTML = `
            <h2> Obesity </h2>
            <p> Your BMI is ${finalbmi} </p>
            <p>You need to lock in and do a lot of exercise at this point, ${gender}</p>
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
    let genderr = formdataa.get('genderr');
    const outputt = document.querySelector('.output-boxx');

    let bmii = (703 *weightt)/ (heightt * heightt);
    bmii = bmii.toFixed(2);
    console.log(bmii);
    outputt.classList.remove('hide');
    outputt.style.display = "flex";

    if(genderr.toLowerCase() === "female"){
        genderr = "girl";
    }

    if(bmii<18.5){
        outputt.innerHTML = `
            <h2> Underweight </h2>
            <p> Your BMI is ${bmii} </p>
            <p> Try to eat more healthy stuffs and become a healthy ${genderr}!</p>
        `;
    }else if(bmii < 25 && bmii >=18.5){
        outputt.innerHTML = `
            <h2> Normal </h2>
            <p> Your BMI is ${bmii} </p> 
            <p> One of the most perfect ${genderr} in the planet! </p>
        `;
    }else if(bmii< 30 && bmii >= 25){
        outputt.innerHTML = `
            <h2> Obese </h2>
            <p> Your BMI is ${bmii} </p>
            <p> Do some exercise in this winter arc to be a healthy ${genderr}! </p>
        `;
    }else if(bmii >= 30){
        outputt.innerHTML = `
            <h2> Obesity </h2>
            <p> Your BMI is ${bmii} </p>
            <p> You need to lock in and do some exercise at this point, ${genderr}. </p>
        `;
    }else {
        alert("Please write your details properly again!");
    }
})
const metricbtns = document.querySelectorAll('.select-mode .metric');
const otherbtns = document.querySelectorAll('.select-mode .otherr');
const metric = document.querySelector('#metric');
const other = document.querySelector('#other-unitss');

metricbtns.forEach((metricbtn)=>{
    metricbtn.addEventListener('click', ()=>{
        metricbtns.forEach((a)=>{
            a.classList.add('active');
            })
            
            otherbtns.forEach((other)=>{
                other.classList.remove('active');
            })

            metric.classList.remove('hide');
            metric.style.display = "flex";


            other.classList.add('hide');
            other.style.display = "none";
        
    })
})

otherbtns.forEach((otherbtn)=>{
    otherbtn.addEventListener('click', ()=>{
        otherbtns.forEach((b)=>{
            b.classList.add('active');
        })

        metricbtns.forEach((c)=>{
            c.classList.remove("active");
        })

        other.classList.remove('hide');
        other.style.display = "flex";

        metric.classList.add('hide');
        metric.style.display = "none";
    })
})