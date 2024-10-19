// Triple slash directive to include dependencies from crud.d.ts
// / <reference path="./crud.d.ts" />
import * as CRUD from "../../js/crud.js";
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
var newRowID = CRUD.insertRow(row);
var updatedRow = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23
};
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
//# sourceMappingURL=main.js.map