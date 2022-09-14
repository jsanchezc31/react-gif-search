import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas AddCategory", () => {
  test("Debe mostrar la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "saitama" } });

    expect(input.value).toBe("saitama");

    // screen.debug();
  });

  test("debe de llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "Contenido caja de texto";
    const onNewCategory = jest.fn(); // Se crea un mock
    // todo

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    // Cambiar el valor de la caja de texto
    fireEvent.input(input, { target: { value: inputValue } });
    // Disparando el submit
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1); //Las veces que la función ha sido llamada
    expect(onNewCategory).toHaveBeenCalledWith(inputValue); //que haya sido llamada con el valor de la caja de texto
  });

  // test("NO debe de llamar onNewCategory si el input está vacío", () => {
  //   // const inputValue = "Contenido caja de texto";
  //   const onNewCategory = jest.fn(); // Se crea un mock
  //   // todo

  //   render(<AddCategory onNewCategory={onNewCategory} />);

  //   // const input = screen.getByRole("textbox");
  //   const form = screen.getByRole("form");

  //   // Cambiar el valor de la caja de texto
  //   // fireEvent.input(input, { target: { value: inputValue } });1111
  //   // Disparando el submit
  //   fireEvent.submit(form);
  //   // screen.debug();

  //   expect(onNewCategory).not.toHaveBeenCalled();
  //   expect(onNewCategory).toHaveBeenCalledTimes(0); //Las veces que la función ha
  // });
});
