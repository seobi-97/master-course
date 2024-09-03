import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 특정 조건에만 middleware를 작동시키기
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/dashboard/1", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// matcher로 특정 path로만 해당 미들웨어가 동작하게 함
// '/((?!api|_next/static|_next/image|favicon.ico).*)' -> route handler, 정적파일, favicon.ico를 제외하고 미들웨어가 동작
export const config = {
  //matcher: ["/about/:path*", "/dashboard/:path*"],
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
