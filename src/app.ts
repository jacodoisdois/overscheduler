import Fastify from 'fastify';

const server = Fastify({
  logger: true,
});

void server.listen({
  port: 3000,
});
