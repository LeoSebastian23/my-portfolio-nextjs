"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Projects = function () {
    var projectData = [
        {
            id: 1,
            title: "Proyecto 1",
            description: "Breve descripción del proyecto 1.",
            image: "/proyectos/portfolio.gif",
            link: "/projects/project-1"
        },
        {
            id: 2,
            title: "Proyecto 2",
            description: "Breve descripción del proyecto 2.",
            image: "/path/to/image2.jpg",
            link: "/projects/project-2"
        },
        {
            id: 3,
            title: "Proyecto 3",
            description: "Breve descripción del proyecto 3.",
            image: "/path/to/image3.jpg",
            link: "/projects/project-3"
        },
    ];
    return (react_1["default"].createElement("section", { className: "min-h-screen bg-light p-8" },
        react_1["default"].createElement("h1", { className: "text-4xl font-bold text-center mb-8" }, "Mis Proyectos"),
        react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }, projectData.map(function (project) { return (react_1["default"].createElement("div", { key: project.id, className: "bg-dark rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300" },
            react_1["default"].createElement("img", { src: project.image, alt: project.title, className: "h-50 w-full object-cover" }),
            react_1["default"].createElement("div", { className: "p-6" },
                react_1["default"].createElement("h2", { className: "text-xl font-bold text-white mb-2" }, project.title),
                react_1["default"].createElement("p", { className: "text-gray-300 mb-4" }, project.description),
                react_1["default"].createElement("a", { href: project.link, className: "inline-block text-sm text-dark bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-full transition-all" }, "Ver m\u00E1s")))); }))));
};
exports["default"] = Projects;
