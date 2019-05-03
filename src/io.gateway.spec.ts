import { Test, TestingModule } from '@nestjs/testing';
import { IoGateway } from './io.gateway';

describe('IoGateway', () => {
  let gateway: IoGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IoGateway],
    }).compile();

    gateway = module.get<IoGateway>(IoGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
