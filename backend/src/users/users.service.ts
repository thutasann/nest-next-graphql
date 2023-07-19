import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'thuta',
      email: 'thutasann2002@gmail.com',
    },
    {
      id: 2,
      name: 'hsu',
      email: 'hsuyeywel@gmail.com',
    },
  ];

  findOneByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }
}
