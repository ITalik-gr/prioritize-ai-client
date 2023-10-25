import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async(req) => {

  try {
    const body = await req.json();

    const { text, completed } = body

    const newTodo = await prisma.todo.create({
      data: {
        text,
        completed
      }
    })

    return NextResponse.json(newTodo)


  } catch (error) {
    console.log(error);
    return NextResponse.json('Post error')
  }
}