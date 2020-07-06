import React from "react";
import "@testing-library/jest-dom";
import GifExpertApp from "../GifExpertApp";

const { shallow } = require("enzyme");

describe("Pruebas <GifExpertApp />", () => {
    test("debe mostrar el componente", () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test("debe de mostrar lista de categorias", () => {
        const categories = ["One Punch", "Mario"];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifGrid").length).toBe(categories.length);
    });
});
