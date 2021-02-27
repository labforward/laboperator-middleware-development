import { addFixtures } from 'laboperator-middleware/test_helper';
import config from 'laboperator-middleware/config';

import fixtures from './fixtures';

addFixtures(config.providers.example.url.origin, fixtures);
