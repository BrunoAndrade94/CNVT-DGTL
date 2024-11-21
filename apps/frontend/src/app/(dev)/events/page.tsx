import { events } from "core";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";
export default function PageEvents() {
  return (
    <div className="grid grid-cols-3 gap-5">
      {events.map((event) => {
        return (
          <div key={event.id} className="event">
            <Link
              href={`/invitation/${event.alias}`}
              className="relative w-full h-52"
            >
              <Image
                className="object-cover w-auto h-auto"
                src={event.imagem}
                alt="imagem do evento"
                fill
                sizes=""
              />
            </Link>
            <div className="flex-1 flex flex-col items-center p-7 gap-5">
              <span className="text-lg font-black">{event.nome}</span>
              <p className="flex-1 text-sm text-zinc-400 text-center">
                {event.descricao}
              </p>
              <QRCode
                value={JSON.stringify({ id: event.id, senha: event.senha })}
                className="h-40 w-40"
              />
              <div className="flex gap-5">
                <Link
                  className="flex-1 botao verde"
                  href={`/event/admin/${event.id}/${event.senha}`}
                >
                  Administrador
                </Link>
                <Link
                  className="flex-1 botao laranja"
                  href={`/invitation/${event.alias}`}
                >
                  Convite
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
