import React from "react";
import "@testing-library/jest-dom";

import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

const { shallow } = require("enzyme");

describe("Pruebas <GifGrid />", () => {
    const category = "goku";

    test("debe mostrarse correctamente ", () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
    });

    test("debe de mostrar items cuando se cargan imagenes con useFetchGifs ", () => {
        const gifs = [
            {
                id: "39849483904",
                url: "https://localhost/cosa.jpg",
                title: "Cualquier cosa",
            },
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper.find("p").exists()).toBe(false);
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
    });
});
