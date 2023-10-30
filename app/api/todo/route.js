import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async(req) => {

  try {
    const body = await req.json();

    const { text, completed, priority, tags, userId } = body

    const newTodo = await prisma.todo.create({
      data: {
        text,
        completed,
        priority,
        tags,
        userId,
      }
    })

    return NextResponse.json(newTodo)


  } catch (error) {
    console.log(error);
    return NextResponse.json('Post error')
  }
}

export const GET = async(req) => {
  try {

    const body = await req.json()

    const { userId } = body

    const user = await prisma.user.findUnique({
      where: {
        id: userId // Умова для пошуку користувача за ідентифікатором
      },
      include: {
        todos: true // Включити задачі користувача
      }
    });
    
    if (user) {
      const todos = user.todos; // Отримані задачі користувача
      console.log(todos);
    } else {
      console.log('Користувач не знайдений');
    }
    
    return NextResponse.json(user)
  }

   catch (error) {
    return NextResponse.json('error:', error)
  }
}