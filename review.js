function loadData() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

function displayItems(items) {
  const contents = document.querySelector(".contents");
  contents.innerHTML = items.map((item) => createHTML(item)).join(" ");
}

function createHTML(item) {
  return `<li class="list" class="${item.color} ${item.type}">
  <img src=${item.img} alt="" class="icon" /> ${item.gender},${item.size}
</li>`;
}

function setEventListener(items) {
  const logo = document.querySelector(".head");
  const gallery = document.querySelector(".gallery");

  logo.addEventListener("click", () => displayItems(items));
  gallery.addEventListener("click", (event) => clickEvent(event, items));
}

function clickEvent(event, items) {
  const result = event.target.dataset.value;
  const key = event.target.dataset.key;
  if (key == null || result == null) {
    return;
  }

  const reitems = items.filter((item) => item[key] == result);
  displayItems(reitems);
}

loadData()
  .then((items) => {
    displayItems(items);
    setEventListener(items);
  })
  .catch(console.log);
