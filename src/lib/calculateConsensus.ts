// we are using borda count here
export function calculateConsensus(votes: number[][]) : number[]{
    const scores = new Map<number, number>();
    votes.forEach((ranking) => {
        const n = ranking.length;
        ranking.forEach((optionIndex, i) => {
            scores.set(optionIndex, (scores.get(optionIndex) || 0) + (n - i));
        });
    });
    return [...scores.entries()].sort((a, b) => b[1] - a[1])
    .map(([index]) => index);
}