import React from "react";
import ReactDOM from "react-dom/client"
import Routes from "./Routes/Routes";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


library.add(fas, far, fab);

const el = document.getElementById("root")

const root = ReactDOM.createRoot(el);

root.render(<Routes/>)