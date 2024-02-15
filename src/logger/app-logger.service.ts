import { ConsoleLogger, Injectable, Scope } from '@nestjs/common'

@Injectable({ scope: Scope.DEFAULT })
export class AppLogger extends ConsoleLogger {
  constructor(context: string) {
    super(context)
  }

  log(message: any, context?: string): void {
    super.log(message, context);
  }

  error(message: any, context?: string): void {
    super.error(message, context);
  }
}
