import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyApp />);

function MyButton() {
    return (
        <button>I'm a button</button>
    );
}

export default function MyApp() {
    return (
    <div>
        <h1>My App</h1>
        <MyButton/>
    </div>
    );
}