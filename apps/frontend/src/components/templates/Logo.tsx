import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export default function Logo() {
  return (
    <Link
      href={"./"}
      className={`flex flex-col items-center gap-2 ${font.className}`}
    >
      <Image src={"./logo.svg"} height={50} width={50} alt="Logo" />
      <h1 className="text-xl">
        CONVIT<span className="text-blue-500">3</span>
        -DIGIT<span className="text-red-500">4</span>L
      </h1>
    </Link>
  );
}
