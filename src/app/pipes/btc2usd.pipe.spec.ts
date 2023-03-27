import { Btc2usdPipe } from './btc2usd.pipe';

describe('Btc2usdPipe', () => {
  it('create an instance', () => {
    const pipe = new Btc2usdPipe();
    expect(pipe).toBeTruthy();
  });
});
