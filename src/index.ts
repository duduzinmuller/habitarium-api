import Fastify from "fastify";
import { registerRoutes } from "./routes";
import { fastifyErrorHandler } from "./shared/errors";

async function main() {
  const app = Fastify({ logger: true });

  app.setErrorHandler(fastifyErrorHandler);

  await app.register(registerRoutes, { prefix: "/api" });

  console.log(app.printRoutes());
  
  await app.listen({ port: 3000 });
}

main();
