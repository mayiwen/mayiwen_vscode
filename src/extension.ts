// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as sidebar from './left/help';
import {consoleLog, quickLet, quickConst, quickEqual, quickString, quickNumber, quickPrivate, quickPublic, quickArror, quickCurlyBrackets, quickCurlyBracketsLeft, quickSurround, quickSurroundSuper} from './mayiwen/quickJs';
// this method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "mayiwen" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	// let disposable = vscode.commands.registerCommand('mayiwen.helloWorld', () => {
	// 	// The code you place here will be executed every time your command is executed
	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from mayiwen!');
	// });
	// let test = vscode.commands.registerCommand('mayiwen.test01', () => {
	// 	vscode.window.showInformationMessage('这是test01!');
	// });
	// let testEditorCommand = vscode.commands.registerTextEditorCommand('mayiwen.testEditorCommand', (textEditor, edit) => {
	// 	editSnippet('console.log()', textEditor.selection.active.character);
	// 	vscode.commands.executeCommand('cursorLeft');
	// });
	// let toNextLine = vscode.commands.registerTextEditorCommand('mayiwen.toNextLine', (textEditor, edit) => {
	// 	console.log('这是一个很好的想法')
	// 	vscode.commands.executeCommand('cursorEnd'); // 跳到句末
	// 	console.log('这是一个很好的想法')
	// 	let editor = vscode.window.activeTextEditor;

	// 	if (!editor) {
	// 		return;
	// 	}
	// 	let selection = editor.selection;
	// 	let originalPosition = selection.start;
	// 	editor.edit((editBuilder) => {
	// 		editBuilder.insert(originalPosition, 'closeTag');
	// 	});


	// });

	//注册侧边栏面板的实现
	const sidebar_test = new sidebar.EntryList();
	console.log(sidebar_test)
	vscode.window.registerTreeDataProvider("sidebar_test_id1", sidebar_test);
	vscode.commands.registerCommand("sidebar_test_id1.openChild", args => {
		vscode.window.showInformationMessage(args);
	});
	context.subscriptions.push(consoleLog, quickLet, quickConst, quickEqual, quickString, quickNumber, quickPrivate, quickPublic, quickArror, quickCurlyBrackets, quickCurlyBracketsLeft,quickSurround, quickSurroundSuper);
}

