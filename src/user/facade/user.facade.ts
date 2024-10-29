import { Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserFacade {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getUser(@Req() userPayload: any) {
    const user = await this.userRepository.findOneBy({ id: userPayload.sub });
    return {
      id: user.id,
    } as User;
  }
}
