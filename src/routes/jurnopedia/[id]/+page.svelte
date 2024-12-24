<script>
	import { invalidate } from '$app/navigation';
	import { onDestroy, onMount } from 'svelte';
    import { decode } from 'html-entities'

	/** @type {import('./$types').PageData} */
	export let data;
	let { a } = data;

    onMount(() => {
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
</svelte:head>

<article>
    <h1>{a.title}</h1>
    <p>{a.description}</p>
    <p>{a.keywords}</p>
    <p>{@html decode(a.article)}</p>
</article>

<style>
    :global(body) {
        margin:0;
    }
    article {
        width:88%;
        max-width: 660px;
        margin: 0 auto;
    }
</style>
