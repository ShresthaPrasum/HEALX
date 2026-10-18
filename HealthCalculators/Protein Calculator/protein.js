const form = document.querySelector('#form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const height = parseFloat(document.querySelector('.height').value);
    const weight = parseFloat(document.querySelector('.weight').value);
    const age = parseInt(document.querySelector('.age').value);

    const formdata = new FormData(form);
    const gender = formdata.get('gender');
    const activity = document.querySelector('#activity').value;
    let bmr;

    if(gender.toLowerCase()==="male"){
    bmr = (10 * weight) + (6.25 * height) - (5 *age) + 5;
    }else if(gender.toLowerCase()=== "female"){
        bmr = (10*weight) + (6.25*height) - (5*age) - 161;
    }else{
        alert("BRUHH");
    }
    console.log(bmr);

    let multi;
    if(activity==="no-workout"){
        multi = 1.2;
    }else if(activity==="1-2-times"){
        multi = 1.375;
    }else if(activity==="2-3-times"){
        multi = 1.55;
    }else if(activity==="3-5-times"){
        multi = 1.725;
    }else if(activity === "6-7-times"){
        multi = 1.9;
    }else if(activity==="professional"){
        multi = 2.3;
    }
    console.log(multi);


    let totalcalories = bmr * multi;
    console.log(totalcalories);

    const output = document.querySelector('.output-box');
    output.classList.remove('hide');

    output.innerHTML = `
        <h2>
          GRIND
        </h2>

        <p>
          ${name}, You need to take ${totalcalories} kcl/day amount of protein (everyday).
        </p>
    `;
    
})