import {httpRequest} from "@/app/global/httpRequests";

export async function createUserRequest(name:string) {
    const url = `http://localhost:8080/users/${name}`;
    return await httpRequest<undefined>(url, 'POST', null);
}
