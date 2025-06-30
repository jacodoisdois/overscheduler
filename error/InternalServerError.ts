class InternalServerError extends Error {
  public readonly statusCode: number;

  constructor(message: string = 'Internal Server Error') {
    super(message);
    this.name = 'InternalServerError';
    this.statusCode = 500;

    Error.captureStackTrace(this, InternalServerError);
  }
}

export default InternalServerError;
