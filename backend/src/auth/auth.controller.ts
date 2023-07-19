import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login() {
    // TODO: send magic link
  }

  @Get('login/callback')
  callback() {
    // TODO: generate JWT access token
  }
}
