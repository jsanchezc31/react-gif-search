import { render, screen } from "@testing-library/react";
import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas de getGifs", () => {
  test("Debe de retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("Dragon ball");
    // console.log(gifs);
    // Se espera que traiga al menos un elemento
    expect(gifs.length).toBeGreaterThan(0);

    // Se compara la primera posición con un objeto (lo que se espera que traiga)
    expect(gifs[0]).toEqual({
      id: expect.any(String), //cualquier elemento que sea string
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
