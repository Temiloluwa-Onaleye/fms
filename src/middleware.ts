/** @format */

import { NextRequest, NextResponse, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  // const token = request.cookies.get("access_token")?.value;
  const { device } = userAgent(request);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";
  url.searchParams.set("viewport", viewport);
  // const protectedPaths = /^\/(/)/;
  // const authPaths = /^\/auth\/(sign-in|)/;

  //   if (!token && url.pathname.match(protectedPaths)) {
  //     return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  //   }
  //   if (token && url.pathname.match(authPaths)) {
  //     return NextResponse.redirect(new URL("/dashboard", request.url));
  //   }
  return NextResponse.next();
}
