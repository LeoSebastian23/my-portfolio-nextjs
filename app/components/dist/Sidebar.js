"use strict";
exports.__esModule = true;
// app/components/Sidebar.tsx
var link_1 = require("next/link");
var react_1 = require("react");
var Sidebar = function () {
    return (react_1["default"].createElement("div", { className: "min-h-screen w-60 bg-dark text-white fixed top-0 left-0 flex flex-col justify-around items-center border-r border-gray-700" },
        react_1["default"].createElement("h2", { className: "text-2xl font-bold border-b border-gray-700 w-full p-4 text-center" }, "Leo Sebastian"),
        react_1["default"].createElement("nav", { className: "flex flex-col justify-center space-y-12 text-lg w-full " },
            react_1["default"].createElement(link_1["default"], { href: "/", className: "border-b border-gray-700 hover:border-blue-400 hover:text-blue-400 p-2 transition-all" }, "Inicio"),
            react_1["default"].createElement(link_1["default"], { href: "/projects", className: "border-b border-gray-700 hover:border-blue-400 hover:text-blue-400 p-2 transition-all" }, "Proyectos"),
            react_1["default"].createElement(link_1["default"], { href: "/about", className: "border-b border-gray-700 hover:border-blue-400 hover:text-blue-400 p-2 transition-all" }, "Sobre M\u00ED"),
            react_1["default"].createElement(link_1["default"], { href: "/contact", className: "border-b border-gray-700 hover:border-blue-400 hover:text-blue-400 p-2 transition-all" }, "Contacto")),
        react_1["default"].createElement("footer", { className: "text-sm text-gray-400 p-4" }, "\u00A9 2024 - Leonardo Sebastian")));
};
exports["default"] = Sidebar;
