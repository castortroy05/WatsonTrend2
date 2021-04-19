//import the nedb module
const nedb = require('nedb');

class WatsonTrend{


        //pull in the db, and connect to it, else, if none is present, make one.
        constructor(dbFilePath) {
            if (dbFilePath) {
                this.db = new nedb({filename: dbFilePath, autoload: true})
                console.log('connected to the database', dbFilePath);
            }
            else {
                this.db = new nedb();
                console.log('started new in-memory datastore');
            }
        }


        //get all entries in the database, and return to terminal.
        getAllEntries(){
            return new Promise((resolve, reject) => {
                this.db.find({}, function(err, entries){
                    if(err){
                        reject(err);
                    }else{
                        resolve(entries);
                        console.log('function all() returns: ', entries);
                    }
                })
            })
        }


        addContactUsEntry(fname, lname, email, message){
            var newEntry = {
                fname : fname,
                lname : lname,
                email : email,
                message: message
            }

            console.log('New message sent', newEntry);

            this.db.insert(newEntry, function(err, doc){
                if(err){
                    console.log("500", fname);
                } else {
                    console.log('New entry inserted', doc);
                }
            })
        }


}

//make the module available.
module.exports = WatsonTrend;

//Author: James Doak / Antony Lockhart - Group 23
