import * as vscode from "vscode";
import { getDocument, editSnippetInner } from "./publicFn";
export interface SurroundObject {
  start: string
  end: string
  stringList?: string[]

}
export function selectionAround(textEditor: any, surroundObject: SurroundObject ) {
  const selection = textEditor.selection;
  let document = getDocument();
  let lines: any[] = [];
  if (document.eol === 1) {
    lines = document.getText().split("\n") as any;
  }
  if (document.eol === 2) {
    lines = document.getText().split("\r\n") as any;
  }
  let startLine = lines[selection.start.line];
  let index = startLine.split("").findIndex((item: any) => item !== " ");
  if (index !== -1) {
    let blankArr = "";
    let blankArr1 = "";
    let blankArr2 = "";
    for (let i = 0; i < index; i++) {
      blankArr = blankArr + " ";
    }
    blankArr1 = blankArr + surroundObject.start;
    blankArr2 = blankArr + surroundObject.end;
    let newLines = [blankArr1];
    for (
      let indexi = selection.start.line;
      indexi <= selection.end.line;
      indexi++
    ) {
      const element = lines[indexi];
      newLines.push("  " + lines[indexi]);
    }
    if (surroundObject.stringList && surroundObject.stringList.length > 0 ) {
      for (let index = 0; index < surroundObject.stringList.length; index++) {
        newLines.push(blankArr + surroundObject.stringList[index]);
      }
    }
    newLines.push(blankArr2);
    vscode.commands.executeCommand("editor.action.deleteLines");
    vscode.commands.executeCommand("editor.action.insertLineBefore");
    vscode.commands.executeCommand("cursorHome");
    if (document.eol === 1) {
      editSnippetInner(newLines.join("\n"), 0);
    }
    if (document.eol === 2) {
      editSnippetInner(newLines.join("\r\n"), 0);
    }
    for (let i = 0; i < index; i++) {
      vscode.commands.executeCommand("deleteRight");
    }
    // if (index >= 2) {
    //   vscode.commands.executeCommand("deleteRight");
    //   vscode.commands.executeCommand("deleteRight");
    // }
  }
}
