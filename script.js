const elementCreater = (element, text, className) => {
  const newEl = document.createElement(`${element}`);
  newEl.appendChild(document.createTextNode(`${text}`));
  newEl.setAttribute("class", className);
  return newEl;
};

const h2El = elementCreater("h2", "Color Scheme Switcher", "body-txt");
const h3El = elementCreater(
  "h3",
  "Try clicking on one of the colors above to change the background color of this page!",
  "body-txt"
);

const headerEl = document.querySelector(".header");
const footerEl = document.querySelector(".footer");

headerEl.appendChild(h2El);
footerEl.appendChild(h3El);

const eventHandler = (e) => {
  switch (e.target.className) {
    case "one":
      document.body.style.backgroundColor = "rgb(188, 46, 46)";
      break;
    case "two":
      document.body.style.backgroundColor = "yellowgreen";
      break;
    case "three":
      document.body.style.backgroundColor = "chocolate";
      break;
    case "four":
      document.body.style.backgroundColor = "burlywood";
      break;

    default:
      document.body.style.backgroundColor = "#3e3e3e";
      break;
  }
};
