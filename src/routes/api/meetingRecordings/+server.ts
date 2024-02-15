import { getPaginatedRecordingsByRole, getUuserFromSessionToken } from '$lib/server/database';

import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// function retrieveUser(userid: string) {

// 	return DUMMY_USERS.find(user => user.id === userid);
// 	// Retrieve user from database
// 	// return {
// 	// 	id: userid,
// 	// 	name: 'John Doe',
// 	// 	role: 'Engineering'
// 	// };
// }
// Would normally be a wrapper for a SQL query or an ORM method

export const GET: RequestHandler = async ({ request, cookies, url }) => {
	console.log({ url, cookies: cookies.getAll() });
	// normally we would have a sessionToken or some other form of authentication in the cookies
	// and we would use that to retrieve the user's information from the database
	// const currentUser = retrieveUser(cookies.userid);
	const pageNumber = url.searchParams.get('pageNumber') ?? 1;
	const pageSize = url.searchParams.get('pageSize') ?? 5;

	const sessionToken = cookies.get('sessionToken');
	console.log({ sessionToken });
	// const sessionToken = 'a6e4f25e-abac-40bf-aab8-d66f8abd1610';
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
