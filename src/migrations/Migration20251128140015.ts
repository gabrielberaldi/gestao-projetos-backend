import { Migration } from '@mikro-orm/migrations';

export class Migration20251128140015 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "user" drop column "teste";`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "user" add column "teste" varchar(255) not null;`);
  }

}
