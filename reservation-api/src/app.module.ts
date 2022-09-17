import { Module } from '@nestjs/common';
import {AdminModule} from './admin/admin.module';
import {UserModule} from './users/user.module';
import {GuestModule} from './guests/guest.module';


@Module({
  imports: [AdminModule,UserModule,GuestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
