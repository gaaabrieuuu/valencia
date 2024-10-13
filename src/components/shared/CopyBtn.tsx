"use client";

import { useState } from "react";

export interface CopyBtnProps {
  label: string;
  hoveringLabel: string;
}

const CopyBtn = (props: CopyBtnProps) => {
  const [hovering, setHovering] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText(props.label);
        setIsCopied(true);
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setIsCopied(false);
      }}
      className="button px-4 py-3 rounded-full"
    >
      {!hovering ? (
        <span>{props.label}</span>
      ) : isCopied ? (
        <h3 className="uppercase font-bold">copiado!</h3>
      ) : (
        <h3 className="uppercase font-bold">{props.hoveringLabel}</h3>
      )}
    </div>
  );
};

export default CopyBtn;
