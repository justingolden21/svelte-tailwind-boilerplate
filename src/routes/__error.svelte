<script context="module">
	import { session } from '$app/stores';

	export const load = ({ error, status }) => {
		return {
			props: {
				error,
				status
			}
		};
	};
</script>

<script>
	export let error;
	export let status;
</script>

<svelte:head>
	<title>{$session.languageDictionary.error['Error']}</title>
</svelte:head>

<div class="m-16 text-center">
	{#if status === 404}
		<h2>{$session.languageDictionary.error['The resource could not be found']}</h2>
	{/if}
	<h2>{error.name} {status}</h2>
	<p>{error.message}</p>
	<a href="/">{$session.languageDictionary.error['Go back to the homepage']}</a>
</div>
