import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'src/config/configuration';
import { User } from 'src/user/entities/user.entity';
import { UserFacade } from 'src/user/facade/user.facade';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserFacade],
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      global: true,
      useFactory: async () => ({
        secret: config().jwt.accessSecret,
        signOptions: { expiresIn: '3600s' },
      }),
    }),
  ],
})
export class AuthModule {}
