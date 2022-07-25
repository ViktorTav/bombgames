import { Question } from "../model/Question.js";
import { getJson } from "../util/getJson.js";
import { QuestionView } from "../views/Question.js";

export class QuestionController {
    #questionView;
    #questionList;
    #fileUrl;

    constructor(DOMQuestionUlSelector, fileUrl) {
        this.#questionView = new QuestionView(DOMQuestionUlSelector);
        this.#questionList = [];

        this.#fileUrl = fileUrl;
    }

    async load() {
        const questions = await getJson(this.#fileUrl);

        this.#questionList = questions.map(
            (question) => new Question(question["título"], question["resposta"])
        );

        this.#questionView.update(this.#questionList);
    }
}
