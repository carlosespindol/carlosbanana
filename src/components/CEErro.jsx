import { useRouteError } from "react-router-dom";

const CEErro = () => {
  const error = useRouteError();

  return (
    <div id="erro">
      <h1>Erro inesperado, por favor aguarde o retorno.</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default CEErro;
