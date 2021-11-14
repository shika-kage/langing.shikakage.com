import { server, currentPort } from './configureServer';
import { InitialDataGenerator } from './utils/InitialDataGenerator';

(async () => {
    try {
        // InitialDataGenerator.run();
        server.listen(currentPort, () => console.log(`[SERVER]: Started on port ${currentPort}!`));
    } catch (error) {
        console.log('[INIT ERROR]:', error);
    }
})();
