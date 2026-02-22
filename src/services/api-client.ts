import axios from 'axios'

/**
 * For getting the key we need to use a password
 * Happy@1**4**!** ( replace the * with appropriate values )
 */

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
	params: {
		key: '4c80526100c44d298107d0912010cf14' // c7b18323a47d40c394ea5b019646b1f5
	}
})