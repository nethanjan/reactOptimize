import axios from 'axios'
import { ApiResponse } from '../interfaces/actions/ApiResponse'

export default {
  runGraphQLRequest(
    requesType: string,
    type: string,
    action: string,
    fields: string,
  ): Promise<any> {
    // const query = jsonToGraphQLQuery(fields, { pretty: true });

    const options = {
      method: requesType,
      url: '/graphql',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        [type]: fields,
      },
      proxy: {
        host: 'localhost',
        port: 3001,
      },
    }

    return new Promise((resolve, reject) => {
      axios
        .request(options)
        .then((result: ApiResponse) => {
          resolve(result.data.data.categories) // result.data.data[action]
        })
        .catch((error: any) => {
          console.log(error)
          reject()
        })
    })
  },
}
