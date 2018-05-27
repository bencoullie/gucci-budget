export default function pagerdutyRequest(endpoint: string) {
	return window.fetch(`https://cors-anywhere.herokuapp.com/https://api.pagerduty.com/${endpoint}`, {
		headers: {
			"Accept": "application/vnd.pagerduty+json;version=2",
			"Authorization": "Token token=LxS9M5rWErDQTqVDaQsH"
		},
		method: 'GET'
	})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			window.console.log(jsonResponse[endpoint])
			return jsonResponse[endpoint]
		})
		.catch((error: string) => {
			window.console.log('An error in your pagerduty fetch has occurred! Error details are as follows: ', error)
		})
}
