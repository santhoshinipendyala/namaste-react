/**
 * 
 * <div id="parent">
 *       <div id="child">
 *       <h1>iam h1 tag</h1>
 *        <h2>iam h2 tag</h2>
 *       <div id="child2">
 *       <h1>iam h1 tag</h1>
 *        <h2>iam h2 tag</h2>
 * </div>
 * </div>
 * 
 * ReactElement(object)=HTML(Browser understands)
 */

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "iam an h1 tag"),
        React.createElement("h2", {}, "iam an h2 tag")]),

    React.createElement("div", { id: "child 2" },
        [React.createElement("h1", {}, "iam an h1 tag"),
        React.createElement("h2", {}, "iam an h2 tag")]));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
