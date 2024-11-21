import { Guest } from "core";
import ItemGuest from "./ItemGuest";

export interface ListGuestProps {
  guest: Guest[];
}

export default function ListGuest(props: ListGuestProps) {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {props.guest.map((guest) => {
          return <ItemGuest key={guest.id} guest={guest} />;
        })}
      </ul>
    </div>
  );
}
