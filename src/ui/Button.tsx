import { Link } from "react-router-dom";

type Props = {
  children: any;
  disabled: boolean;
  to: string;
  type: string;
  onClick: any;
};

function Button({ children, disabled, to, type, onClick }: Props) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-150 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles: any = {
    primary: base + " md:px-6 md:py-4 px-4 py-3 text-xs",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 px-4 py-3 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-150 hover:text-stone-800 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:text-stone-800 focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-3.5 px-4 py-2.5",
    small: base + " py-2 px-5 md:py-2.5 md:px-4 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
