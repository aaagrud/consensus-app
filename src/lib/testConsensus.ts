import { calculateConsensus } from './calculateConsensus';

//made chatgpt write a test file to see the working of calculateConsensus function
function runTest(testName: string, options: string[], votes: number[][]) {
  console.log(`\n🧪 ${testName}`);
  console.log('Options:', options);
  console.log('\nIndividual Votes:');
  votes.forEach((vote, i) => {
    const ranked = vote.map(index => options[index]);
    console.log(`  Voter ${i + 1}:`, ranked.join(' > '));
  });

  const result = calculateConsensus(votes);
  const rankedNames = result.map(i => options[i]);

  console.log('\n✅ Consensus Ranking (Indexes):', result);
  console.log('✅ Consensus Ranking (Names):', rankedNames.join(' > '));
}


const options1 = ['Pizza', 'Sushi', 'Burgers'];
const votes1 = [
  [0, 1, 2],
  [1, 0, 2],
  [2, 0, 1],
];
runTest('Test Case 1: Balanced Preference', options1, votes1);

const options2 = ['Movie A', 'Movie B', 'Movie C'];
const votes2 = [
  [0, 1, 2],
  [0, 1, 2],
  [0, 1, 2],
];
runTest('Test Case 2: Unanimous Agreement', options2, votes2);

const options3 = ['Option A', 'Option B', 'Option C', 'Option D'];
const votes3 = [
  [3, 2, 1, 0],
  [0, 1, 2, 3],
  [1, 0, 3, 2],
  [2, 1, 0, 3],
];
runTest('Test Case 3: Diverse Rankings', options3, votes3);

const options4 = ['A', 'B', 'C'];
const votes4 = [
  [1, 0, 2],
  [1, 2, 0],
  [1, 0, 2],
];
runTest('Test Case 4: Dominant Winner', options4, votes4);

const options5 = ['Red', 'Blue'];
const votes5 = [
  [0, 1],
  [1, 0],
  [0, 1],
  [1, 0],
];
runTest('Test Case 5: Tie Scenario', options5, votes5);
