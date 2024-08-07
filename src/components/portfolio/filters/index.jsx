import React, { useState } from "react";
import "./style.scss";

const filtersData = [
    { name: "All", id: "all" },
    { name: "Products", id: "product" },
    { name: "Web Pages", id: "web-page" },
    { name: "Web Apps", id: "web-app" },
    { name: "Mobile Apps", id: "mobile-app" },
];

const Filters = ({ filterProjects }) => {
    const [active, setActive] = useState("all");

    const clickHandler = (id) => {
        setActive(id);
        filterProjects(id);
    };

    return (
        <ul
            className="filter-menu-items"
            aria-label="Filter projects by category"
        >
            {filtersData.map((item) => (
                <li
                    key={item.id}
                    className={`filter-menu-item ${
                        active === item.id ? "active" : ""
                    }`}
                    onClick={() => clickHandler(item.id)}
                    role="button"
                    aria-pressed={active === item.id}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
};

export default Filters;
