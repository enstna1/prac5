// Utility function to generate a random string
function generateRandomString(length = 8) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export class RandomString {
    constructor() {
        this.value = generateRandomString();
        this.id = Math.random().toString(36).substring(2, 9); // Unique ID for each string
    }

    get Value() {
        return this.value;
    }
}

export class RandomStringList {
    constructor() {
        this.randomStrings = [];
    }

    add() {
        const randomString = new RandomString();
        this.randomStrings.push(randomString);
    }

    getAllStrings() {
        return this.randomStrings;
    }

    findStringIndexById(id) {
        return this.randomStrings.findIndex((randomString) => randomString.id === id);
    }

    delete(id) {
        const stringIndex = this.findStringIndexById(id);
        if (stringIndex !== -1) {
            this.randomStrings.splice(stringIndex, 1);
        }
    }

    count() {
        return this.randomStrings.length;
    }
}
