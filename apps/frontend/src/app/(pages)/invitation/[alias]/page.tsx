"use client";
import { useParams } from "next/navigation";

export default function PageInvitation(props: any) {
  const params = useParams();
  const a = params.alias;

  return (
    <div>
      <span>{a}</span>
    </div>
  );
}
