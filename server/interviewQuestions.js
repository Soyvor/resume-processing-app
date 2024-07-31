// Mock function to get interview questions
const getInterviewQuestions = () => {
    return new Promise((resolve) => {
      resolve([
        "Tell me about yourself.",
        "What are your strengths and weaknesses?",
        "Describe a challenging project you worked on.",
        "How do you handle tight deadlines?"
      ]);
    });
  };
  
  module.exports = { getInterviewQuestions };
  