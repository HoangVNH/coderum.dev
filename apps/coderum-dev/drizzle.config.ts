import { type Config } from 'drizzle-kit';

import { env } from '@/env';

export default {
	schema: './src/server/db/schema.ts',
	driver: 'libsql',
	dbCredentials: {
		url: env.DATABASE_URL,
	},
	tablesFilter: ['coderum-dev_*'],
} satisfies Config;
