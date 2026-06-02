const searchBox = document.getElementById("searchBox");

function go() {
  let text = searchBox.value.trim();

  if (text === "") return;

  let url;

  if (!text.includes(".") && !text.startsWith("http")) {
    url = "https://www.google.com/search?q=" + encodeURIComponent(text);
  } else if (!text.startsWith("http://") && !text.startsWith("https://")) {
    url = "https://" + text;
  } else {
    url = text;
  }

  window.location.href = url;
}

function openSite(url) {
  window.location.href = url;
}

searchBox.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    go();
  }
});
