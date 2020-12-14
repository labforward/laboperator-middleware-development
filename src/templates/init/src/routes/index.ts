import { Express, Request, Response } from 'express';
import { fetch, jsonResponse } from 'laboperator-middleware/helpers';

export default (app: Express): void => {
  app.get('/ping', async (_req: Request, res: Response) => {
    const response = await fetch({ url: 'http://example.com/ping' });

    res.json(jsonResponse(200, response.body));
  });
};
