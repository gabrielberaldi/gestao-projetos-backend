import { Migration } from '@mikro-orm/migrations';

export class Migration20251128135818 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "user" add column "teste" varchar(255) not null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "user" drop column "teste";`);
  }

}
