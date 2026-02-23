import axios from 'axios'

/**
 * For getting the key we need to use a password
 * Happy@1**4**!** ( replace the * with appropriate values )
 */

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
	params: {
		key: '15b87e48ed834fc38ee3c00556c98d36' // c7b18323a47d40c394ea5b019646b1f5
	}
})