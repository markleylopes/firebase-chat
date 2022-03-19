import { NextResponse } from "next/server";

export async function middleware(_req, _ev) {

  return NextResponse.next();
}
