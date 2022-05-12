import * as vscode from "vscode";
export function getDocument() {
    const { ..._document } = vscode.window.activeTextEditor;
    const document = _document.document;
    return document;
}
export function editSnippetInner(text: string, col: any) {
    let editor = vscode.window.activeTextEditor as any;
    let selection: vscode.Selection = editor.selection;
    let insertPosition = new vscode.Position(selection.active.line, col);
    editor.insertSnippet(new vscode.SnippetString(text), insertPosition);
}
export function getType(): string {
    const { ..._document } = vscode.window.activeTextEditor;
    console.log(_document);
    const document = _document.document;
    return document.languageId;
  }
