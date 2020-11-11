const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
  sgMail.send({
    to:email,
    from:'anup.laz@gmail.com',
    subject: 'Welcome to Task-Manger',
    text:`Hello ${name}, Welcome to the Task-Manager. Let me know how you get along with app.`
  })
}

const sendGoodbyeEmail=(email,name)=>{
  sgMail.send({
    to:email,
    from:'anup.laz@gmail.com',
    subject: 'Good Bye from Task-Manger',
    text:`Hello ${name}, Sorry to see you leave from the Task-Manager. Please let us know why you left.`

  })
}

module.exports= {
  sendWelcomeEmail,sendGoodbyeEmail
}