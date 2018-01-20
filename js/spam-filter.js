exports.handler = function(event, context, callback) {
  console.log(event)

  const nodemailer = require('nodemailer')

  try {
    var body = JSON.parse(event.body)
  }
  catch (e) {
    console.log(e)
    callback(
      e, // Error Object
      {
        statusCode: 400,
        body: 'Invalid JSON'
      }
    )
    return
  }

  if ( !body.data.name || !body.data.message ) {
    // Return error, but notify like all is fine and dandy
    callback(
      'Required fields not defined',
      {
        statusCode: 200,
        body: 'OK'
      }
    )
    return
  }

  let transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix'
  });
  transporter.sendMail({
    from: body.data.email,
    to: 'chris.mears@gmail.com',
    subject: '[chrisjmears] Contact Form Message',
    text: body.data.message
  }, (err, info) => {
    console.log(info.envelope);
    console.log(info.messageId);
  });

  // Good to go
  callback(
    null,
    {
      statusCode: 200,
      body: 'OK'
    }
  )
}
