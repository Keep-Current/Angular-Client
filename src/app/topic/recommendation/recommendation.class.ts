export class Recommendation {
    constructor(
        public id: string,
        public title: string,
        public abstract: string,
        public authors: Array<string> = [],
        public url: string = '',
        public similarityScore: Array<string> = []) { }
}
