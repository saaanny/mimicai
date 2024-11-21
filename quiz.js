let score = 0; // Keep track of the score
let currentQuestion = 1; // Track the current question

// Function to handle when an answer is selected for question 1
function selectAnswer(option) {
    const correctAnswer = 'B';  // The correct answer for question 1 is B
    handleAnswer(option, correctAnswer);
}

// Function to handle when an answer is selected for question 2
function selectAnswer2(option) {
    const correctAnswer = 'C';  // The correct answer for question 2 is C
    handleAnswer(option, correctAnswer);
}

// Function to handle when an answer is selected for question 3
function selectAnswer3(option) {
    const correctAnswer = 'B';  // The correct answer for question 3 is B
    handleAnswer(option, correctAnswer);
}

// Function to handle when an answer is selected for question 4 (Spatula)
function selectAnswer4(option) {
    const correctAnswer = 'A';  // The correct answer for question 4 is A
    handleAnswer(option, correctAnswer);
}

// Function to handle when an answer is selected for question 5 (Rolling Pin)
function selectAnswer5(option) {
    const correctAnswer = 'A';  // The correct answer for question 5 is A
    handleAnswer(option, correctAnswer);
}

// Function to handle when an answer is selected for question 6 (Round Pan)
function selectAnswer6(option) {
    const correctAnswer = 'A';  // The correct answer for question 6 is A
    handleAnswer(option, correctAnswer);
}

// Function to handle when an answer is selected for question 7 (True or False)
function selectAnswer7(option) {
    const correctAnswer = 'False';  // The correct answer for question 7 is True
    handleAnswer(option, correctAnswer);
}

// Function to handle when an answer is selected for question 8 (True or False)
function selectAnswer8(option) {
    const correctAnswer = 'True';  // The correct answer for question 8 is False
    handleAnswer(option, correctAnswer);
}

// Function to handle when an answer is selected for question 9 (True or False)
function selectAnswer9(option) {
    const correctAnswer = 'True';  // The correct answer for question 9 is True
    handleAnswer(option, correctAnswer);
}

// Function to handle when an answer is selected for question 10 (True or False)
function selectAnswer10(option) {
    const correctAnswer = 'False';  // The correct answer for question 10 is False
    handleAnswer(option, correctAnswer);
}

// General function to handle the answer checking for all questions
function handleAnswer(option, correctAnswer) {
    const resultText = document.getElementById("result");
    const nextButton = document.getElementById("next-button");
    const retryButton = document.getElementById("retry-button");

    if (option === correctAnswer) {
        resultText.innerHTML = "Correct! Well done!";
        score += 1;
        document.getElementById("score").innerText = "Score: " + score;
        nextButton.style.display = "block";
        retryButton.style.display = "none";
    } else {
        resultText.innerHTML = "Oops! That's not correct. Try again!";
        nextButton.style.display = "none";
        retryButton.style.display = "block";
    }
}

// Function to move to the next question
function nextQuestion() {
    if (currentQuestion < 10) {  // Now includes up to question 10
        document.getElementById('question-container' + currentQuestion).style.display = 'none';
        currentQuestion++;
        document.getElementById('question-container' + currentQuestion).style.display = 'block';
        document.getElementById("result").innerHTML = "";
        document.getElementById("next-button").style.display = "none";
        document.getElementById("retry-button").style.display = "none";
    } else {
        // End of quiz logic here (e.g., show final score)
        showFinalScore();
    }
}

// Function to retry the current question
function retryQuestion() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("retry-button").style.display = "none";
}

// Function to show the final score
function showFinalScore() {
    const greetingContainer = document.getElementById('greeting-container');
    const finalScore = document.getElementById('final-score');
    finalScore.innerText = `Your Final Score: ${score}`;
    greetingContainer.style.display = 'block'; // Display the greeting and final score
    document.getElementById("quiz-container").style.display = "none"; // Hide the quiz
}
