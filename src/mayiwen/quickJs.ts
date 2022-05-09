import * as vscode from "vscode";
export function editSnippetInner(text: string, col: any) {
  let editor = vscode.window.activeTextEditor as any;
  let selection: vscode.Selection = editor.selection;
  let insertPosition = new vscode.Position(selection.active.line, col);
  editor.insertSnippet(new vscode.SnippetString(text), insertPosition);
}
export const consoleLog = vscode.commands.registerTextEditorCommand(
  "mayiwen.consoleLog",
  (textEditor, edit) => {
    editSnippetInner("console.log()", textEditor.selection.active.character);
    vscode.commands.executeCommand("cursorLeft");
  }
);
export const quickLet = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickLet",
  (textEditor, edit) => {
    editSnippetInner("let ", textEditor.selection.active.character);
  }
);
export const quickConst = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickConst",
  (textEditor, edit) => {
    editSnippetInner("const ", textEditor.selection.active.character);
  }
);
export const quickEqual = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickEqual",
  (textEditor, edit) => {
    editSnippetInner(" = ", textEditor.selection.active.character);
  }
);
export const quickString = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickString",
  (textEditor, edit) => {
    editSnippetInner(": string", textEditor.selection.active.character);
  }
);
export const quickNumber = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickNumber",
  (textEditor, edit) => {
    editSnippetInner(": number", textEditor.selection.active.character);
  }
);
export const quickPrivate = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickPrivate",
  (textEditor, edit) => {
    editSnippetInner("private ", textEditor.selection.active.character);
  }
);
export const quickPublic = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickPublic",
  (textEditor, edit) => {
    editSnippetInner("public ", textEditor.selection.active.character);
  }
);
export const quickArror = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickArror",
  (textEditor, edit) => {
    editSnippetInner("() => {\n}", textEditor.selection.active.character);
    let editor: any = vscode.window.activeTextEditor as any;
    let selection: vscode.Selection = editor.selection;
    let row = selection.active.line;
    let insertPosition = new vscode.Position(
      row,
      textEditor.selection.active.character
    );
    editSnippetInner("", textEditor.selection.active.character);
    editor.insertSnippet(new vscode.SnippetString(""), insertPosition);
    vscode.commands.executeCommand("cursorRight");
  }
);
export const quickCurlyBrackets = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickCurlyBrackets",
  (textEditor, edit) => {
    const { ..._document } = vscode.window.activeTextEditor;
    let lines = [_document.document.getText().split("\r\n")];
    let col = 0;
    let row = 0;
    let flag = false;
    for (
      let index = textEditor.selection.active.line + 1;
      index < lines[0].length;
      index++
    ) {
      const element = lines[0][index];
      if (!flag) {
        console.log(element.indexOf("}"));
        if (element.indexOf("}") !== -1) {
          row = index;
          col = element.indexOf("}");
          flag = true;
          break;
        }
      }
    }
    if (flag) {
      let editor = vscode.window.activeTextEditor as any;
      let selection: vscode.Selection = editor.selection;
      let insertPosition = new vscode.Position(row, col);
      editor.insertSnippet(new vscode.SnippetString(""), insertPosition);
      vscode.commands.executeCommand("cursorRight");
    }
  }
);
export const quickCurlyBracketsLeft = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickCurlyBracketsLeft",
  (textEditor, edit) => {
    const { ..._document } = vscode.window.activeTextEditor;
    let lines = [_document.document.getText().split("\r\n")];
    let col = 0;
    let row = 0;
    let flag = false;
    for (
      let index = textEditor.selection.active.line - 1;
      index >= 0;
      index--
    ) {
      const element = lines[0][index];
      if (!flag) {
        console.log(element.indexOf("{"));
        if (element.indexOf("{") !== -1) {
          row = index;
          col = element.indexOf("{");
          flag = true;
          break;
        }
      }
    }
    if (flag) {
      let editor = vscode.window.activeTextEditor as any;
      let selection: vscode.Selection = editor.selection;
      let insertPosition = new vscode.Position(row, col);
      editor.insertSnippet(new vscode.SnippetString(""), insertPosition);
      vscode.commands.executeCommand("cursorRight");
    }
  }
);
export const quickSurround = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickSurround",
  (textEditor, edit) => {
    console.log('这是打印的selection')
    console.log(textEditor.selection)
    const selection = textEditor.selection
    const { ..._document } = vscode.window.activeTextEditor;
    console.log(_document)
    const document = _document.document
    if (document.languageId === 'html') {
      let lines = [_document.document.getText().split("\r\n")];
      let length = lines[0][selection.start.line].length
      if (selection.start.line === selection.end.line) { // 同一行的才执行
        let str = lines[0][selection.start.line];
        console.log(str.slice(selection.start.character, selection.end.character))
        let newStr = str.slice(selection.start.character, selection.end.character)
        console.log(`<${newStr}></${newStr}>`)
        lines[0][selection.start.line] = replacepos(lines[0][selection.start.line], selection.start.character, selection.end.character, `<${newStr}></${newStr}>`)
        console.log(lines[0][selection.start.line])
        vscode.commands.executeCommand("deleteRight");
        editSnippetInner(`<${newStr}></${newStr}>`, textEditor.selection.start.character);
        let length = Math.floor(`<${newStr}></${newStr}>`.length / 2)
        for (let index = 0; index < (length + 1); index++) {
          vscode.commands.executeCommand("cursorLeft");
        }
      }
    }
  }
);
export const quickSurroundSuper = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickSurroundSuper",
  (textEditor, edit) => {
    console.log('这是打印的selection')
    console.log(textEditor.selection)
    const selection = textEditor.selection
    const { ..._document } = vscode.window.activeTextEditor;
    console.log(_document)
    const document = _document.document
    if (document.languageId === 'html') {
      let lines = [_document.document.getText().split("\r\n")][0];
      // vscode.commands.executeCommand("deleteRight");
      let arr = lines[selection.start.line]
      console.log('这是打印的arr')
      console.log(arr)
      let index = arr.split('').findIndex(item => item !== ' ')
      if (index !== -1) {
        console.log('这是index')
        console.log(index)
        
        let blankArr = ''
        let blankArr1 = ''
        let blankArr2 = ''
        for (let i = 0; i < index - 1; i++) {
          blankArr = blankArr + ' ';
        }
        blankArr1 = blankArr + ' <div>';
        blankArr2 = blankArr + ' </div>';
        let newLines = [blankArr1]
        for (let index = selection.start.line; index <= selection.end.line; index++) {
          const element = lines[index];
          newLines.push('  ' + element);
        }
        newLines.push(blankArr2)
        console.log('这是得出的文件')
        console.log(newLines.join('\r\n'));
        vscode.commands.executeCommand("editor.action.deleteLines");
        vscode.commands.executeCommand("editor.action.insertLineBefore")
        vscode.commands.executeCommand("cursorHome");
        editSnippetInner(newLines.join('\r\n'), 0);
        for (let i = 0; i < index; i++) {
          vscode.commands.executeCommand("deleteRight");
        }
      }
    }
    if (document.languageId === 'typescript') {
      let lines = [_document.document.getText().split("\r\n")][0];
      // vscode.commands.executeCommand("deleteRight");
      let arr = lines[selection.start.line]
      console.log('这是打印的arr')
      console.log(arr)
      let index = arr.split('').findIndex(item => item !== ' ')
      if (index !== -1) {
        console.log('这是index')
        console.log(index)
        
        let blankArr = ''
        let blankArr1 = ''
        let blankArr2 = ''
        for (let i = 0; i < index - 1; i++) {
          blankArr = blankArr + ' ';
        }
        blankArr1 = blankArr + ' try {';
        blankArr2 = blankArr + ' } catch (error) {';
        let blankArr3 = blankArr + '   console.error(error)';
        let blankArr4 = blankArr + ' }';
        let newLines = [blankArr1]
        for (let index = selection.start.line; index <= selection.end.line; index++) {
          const element = lines[index];
          newLines.push('  ' + element);
        }
        newLines.push(blankArr2)
        newLines.push(blankArr3)
        newLines.push(blankArr4)
        console.log('这是得出的文件')
        console.log(newLines.join('\r\n'));
        vscode.commands.executeCommand("editor.action.deleteLines");
        vscode.commands.executeCommand("editor.action.insertLineBefore")
        vscode.commands.executeCommand("cursorHome");
        editSnippetInner(newLines.join('\r\n'), 0);
        for (let i = 0; i < index; i++) {
          vscode.commands.executeCommand("deleteRight");
        }
      }
    }
  }
);
export function replacepos(text: string,start: number,stop: number,replacetext: string){
   	 let mystr = text.substring(0,start-1)+replacetext+text.substring(stop+1);
   	 return mystr;
}