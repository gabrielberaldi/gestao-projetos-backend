import { Entity, Enum, PrimaryKey, Property, types } from "@mikro-orm/core";
import { UserRole } from "../enums/user-role.enum";

@Entity()
export class User {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  id!: string;

  @Property({ nullable: false })
  userName!: string;

  @Property({ unique: true })
  email!: string;

  @Property({ hidden: true })
  passwordHash!: string;

  @Enum(() => UserRole)
  role!: UserRole;

  @Property()
  isActive: boolean = true;

  @Property()
  createdAt: Date = new Date();

  @Property({ 
    defaultRaw: 'CURRENT_TIMESTAMP',
    type: types.datetime,
    onUpdate: () => new Date() 
  })
  updatedAt: Date = new Date();

  //TODO: Adicionar fk company
}
