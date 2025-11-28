import { defineConfig } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";

export default defineConfig({
  host: 'localhost',
  port: 5432,
  user: 'admin',
  password: '123',
  dbName: 'project_management',
  driver: PostgreSqlDriver,

  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],

  migrations: {
    path: 'dist/migrations',
    pathTs: 'src/migrations',
  },

  // metadataProvider: TsMorphMetadataProvider
})