exports.handler = function(event, context, callback) {
  try {
    var body = JSON.parse(event.body)
  }
  catch (e) {
    console.log(event)
    console.log(e)

    callback(
      e, // Error Object
      {
        statusCode: 400,
        body: '[ERROR] Invalid JSON'
      }
    )
    return
  }

  if ( !body.data.name ||
       !body.data.message )
  {
    callback(
      null,
      {
        statusCode: 200,
        body: '[SPAM DETECTED] Required fields not defined.'
      }
    )
    return
  }

  const URL = require('url')
  const https = require('https')

  const webhook_url = URL.parse(process.env.ZAPIER_CONTACT_FORM_WEBHOOK)
  // const webhook_url = URL.parse('https://chrisjmears.com/test')

  const options = {
    hostname: webhook_url.hostname,
    path: webhook_url.pathname,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }

  const req = https.request(options, function(res) {
    console.log('Status: ' + res.statusCode);
    console.log('Headers: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (body) {
      console.log('Body: ' + body);
    });
  });
  req.on('error', function(e) {
    console.log('[ERROR] Problem with request: ' + e.message);
  });
  req.write(JSON.stringify(body));
  req.end();

  callback(
    null,
    {
      statusCode: 200,
      body: `[SUCCESS] Sending webhook to ${webhook_url.format()}`
    }
  )
}
