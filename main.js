// Weekly Wages - Start Code

// Determine Wage Button Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Employee Inputs
  let dmHours = +document.getElementById("dm-hours").value;
  let dmPayrate = +document.getElementById("dm-payrate").value;
  let soHours = +document.getElementById("so-hours").value;
  let soPayrate = +document.getElementById("so-payrate").value;
  let kyHours = +document.getElementById("ky-hours").value;
  let kyPayrate = +document.getElementById("ky-payrate").value;

  // Calculate & Output Pay
  // Darcy Maddox
  calculate(dmHours, dmPayrate, "dm");
  calculate(soHours, soPayrate, "so");
  calculate(kyHours, kyPayrate, "ky");
}

function calculate(hours, rate, person) {
  var overtime = 0;
  if (hours < 40) {
    overtime = hours - 40;
    hours = 40;
  }
  var pay = hours * rate + overtime * 1.5 * rate;
  document.getElementById(`${person}-wage`).innerHTML = pay.toFixed(2);
}
