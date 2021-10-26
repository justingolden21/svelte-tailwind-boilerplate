<script>
	import { page, session } from '$app/stores';

	export let navOpen;
</script>

<nav
	class="z-10
        min-h-screen
		bg-gray-100
        dark:bg-gray-800
        p-8
        pt-16
        absolute
        left-0
        transition-all
        md:relative
        md:translate-x-0
        w-64"
	class:-translate-x-full={!navOpen}
>
	<a class:active={$page.path === '/'} href="/">
		{$session.languageDictionary.pageNames.page1}
	</a>
	<a class:active={$page.path === '/page2'} href="/page2">
		{$session.languageDictionary.pageNames.page2}
	</a>
</nav>

<style lang="postcss">
	a {
		@apply inline-flex w-full my-2;
	}
</style>
