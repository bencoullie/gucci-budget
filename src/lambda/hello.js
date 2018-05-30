export function handler (event, context, callback) {
  window.console.log(event)
  callback(null, {
    body: JSON.stringify({ msg: 'Hello, World!' }),
    statusCode: 200
  })
}
