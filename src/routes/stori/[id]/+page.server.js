export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, setHeaders}) {
	const tokenurl = "https://api-dev.jurno.id/api/newsmap/v1/token";
	const url = `https://api.jurno.id/api/newsmap/v1/article/detail/${params.id}`
	
	async function getToken() {
		const token = await fetch(tokenurl)
		let t = await token.json()
		let access_t = t.access_token
		return access_t
	}

	async function getData() {
		let t = await getToken()
		const response = await fetch(url, {
			headers: {
				'Authorization': `JWT ${t}`
			}
		})
		return response
	}

	let res = await getData(url)
	let a = await res.json()
	
	return {
		a:a
	};
}