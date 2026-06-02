const browser = document.getElementById("browser");
const address = document.getElementById("address");

function go() {
  let text = address.value.trim();

  if (text === "") return;

  if (!text.includes(".") && !text.startsWith("http")) {
    text = "https://duckduckgo.com/?q=" + encodeURIComponent(text);
  } else if (!text.startsWith("http://") && !text.startsWith("https://")) {
    text = "https://" + text;
  }

  browser.src = text;
}

function goHome() {
  browser.src = "https://www.wikipedia.org";
  address.value = "";
}

function reloadPage() {
  browser.src = browser.src;
}

function goBack() {
  try {
    browser.contentWindow.history.back();
  } catch {
    alert("This website blocks the back button.");
  }
}

function goForward() {
  try {
    browser.contentWindow.history.forward();
  } catch {
    alert("This website blocks the forward button.");
  }
}

function openReal(url) {
  window.open(url, "_blank");
}

address.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    go();
  }
});
