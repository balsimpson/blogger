import type { IncomingMessage, ServerResponse } from "http";
import { useBody } from 'h3'

export default async (req: IncomingMessage, res: ServerResponse) => {

    if (req.method !== 'POST') return 'Must be post request'

    const { user } = await useBody(req) // only for POST request

    // @ts-ignore
    req.user = user;

    // console.log('api-auth', user)

    // return { updated: true }
    // @ts-ignore
    // const user = req.user;
    
    // console.log('user', user);
    // if (user) {
    //     res.statusCode = 200
    //     res.end('This is a top secret message from the API')
    // }
    // res.statusCode = 400
    // res.end('Must be signed in to read secret message')
    return { updated: true }
};