import { countTopics } from "../../services/topicService.js";
import { countQuestions } from "../../services/questionService.js";
import { countAnswers } from "../../services/answerService.js";

const showMain = async ({ render }) => {
  const statistics = {
    totalTopics: "0",
    totalQuestions: "0",
    totalAnswers: "0",
  };
  statistics.totalTopics = await countTopics();
  statistics.totalQuestions = await countQuestions();
  statistics.totalAnswers = await countAnswers();

  render("main.eta", statistics);
};

export { showMain };
