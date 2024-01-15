function loadData() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

function createElement(item) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.setAttribute("src", item.img);
  img.setAttribute("class", "icon");
  li.setAttribute("class", "list");
  li.setAttribute("data-type", item.type);
  li.setAttribute("data-color", item.color);
  li.innerText = `${item.gender},${item.size}`;
  li.append(img);
  return li;
}

function clickEvent(event, items) {
  const result = event.target.dataset.value;
  const key = event.target.dataset.key;
  if (key == null) {
    return;
  } else if (result == null) {
    items.forEach((item) => item.classList.remove("show"));
  } else updateItems(items, key, result);
}

function updateItems(items, key, result) {
  items.forEach((item) => {
    if (item.dataset[key] == result) item.classList.remove("show");
    else item.classList.add("show");
  });
}

loadData()
  .then((items) => {
    const element = items.map(createElement);
    const contents = document.querySelector(".contents");
    contents.append(...element);
    const gallery = document.querySelector(".gallery");
    const logo = document.querySelector(".head");
    logo.addEventListener("click", (event) => clickEvent(event, element));
    gallery.addEventListener("click", (event) => clickEvent(event, element));
  })
  .catch(console.log);
