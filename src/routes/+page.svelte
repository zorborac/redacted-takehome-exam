<script lang="ts">
	import { browser } from '$app/environment';
	import type { PageData } from './$types';

	function selectRecentUser(sessionToken: string) {
		if (browser) {
			// set as httpOnly
			document.cookie = `sessionToken=${sessionToken}; path=/; SameSite=Strict`;
		}
	}
	const RECENT_USERS = [
		{
			name: 'Alice Johnson',
			username: 'alicejohnson',
			role: 'Management',
			sessionToken: 'db72765a-a78b-4b20-88e9-eedfdf3d6664'
		},
		{
			name: 'Bob Smith',
			username: 'bobsmith',
			role: 'Sales',
			sessionToken: ' a6e4f25e-abac-40bf-aab8-d66f8abd1610'
		},
		{
			name: 'John Doe',
			username: 'johndoe',
			role: 'Engineering',
			sessionToken: '69de3048-4864-4ff9-b232-f896fecfa742'
		}
	];
	export let data: PageData;
	const { currentUser } = data ?? null;
</script>

<h1>{'{Redacted} Org Take Home'}</h1>

{#if currentUser}
	<h3>Logged in as:</h3>
	<h3>{currentUser.name}</h3>
	<p>Role: {currentUser.role}</p>
	<a href="/meetingRecordings">Meeting Recordings</a>
{:else}
	<h2>YOU'RE LOGGED OUT</h2>
	<p>Recent users</p>
	{#each RECENT_USERS as user}
		<div class="user-card">
			<h2>{user.name}</h2>
			<a href="/meetingRecordings" on:click={() => selectRecentUser(user.sessionToken)}
				>Login as {user.username}</a
			>
			<p>Role: {user.role}</p>
		</div>
	{/each}
{/if}

<style>
	.user-card {
		border: 1px solid #ccc;
		padding: 1rem;
		margin: 1rem 0;
	}
	.user-card h2 {
		margin-top: 0;
	}
</style>
