import { Event, Guest } from "core";
import Statistic from "../shared/Statistic";
import AccessByQrCode from "./AccessByQrCode";
import InformationsEvent from "./InformationsEvent";
import ListGuest from "./ListGuest";

export interface DashboardEventProps {
  event: Event;
  presence: Guest[];
  absence: Guest[];
  generalTotal: number;
}

export default function DashboardEvent(props: DashboardEventProps) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2">
        <InformationsEvent event={props.event} className="flex-1" />
        <AccessByQrCode event={props.event} />
      </div>

      <div className="grid grid-cols-3 gap-6 mt-4">
        <Statistic
          text="Expectativa de Convidados: "
          value={props.event.publicoEsperado}
          image="/icons/guest.svg"
        />{" "}
        <Statistic
          text="Confirmados: "
          value={props.presence.length}
          image="/icons/companions.svg"
        />{" "}
        <Statistic
          text="Acompanhantes Confirmados: "
          value={props.generalTotal}
          image="/icons/confirmed.svg"
        />
      </div>

      <button className="botao azul self-end mt-12">
        <span>Atualizar Lista de Convidados</span>
      </button>

      <div>
        <span className="dash">
          Convidados que confirmaram
          <b className="pl-2 text-green-400">PRESENÇA</b>
        </span>
        <ListGuest guest={props.presence} />
        <span className="dash">
          Convidados que confirmaram{" "}
          <b className="pl-2 text-red-400">AUSÊNCIA</b>
        </span>
        <ListGuest guest={props.absence} />
      </div>
    </div>
  );
}
