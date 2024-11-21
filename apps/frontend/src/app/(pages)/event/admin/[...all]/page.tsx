"use client";

import { Event, Guest, events } from "core";
import DashboardEvent from "@/components/events/DashboradEvent";
import FormPasswordEvent from "@/components/events/FormPasswordEvent";
import { use, useEffect, useState } from "react";

export default function PageAdminEvent(props: any) {
  const params: any = use(props.params);

  const id = params.all[0];
  const [event, setEvent] = useState<Event | null>(null);
  const [password, setPassword] = useState<string | null>(
    params.all[1] ?? null
  );

  const convidadosPresentes =
    event?.convidados.filter((conv) => conv.confirmado) ?? [];
  const convidadosAusentes =
    event?.convidados.filter((conv) => !conv.confirmado) ?? [];

  const convidadosTotal =
    convidadosPresentes.reduce((total: number, convidado: Guest) => {
      return total + convidado.totalAcompanhantes + 1;
    }, 0) ?? 0;

  function loadingEvent() {
    const event = events.find(
      (event) => event.id === id && event.senha === password
    );
    setEvent(event ?? null);
  }

  useEffect(() => {
    loadingEvent();
  }, [id, password]);

  return (
    <div className="flex flex-col items-center">
      {event ? (
        <DashboardEvent
          event={event}
          absence={convidadosAusentes}
          presence={convidadosPresentes}
          generalTotal={convidadosTotal}
        />
      ) : (
        <FormPasswordEvent />
      )}
    </div>
  );
}
