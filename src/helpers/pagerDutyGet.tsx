const authorizationToken = "w_8PcNuhHa-y3xYdmc1x";

export default function pagerdutyRequest(endpoint: string, method: string, options: object) {
	return window.fetch("https://api.pagerduty.com/" + endpoint, {
		headers: {
			"Authorization": "Token token=" + authorizationToken,
			"Accept": "application/vnd.pagerduty+json;version=2"
		},
		method: method, // *GET, POST, PUT, DELETE, etc.
		mode: 'no-cors', // no-cors, cors, *same-origin
		...options
	}).then(response => {
		return response.json().then(schedule => schedule)
	}).catch(err => {
		console.log('ERROR: ', err)
	})
}

// pagerdutyRequest('users')
