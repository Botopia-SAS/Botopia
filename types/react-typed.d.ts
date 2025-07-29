declare module "react-typed" {
  import * as React from "react";
  export interface TypedProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    backDelay?: number;
    loop?: boolean;
    showCursor?: boolean;
    cursorChar?: string;
    // Puedes agregar más props si lo necesitas
  }
  export class Typed extends React.Component<TypedProps> {}
}
