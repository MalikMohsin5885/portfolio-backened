import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { ContactController } from './contact/contact.controller';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    // Load environment variables
    ConfigModule.forRoot({
      isGlobal: true, // Makes the module globally available
    }),
    // Configure the MailerModule with environment variables
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        auth: {
          user: process.env.EMAIL_USER, // Access environment variables
          pass: process.env.EMAIL_PASS, // Access environment variables
        },
      },
    }),
  ],
  controllers: [AppController, ContactController],
  providers: [AppService, MailService],
})
export class AppModule {}
