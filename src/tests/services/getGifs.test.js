const { shallow } = require("enzyme");

const { getGifs } = require("../../services/getGifs");

describe("Pruebas en getGifs", () => {
    test("debe de traer 10 elementos ", async () => {
        const gifs = await getGifs("Mario");
        expect(gifs.length).toBe(10);
    });

    test("debe de traer un array vacio si no enviamos categoria ", async () => {
        const gifs = await getGifs("");
        expect(gifs.length).toBe(0);
    });
});
