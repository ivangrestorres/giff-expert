import React from "react";
const { shallow } = require("enzyme");
const { GifGridItem } = require("../../components/GifGridItem");

describe("Pruebas <GifGridItem />", () => {
    const title = "Titulo";
    const url = "https://localhost/algo.jpg";
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    test("debe mostrar el componente correctamente ", () => {
        expect(wrapper).toMatchSnapshot();
    });
    test("debe tener un parrafo con el titulo", () => {
        const p = wrapper.find("p");
        expect(p.text().trim()).toBe(title);
    });

    test("debe tener la imagen igual al URL y Alt de los props", () => {
        const img = wrapper.find("img");
        const { src, alt } = img.props();

        expect(alt).toBe(title);
        expect(src).toBe(url);
    });

    test("debe tener animate__fadeIn", () => {
        const div = wrapper.find("div");
        const { className } = div.props();

        console.log(className.includes("animate__fadeIn"));

        expect(className.includes("animate__fadeIn")).toBe(true);
    });
});
