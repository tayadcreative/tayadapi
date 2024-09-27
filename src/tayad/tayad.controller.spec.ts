import { Test, TestingModule } from '@nestjs/testing';
import { TayadController } from './tayad.controller';
import { TayadService } from './tayad.service';

describe('TayadController', () => {
  let controller: TayadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TayadController],
      providers: [TayadService],
    }).compile();

    controller = module.get<TayadController>(TayadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
