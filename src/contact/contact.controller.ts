import { Controller, Post, Body, Res, Get } from '@nestjs/common';
import { MailService } from '../mail/mail.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  async sendMailer(
    @Body('email') email: string,
    @Body('name') name: string,
    @Body('message') message: string,
    @Res() response: any,
  ) {
    try {
      await this.mailService.sendMail(email, name, message);
      return response.status(200).json({
        message: 'Email sent successfully',
      });
    } catch (error) {
      return response.status(500).json({
        message: 'Failed to send email',
        error: error.message,
      });
    }
  }

  @Get()
  getHello(@Res() response: any) {
    console.log('Hello World');
    return response.status(200).json({
      message: 'Hello World',
    });
  }
}
