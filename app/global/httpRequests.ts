
import {Response} from "next/dist/compiled/@edge-runtime/primitives";
import {RestError} from "@/app/global/restError";

export async function httpRequest<T>(url: string, method: string, body: object | null) {

    const response: Response = await fetch(url, {
        method,
        body: body !== null ? JSON.stringify(body) : undefined,
        headers: setHeader(body),
    });
    console.log(response);
    if (!response.ok) {
        const textData = await response.text();
        throw new RestError(textData, response.status,);
    }
    if (method === 'GET') {
        return await response.json() as T;
    }
    return response;
    
}


function setHeader(body : object | null){
    const headers: Record<string, string> = {};
    if(body !== null){
        headers['Content-Type'] = 'application/json';
    }
    return headers;
}

