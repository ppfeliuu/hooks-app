import React from "react";
import ReactDOM from "react-dom";
import { CounterApp } from "./components/01-useState/CounterApp";
import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook";
import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook";
import { SimpleForm } from "./components/02-useEffect/SimpleForm";
import { FocusScreen } from "./components/04-useRef/FocusScreen";
import { RealExampleRef } from "./components/04-useRef/RealExampleRef";
import { LayoutEffects } from "./components/05-useLayoutEffect/LayoutEffect";
import { MultipleCustomHooks } from "./components/examples/MultipleCustomHooks";
import { HookApp } from "./HookApp";

ReactDOM.render(<LayoutEffects />, document.getElementById("root"));
