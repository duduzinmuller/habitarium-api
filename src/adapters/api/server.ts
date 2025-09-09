// Import the framework and instantiate it
import Fastify from "fastify";
import { setupSwagger } from "./swagger";

const init = async () => {
  const app = Fastify({
    logger: true,
  });

  // to run Swagger for the API
  await setupSwagger(app);

  // Routes:
  app.get("/", async function handler(request, reply) {
    return { hello: "world" };
  });

  app.put(
    "/some-route/:id",
    {
      schema: {
        description: "post some data",
        tags: ["user", "code"],
        summary: "qwerty",
        params: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "user id",
            },
          },
        },
        body: {
          type: "object",
          properties: {
            hello: { type: "string" },
            obj: {
              type: "object",
              properties: {
                some: { type: "string" },
              },
            },
          },
        },
        response: {
          201: {
            description: "Successful response",
            type: "object",
            properties: {
              hello: { type: "string" },
            },
          },
          default: {
            description: "Default response",
            type: "object",
            properties: {
              foo: { type: "string" },
            },
          },
        },
      },
    },
    (req, reply) => {},
  );

  // Run the server!
  try {
    await app.listen({ port: 8080 });
    console.log("Server listening on localhost:8080");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

init();
