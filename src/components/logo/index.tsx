/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
};

export const Logo = (props: LogoProps) => (
  <div
    className={`
      "flex items-center h-full justify-between "
    ${props.className}
    `}
  >
    <Link href={"/"}>
      <Image
        src="/images/logo-home.svg"
        width={props.width ?? 118}
        height={props.height ?? 47}
        alt="Wrapa Logo"
        loading="lazy"
        className={props.className}
      />
    </Link>
  </div>
);
