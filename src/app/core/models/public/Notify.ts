enum notify {
  success = 'success',
  info = 'info',
  error = 'error',
  warn = 'warn',

}

export class Notify {

  severity: string;
  summary: string;
  detail: string;

  key: string | null = null;

}
