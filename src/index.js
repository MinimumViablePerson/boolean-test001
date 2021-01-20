import "./styles.css";

const app = document.getElementById("app");

const title = document.createElement("h1");
title.innerText = "Hello Vanilla!";

const content = document.createElement("div");
content.innerText =
  "We use the same configuration as Parcel to bundle this sandbox, you can find more info about Parcel ";

const link = document.createElement("a");
link.setAttribute("href", "https://parceljs.org");
link.setAttribute("target", "_blank");
link.setAttribute("rel", "noopener noreferrer");
link.innerText = "here";

content.append(link);
app.append(title, content);
