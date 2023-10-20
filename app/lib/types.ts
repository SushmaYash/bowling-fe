
interface FrameData {
    cumulativeScore: number;
    textContent: string;
    pins: number| null;
}

interface ScoreBoardData {
    frames: FrameData[];
    totalScore: number;
}

export const initialScoreBoard : ScoreBoardData = {
    frames:[],
    totalScore: 0
}