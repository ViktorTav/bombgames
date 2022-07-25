import { View } from "./View.js";

export class QuestionView extends View {
    _template(model) {
        return model
            .map(
                (question) =>
                    `
                    <li class = "question">
                        <div class = "question-header">
                            <h1 class = "question-title">${question.title}</h1>
                            <i class = "question-status fas fa-plus"></i>
                        </div>
                        <p class = "question-answer">${question.answer}</p>
                    </li>
                `
            )
            .join("");
    }

    update(model) {
        this.DOMElement.innerHTML = this._template(model);

        document.querySelectorAll("div.question-header").forEach((element) => {
            element.addEventListener("click", (event) => {
                const path =
                    event.path || (event.composedPath && event.composedPath());

                const questionElement = event.target.classList.contains(
                    "question-header"
                )
                    ? path[1]
                    : path[2];

                questionElement.classList.toggle("active");
            });
        });
    }
}
