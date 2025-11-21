import { ReactNode } from "react";

interface ContentTextProps {
  children: ReactNode;
  className?: string;
}

export default function ContentText({ children, className = "" }: ContentTextProps) {
  return (
    <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed w-full max-w-none mx-auto px-8 sm:px-12 md:px-16 lg:px-24 ${className}`}>
      {children}
    </p>
  );
}
