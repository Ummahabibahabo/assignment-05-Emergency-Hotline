// Heart Icons

const heartCounter = document.getElementById("heart-counter");
let count = 0;
document.querySelectorAll(".heart-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    count++;
    if (heartCounter) heartCounter.textContent = count;
  });
});
// call-history-section
let coins = 100;
let copyCount = 0;

// Navbar elements
const coinCountEl = document.getElementById("coin-count");
const navbarCopyCountEl = document.getElementById("navbar-copy-count"); // Navbar copy counter

// Buttons & list
const callButtons = document.querySelectorAll(".call-btn");
const copyButtons = document.querySelectorAll(".copy-btn");
const callHistoryList = document.getElementById("call-history-list");
const clearHistoryBtn = document.getElementById("clear-history");

// Get current time
function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}

// Handle Call
function handleCall(event) {
  const button = event.currentTarget;
  const serviceName =
    button.getAttribute("data-service-name") || "Unknown Service";
  const serviceNumber = button.getAttribute("data-service-number") || "N/A";

  if (coins < 20) {
    alert("Insufficient coins! You need at least 20 coins to make a call.");
    return;
  }

  coins -= 20;
  coinCountEl.textContent = coins;

  alert(`Calling ${serviceName} at ${serviceNumber}`);

  // Add to call history
  const callTime = getCurrentTime();
  const historyItem = document.createElement("div");
  historyItem.className =
    "flex flex-col text-left p-3 border rounded bg-[#f9f9f9]";
  historyItem.innerHTML = `
    <div class="flex justify-between">
      <span class="font-semibold text-[#111]">${serviceName}</span>
      <span class="text-[#555]">${callTime}</span>
    </div>
    <div class="text-sm text-gray-500 mt-1">${serviceNumber}</div>
  `;
  callHistoryList.appendChild(historyItem);
}

// Handle Copy
function handleCopy(number) {
  navigator.clipboard
    .writeText(number)
    .then(() => {
      copyCount++;
      navbarCopyCountEl.textContent = copyCount; // Update navbar copy count
      alert(`Number copied! Total copies: ${copyCount}.`);
    })
    .catch((err) => {
      alert("Failed to copy number.");
      console.error(err);
    });
}

// Add event listeners
callButtons.forEach((button) => button.addEventListener("click", handleCall));
copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.getAttribute("data-number");
    handleCopy(number);
  });
});

// Clear history
clearHistoryBtn.addEventListener("click", () => {
  callHistoryList.innerHTML = "";
});
