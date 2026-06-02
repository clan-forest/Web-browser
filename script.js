const browser = document.getElementById("browser");
const address = document.getElementById("address");
const notice = document.getElementById("notice");

function go() {
  let text = address.value.trim();

  if (text === "") return;

  if (!text.includes(".") && !text.startsWith("http")) {
    text = "https://duckduckgo.com/?q=" + encodeURIComponent(text);
  } else if (!text.startsWith("http://") && !text.startsWith("https://")) {
    text = "https://" + text;
  }

  browser.src = text;
  notice.innerText = "Loading: " + text;
}

function goHome() {
  browser.src = "https://www.wikipedia.org";
  address.value = "";
  notice.innerText = "Home page loaded.";
}

function reloadPage() {
  browser.src = browser.src;
}

function goBack() {
  try {
    browser.contentWindow.history.back();
  } catch {
    alert("Back does not work on this website.");
  }
}

function goForward() {
  try {
    browser.contentWindow.history.forward();
  } catch {
    alert("Forward does not work on this website.");
  }
}

function openReal(url) {
  window.open(url, "_blank");
  notice.innerText = "Opened in a real browser tab: " + url;
}

function showHelp() {
  alert(
    "This is a Gmail-style mini browser.\n\n" +
    "Sites like Gmail, YouTube, Google, Roblox, and Netflix open in a real tab because they block iframe browsers."
  );
}

address.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    go();
  }
});
