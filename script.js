const textInput = document.getElementById("text-input");
const wordCountDisplay = document.getElementById("word-count");
const charCountDisplay = document.getElementById("char-count");
const sentenceCountDisplay = document.getElementById("sentence-count");
const readTimeDisplay = document.getElementById("read-time");
const clearBtn = document.getElementById("clear-btn");
const themeToggle = document.getElementById("theme-toggle");

// Check for saved theme preference
const currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

function updateCounts() {
    const text = textInput.value;

    // Character count
    const charCount = text.length;

    // Word count
    const trimmedText = text.trim();
    const wordCount = trimmedText.length > 0 ? trimmedText.split(/\s+/).length : 0;

    // Sentence count
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    const sentenceCount = sentences.length;

    // Reading time (average 200 words per minute)
    const readTime = Math.ceil(wordCount / 200);

    // Update display with animation
    charCountDisplay.textContent = charCount;
    wordCountDisplay.textContent = wordCount;
    sentenceCountDisplay.textContent = sentenceCount;
    readTimeDisplay.textContent = readTime + "m";

    // Trigger animation
    [charCountDisplay, wordCountDisplay, sentenceCountDisplay, readTimeDisplay].forEach(el => {
        el.style.animation = 'none';
        setTimeout(() => el.style.animation = 'countUp 0.3s ease', 10);
    });
}

// Theme toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Clear button
clearBtn.addEventListener("click", () => {
    textInput.value = "";
    updateCounts();
    textInput.focus();
});

// Input event listener
textInput.addEventListener("input", updateCounts);

// Initialize counts
updateCounts();