import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas de Gif Item", () => {
  const title = "Titulo prueba";
  const url = "https://test-url/";

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con la URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);

    // expect(screen.getByRole("img").alt).toBe(url);
    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("debe de mostrar el titulo en la imagen", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
