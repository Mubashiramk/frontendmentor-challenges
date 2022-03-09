let noOfPeople;
let bill;
let tip;

var people = document.querySelector("#pep");
var zeroError = document.querySelector("#error");
var boxColor = document.querySelector(".people");

//no of people validation
people.addEventListener("change", (e) => {
  var val = e.target.value;
  if (val === "0") {
    zeroError.classList.add("errorn");

    boxColor.style.border = "2px solid rgb(190, 55, 55)";
    boxColor.classList.add("newone");
  } else {
    zeroError.classList.remove("errorn");
    boxColor.classList.remove("newone");
    boxColor.style.border = "0px";
    noOfPeople = val;
  }
});

//bill
var totalAmount = document.querySelector(".bill");
totalAmount.addEventListener("change", (e) => {
  bill = e.target.value;
});

//tip calculation
var buttons = document.querySelectorAll(".tips");
for (var i = 0; i < buttons.length; i++) {
  if (i === 5) {
    buttons[i].addEventListener("change", (e) => {
      var custom = e.target.value;
      tip = custom;

      result();
    });
  } else {
    buttons[i].addEventListener("click", (e) => {
      tip = e.target.value;

      result();
    });
  }
}
function result() {
  let r = parseInt(bill) + parseInt(noOfPeople) + parseInt(tip);
  let tipPerPerson =
    ((parseInt(bill) / 100) * parseInt(tip)) / parseInt(noOfPeople);
  let totalPerPerson = parseInt(bill) / parseInt(noOfPeople) + tipPerPerson;

  var tipAmount = document.querySelector("#tip-result");
  if (tipAmount) {
    tipAmount.innerHTML = "$" + tipPerPerson.toFixed(2);
  }
  var total = document.querySelector("#total-result");
  if (total) {
    total.innerHTML = "$" + totalPerPerson.toFixed(2);
  }
}

function resetform() {
  document.querySelector(".form").reset();
}

//*
