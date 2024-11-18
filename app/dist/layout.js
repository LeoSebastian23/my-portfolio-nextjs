"use strict";
exports.__esModule = true;
// app/layout.tsx
require("./globals.css");
var Sidebar_1 = require("./components/Sidebar");
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", null,
            React.createElement("div", { className: "flex" },
                React.createElement(Sidebar_1["default"], null),
                React.createElement("main", { className: "ml-60 p-8 w-full" }, children)))));
}
exports["default"] = RootLayout;
