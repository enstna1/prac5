import { RandomStringList } from "./model.js";
import { ViewRandomStringList } from "./view.js";

export class Controller {
    constructor() {
        this.randomStringList = new RandomStringList();
        this.viewRandomStringList = new ViewRandomStringList(this.randomStringList);
        this.viewRandomStringList.addClickHandler('generate', () => this.add());
        this.viewRandomStringList.addClickHandler('delete', () => this.delete());
    }

    add() {
        this.randomStringList.add();
        this.viewRandomStringList.updatePage();
    }

    delete() {
        const inputId = prompt("Enter the ID of the string to delete:");
        if (inputId) {
            this.randomStringList.delete(inputId);
            this.viewRandomStringList.updatePage();
        }
    }

    updatePage() {
        this.viewRandomStringList.updatePage();
    }
}
