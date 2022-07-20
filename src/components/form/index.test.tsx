import { fireEvent, render, screen } from "@testing-library/react";
import { PlayersContext, PlayersProvider } from "contexts/PlayersContext";
import Form from ".";

//Jest
describe(" Component - <Form>", () => {
  test("quando o input está vazio, novos participantes não podem ser adicionados", () => {
    render(<Form />);

    //encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    //encontrar o botão
    const botao = screen.getByRole("button");

    //garantir que o input esteja no documento
    expect(input).toBeInTheDocument();

    //garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled();
  });

  test("quando o input for preenchido, adicionar o nome na lista ", () => {
    render(
      <PlayersProvider>
        <Form />
      </PlayersProvider>
    );

    //encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    //encontrar o botão
    const botao = screen.getByRole("button");

    //inserir um valor no input
    fireEvent.change(input, {
      target: "Miguel Rodrigues",
    });

    //clicar no botão de submeter
    fireEvent.click(botao);

    //garantir que o input fique vazio depois
    expect(input).toHaveValue("");
    
    //garantir que o input esteja com o foco ativo, ou seja, quando o usuário terminar de clicar o cursor deve estar no input
    //para que o usuario possa digitar apenas com o teclado + enter
    expect(input).toHaveFocus();
  });
});
