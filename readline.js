import readline from "readline/promises";

/**
 * Take sentence input, until you press 'Enter'
 * Like C++ cin
 *
 * @param {String} message
 * @returns {String}
 */
const prompt = async (message) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answer = await rl.question(message);

  rl.close(); // stop listening
  return answer;
};

export default prompt;
