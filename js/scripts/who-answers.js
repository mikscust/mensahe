const whoButton = document.querySelector(".who-generate-text-answer-button");
const whoOutput = document.querySelector(".who-text-answer-output");

const whoAnswerTexts = [
    "family member",
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
    "anyone"
];

whoButton.addEventListener('click', function() {
    const randomWhoAnswerIndex = Math.floor(Math.random() * whoAnswerTexts.length);
    whoOutput.textContent = whoAnswerTexts[randomWhoAnswerIndex];
});