import {
  OBRIGATORIO_APELIDO,
  OBRIGATORIO_DATA,
  OBRIGATORIO_DESCRICAO,
  OBRIGATORIO_IMAGEM,
  OBRIGATORIO_IMAGEM_BACKGROUND,
  OBRIGATORIO_LOCAL,
  OBRIGATORIO_NOME,
  OBRIGATORIO_PUBLICO_ESPERADO,
} from "../../../constants/errors";
import Event from "../../model/Event";

export default function validateEvent(event: Partial<Event>): string[] {
  const erros: string[] = [];

  !event.alias ? erros.push(OBRIGATORIO_APELIDO) : "";
  !event.nome ? erros.push(OBRIGATORIO_NOME) : "";
  !event.descricao ? erros.push(OBRIGATORIO_DESCRICAO) : "";
  !event.data ? erros.push(OBRIGATORIO_DATA) : "";
  !event.local ? erros.push(OBRIGATORIO_LOCAL) : "";
  !event.publicoEsperado || +event.publicoEsperado < 1
    ? erros.push(OBRIGATORIO_PUBLICO_ESPERADO)
    : "";
  !event.local ? erros.push(OBRIGATORIO_IMAGEM) : "";
  !event.local ? erros.push(OBRIGATORIO_IMAGEM_BACKGROUND) : "";

  return erros;
}
