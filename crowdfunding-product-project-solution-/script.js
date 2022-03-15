var menuicon = document.querySelector("#menu-icon");
var menu = document.querySelector("#menu");
var menuclose = document.querySelector("#menu-close");
var projectButton = document.querySelector("#project-button");
var bookmark = document.querySelector("#bookmark");
var bookmarkCircle = document.querySelector("#bookmark-circle");
var bookmarkIcon = document.querySelector("#bookmark-icon");
var bookmarkText = document.querySelector("#bookmark-text");
var overlay = document.querySelector("#overlay");
var overlaySuccess = document.querySelector("#overlay-success");
var modalClose = document.querySelector("#modal-close");
var noReward = document.querySelector("#no-reward");
var bambooReward = document.querySelector("#bamboo-reward");
var blackReward = document.querySelector("#black-reward");
var mahoganyReward = document.querySelector("#mahogany-reward");
var pledge0 = document.querySelector("#pledge-0");
var pledge25 = document.querySelector("#pledge-25");
var pledge75 = document.querySelector("#pledge-75");
var pledge200 = document.querySelector("#pledge-200");
var con = document.querySelector("#continue");
var con25 = document.querySelector("#continue-25");
var con75 = document.querySelector("#continue-75");
var con200 = document.querySelector("#continue-200");
var norewardInput = document.querySelector("#noreward-input");
var bambooInput = document.querySelector("#bamboo-input");
var blackInput = document.querySelector("#black-input");
var mahoganyInput = document.querySelector("#mahogany-input");
var error25 = document.querySelector("#error-25");
var error75 = document.querySelector("#error-75");
var error200 = document.querySelector("#error-200");
var gotIt = document.querySelector("#gotit");
//var radio = document.querySelector('input[name="selection"]');

menuicon.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menuicon.style.display = "none";
  menuclose.style.display = "block";
  //menu.style.boxshadow = "inset 0 0 490px black";
});

menuclose.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menuclose.style.display = "none";
  menuicon.style.display = "block";
});

projectButton.addEventListener("click", () => {
  //projectButton.style.backgroundColor = "hsl(176, 72%, 28%)";
  overlay.style.display = "block";
});

modalClose.addEventListener("click", () => {
  //projectButton.style.backgroundColor = "hsl(176, 72%, 28%)";
  overlay.style.display = "none";
});

bookmark.addEventListener("click", () => {
  bookmarkCircle.classList.toggle("bg-teal-700");
  bookmarkIcon.classList.toggle("fill-teal-100");
  bookmarkIcon.classList.toggle("stroke-teal-100");
  bookmarkText.classList.toggle("text-teal-700");
});

/*if(document.getElementById('gender_Male').checked) {
  //Male radio button is checked
}else if(document.getElementById('gender_Female').checked) {
  //Female radio button is checked
}*/
projectButton.addEventListener("click", () => {
  //projectButton.style.backgroundColor = "hsl(176, 72%, 28%)";
  overlay.style.display = "block";
});

gotIt.addEventListener("click", () => {
  overlaySuccess.style.display = "none";
});

var radios = document.forms["forma"].elements["selection"];
for (radio in radios) {
  radios[radio].onclick = function () {
    var val = this.value;
    pledge0.style.display = "none";
    pledge25.style.display = "none";
    pledge75.style.display = "none";
    pledge200.style.display = "none";

    bambooReward.classList.remove("border-teal-500");
    mahoganyReward.classList.remove("border-teal-500");
    blackReward.classList.remove("border-teal-500");
    noReward.classList.remove("border-teal-500");
    if (val === "0") {
      pledge0.style.display = "block";
      noReward.classList.add("border-teal-500");
      con.addEventListener("click", () => {
        //if(norewardInput.value ==)
        overlaySuccess.style.display = "block";
        overlay.style.display = "none";
      });
    } else if (val === "25") {
      pledge25.style.display = "block";
      bambooReward.classList.add("border-teal-500");
      con25.addEventListener("click", () => {
        if (bambooInput.value <= 24) {
          error25.style.display = "block";
        } else {
          error25.style.display = "none";
          overlaySuccess.style.display = "block";
          overlay.style.display = "none";
        }
      });
    } else if (val === "75") {
      pledge75.style.display = "block";
      blackReward.classList.add("border-teal-500");
      con75.addEventListener("click", () => {
        if (blackInput.value <= 74) {
          error75.style.display = "block";
        } else {
          error75.style.display = "none";
          overlaySuccess.style.display = "block";
          overlay.style.display = "none";
        }
      });
    } else if (val === "200") {
      pledge200.style.display = "block";
      mahoganyReward.classList.add("border-teal-500");
      con200.addEventListener("click", () => {
        if (mahoganyInput.value <= 199) {
          error200.style.display = "block";
        } else {
          error200.style.display = "none";
          overlaySuccess.style.display = "block";
          overlay.style.display = "none";
        }
      });
    }
  };
}
