import { Migration } from '@mikro-orm/migrations';

export class Migration20251128192822 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "user" ("id" uuid not null default gen_random_uuid(), "user_name" varchar(255) not null, "email" varchar(255) not null, "password_hash" varchar(255) not null, "role" text check ("role" in ('owner', 'manager', 'client')) not null, "is_active" boolean not null default true, "created_at" timestamptz not null, "updated_at" timestamptz not null default CURRENT_TIMESTAMP, constraint "user_pkey" primary key ("id"));`);
    this.addSql(`alter table "user" add constraint "user_email_unique" unique ("email");`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "user" cascade;`);
  }

}
