import React from "react";
import ReactDom from "react-dom";
import List from "./main";

let dogs;
ReactDom.render(<List store={dogs} />, document.getElementById("reactcontainer"));