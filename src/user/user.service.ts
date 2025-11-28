import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { User } from './entities/user.entity';
import { ApiTags } from '@nestjs/swagger';

@Injectable()
@ApiTags('Users')
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepo: EntityRepository<User>,
    private readonly entityManager: EntityManager,
  ) {}

  create(createUserDto: CreateUserDto) {
    // const user = this.userRepo.create(createUserDto);
    // this.entityManager.persistAndFlush(user);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
