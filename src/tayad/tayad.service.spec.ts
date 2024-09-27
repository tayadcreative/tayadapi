import { Test, TestingModule } from '@nestjs/testing';
import { TayadService } from './tayad.service';

describe('TayadService', () => {
  let service: TayadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TayadService],
    }).compile();

    service = module.get<TayadService>(TayadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
