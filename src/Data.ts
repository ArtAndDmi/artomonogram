import axios from "axios"
import {message} from "./types/Message"


async function getData() {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
		const data = response.data
		data.length = 30
		const result: message[] = data.map((i: { title: string, id: number }) => {
			const message: message = {authorId: Math.round(Math.random()), body: i.title, id: i.id}
			return message
		})

		return result


	} catch {
		return [{authorId: 0, id: 0, body: 'Error: Failed to fetch'}]
	}
}


export default getData