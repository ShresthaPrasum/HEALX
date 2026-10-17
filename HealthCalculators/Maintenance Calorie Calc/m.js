const form = document.getElementById('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const height = parseFloat(document.querySelector('.height').value);
    const weight = parseFloat(document.querySelector('.weight').value);
    const age = parseInt(document.querySelector('.age').value);
    const formm = new FormData(form);
    const gender = formm.get('gender');
    const pal = formm.get('lvl');

    let bmr;
    if(gender.toLowerCase()==="male"){
        bmr = (10*weight) + (6.25*height) - (5*age) + 5;
    }else if(gender.toLowerCase()==="female"){
        bmr = (10*weight) + (6.25*height) - (5*age) -161;
    }else{
        alert("BRUHHH");
        console.log(name);
        console.log(height);
        console.log(weight);
        console.log(age);
        console.log(gender);
        console.log(pal);
    }
    console.log(bmr);

    let palmulti;
    if(pal.toLowerCase()==="no"){
        palmulti = 1.2;
    }else if(pal.toLowerCase()==="regularly"){
        palmulti = 1.55;
    }else if(pal.toLowerCase()==="job"){
        palmulti = 1.975;
    }else if(pal.toLowerCase()==="professional"){
        palmulti = 2.3;
    }else{
        alert("BRUHH");
    }
    console.log(palmulti);

    const mantainance = bmr * palmulti;
    console.log(mantainance);

    const output = document.querySelector('#output-box');
    output.innerHTML = `
    <h2> Maintain Your Weight!! </h2>
    <p>
        ${name}, You can maintain your weight by consuming ${mantainance} calories per day!!
    </p>
    `;
})