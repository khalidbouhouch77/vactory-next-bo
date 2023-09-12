import { NextResponse } from "next/server";
import prisma from "./../../../../lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: { settingId: string } }
) {
  try {
    const { projetName, projetUrl , languages } = await req.json();

    const server = await prisma.settings.update({
      where: {
        id: params.settingId,
      },
      data: {
        projetName,
        projetUrl,
        languages,
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log("[SETTINGS_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
