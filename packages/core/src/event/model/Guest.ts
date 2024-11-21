import Address from "./Address";

export default interface Guest {
  id: string;
  nome: string;
  email: string;
  telefone?: string;
  confirmado: boolean;
  endereco?: Address[];
  possuiAcompanhantes: boolean;
  totalAcompanhantes: number;
}
