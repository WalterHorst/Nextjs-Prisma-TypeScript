import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
  params: { id: string };
}

export function GET(request: Request, { params }: Params) {
  const { id } = params;
  return NextResponse.json(`Esta es la tarea con id: ${id}`);
}

export function PATCH(request: Request, { params }: Params) {
  const { id } = params;

  return NextResponse.json(`Editando la tarea con id: ${id}`);
}
export function DELETE(request: Request, { params }: Params) {
  const { id } = params;

  return NextResponse.json(`Borrando la tarea con id: ${id}`);
}
