import { ConsoleLogger, Injectable, Scope } from '@nestjs/common'

@Injectable({ scope: Scope.DEFAULT })
export class AppLogger extends ConsoleLogger {
  constructor(context: string) {
    super(context)
  }

  log(message: any, context?: string) {
    const modifiedMessage = `${message} test`;

    console.log(modifiedMessage, context);

    super.log(modifiedMessage, context);
  }

  error(message: any, stack?: string, context?: string) {
    const modifiedMessage = `${message} test`;

    console.log(modifiedMessage, stack, context);

    super.error(modifiedMessage, stack, context);

    // if super.error(modifiedMessage, stack, context);

    // [Nest] 84265  - 02/15/2024, 9:54:28 AM   ERROR [AppController] error test
    // [Nest] 84265  - 02/15/2024, 9:54:28 AM   ERROR [AppController] undefined  <-- where is it coming from?

    // with the test bellow it confirms that stack trace is the 2nd log
    // however as before it is undefined, it should not be outputed. as the stack argument is optional
    // if super.error(modifiedMessage, { "hey": "you" }, context);
    // [Nest] 84387  - 02/15/2024, 9:55:05 AM   ERROR [AppController] error test
    // [Nest] 84387  - 02/15/2024, 9:55:05 AM   ERROR [AppController] Object:
    // {
    //   "hey": "you"
    // }
  }
}
