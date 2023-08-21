import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
  params: { id: string };
}
//Busqueda por id
export async function GET(request: Request, { params }: Params) {
  const { id } = params;
  const idN = Number(id);
  const taskById = await prisma.task.findFirst({
    where: {
      id: idN,
    },
  });
  return !taskById
    ? NextResponse.json("No se encuentra")
    : NextResponse.json(taskById);
}

//Editar por id
export async function PUT(request: Request, { params }: Params) {
  const { id } = params;
  const idN = Number(id);
  const data = await request.json();
  const taskUpdated = await prisma.task.update({
    where: {
      id: idN,
    },
    data,
  });

  return NextResponse.json(taskUpdated);
}

//Borrar por id
export async function DELETE(request: Request, { params }: Params) {
  const { id } = params;
  const idN = Number(id);
  const taskDeleted = await prisma.task.delete({
    where: {
      id: idN,
    },
  });
  return NextResponse.json("Tarea eliminada");
}
