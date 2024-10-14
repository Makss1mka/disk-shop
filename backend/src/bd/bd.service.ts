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

    getPage(page: number) {
        if (page < 1 || page > Math.ceil(BD_IMITATION.length / 12)) {
            return null;
        } else {
            return BD_IMITATION.slice(12 * (page - 1), 12 * page)
        }
    }
}
