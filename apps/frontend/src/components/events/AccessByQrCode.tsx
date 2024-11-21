import { Event } from "@/../../packages/core";
import QRCode from "react-qr-code";

export interface AccessByQrCodeProps {
  event: Event;
}

export default function AccessByQrCode(props: AccessByQrCodeProps) {
  return (
    <div
      className="
					flex flex-col items-center justify-center gap-4
					border border-zinc-800 px-10 rounded-lg"
    >
      <span className="text-sm font-light text-zinc-400">
        Acesse Via Mobile
      </span>
      <QRCode
        value={JSON.stringify({
          id: props.event.id,
          senha: props.event.senha,
        })}
        className="w-32 h-32 border border-zinc-200 rounded-lg"
      />
    </div>
  );
}
