import { Guest } from "../../../event";
import validateGuest from "../validate/validateGuest";

export default function complementaryGuest(guest: Partial<Guest>): Guest {
  const erros = validateGuest(guest);

  if (erros.length > 0) throw new Error(erros.join("/n"));

  const temAcompanhantes =
    guest.possuiAcompanhantes &&
    guest.confirmado &&
    Number(guest.totalAcompanhantes) > 0;

  const convidadoAtualizado = {
    ...guest,
    totalAcompanhantes: temAcompanhantes ? guest.totalAcompanhantes : 0,
    possuiAcompanhantes: temAcompanhantes,
  };

  return convidadoAtualizado as Guest;
}
