import React from "react";
import "@testing-library/jest-dom";

import { AddCategory } from "../../components/AddCategory";
const { shallow } = require("enzyme");

describe("Pruebas AddCategory", () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test("debe mostrarse correctamente ", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("debe de cambiar la caja de texto", () => {
        const input = wrapper.find("input");
        input.simulate("change", { target: { value: "testing" } });
    });

    test("NO debe de hacer submit", () => {
        wrapper.find("form").simulate("submit", { preventDefault() {} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test("debe de llamar el setCategories y limpiar el input", () => {
        const value = "Hola Mundo";

        wrapper.find("input").simulate("change", { target: { value: value } });

        wrapper.find("form").simulate("submit", { preventDefault() {} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(wrapper.find("input").prop("value")).toBe("");
    });
});
