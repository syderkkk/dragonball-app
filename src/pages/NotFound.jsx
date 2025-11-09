import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container my-5">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-warning">404</h1>
        <p className="fs-3">
          <span className="text-danger">Oops!</span> Página no encontrada
        </p>
        <p className="lead text-muted">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link to="/" className="btn btn-warning mt-3">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
