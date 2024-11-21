import { OBRIGATORIO_NOME } from "../../../constants/errors";
import Guest from "../../model/Guest";

export default function validateGuest(guest: Partial<Guest>): string[] {
  const erros: string[] = [];

  !guest.nome ? erros.push(OBRIGATORIO_NOME) : "";

  return erros;
}
