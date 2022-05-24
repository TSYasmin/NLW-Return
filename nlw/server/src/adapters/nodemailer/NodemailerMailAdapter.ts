import { IMailAdapter, SendMailData } from "../IMailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "920bf3a4f4786d",
    pass: "2f600419a05be2",
  },
});

export class NodemailerMailAdapter implements IMailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Y S M <ysm@ysm.com>",
      subject,
      html: body,
    });
  }
}
