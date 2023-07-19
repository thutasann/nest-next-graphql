import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import Strategy from 'passport-magic-login';
import { AuthService } from './auth.service';

@Injectable()
export class MagicLoginStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(MagicLoginStrategy.name);

  constructor(private authService: AuthService) {
    super({
      secret: 'this-is-the-secret',
      jwtOptions: {
        expiresIn: '5m',
      },

      callbackUrl: 'http://localhost:4000/auth/login/callback',

      sendMagicLink: async (destination: string, href: string) => {
        this.logger.debug(
          `🚀 sending email to ${destination} with link ${href}`,
        );
      },

      /**
       * Verify
       * @param payload - Decoded Token
       * @param callback - Callback Func
       */
      verify: async (payload, callback) => {
        callback(null, this.validate(payload));
      },
    });
  }

  validate(payload: { destination: string }) {
    const user = this.authService.validateUser(payload.destination);
    return user;
  }
}
