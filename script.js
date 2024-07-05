var tablinks = document.getElementsByClassName("tab_links");
var tabcontents = document.getElementsByClassName("tab_contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active_link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active_tab");
  }
  event.currentTarget.classList.add("active_link");
  document.getElementById(tabname).classList.add("active_tab");
}
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzRECzwEaWfHniub2XQJVdD8PVUWdvzODSbSZezSC_KL3zVtcTMBq6hwTfMd_MtFPoE/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "message sent sucessfully!!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
