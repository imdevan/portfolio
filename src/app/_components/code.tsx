import { createElement } from "react";
import cn from "classnames";
import { Playfair_Display  } from "next/font/google";
const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

type Props = {
  s?: 1 | 2 | 3 | 4 | 5 | 6; // Only accepts numbers 1-6
  children: React.ReactNode; // To support any valid React content inside the header
  className?: string;
};

const H = ({ s, children, className }: Props) => {
  const HeaderTag = `h${s ?? 1}`; // Will be 'h1', 'h2', etc.

  return createElement(
    HeaderTag,
    { className: cn(playfairDisplay.className, className) },
    children
  );
};

export default H;
