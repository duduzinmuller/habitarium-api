import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.NEONDB_URL });
export const db = drizzle(pool);

process.on('SIGINT', () => pool.end().then(() => process.exit(0)));
process.on('SIGTERM', () => pool.end().then(() => process.exit(0)));
