import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
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
      <LinkButton to={"-1"}>&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
