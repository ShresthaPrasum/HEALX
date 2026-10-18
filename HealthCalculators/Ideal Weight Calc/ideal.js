const form = document.querySelector('#form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.querySelector('.name').value;
    const weight = parseFloat(document.querySelector('.weight').value);
    const formm = new FormData(form);
    const gender = formm.get('gender');
    const height = parseFloat(document.querySelector('.height').value)/100;

    let minweighttonormal = 18.5 * (height *height);
    let maxweighttonormal = 24.9 * (height * height);

    let need;

    let gainn;

    let lose;

    let currentbmi = weight /  (height * height);

    if(currentbmi < 18.5){
        need = "gain";
        gainn = minweighttonormal - weight;
    }else if(currentbmi > 24.9){
        need = "lose";
        lose = weight - maxweighttonormal;
    }else if(currentbmi >= 18.5 && currentbmi <= 25){
        need = "good";
    }else {
        alert("BRUHHH")
    }

    const output = document.querySelector('.output-box')

    output.classList.remove('hide');
    if(need =="gain"){
        output.innerHTML = `
            <h2> GAIN </h2>
            <p> ${name}, ideal weight for your height is ${minweighttonormal.toFixed(2)} to ${maxweighttonormal.toFixed(2)}. To acheive it, you need to gain ${gainn} kg, Good luck in it!
        `;
    }else if(need=="lose"){
        output.innerHTML = `
            <h2> LOSE </h2>
            <p> ${name}, ideal weight for your height is ${minweighttonormal.toFixed(2)} to ${maxweighttonormal.toFixed(2)}. To acheive it, you need to lose ${lose} kg, Good Luck in it! </p>
        `;
    }else if(need=="good"){
        output.innerHTML = `
            <h2> GOOD </h2>
            <p> ${name}, ideal weight for your height is ${minweighttonormal.toFixed(2)} to ${maxweighttonormal.toFixed(2)}. You have already acheived it, GOOD JOB! </p>
        `;
    }
})