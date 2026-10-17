const form = document.querySelector('#form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const height = parseFloat(document.querySelector('.height').value);
    const weight = parseFloat(document.querySelector('.weight').value);
    const age = parseInt(document.querySelector('.age').value);

    const formdata = new FormData(form);
    const gender = formdata.get('gender');
    const activity = formdata.get('activity');

    
})