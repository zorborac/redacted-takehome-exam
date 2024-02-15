import { getUuserFromSessionToken } from '$lib/server/database';

import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, cookies, url }) => {
	// console.log('cookies', { cookies: cookies.getAll() });
	const pageNumber = url.searchParams.get('pageNumber') ?? 1;
	const pageSize = url.searchParams.get('pageSize') ?? 5;
	const paginatedMeetingRecords = await fetch(
		`/api/meetingRecordings?pageNumber=${pageNumber}&pageSize=${pageSize}`
	);

	const sessionToken = cookies.get('sessionToken');
	if (!sessionToken) {
		// SvelteKit convenience method, throws an error with status code 401
		error(401, { message: 'Unauthorized' });
	}
	const currentUser = getUuserFromSessionToken(sessionToken);
	if (!currentUser) {
		error(401, { message: 'Unauthorized' });
	}

	if (!paginatedMeetingRecords.ok) {
		const { status } = paginatedMeetingRecords;
		if (status === 401) {
			error(status, { message: 'Unauthorized' });
		}
		//  send blanket 500 for other statuses for now, we want to return a minimal amount of
		//  information to the client, consider even removing the 401 case
		error(500, {
			message: 'Unable to retrieve meeting recordings'
		});
	}

	const clientUser = {
		name: currentUser.name,
		role: currentUser.role,
		username: currentUser.username
	};

	const paginatedMeetingRecordsJson = await paginatedMeetingRecords.json();

	return {
		...paginatedMeetingRecordsJson,
		currentUser: clientUser
	};
}) satisfies PageServerLoad;
