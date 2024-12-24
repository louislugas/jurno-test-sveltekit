<script>
	import { invalidate } from '$app/navigation';
	import { onDestroy, onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	let { a } = data;

    onMount(() => {
        console.log(a.slug)
        if (document.querySelectorAll("main").length > 1) {
            document.querySelectorAll("main")[0].remove()
            console.log("multiple main detected")
        } else {
            console.log("clear")
        }
    })

</script>

<svelte:head>
	<meta charset='utf-8'>
	<meta name='viewport' content='width=device-width,initial-scale=1'>

	<!-- Judul bisa berubah tergantung input judul ketika upload -->
	<title>{a.title}</title>
	
	<!-- Bisa diganti dengan favicon newsmap -->
	<link rel='icon' type='image/png' href='./favicon.png'>
	
	<!-- 3 file di bawah jadi absolute path -->
    <link 
        rel="preload" 
        href="https://assets.jurno.id/article/{a.slug}/global.css" 
        as="style">	
	<link 
        rel="preload" 
        href="https://assets.jurno.id/article/{a.slug}/bundle.css" 
        as="style">

    <link rel="stylesheet" href="https://assets.jurno.id/article/{a.slug}/global.css">
    <link rel="stylesheet" href="https://assets.jurno.id/article/{a.slug}/bundle.css">

	<script defer src='https://assets.jurno.id/article/{a.slug}/bundle.js'></script>
</svelte:head>

<article class="reader">
    <h1>{a.title}</h1>
    <p>{a.description}</p>
    <p>{a.keywords}</p>
    {@html a.article}
</article>

<style>
    :global(body) {
        margin:0;
    }
    .reader {
        opacity:0;
        position:absolute;
        touch-action:none;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
        pointer-events: none;
    }
</style>
