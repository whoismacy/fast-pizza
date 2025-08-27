import { useNavigate } from "react-router-dom";

export default function Button({
  children,
  type = "base",
  disabled = false,
  path,
  onClick,
}) {
  const base =
    "inline-block rounded-full bg-yellow-400 uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";
  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    round: base + "px-2.5 py-1 ml-auto md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block rounded-full border-2 px-4 py-2.5 md:px-6 md:py-4 border-stone-300 uppercase tracking-wide text-stone-500 hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300  focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed ",
    small: base + "py-2 px-3 md:px-5 md:py-2.5 text-xs",
  };
  const navigate = useNavigate();

  if (path) {
    return (
      <button className={styles[type]} onClick={() => navigate(path)}>
        {children}
      </button>
    );
  }
  if (onClick) {
    return (
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
