import { NextResponse } from "next/server";
import prisma from "./../../../lib/prisma";

export async function POST(req: Request) {
  try {
    const { projetName, projetUrl , languages} = await req.json();

    const settings = await prisma.settings.create({
      data: {
        projetName,
        projetUrl,
        languages,
      }
    });

    return NextResponse.json(settings);
  } catch (error) {
    console.log("[SETTINGS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}