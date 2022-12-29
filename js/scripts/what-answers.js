const whatButton = document.querySelector(".what-generate-text-answer-button");
const whatOutput = document.querySelector(".what-text-answer-output");

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

whatButton.addEventListener('click', function() {
    const randomWhatAnswerIndex = Math.floor(Math.random() * whatAnswerTexts.length);
    whatOutput.textContent = whatAnswerTexts[randomWhatAnswerIndex];
});