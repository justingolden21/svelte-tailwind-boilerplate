<script>
	export let name;
	export let focusable = false;

	// https://heroicons.dev/
	const icons = [
		{
			name: 'menu',
			svg: `<path stroke-linecap="square" stroke-linejoin="square" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>`
		},
		{
			name: 'close',
			svg: `<path stroke-linecap="square" stroke-linejoin="square" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>`
		},
		{
			name: 'moon',
			svg: `<path stroke-linecap="square" stroke-linejoin="square" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>`
		}
	];
	$: icon = icons.find((i) => i.name === name);
</script>

<svg
	class={$$props.class ?? ''}
	{focusable}
	stroke="currentColor"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	viewBox={icon.viewbox ?? '0 0 24 24'}
>
	{@html icon.svg}
</svg>
