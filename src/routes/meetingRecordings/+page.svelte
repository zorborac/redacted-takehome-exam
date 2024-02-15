<script lang="ts">
	function logOut() {
		document.cookie =
			'sessionToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Strict';
	}
	export let data;
	const { currentUser, recordings, totalPages, currentPage } = data ?? [];
</script>

<section>
	{#if currentUser}
		<div class="user-info">
			<h3>{`${currentUser.name} - Role: ${currentUser.role}`}</h3>
			<a href="/" data-sveltekit-reload on:click={logOut}>Logout</a>
		</div>
	{/if}

	{#if currentPage && totalPages}
		<p>{'Page ' + currentPage + ' of ' + totalPages}</p>
		{#if currentPage > 1}
			<a data-sveltekit-reload href={`/meetingRecordings?pageNumber=${currentPage - 1}`}>Previous</a
			>
		{/if}
		{#if currentPage < totalPages}
			<a data-sveltekit-reload href={`/meetingRecordings?pageNumber=${currentPage + 1}`}>Next</a>
		{/if}
	{/if}

	{#each recordings as meetingRecord (meetingRecord.id)}
		<a href={meetingRecord.recordingPageUrl}>
			<div class="meeting-record-chip">
				<img src={meetingRecord.thumbnailUrl} alt={meetingRecord.title} />
				<h2>{meetingRecord.title}</h2>
			</div>
		</a>
	{/each}
</section>

<style>
	.user-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	a {
		text-decoration: none;
		color: #0070f3;
	}
	.meeting-record-chip {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		border: 1px solid #ccc;
		display: flex;
		border-radius: 4px;
		padding: 1rem;
		margin: 1rem 0;
		max-width: 30rem;
	}

	.meeting-record-chip:hover {
		background-color: #f0f0f0;
	}
	.meeting-record-chip img {
		max-width: 64px;
		max-height: 64px;
		margin-right: 2rem;
	}
	.meeting-record-chip h2 {
		margin-bottom: 0.5rem;
	}
</style>
