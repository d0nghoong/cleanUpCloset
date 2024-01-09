const blue_button = document.querySelector(".blue_button");
const yellow_button = document.querySelector(".yellow_button");
const pink_button = document.querySelector(".pink_button");
const head = document.querySelector(".head");
const top_button = document.querySelector(".top_button");
const skirt_button = document.querySelector(".skirt_button");
const pants_button = document.querySelector(".pants_button");

blue_button.addEventListener("click", click_b);
yellow_button.addEventListener("click", click_y);
pink_button.addEventListener("click", click_p);
head.addEventListener("click", click_h);
top_button.addEventListener("click", click_t);
skirt_button.addEventListener("click", click_s);
pants_button.addEventListener("click", click_pa);

function noView(temp) {
  for (let i = 0; i < temp.length; i++) {
    const item = temp.item(i);
    item.style.display = "none";
  }
}

function yesView(temp) {
  for (let i = 0; i < temp.length; i++) {
    const item = temp.item(i);
    item.style.display = "block";
  }
}

function click_h() {
  const noneblue = document.querySelectorAll(".blue");
  yesView(noneblue);
  const noneyellow = document.querySelectorAll(".yellow");
  yesView(noneyellow);
  const nonepink = document.querySelectorAll(".pink");
  yesView(nonepink);
}

function showOne(one, two, three) {
  const noneone = document.querySelectorAll(one);
  noView(noneone);
  const nonetwo = document.querySelectorAll(two);
  noView(nonetwo);
  const nonethree = document.querySelectorAll(three);
  yesView(nonethree);
}
function click_p() {
  return showOne(".blue", ".yellow", ".pink");
}

function click_b() {
  return showOne(".pink", ".yellow", ".blue");
}

function click_y() {
  return showOne(".blue", ".pink", ".yellow");
}

function click_t() {
  return showOne(".pants", ".skirt", ".top");
}

function click_s() {
  return showOne(".pants", ".top", ".skirt");
}

function click_pa() {
  return showOne(".top", ".skirt", ".pants");
}
