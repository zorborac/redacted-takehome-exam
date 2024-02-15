import type { PageServerLoad } from './$types';
import { getUuserFromSessionToken } from '$lib/server/database';

export const load = (async ({ cookies }) => {
	const sessionToken = cookies.get('sessionToken');
	if (sessionToken) {
		const user = getUuserFromSessionToken(sessionToken);
		if (user) {
			return {
				currentUser: {
					name: user.name,
					role: user.role,
					username: user.username
				}
			};
		}
	}
	return {};
}) satisfies PageServerLoad;
