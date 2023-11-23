import { server } from 'laboperator-middleware/test_helper';

jest.retryTimes(1);

describe('Built-in Routes', () => {
  describe('GET /ping', () => {
    it('should be okay', async () => {
      const response = await server().get('/ping');

      expect(response).toHaveProperty('status', 200);
      expect(response.body).toMatchObject({
        code: 200,
        details: 'It just works™',
        status: 'OK',
      });
    });
  });
});
