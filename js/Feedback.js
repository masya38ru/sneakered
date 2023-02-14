let yourFeedbackText = document.querySelector('.yourFeedbackText');
let form1 = document.querySelector('.feedback');
let feedbackEditForm = document.querySelector('.feedbackEditForm');

form1.onsubmit = function (evt) {
    let feValue = String(feedbackEditForm.value);
    feValue = feValue.replace(/<(.|\n)*?>/g, '');
    if (!(feValue === String(feedbackEditForm.value))) {
        alert("В вашем введенном тексте были теги!.");
    }
    yourFeedbackText.textContent = feValue;
    evt.preventDefault();
};
