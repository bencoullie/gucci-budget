

export default function pagerdutyRequest(endpoint: string) {
	return window.fetch("https://vendhq.pagerduty.com/" + endpoint, {
		headers: {
			"Accept": "application/vnd.pagerduty+json;version=2",
			"Authorization": "Token token=LxS9M5rWErDQTqVDaQsH"
		},
		method: 'GET',
		mode: 'no-cors'
	})
	.then(response => response.json())
	.catch(err => {window.console.log('ERROR: ', err)})
}

// pagerdutyRequest('users')
