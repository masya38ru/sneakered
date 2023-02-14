let form1 = document.querySelector('.feedback');
let yourFeedbackText = document.querySelector('.yourFeedbackText');
let feedbackEditForm = document.querySelector('.feedbackEditForm');
form1.onsubmit = function(evt) {
    outer: {
        let feValue = String(feedbackEditForm.value);
        let illegalWords = ["экзамен", "зачет", "оценка", "допса", "автомат"];
        let inc = 0;
        for (let i=0; i<5; i++)
        {
            if (inc <= 2)
            {
                let result2 = feValue.match(illegalWords[i]);
                if (result2)
                {
                    feValue = feValue.replace(illegalWords[i],'***');
                    inc++;
                    if (inc > 2)
                    {
                        alert("В введенном тексте были запрещенные слова!");
                        break outer;
                    }
                }
            }
        }
        if (inc > 0 && inc <= 2) {
            alert("В введенном тексте были запрещенные слова!");
        }
        yourFeedbackText.textContent = feValue;
        evt.preventDefault();
    }
};
