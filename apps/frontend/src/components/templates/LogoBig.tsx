import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export default function LogoBig() {
  return (
    <Link
      href={"./"}
      className={`flex flex-col items-center gap 2 ${font.className}`}
    >
      <Image src={"./logo.svg"} width={150} height={150} alt="Logo" />
      <h1 className="text-5xl">
        CONVIT<span className="text-blue-500">3</span>
        -DIGIT<span className="text-red-500">4</span>L
      </h1>
    </Link>
  );
}
