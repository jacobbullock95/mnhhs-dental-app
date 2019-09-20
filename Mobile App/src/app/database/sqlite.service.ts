import { Injectable } from "@angular/core";
var Sqlite = require("nativescript-sqlite");

@Injectable()
export class DatabaseService {

    public getdbConnection() {
        return new Sqlite('dentalInformation');
    }

    public closedbConnection() {
        new Sqlite('dentalInformation')
            .then((db) => {
                db.close();
            })
    }
}