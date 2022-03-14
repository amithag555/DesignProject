window.onload = function () {
  onSubmitEvent();
};

function onSubmitEvent() {
  let form = document.querySelector("#form_id");

  form.addEventListener("submit", function (e) {
    let fullNameInput = document.querySelector("#full_name_input").value;
    let fullNameFeedback = document.querySelector("#full_name_feedback");
    let emailInput = document.querySelector("#email_input").value;
    let emailFeedback = document.querySelector("#email_feedback");
    let textareaInput = document.querySelector("#textarea_input").value;
    let textareaFeedback = document.querySelector("#textarea_feedback");
    
    e.preventDefault();

    fullNameFeedback.style.display = fullNameInput.length < 2 ? "block" : "none";
    textareaFeedback.style.display = textareaInput.length < 2 ? "block" : "none";

    if (!(emailInput.includes("@")) || !(emailInput.includes("."))) {
      emailFeedback.style.display = "block";
    } else {
      emailFeedback.style.display = "none";
    }
  });
}
