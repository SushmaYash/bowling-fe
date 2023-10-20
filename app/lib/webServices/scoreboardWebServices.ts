import {httpRequest} from "@/app/global/httpRequests";



export async function addRoll(user: string, roll:number) {
    const url = `http://localhost:8080/score/${user}/${roll}`;
    return await httpRequest<undefined>(url, 'POST', null);
}


export async function getScoreBoard(user: string) {
    const url = `http://localhost:8080/score/scoreboard/${user}`;
    return await httpRequest<ScoreBoardData>(url, 'GET', null);
}
