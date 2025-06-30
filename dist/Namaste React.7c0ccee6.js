const heading1 = React.createElement("h1", {
    id: "heading1"
}, "Namaste React1");
const heading2 = React.createElement("h1", {
    id: "heading2"
}, "Namaste React2");
const div = React.createElement("div", {
    id: "container"
}, [
    heading1,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);

//# sourceMappingURL=Namaste React.7c0ccee6.js.map
