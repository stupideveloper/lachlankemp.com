const apiKey = process.env.CONVERTKIT_API_KEY;
const formId = process.env.CONVERTKIT_FORM_ID;
const subscribe = async (req, res) => {
	const { email } = req.body;
	if (!email) {
		return res.status(400).json({ error: 'Email is required' });
	}
	try {
		const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, { 
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify({
				"api_key": apiKey,
				"email": email
			})
		});
		const data = await response.json();
		return res.status(201).json({ error: '', createdAt: data.subscription.created_at, state: data.subscription.state });
	} catch (error) {
		return res.status(500).json({ error: error.message || error.toString() });
	}
};
export default subscribe;