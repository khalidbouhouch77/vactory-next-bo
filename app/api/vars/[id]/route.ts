import { NextResponse } from "next/server";
import prisma from "./../../../../lib/prisma";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const deleteUser = await prisma.varenv.delete({
       where: {
         id: params.id,
       },
     }) 
   return NextResponse.json({ result:  deleteUser});
   }
   