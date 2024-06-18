import { env } from '$env/dynamic/private';
import { error, json } from '@sveltejs/kit';

export async function POST({ request }) {
	try {
		const { code } = await request.json();

		const params = new URLSearchParams();
		params.append('client_id', env.CLIENT_ID || '');
		params.append('client_secret', env.CLIENT_SECRET);
		params.append('grant_type', 'authorization_code');
		params.append('code', code);

		const response = await fetch('https://discord.com/api/oauth2/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: params
		});

		const { access_token } = await response.json();

		return json({ access_token });
	} catch (err) {
		console.error(err);
		throw error(500, 'Internal Server Error');
	}
}

export async function GET() {
	throw error(405, "Route doesn't support GET requests. Try POST instead.");
}
