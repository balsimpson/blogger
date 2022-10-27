import type { IncomingMessage, ServerResponse } from "http";
import { useBody } from 'h3'

export default async (req: IncomingMessage, res: ServerResponse) => {

    // console.log('api-auth', user)
    let result = await $fetch("https://dev--playground.tinkr.autocode.gg/sendgrid/")
    return { result }
};