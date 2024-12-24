export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, setHeaders }) {
	setHeaders({'Cache-Control':'public, max-age=600'})
	const tokenurl = "https://api-dev.jurno.id/api/newsmap/v1/token";
	const urlStori = "https://api.jurno.id/api/newsmap/v1/article/list?size=10"
	const urlJurnopedia = "https://api.jurno.id/api/newsmap/v1/thread/list?size=10"
	
	async function getToken() {
		const token = await fetch(tokenurl)
		let t = await token.json()
		let access_t = t.access_token
		return access_t
	}

	async function getData(url) {
		let t = await getToken()
		const response = await fetch(url, {
			headers: {
				'Authorization': `JWT ${t}`
			}
		})
		return response
	}

	let resStori = await getData(urlStori)
	let aStori = await resStori.json()

	let resJurnopedia = await getData(urlJurnopedia)
	let aJurnopedia = await resJurnopedia.json()

	
	return {
		a:aStori.data,
		b:aJurnopedia.data
	};
}