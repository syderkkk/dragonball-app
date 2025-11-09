const ErrorMessage = ({ message }) => {
  return (
    <div className="alert alert-danger text-center my-4" role="alert">
      <i className="bi bi-exclamation-triangle-fill me-2"></i>
      {message}
    </div>
  );
};

export default ErrorMessage;
