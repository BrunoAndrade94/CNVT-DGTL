import Image from "next/image";
import Link from "next/link";
import { NOT_FOUND } from "../../public/constants/var-const";
import imageNotFound from "../../public/images/robo-not-found.webp";

export default function notFound() {
  return (
    <div
      className="
		flex flex-col items-center m-[6rem]"
    >
      <Image
        priority
        src={imageNotFound}
        width={400}
        height={400}
        alt="Imagem NotFound"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <p className="text-red-200 py-5">{NOT_FOUND}</p>
      <Link className="botao azul" href={"/"}>
        Volte por Aqui
      </Link>
    </div>
  );
}
