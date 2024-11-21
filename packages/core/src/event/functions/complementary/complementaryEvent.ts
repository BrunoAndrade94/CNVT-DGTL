import { Id, Password } from "../../../shared";
import Event from "../../model/Event";
import validateEvent from "../validate/validateEvent";
export default function complementaryEvent(
  eventPartial: Partial<Event>
): Event {
  const erros = validateEvent(eventPartial);

  if (erros.length) throw new Error(erros.join("/n"));

  const event: Event = {
    ...eventPartial,
    id: eventPartial.id ?? Id.new(),
    senha: eventPartial.senha ?? Password.new(21),
    publicoEsperado: +(eventPartial.publicoEsperado ?? 1),
  } as Event;

  return event;
}
