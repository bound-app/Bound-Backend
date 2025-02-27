import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { config } from './config/configuration';
import { postgresConfig } from './config/database.config';
import { UserModule } from './user/user.module';
import { GoalModule } from './goal/goal.module';
import { BoundModule } from './bound/bound.module';
import { MateModule } from './mate/mate.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(postgresConfig),
    ConfigModule,
    GoalModule,
    BoundModule,
    MateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
