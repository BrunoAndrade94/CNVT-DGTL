import { Guest } from "core";

export interface ItemGuestProps {
  guest: Guest;
}

export default function ItemGuest(props: ItemGuestProps) {
  return (
    <li className="flex justify-between bg-black/40 rounded-md px-6 py-3 border border-zinc-800">
      <div className="flex flex-col">
        <span className="dash h1">{props.guest.nome}</span>
        <span className="dash h2">{props.guest.email}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="dash h2">Acompanhentes</span>
        <span className="dash h1">{props.guest.totalAcompanhantes}</span>
      </div>
    </li>
  );
}
