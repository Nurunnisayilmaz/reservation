import { Controller, Get } from '@nestjs/common';
import { GuestService } from './guest.service';

@Controller('guest')
export class GuestController {
    constructor(private readonly guestService: GuestService ) {}

    @Get('hello')
    getHello(): string {
        return this.guestService.getHello();
    }
}
