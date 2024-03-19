import Storage from "../../frameworks/storage/store.js";

export class PersonList {
  static execute(req, res, next) {
    try {
      const peopleList = Storage.storage.reduce((acc, person) => {
        acc.push(person.label);
        return acc;
      }, []);
      res.status(200).send(peopleList);
    } catch (error) {
      next(error);
    }
  }
}
