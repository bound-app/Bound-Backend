import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { config } from '../config/configuration';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signinGoogle(code: string) {
    console.log(code);
    return {
      token: 'Token',
    };
    // const tokens = await this.getGoogleTokens(code);
    // const userInfo = await this.getGoogleUserInfo(tokens.access_token);

    // if (!(await this.userRepository.existsBy({ email: userInfo.email }))) {
    //   await this.userRepository.save({
    //     email: userInfo.email,
    //     roles: [Role.Admin],
    //   });
    // }

    // const user = await this.userRepository.findOneBy({
    //   email: userInfo.email,
    // });

    // const token = this.jwtService.sign({ sub: user.id });
    // return {
    //   token,
    // };
  }

  private async getGoogleTokens(code: string) {
    const url = 'https://oauth2.googleapis.com/token';
    const bodyData = {
      code: code,
      client_id: config().google.clientId,
      client_secret: config().google.clientSecret,
      redirect_uri: config().google.callbackUrl,
      grant_type: 'authorization_code',
    };

    try {
      const { data } = await axios.post(url, new URLSearchParams(bodyData), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      return data;
    } catch (error) {
      throw new UnauthorizedException('Google 코드가 유효하지 않습니다.');
    }
  }

  private async getGoogleUserInfo(accessToken: string) {
    const url = 'https://www.googleapis.com/oauth2/v2/userinfo';

    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return data;
    } catch (error) {
      throw new UnauthorizedException(
        'Google 엑세스 토큰이 유효하지 않습니다.',
      );
    }
  }
}
