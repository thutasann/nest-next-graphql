import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

/**
 * Magic Link Testing Purpose
 */
@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
