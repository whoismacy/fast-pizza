import { useState } from "react";
import Button from "../../ui/Button";
import { updateName } from "./userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CreateUser() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.username);

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    setUsername("");
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <>
        <p className="mb-4 text-sm text-stone-600 md:text-base">
          👋 Welcome! Please start by telling us your name:
        </p>

        <input
          placeholder="Your full name"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input mb-8 w-72 placeholder:italic"
        />
      </>
      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
