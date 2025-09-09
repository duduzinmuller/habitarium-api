import Fastify from "fastify";
import { registerRoutes } from "./routes";

async function main() {
  const app = Fastify({ logger: true });

  await app.register(registerRoutes, { prefix: "/api" });

  await app.listen({ port: 3000 });
}

main();
