interface ResultBase {
  success: boolean;
}

interface SuccessfulResult<T = unknown> extends ResultBase {
  success: true;
  end: number;
  payload: T;
}

interface FailedResult extends ResultBase {
  success: false;
}

export type Result<T = unknown> = SuccessfulResult<T> | FailedResult;
