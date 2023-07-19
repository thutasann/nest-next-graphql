import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

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
