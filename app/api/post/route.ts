import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function POST(request: Request) {
  const json = await request.json();
  const envVars = json?.envVars ?? [];

  for (const u of envVars) {
    // By ID
    let item = null;
    if (u.identifiant !== "") {
      item = await prisma.varenv.findUnique({
        where: {
          id: u.identifiant,
        },
      });
    }
    if (item) {
      // Update the record if already exist.
      const updateUser = await prisma.varenv.update({
        where: {
          id: item.id,
        },
        data: {
          varKey: u.varKey,
          varValue: u.varValue,
        },
      });
      console.log(`Updated env var with id: ${updateUser.id}`);
    } else {
      // Create the env var if doesn't exist.
      if (u.varKey !== "" && u.varValue !== "") {
        const result = await prisma.varenv.create({
          data: {
            varKey: u.varKey,
            varValue: u.varValue,
          },
        });
        console.log(`Created env var with id: ${result.id}`);
      }
    }
  }
  return NextResponse.json({ result: "result" });
}
