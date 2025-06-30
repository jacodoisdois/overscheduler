import { z } from 'zod';

const configSchema = z.object({
  SERVER_PORT: z.string().transform(Number).default('48081'),
});

export default configSchema;
