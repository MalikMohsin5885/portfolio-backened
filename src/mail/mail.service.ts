import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly mailService: MailerService) {}

  async sendMail(from: string, name: string, message: string) {
    try {
      const result = await this.mailService.sendMail({
        from,
        to: 'malikmohsin8239@gmail.com', // Your email address
        subject: `New message from ${name}`,
        text: `from ${name}<${from}>\n\n${message}\n\nBest wishes\n${name}`,
      });
      return result;
    } catch (error) {
      throw new Error('Failed to send email: ' + error.message);
    }
  }
}
