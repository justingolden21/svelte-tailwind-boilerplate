<script>
	import '../app.postcss';

	import { navigating, page, session } from '$app/stores';
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	import Nav from '../components/Nav.svelte';
	import Icon from '../components/Icon.svelte';
	import { settings } from '../components/settings.js';

	let navOpen = false;
	$: if ($navigating) navOpen = false;

	// check when session changes
	// also check that browser exists so we can reference document
	// toggle dark class based on setting
	$: if ($session && browser)
		$settings.darkMode
			? document.body.parentNode.classList.add('dark')
			: document.body.parentNode.classList.remove('dark');

	onMount(() => {
		// auto detect user device preferences
		if ($settings.darkMode === null) {
			$settings.darkMode = !!window.matchMedia('(prefers-color-scheme: dark)').matches;
		}
	});
</script>

<svelte:head>
	<meta name="title" content={$session.languageDictionary['appName']} />
	<meta name="description" content={$session.languageDictionary['appDescription']} />
	<meta name="keywords" content={$session.languageDictionary['appKeywords']} />

	<meta property="og:image:height" content="292" />
	<meta property="og:image:width" content="558" />
	<meta property="og:description" content={$session.languageDictionary['appDescription']} />
	<meta property="og:title" content={$session.languageDictionary['appName']} />
	<!-- <meta property="og:url" content="APP URL" /> -->
	<meta property="og:image" content="img/icons/og-image.jpg" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={$session.languageDictionary['appName']} />

	<meta name="twitter:title" content={$session.languageDictionary['appName']} />
	<meta name="twitter:description" content={$session.languageDictionary['appDescription']} />
	<!-- <meta property="twitter:url" content="APP URL" /> -->

	<meta name="apple-mobile-web-app-status-bar" content="#FFFFFF" />
	<meta name="theme-color" content="#FFFFFF" />
	<meta name="msapplication-TileColor" content="#FFFFFF" />
	<link rel="mask-icon" href="img/icons/safari-pinned-tab.svg" color="#FFFFFF" />
</svelte:head>

<div class="text-center flex min-h-screen">
	<Nav bind:navOpen />
	<div class="flex-1 relative p-8">
		<div class="flex-1 relative z-20">
			<button
				class="float-left md:hidden"
				on:click={() => (navOpen = !navOpen)}
				aria-label={$session.languageDictionary.labels['Menu']}
			>
				<Icon name={navOpen ? 'close' : 'menu'} class="w-6 h-6" />
			</button>
			<button
				class="float-right"
				aria-label={$session.languageDictionary.labels['Toggle Dark Mode']}
				on:click={() => ($settings.darkMode = !$settings.darkMode)}
			>
				<Icon name="moon" class="w-6 h-6" />
			</button>
		</div>
		<slot />
	</div>
</div>
