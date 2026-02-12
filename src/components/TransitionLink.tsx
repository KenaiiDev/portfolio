"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
}

const TransitionLink = ({ children, href, ...props }: TransitionLinkProps) => {
  const router = useRouter();

  const handleTransition = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    router.push(href);
  };

  return (
    <Link onClick={(e) => handleTransition(e)} href={href} {...props}>
      {children}
    </Link>
  );
};

export default TransitionLink;
