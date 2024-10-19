// Triple slash directive to include dependencies from crud.d.ts
/// <reference path="./crud.d.ts" />

import { rowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

const newRowID: rowID = CRUD.insertRow(row);
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);