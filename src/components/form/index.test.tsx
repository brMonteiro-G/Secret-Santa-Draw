import { render, screen } from "@testing-library/react";
import Form from ".";

//Jest

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
