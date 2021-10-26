<script>
	import { session } from '$app/stores';
</script>

<svelte:head>
	<title>{$session.languageDictionary.pageNames.page1}</title>
</svelte:head>

<h1>{$session.languageDictionary.pageNames.page1}</h1>
<p class="mt-4 text-left">
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quas quos <a href="/"
		>provident voluptatibus</a
	> dolores nostrum iusto amet consequatur libero itaque?
</p>
