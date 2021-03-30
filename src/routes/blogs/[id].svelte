<script context="module">
	export async function load({ page, fetch, session, context }) {
		const id = page.params.id;

		const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					article: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script lang="ts">
	import type { Article } from '$lib/type/article';
	export let article: Article;
</script>

{#if article}
	<div class="post-preview">
		<a href="blogs/{article.id}">
			<h2 class="post-title">{article.title}</h2>
			<div class="post-subtitle">{article.body}</div>
		</a>
	</div>
{/if}
