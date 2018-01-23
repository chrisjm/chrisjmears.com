// Simple Contact Form Spam Filter
exports.handler = function(event, context, callback) {
  // 1. Parse the form
  try {
    const body = JSON.parse(event.body)
  }
  catch (e) {
    console.log(event)
    callback(
      e.message,
      {
        statusCode: 400,
        body: `[ERROR] Invalid JSON - ${e.message}`
      }
    )
    return
  }

  // 2. Filter
  if ( !body.data.name ||
       !body.data.message )
  {
    const errorMessage = '[SPAM DETECTED] Required fields not defined.'
    console.log(errorMessage)
    callback(
      null,
      {
        statusCode: 200,
        body: errorMessage
      }
    )
    return
  }

  // 3. Forward data to webhook (ie, send email)

  const URL = require('url')
  const https = require('https')

  // TODO: Lazy testing. Replace with `dotenv`
  // const webhook_url = URL.parse('https://chrisjmears.com/test')
  const webhook_url = URL.parse(process.env.ZAPIER_CONTACT_FORM_WEBHOOK)
  const options = {
    hostname: webhook_url.hostname,
    path: webhook_url.pathname,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }

  // Set up webhook request
  const req = https.request(options, function(res) {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Headers: ${JSON.stringify(res.headers)}`)
    res.setEncoding('utf8');

    // Log data
    res.on('data', function (body) {
      console.log(`Body: ${body}`);
    })
  })

  // Handle webhook request error
  req.on('error', function(e) {
    const errorMessage = `[ERROR] Problem with request: ${e.message}`
    console.log(errorMessage)

    callback(
      e.message,
      {
        statusCode: 400,
        body: errorMessage
      }
    )
  })

  // Send form data to webhook request and end request
  req.end(JSON.stringify(body))

  callback(
    null,
    {
      statusCode: 200,
      body: `[SUCCESS] Sending webhook to ${webhook_url.format()}`
    }
  )
}
