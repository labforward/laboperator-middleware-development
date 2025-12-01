import { addFixtures } from 'middleware/test_helper';
import config from 'middleware/config';

import fixtures from './fixtures';

addFixtures(config.providers.example.url.origin, fixtures);
