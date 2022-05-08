import * as vscode from 'vscode';
export function editSnippetInner(text : string, col: any ) {
	let editor  = vscode.window.activeTextEditor as any;
	let selection : vscode.Selection = editor.selection;
	let insertPosition = new vscode.Position(selection.active.line, col);
	editor.insertSnippet(new vscode.SnippetString(text), insertPosition);
}
export const consoleLog = vscode.commands.registerTextEditorCommand('mayiwen.consoleLog', (textEditor, edit) => {
    editSnippetInner('console.log()', textEditor.selection.active.character);
    vscode.commands.executeCommand('cursorLeft');
});
export const quickLet = vscode.commands.registerTextEditorCommand('mayiwen.quickLet', (textEditor, edit) => {
    editSnippetInner('let ', textEditor.selection.active.character);
});
export const quickConst = vscode.commands.registerTextEditorCommand('mayiwen.quickConst', (textEditor, edit) => {
    editSnippetInner('const ', textEditor.selection.active.character);
});
export const quickEqual = vscode.commands.registerTextEditorCommand('mayiwen.quickEqual', (textEditor, edit) => {
    editSnippetInner(' = ', textEditor.selection.active.character);
});
export const quickString = vscode.commands.registerTextEditorCommand('mayiwen.quickString', (textEditor, edit) => {
    editSnippetInner(': string', textEditor.selection.active.character);
});
export const quickNumber = vscode.commands.registerTextEditorCommand('mayiwen.quickNumber', (textEditor, edit) => {
    editSnippetInner(': number', textEditor.selection.active.character);
});
export const quickPrivate = vscode.commands.registerTextEditorCommand('mayiwen.quickPrivate', (textEditor, edit) => {
    editSnippetInner('private ', textEditor.selection.active.character);
});
export const quickPublic = vscode.commands.registerTextEditorCommand('mayiwen.quickPublic', (textEditor, edit) => {
    editSnippetInner('public ', textEditor.selection.active.character);
});
export const quickArror = vscode.commands.registerTextEditorCommand('mayiwen.quickArror', (textEditor, edit) => {
    editSnippetInner('() => {\n}', textEditor.selection.active.character);
    let editor: any = vscode.window.activeTextEditor as any;
	let selection : vscode.Selection = editor.selection;
    let row = selection.active.line
	let insertPosition = new vscode.Position(row, textEditor.selection.active.character);
    editSnippetInner('', textEditor.selection.active.character);
    editor.insertSnippet(new vscode.SnippetString(''), insertPosition);
    vscode.commands.executeCommand('cursorRight');
});