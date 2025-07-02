//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Heading</h1>
    <ul>
      <li>Cow</li>
      <li>Cat</li>
      <li>Dog</li>
    </ul>
  </div>
);
