<script context="module">
	export async function load({ page, fetch, session, context }) {
		if (page.path === '/') {
			const url = `https://jsonplaceholder.typicode.com/posts?_limit=5`;
			const res = await fetch(url);
			if (res.ok) {
				return {
					props: {
						articles: await res.json()
					}
				};
			}
			return {
				status: res.status,
				error: new Error(`Could not load ${url}`)
			};
		} else {
			return {};
		}
	}
</script>

<script lang="ts">
	import type { Article } from '$lib/type/article';
	export let articles: Article[];
</script>

{#if articles}
	{#each articles as article}
		<div class="post-preview">
			<a href="blogs/{article.id}">
				<h2 class="post-title">{article.title}</h2>
				<div class="post-subtitle">{article.body}</div>
			</a>
		</div>
		<hr />
	{/each}
	<!-- Pager -->
	<div class="clearfix">
		<a class="btn btn-primary float-right" href="/">Older Posts &rarr;</a>
	</div>
{/if}
