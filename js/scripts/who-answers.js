// generates a random text answer when the 'who' button is clicked.

// whoButton is a reference to the 'who' button element in the DOM.
const whoButton = document.querySelector(".who-generate-text-answer-button");

// whoOutput is a reference to the element where the generated text answer will be displayed.
const whoOutput = document.querySelector(".who-text-answer-output");

// whoAnswerTexts is an array of different types of text answers that can be generated.
const whoAnswerTexts = [
    "family member",
    "partner",
    "friend",
    "classmate",
    "colleague",
    "support team member",
    "public figure",
    "boss",
    "expert",
    "acquaintance",
    "client",
    "stranger",
    "yourself",
    "crush",
    "anyone"
];

// event listener for the 'click' event on the 'whoButton' element. when the button is clicked, a random text answer is generated.
whoButton.addEventListener('click', function() {

    // generates a random index for the 'whoAnswerTexts' array.
    const randomWhoAnswerIndex = Math.floor(Math.random() * whoAnswerTexts.length);

    // sets the text content of the 'whoOutput' element to the text answer at the random index generated above.
    whoOutput.textContent = whoAnswerTexts[randomWhoAnswerIndex];
});