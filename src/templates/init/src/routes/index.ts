import { Express, Request, Response } from 'express';
import { fetch } from 'laboperator-middleware/helpers';

module.exports = (app: Express): void => {
  app.get('/ping', async (_req: Request, res: Response) => {
    const response = await fetch({ url: 'http://example.com/ping' });

    res.json(helpers.jsonResponse(200, response.body));
  });
};
