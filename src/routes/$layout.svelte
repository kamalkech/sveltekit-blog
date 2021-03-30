<script>
	// Import components.
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Import styles.
	import '../styles/bootstrap/css/bootstrap.css';
	import '../styles/fontawesome-free/css/all.css';
	import '../styles/clean-blog.css';
	import '../styles/app.scss';
</script>

<Header />

<div class="container">
	<div class="row">
		<div class="col-lg-8 col-md-10 mx-auto">
			<slot />
		</div>
	</div>
</div>

<Footer />
