import dotenv from 'dotenv';
import InternalServerError from '../../error/InternalServerError';
import configSchema from './configSchema';

const setupConfig = (): void => {
  if (process.env.DEBUG_MODE) {
    dotenv.config();
  }

  const parsedData = configSchema.safeParse(process.env.ADD);
  if (!parsedData.success) {
    throw new InternalServerError('Invalid env schema');
  }
};

export default setupConfig;
