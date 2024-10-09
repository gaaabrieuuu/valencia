"use client";

import AtributosBanner from "@/components/classes/AtributosBanner";
import ClasseCorpo from "@/components/classes/ClasseCorpo";
import ClassesBanner from "@/components/classes/ClassesBanner";
import Button from "@/components/shared/Button";
import CopyBtn from "@/components/shared/CopyBtn";
import Logo from "@/components/shared/Logo";
import Modal from "@/components/template/Modal";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);

  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseCoordinates({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (backgroundRef.current) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const xOffset = (mouseCoordinates.x - windowWidth / 2) / 20;
      const yOffset = (mouseCoordinates.y - windowHeight / 2) / 20;

      backgroundRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px) scale(1.1)`;
    }
  }, [mouseCoordinates]);

  return (
    <>
      <div className="flex flex-col min-h-screen items-center relative">
        <div
          className="fixed top-0 left-0 w-full h-full bg-cover -z-10"
          style={{
            backgroundImage: 'url("/val_bck.png")',
            backgroundBlendMode: "multiply",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backgroundSize: "1",
          }}
          ref={backgroundRef}
        />
        <Logo className="py-4" />
        <CopyBtn
          label="br-05.hostmine.com.br:25576"
          hoveringLabel="CLIQUE PARA COPIAR IP"
        />
        <div className="flex pt-16 gap-10">
          <Button onClick={() => setIsOpen(true)} label="classes" />
          <Button label="loja" />
          <Link href={"/map"}>
            <Button
              label="mapa"
            />
          </Link>
          <Link href={"https://discord.gg/N7fjqsgHWW"}>
            <Button
              label="discord"
              className="bg-indigo-400 hover:bg-indigo-600 hover:text-white"
            />
          </Link>
        </div>
      </div>
      <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <ClassesBanner />
        <div className="md:flex justify-center xl:gap-52">
          <ClasseCorpo />
          <AtributosBanner />
        </div>
      </Modal>
    </>
  );
};

export default Home;
