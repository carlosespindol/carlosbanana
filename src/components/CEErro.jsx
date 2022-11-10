import { useRouteError } from "react-router-dom";
import background from "../img/whale.jpg";

const CEErro = () => {
  const error = useRouteError();

  return (
    <div className="backgroundgojira" style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh' }}>
    <div id="erro">
      <h1>Erro inesperado, por favor aguarde o retorno.</h1>
      <p>{error.statusText || error.message}</p>
    </div>
    </div>
  );
};

export default CEErro;
