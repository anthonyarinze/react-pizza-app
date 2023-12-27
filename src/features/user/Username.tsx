import { useSelector } from "react-redux";

export default function Username() {
  const userName = useSelector((state: any) => state.user.username);

  if (!userName) return;
  return (
    <div className="hidden text-sm font-semibold tracking-wider md:block">
      {userName}
    </div>
  );
}
