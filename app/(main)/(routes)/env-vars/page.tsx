import CreateEnvVars from "./create-env-vars";
import prisma from "./../../../../lib/prisma";

export default async function EnvVars() {
  const envVars = await prisma.varenv.findMany();
  return <CreateEnvVars data={envVars} />;
}
