import LogoBig from "@/components/templates/LogoBig";
import Link from "next/link";
import {
  CRIE_SEU_EVENTO,
  DESCRICAO_HOME,
} from "../../public/constants/var-const";

export default function Home() {
  return (
    <div
      className="
				h-screen flex flex-col justify-center items-center gap-10
				bg-[url('/background-home.svg')] bg-cover"
    >
      <div className="flex flex-col items-center gap-4">
        <LogoBig />
        <p className="text-zinc-500 font-light w-96 leading-6 text-center select-none">
          {DESCRICAO_HOME}
        </p>
      </div>
      <Link className="botao laranja" href={"/event"}>
        {CRIE_SEU_EVENTO}
      </Link>
      <Link className="botao roxo" href={"/events"}>
        {"EVENTOS DEV"}
      </Link>
    </div>
  );
}
