const Form = () => {
  return (
    <form action=''>
      <input type='text' placeholder='Insira os nomes dos participantes' />
      <button type='submit' disabled={true}>
        Adicionar
      </button>
    </form>
  );
};
export default Form;
