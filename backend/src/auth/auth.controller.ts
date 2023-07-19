import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MagicLoginStrategy } from './magiclogin.strategy';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private strategy: MagicLoginStrategy,
  ) {}

  @Post('login')
  login(@Req() req, @Res() res) {
    return this.strategy.send(req, res);
  }

  @Get('login/callback')
  callback() {
    // TODO: generate JWT access token
  }
}
