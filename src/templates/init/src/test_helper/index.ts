import config from 'laboperator-middleware/config';
import { addFixtures } from 'laboperator-middleware/test_helper';

import fixtures from './fixtures';

addFixtures(config.example.url.origin, fixtures);
