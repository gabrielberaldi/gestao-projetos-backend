import { Migration } from '@mikro-orm/migrations';

export class Migration20251128135020 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "user" ("id" uuid not null default gen_random_uuid(), "email" varchar(255) not null, "password" varchar(255) not null, "name" varchar(255) not null, constraint "user_pkey" primary key ("id"));`);
    this.addSql(`alter table "user" add constraint "user_email_unique" unique ("email");`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "user" cascade;`);
  }

}
