interface User {
	id: string;
	name: string;
	username: string;
	role: string;
}
export const USERS: Record<string, User> = {
	'123': {
		id: '123',
		name: 'John Doe',
		role: 'Engineering',
		username: 'johndoe'
	},
	'456': {
		id: '456',
		name: 'Bob Smith',
		role: 'Sales',
		username: 'bobsmith'
	},
	'789': {
		id: '789',
		name: 'Alice Johnson',
		role: 'Management',
		username: 'alicejohnson'
	}
};

interface Session {
	sessionToken: string;
	userId: string;
	expiresAt: Date;
}

export const SESSIONS: Record<string, Session> = {
	'69de3048-4864-4ff9-b232-f896fecfa742': {
		sessionToken: '69de3048-4864-4ff9-b232-f896fecfa742',
		userId: '123',
		expiresAt: new Date('2024-03-01T00:00:00.000Z')
	},
	'a6e4f25e-abac-40bf-aab8-d66f8abd1610': {
		sessionToken: 'a6e4f25e-abac-40bf-aab8-d66f8abd1610',
		userId: '456',
		expiresAt: new Date('2024-03-01T00:00:00.000Z')
	},
	'db72765a-a78b-4b20-88e9-eedfdf3d6664': {
		sessionToken: 'db72765a-a78b-4b20-88e9-eedfdf3d6664',
		userId: '789',
		expiresAt: new Date('2024-03-01T00:00:00.000Z')
	}
};

// currentPage: 1,
// pageSize: 5,
// totalPages: 4,
// totalRecordings: 20,

interface MeetingRecording {
	id: number;
	title: string;
	thumbnailUrl: string;
	recordingPageUrl: string;
	// recordedByRole: string;
	accessibleByRoles: string[];
}
export const MEETING_RECORDINGS: MeetingRecording[] = [
	{
		id: 101,
		title: 'Engineering Sync-up',
		thumbnailUrl: 'https://img.realiterate.com/thumb1.png',
		recordingPageUrl: 'https://example.com/recordings/rec-101',
		accessibleByRoles: ['Engineering', 'Management']
	},
	{
		id: 102,
		title: 'Sales Kickoff',
		thumbnailUrl: 'https://img.realiterate.com/thumb2.png',
		recordingPageUrl: 'https://example.com/recordings/rec-102',
		accessibleByRoles: ['Engineering', 'Sales', 'Management']
	},
	{
		id: 103,
		title: 'Product Launch Planning',
		thumbnailUrl: 'https://img.realiterate.com/thumb3.png',
		recordingPageUrl: 'https://example.com/recordings/rec-103',
		accessibleByRoles: ['Sales', 'Management']
	},
	{
		id: 104,
		title: 'Quarterly Business Review',
		thumbnailUrl: 'https://img.realiterate.com/thumb4.png',
		recordingPageUrl: 'https://example.com/recordings/rec-104',
		accessibleByRoles: ['Sales', 'Management']
	},
	{
		id: 105,
		title: 'UI/UX Design Trends',
		thumbnailUrl: 'https://img.realiterate.com/thumb2.png',
		recordingPageUrl: 'https://example.com/recordings/rec-105',
		accessibleByRoles: ['Design', 'Engineering', 'Product']
	},
	{
		id: 106,
		title: 'Is SQL Good',
		thumbnailUrl: 'https://img.realiterate.com/thumb1.png',
		recordingPageUrl: 'https://example.com/recordings/rec-106',
		accessibleByRoles: ['Engineering']
	},
	{
		id: 107,
		title: 'Customer Support Training',
		thumbnailUrl: 'https://img.realiterate.com/thumb2.png',
		recordingPageUrl: 'https://example.com/recordings/rec-107',
		accessibleByRoles: ['Sales', 'Management']
	},
	{
		id: 108,
		title: 'Customer Feedback Session',
		thumbnailUrl: 'https://img.realiterate.com/thumb3.png',
		recordingPageUrl: 'https://example.com/recordings/rec-108',
		accessibleByRoles: ['Sales', 'Management']
	},
	{
		id: 109,
		title: 'Customer Onboarding',
		thumbnailUrl: 'https://img.realiterate.com/thumb4.png',
		recordingPageUrl: 'https://example.com/recordings/rec-109',
		accessibleByRoles: ['Sales', 'Management']
	},
	{
		id: 110,
		title: 'Customer Retention Strategies',
		thumbnailUrl: 'https://img.realiterate.com/thumb3.png',
		recordingPageUrl: 'https://example.com/recordings/rec-110',
		accessibleByRoles: ['Sales', 'Management']
	},
	{
		id: 111,
		title: 'Customer Feedback Session',
		thumbnailUrl: 'https://img.realiterate.com/thumb1.png',
		recordingPageUrl: 'https://example.com/recordings/rec-111',
		accessibleByRoles: ['Sales', 'Management']
	},
	{
		id: 112,
		title: 'CEO Compensation Discussion',
		thumbnailUrl: 'https://img.realiterate.com/thumb2.png',
		recordingPageUrl: 'https://example.com/recordings/rec-112',
		accessibleByRoles: ['Management']
	},
	{
		id: 113,
		title: 'Sales HR Complaints',
		thumbnailUrl: 'https://img.realiterate.com/thumb4.png',
		recordingPageUrl: 'https://example.com/recordings/rec-113',
		accessibleByRoles: ['Sales']
	},
	{
		id: 114,
		title: 'Customer Feedback Session',
		thumbnailUrl: 'https://img.realiterate.com/thumb2.png',
		recordingPageUrl: 'https://example.com/recordings/rec-114',
		accessibleByRoles: ['Sales', 'Design', 'Management']
	},
	{
		id: 115,
		title: 'Customer Onboarding',
		thumbnailUrl: 'https://img.realiterate.com/thumb3.png',
		recordingPageUrl: 'https://example.com/recordings/rec-115',
		accessibleByRoles: ['Sales', 'Management']
	},
	{
		id: 116,
		title: 'Customer Shout Outs ',
		thumbnailUrl: 'https://img.realiterate.com/thumb1.png',
		recordingPageUrl: 'https://example.com/recordings/rec-116',
		accessibleByRoles: ['Sales', 'Management']
	},
	{
		id: 117,
		title: 'Customer Feedback Session',
		thumbnailUrl: 'https://img.realiterate.com/thumb2.png',
		recordingPageUrl: 'https://example.com/recordings/rec-117',
		accessibleByRoles: ['Sales', 'Management']
	}
];

export function getUuserFromSessionToken(sessionToken: string) {
	const session = SESSIONS[sessionToken];
	if (!session) {
		return null;
	}
	return USERS[session.userId] ?? null;
}
/*
In real life this is all in a relational DB and I leabe it to decades of battle testing
to return something like 

*/
export function getPaginatedRecordingsByRole(role: string, page: number, pageSize: number) {
	const filteredByRoleRecordings = MEETING_RECORDINGS.filter((recording) =>
		recording.accessibleByRoles.includes(role)
	);

	const pageBegin = (page - 1) * pageSize;
	const pageEnd = pageBegin + pageSize;

	// client doesn't need to know about the accessibleByRole
	const paginatedRecordings = filteredByRoleRecordings
		.slice(pageBegin, pageEnd)
		.map((recording) => {
			return {
				id: recording.id,
				title: recording.title,
				thumbnailUrl: recording.thumbnailUrl,
				recordingPageUrl: recording.recordingPageUrl
			};
		});
	const recordsAndMetadata = {
		recordings: paginatedRecordings,
		currentPage: page,
		pageSize: pageSize,
		totalPages: Math.ceil(filteredByRoleRecordings.length / pageSize),
		totalRecordings: filteredByRoleRecordings.length
	};
	return recordsAndMetadata;
}
