import { useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const { status, statusText, data, message } = useRouteError();

  return (
    <div>
      <h1>Something went wrong !!</h1>
      {status && (
        <strong>
          {status}:{statusText}
        </strong>
      )}
      <br />
      <i>{data || message}</i>
      <br />
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
