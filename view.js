export class ViewRandomString {
    constructor(randomString) {
        this.randomString = randomString;
    }

    toHtml() {
        return `<p id="${this.randomString.id}">${this.randomString.Value} (ID: ${this.randomString.id})</p>`;
    }
}

export class ViewRandomStringList {
    constructor(randomStringList) {
        this.randomStringList = randomStringList;
    }

    addClickHandler(htmlId, clickHandlerFunction) {
        document.getElementById(htmlId).addEventListener('click', () => clickHandlerFunction());
    }

    toHtml() {
        let result = "";
        for (let randomString of this.randomStringList.getAllStrings()) {
            const viewRandomString = new ViewRandomString(randomString);
            result += viewRandomString.toHtml();
        }
        return result;
    }

    updatePage() {
        document.getElementById('random_strings').innerHTML = this.toHtml();
        document.getElementById('count').innerText = this.randomStringList.count();
    }
}
