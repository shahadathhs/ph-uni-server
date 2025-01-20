import nodemailer from 'nodemailer'

import { config } from '../config/config'

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com.',
    port: 587,
    secure: config.env === 'production',
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'shahadathhossensajib732@gmail.com',
      pass: 'xfqj dshz wdui ymtb'
    }
  })

  await transporter.sendMail({
    from: 'shahadathhossensajib732@gmail.com', // sender address
    to, // list of receivers
    subject: 'Reset your password within ten mins!', // Subject line
    text: '', // plain text body
    html // html body
  })
}
