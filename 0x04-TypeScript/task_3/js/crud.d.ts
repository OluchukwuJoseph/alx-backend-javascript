import { rowID, RowElement } from "./interface";

export function insertRow(row: RowElement): number;
export function deleteRow(rowId: rowID): void;
export function updateRow(rowId: rowID, row: RowElement): rowID;
