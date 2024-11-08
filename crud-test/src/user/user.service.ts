import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private users: User[] = [];
  private idCounter = 0;

  createUser(name: string, email: string): User {
    const newUser = { id: this.idCounter++, name, email };
    this.users.push(newUser);
    return newUser;
  }

  getUser(id: number): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  getAllUsers(): User[] {
    return this.users;
  }

  updateUser(id: number, name: string, email: string): User {
    const user = this.getUser(id);
    user.name = name || user.name;
    user.email = email || user.email;
    return user;
  }

  deleteUser(id: number): void {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new NotFoundException('User not found');
    }
    this.users.splice(index, 1);
  }
}
