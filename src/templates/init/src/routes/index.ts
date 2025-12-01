import { Express, Request, Response } from 'express';
import { jsonResponse } from 'middleware/helpers';

export default (app: Express): void => {
  app.get('/ping', async (_req: Request, res: Response) => {
    res.json(jsonResponse(200, 'It just works™'));
  });
};
