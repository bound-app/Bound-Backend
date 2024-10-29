import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login/google')
  async signinGoogle(@Req() req: Request) {
    console.log(req.query);
    return this.authService.signinGoogle(req.query.code.toString());
  }
}
