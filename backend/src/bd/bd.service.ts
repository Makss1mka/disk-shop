import { Injectable } from '@nestjs/common';
import { BD_IMITATION } from './bd';
import { Disk } from 'src/types/diskType';

@Injectable()
export class BdService {
    getAll(): Disk[] {
        return BD_IMITATION
    }

    getById(id: number): Disk | null{
        if (id < 1 || id > BD_IMITATION.length) {
            return null;
        } else {
            return BD_IMITATION[id - 1];
        }
    }
}
