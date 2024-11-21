import { Event } from "core";
import Information from "../shared/Information";

export interface InformationsEventProps {
  event: Event;
  className: string;
}

export default function InformationsEvent(props: InformationsEventProps) {
  const { event } = props;
  return (
    <div className={`flex flex-col gap-2 ${props.className ?? ""}`}>
      <div
        className="
				flex-1 flex items-center gap-4 border border-zinc-800 px-6 py-3 rounded-lg"
      >
        <span className="text-2xl font-black">{event.alias}:</span>
        <span className="text-xl text-zinc-300">{event.nome}</span>
      </div>

      <div className="flex gap-2">
        <Information label="Data:">
          {new Date(event.data!).toLocaleDateString()}
          {" às "}
          {new Date(event.data!).toLocaleTimeString()}
        </Information>
        <Information label="Local:">{event.local}</Information>
      </div>
      <div className="flex flex-row">
        <Information label="Descrição:">{event.descricao}</Information>
      </div>
    </div>
  );
}
