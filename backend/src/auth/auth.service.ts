import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  generateToken(user: User) {
    const payload = {
      sub: user.id,
      email: user.email,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  /**
   * Validate User
   * @param { string } email - Destination Email
   */
  validateUser(email: string) {
    const user = this.userService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
