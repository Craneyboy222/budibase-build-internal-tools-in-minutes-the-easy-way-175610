/* Migration configuration */

import { migrate } from 'migrate';

export const runMigrations = async () => {
    try {
        await migrate({
            // Migration configuration
        });
        console.log('Migrations completed successfully');
    } catch (error) {
        console.error('Migration failed', error);
    }
};