<script lang="ts">
	// Import packages.
	import { page } from '$app/stores';

	// Import types.
	import type { ContentHeader } from '$lib/type/content_header';

	// Import components.
	import Nav from './Nav.svelte';

	// Declar variables.
	export let content: ContentHeader;
	const header_contents: ContentHeader[] = [
		{
			page: '',
			img_bg: 'home-bg.jpg',
			title: 'Clean Blog',
			description: 'A Blog Theme by Start Bootstrap'
		},
		{
			page: 'about',
			img_bg: 'about-bg.jpg',
			title: 'About Me',
			description: 'This is what I do.'
		},
		{
			page: 'simple-post',
			img_bg: 'post-bg.jpg',
			title: 'Man must explore, and this is exploration at its greatest',
			description: 'A Blog Theme by Start Bootstrap'
		},
		{
			page: 'contact',
			img_bg: 'contact-bg.jpg',
			title: 'Contact me',
			description: 'Have questions? I have answers.'
		}
	];

	page.subscribe((value) => {
		const item = header_contents.filter((c) => `/${c.page}` == value.path);
		content = item[0] ? item[0] : header_contents[2];
	});
</script>

<Nav />

{#if content}
	<header class="masthead" style="background-image: url('/images/{content.img_bg}')">
		<div class="overlay" />
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto">
					<div class="site-heading">
						<h1>{content.title}</h1>
						<span class="subheading">{content.description}</span>
					</div>
				</div>
			</div>
		</div>
	</header>
{/if}
