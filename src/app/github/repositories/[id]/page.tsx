"use client";

import { useParams } from "next/navigation";

export default function IndividualRepository() {
  const { id } = useParams();

  return <p>Post: {id}</p>;
}
