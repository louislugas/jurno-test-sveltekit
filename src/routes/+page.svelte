<script>
	import { invalidate } from '$app/navigation';
	import { onDestroy, onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	let { a, b } = data;

	onMount(() => {
		invalidate('/')
		console.log("home")
		document.querySelector("main")?.remove()
	})
	// onDestroy(() => {
	// 	console.log("home destroyed")
	// })
</script>

<article>
	<h1>Jurno.id | Publikasi Online Terbaik untuk Memahami Dunia</h1>
	<section>
		<h2>STORI</h2>
		{#each a as content,i}
		<a href="/stori/{content.slug}">
			<img
				loading={i == 0 ? "eager" : "lazy"}
				src="https://files.jurno.id/uploads/images/article/{content.thumbnail_social}?original=0"
				alt={content.title}/>
			<h3>{content.title}</h3>
			<p>{content.description}</p>
		</a>
		{/each}
	</section>
	<section>
		<h2>JURNOPEDIA</h2>
		{#each b as content,i}
		<a href="/jurnopedia/{content.slug}">
			<h3>{content.title}</h3>
			<p>{content.description}</p>
		</a>
		{/each}
	</section>
</article>

<style>
	* {
		font-family:sans-serif;
	}
	h1 {
		font-size:1.2rem;
		margin-bottom:0rem;
	}
	p {
		font-size:0.8rem;
		margin-top:0.5rem;
		margin-bottom:2rem;
	}
	article {
		width:88%;
		max-width:660px;
		margin: 0 auto;
	}
	img {
		width:100%;
		height:100%;
		max-width:660px;
		max-height:371px;
		aspect-ratio: 1.78;
	}
</style>
