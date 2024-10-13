"use client";

import ClasseCorpo from "@/components/classes/ClasseCorpo";
import ClasseItem from "@/components/classes/ClasseItem";
import Button from "@/components/shared/Button";
import CopyBtn from "@/components/shared/CopyBtn";
import Logo from "@/components/shared/Logo";
import Modal from "@/components/template/Modal";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import classes from "@/dataset/classes.json";
import Atributos from "@/components/classes/Atributos";

const Home = () => {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const [classSelected, setClassSelected] = useState(0);

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

      const xOffset = (mouseCoordinates.x - windowWidth / 2) / 40;
      const yOffset = (mouseCoordinates.y - windowHeight / 2) / 40;

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
        <div className="flex max-md:flex-col justify-center items-center w-full pt-16 gap-10">
          <Button onClick={() => setIsOpen(true)} label="classes" />
          <Button
            disabled
            className="disabled:pointer-events-none"
            label="loja"
          >
            <span className="font-thin text-sm">(Em Breve)</span>
          </Button>
          <Link className="max-md:w-full" href={"/map"}>
            <Button className="max-md:mx-auto" label="mapa" />
          </Link>
          <Link
            className="max-md:w-full"
            href={"https://discord.gg/N7fjqsgHWW"}
          >
            <Button
              label="discord"
              className="bg-indigo-400 hover:bg-indigo-600 hover:text-white max-md:mx-auto"
            />
          </Link>
        </div>
      </div>
      <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <div className="max-lg:grid md:grid-cols-2 lg:flex justify-center gap-8 max-lg:py-2 w-full min-h-56 bg-brown-200 rounded-t-2xl">
          {classes.map((item, index) => (
            <ClasseItem
              onClick={() => setClassSelected(index)}
              key={index}
              classe={item}
            />
          ))}
        </div>
        <div className="md:flex justify-center xl:gap-52">
          <ClasseCorpo classe={classes[classSelected].nome} />
          <Atributos classe={classes[classSelected]} />
        </div>
      </Modal>
    </>
  );
};

export default Home;
