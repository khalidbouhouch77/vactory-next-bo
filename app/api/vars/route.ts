import { NextResponse } from "next/server";
import prisma from "./../../../lib/prisma";

export async function POST(req: Request) {
  try {
    const { varName, varValue } = await req.json();

    const settings = await prisma.varenv.create({
      data: {
        varKey: varName,
        varValue: varValue,
      },
    });

    return NextResponse.json(settings);
  } catch (error) {
    console.log("[ENV_VAR_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
