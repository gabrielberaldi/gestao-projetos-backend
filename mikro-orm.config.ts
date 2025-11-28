import { defineConfig, UnderscoreNamingStrategy } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";

export default defineConfig({
  host: 'localhost',
  port: 5433,
  user: 'postgres',
  password: 'postgres',
  dbName: 'gestao_projetos_db',
  driver: PostgreSqlDriver,

  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],

  migrations: {
    path: 'dist/migrations',
    pathTs: 'src/migrations',
  },

  namingStrategy: UnderscoreNamingStrategy,

  // metadataProvider: TsMorphMetadataProvider
})