export interface PeopleInSpace {
    number: number;
    people: [{craft: String, name: String}, {craft: String, name: String}, {craft: String, name: String}];
    message: String;
}

//TODO: interface for json below
/*
{"number": 3, "people": [{"craft": "ISS", "name": "Chris Cassidy"}, {"craft": "ISS", "name": "Anatoly Ivanishin"}, {"craft": "ISS", "name": "Ivan Vagner"}], "message": "success"}
 */
