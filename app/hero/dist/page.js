"use strict";
exports.__esModule = true;
var react_1 = require("react");
var hero_module_css_1 = require("./hero.module.css"); // Asegúrate de que el archivo CSS esté importado
var Hero = function () {
    return (react_1["default"].createElement("div", { className: "flex flex-col items-center justify-around p-8 text-left border-b border-gray-700" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("h1", { className: "text-6xl mb-2" }, "Leonardo Sebastian"),
            react_1["default"].createElement("h2", { className: "text-2xl mb-4" }, "Desarrollador Full Stack."),
            react_1["default"].createElement("p", { className: "text-lg text-gray-400 mb-8" }, "Soy un joven programador apasionado por crear soluciones tecnol\u00F3gicas eficientes y elegantes. Con una s\u00F3lida formaci\u00F3n en programaci\u00F3n y desarrollo, mi enfoque est\u00E1 en optimizar la experiencia del usuario y ofrecer resultados de calidad.")),
        react_1["default"].createElement("div", { className: "flex space-x-4" },
            react_1["default"].createElement("button", { className: hero_module_css_1["default"].button },
                react_1["default"].createElement("div", { className: hero_module_css_1["default"].IconContainer },
                    react_1["default"].createElement("img", { src: "github.svg", alt: "GitHub", className: hero_module_css_1["default"].icon + " w-6 h-6" })),
                react_1["default"].createElement("p", { className: hero_module_css_1["default"].text }, "GitHub")),
            react_1["default"].createElement("button", { className: hero_module_css_1["default"].button },
                react_1["default"].createElement("div", { className: hero_module_css_1["default"].IconContainer },
                    react_1["default"].createElement("img", { src: "upload.svg", alt: "CV", className: hero_module_css_1["default"].icon + " w-6 h-6" })),
                react_1["default"].createElement("p", { className: hero_module_css_1["default"].text }, "CV")),
            react_1["default"].createElement("button", { className: hero_module_css_1["default"].button },
                react_1["default"].createElement("div", { className: hero_module_css_1["default"].IconContainer },
                    react_1["default"].createElement("img", { src: "linkedin.svg", alt: "LinkedIn", className: hero_module_css_1["default"].icon + " w-6 h-6" })),
                react_1["default"].createElement("p", { className: hero_module_css_1["default"].text }, "LinkedIn")))));
};
exports["default"] = Hero;
