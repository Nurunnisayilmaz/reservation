import { Injectable } from '@nestjs/common';

@Injectable()
export class GuestService {
    getHello(): string {
        return 'Hello Guest!';
    }
}
