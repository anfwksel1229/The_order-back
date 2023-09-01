const nodemailer = require("nodemailer");

module.exports = class EmailSender {
    static SUBJECT = "더오더 상담 신청 메일";

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            auth: {
                user: process.env.EMAIL_AUTH_USER,
                pass: process.env.EMAIL_AUTH_PASSWORD,
            },
        });
    }

    async send({to, phoneNumber, storeName, type, region, tableCount, content}) {
        const result = await this.transporter.sendMail({
            from: process.env.EMAIL_AUTH_USER, // 발신자 메일
            to, // 수신자 메일
            subject: EmailSender.SUBJECT, // 이메일 제목
            html: `
<p>연락처: ${phoneNumber}</p>
<p>매장명: ${storeName}</p>
<p>업종: ${type}</p>
<p>장소: ${region}</p>
<p>테이블 수: ${tableCount}</p>
<p>문의 사항: ${content}</p>`,
        });
    }
}