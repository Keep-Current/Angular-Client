export class Recommendation {
    constructor(
        public id: number,
        public title: string,
        public content: string,
        public authors: Array<string> = [],
        public url: string = '') { }
}
