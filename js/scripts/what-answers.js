// generates a random text answer when the 'what' button is clicked.

// whatButton is a reference to the 'what' button element in the DOM.
const whatButton = document.querySelector(".what-generate-text-answer-button");

// whatOutput is a reference to the element where the generated text answer will be displayed.
const whatOutput = document.querySelector(".what-text-answer-output");

// whatAnswerTexts is an array of different types of text answers that can be generated.
const whatAnswerTexts = [
    "love",
    "confession",
    "advice",
    "apologetic",
    "birthday",
    "congratulatory",
    "sympathy",
    "memories",
    "gratitude",
    "encouragement",
    "get well",
    "supportive",
    "inspirational",
    "invitation",
    "reminder",
    "compliment",
    "question",
    "request",
    "personal",
    "professional",
    "business",
    "formal",
    "informal",
    "funny"
];

// event listener for the 'click' event on the 'whatButton' element. when the button is clicked, a random text answer is generated.
whatButton.addEventListener('click', function() {

    // generates a random index for the 'whatAnswerTexts' array.
    const randomWhatAnswerIndex = Math.floor(Math.random() * whatAnswerTexts.length);
    
    // sets the text content of the 'whatOutput' element to the text answer at the random index generated above.
    whatOutput.textContent = whatAnswerTexts[randomWhatAnswerIndex];
});
