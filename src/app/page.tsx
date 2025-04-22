"use client";

import { useContext } from "react";
import DataContext from "@/context/DataContext";

export default function Home() {
  const { aboutData } = useContext(DataContext);

  return <div>{aboutData}</div>;
}
