let form1 = document.querySelector('.feedback');
let feedbackEditForm = document.querySelector('.feedbackEditForm');
let yourFeedbackText = document.querySelector('.yourFeedbackText');
form1.onsubmit = function(evt) {
    let feValue = String(feedbackEditForm.value);
    let re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    let result1 = feValue.match(re);
    if (result1)
    {
        feValue = feValue.replace(re,'');
        alert ("В введенном тексте были найдены URL-адреса!");
    }
    yourFeedbackText.textContent = feValue;
    evt.preventDefault();
};
