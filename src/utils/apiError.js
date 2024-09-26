class apiError extends Error {
  constructor(
    statuscode,
    message = "Something Went Wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statuscode = statuscode;
    (this.data = null),
      (this.message = message = false),
      (this.success = false),
      (this.errors = this.errors);
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export { apiError };
