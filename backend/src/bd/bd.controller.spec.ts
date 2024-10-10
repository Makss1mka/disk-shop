import { Test, TestingModule } from '@nestjs/testing';
import { BdController } from './bd.controller';
import { BdService } from './bd.service';

describe('BdController', () => {
  let controller: BdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BdController],
      providers: [BdService],
    }).compile();

    controller = module.get<BdController>(BdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
