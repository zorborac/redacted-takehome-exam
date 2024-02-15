import { getPaginatedRecordingsByRole, getUuserFromSessionToken } from '$lib/server/database';

import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// function retrieveUser(userid: string) {
// 	// Retrieve user from database
// 	// return {
// 	// 	id: userid,
// 	// 	name: 'John Doe',
// 	// 	role: 'Engineering'
// 	// };
// }
// Would normally be a wrapper for a SQL query or an ORM method

export const GET: RequestHandler = async ({ cookies, url }) => {
	console.log({ url, cookies: cookies.getAll() });

	const pageNumber = url.searchParams.get('pageNumber') ?? 1;
	const pageSize = url.searchParams.get('pageSize') ?? 5;

	const sessionToken = cookies.get('sessionToken');
	//console.log({ sessionToken });
	if (!sessionToken) {
		// SvelteKit convenience method, throws an error with status code 401
		error(401, { message: 'Unauthorized' });
	}

	const currentUser = getUuserFromSessionToken(sessionToken);
	if (!currentUser) {
		error(401, { message: 'Unauthorized' });
	}
	const currentRole = currentUser.role;

	const paginatedRecordingsByRole = getPaginatedRecordingsByRole(
		currentRole,
		Number(pageNumber),
		Number(pageSize)
	);
	console.log({ paginatedRecordingsByRole });

	return json(paginatedRecordingsByRole);
};
