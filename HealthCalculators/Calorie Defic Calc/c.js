const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector(".name").value;
  const date = document.querySelector(".date").value;

  const target_date = new Date(date + "T00:00:00Z");
  const current_date = new Date();

  const target_utc = Date.UTC(
    target_date.getUTCFullYear(),
    target_date.getUTCMonth(),
    target_date.getUTCDate(),
  );
  const current_utc = Date.UTC(
    current_date.getUTCFullYear(),
    current_date.getUTCMonth(),
    current_date.getUTCDate(),
  );

  const remaining_days =
    Math.floor((target_utc - current_utc) / (1000 * 60 * 60 * 24)) + 7;
    console.log(remaining_days);

//   const formm = new FormData(form);
//   const gender = formm.get("gender");

  const weight = parseFloat(document.querySelector(".weight").value);
  const target_weight = parseFloat(
    document.querySelector(".target-weight").value,
  );
  const weighttolose = weight - target_weight;
  const calories = weighttolose * 3500;
  const caloriedeficit = remaining_days > 0 ? calories / remaining_days : 0;

  document.querySelector("#output-box").innerHTML = `
    <p>
        <span> ${name}, You have to deficit 
         <span>${Math.round(caloriedeficit).toLocaleString()}</span>
         <span class="unit">kcal/day. Good Luck and also you have to maintain your consistency!</span>
    </p>
    `;
});