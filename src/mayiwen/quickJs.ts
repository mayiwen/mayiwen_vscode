import * as vscode from "vscode";
import { selectionAround } from './common/selectEdit';
import { getDocument, editSnippetInner, getType} from './common/publicFn'

export function editSnippetInnerRow(text: string, col: any, row: any) {
  let editor = vscode.window.activeTextEditor as any;
  let selection: vscode.Selection = editor.selection;
  let insertPosition = new vscode.Position(row, col);
  editor.insertSnippet(new vscode.SnippetString(text), insertPosition);
}
export const consoleLog = vscode.commands.registerTextEditorCommand(
  "mayiwen.consoleLog",
  (textEditor, edit) => {
    if (getType() === "typescript") {
      editSnippetInner("console.log()", textEditor.selection.active.character);
      vscode.commands.executeCommand("cursorLeft");
    }
    if (getType() === "html") {
      editSnippetInner(`(click)="()"`, textEditor.selection.active.character);
      vscode.commands.executeCommand("cursorLeft");
      vscode.commands.executeCommand("cursorLeft");
      vscode.commands.executeCommand("cursorLeft");
    }
  }
);
export const quickLet = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickLet",
  (textEditor, edit) => {
    if (getType() === "typescript") {
      editSnippetInner("let ", textEditor.selection.active.character);
    }
    if (getType() === "html") {
      editSnippetInner(`*ngIf=""`, textEditor.selection.active.character);
      vscode.commands.executeCommand("cursorLeft");
    }
  }
);
export const quickConst = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickConst",
  (textEditor, edit) => {
    if (getType() === "typescript") {
      editSnippetInner("const ", textEditor.selection.active.character);
    }
    if (getType() === "html") {
      editSnippetInner(`*ngFor="let item of ;"`, textEditor.selection.active.character);
      vscode.commands.executeCommand("cursorLeft");
      commandsLoop("cursorLeft", 1);
    }
  }
);
export const quickEqual = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickEqual",
  (textEditor, edit) => {

    if (getType() === "typescript") {
      editSnippetInner(" = ", textEditor.selection.active.character);
    }
    if (getType() === "html") {
      editSnippetInner(`*ngFor="let item of ; let i = index"`, textEditor.selection.active.character);
      vscode.commands.executeCommand("cursorLeft");
      commandsLoop("cursorLeft", 15);
    }
  }
);
export const quickString = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickString",
  (textEditor, edit) => {
    if (getType() === "typescript") {
      editSnippetInner(": string", textEditor.selection.active.character);
    }
    if (getType() === "html") {
      editSnippetInner(`[ngStyle]="{color: flag ? 'red' : 'blue'}"`, textEditor.selection.active.character);
    }
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
    if (getType() === "typescript") {
      editSnippetInner("private ", textEditor.selection.active.character)

    }
    if (getType() === "html") {
      editSnippetInner("border: 1px solid red;", textEditor.selection.active.character)
    };
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
    if (getType() === "typescript") {
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
    if (getType() === "html") {
      editSnippetInner(`[ngClass]="{className: flag}"`, textEditor.selection.active.character)
    }


  }
);
export const quickCurlyBrackets = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickCurlyBrackets",
  (textEditor, edit) => {
    if (getType() === "typescript") {
      const { ..._document } = vscode.window.activeTextEditor;
      let lines: any
      if (getDocument().eol === 1) {
        lines = [_document.document.getText().split("\n")];
      }
      if (getDocument().eol === 2) {
        lines = [_document.document.getText().split("\r\n")];
      }
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
    if (getType() === "html") {
      editSnippetInner(`style=""`, textEditor.selection.active.character);
      vscode.commands.executeCommand("cursorLeft");
    }
  }
);
export const quickCurlyBracketsLeft = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickCurlyBracketsLeft",
  (textEditor, edit) => {
    if (getType() === "typescript") {
      const { ..._document } = vscode.window.activeTextEditor;
      let lines: any
      if (getDocument().eol === 1) {
        lines = [_document.document.getText().split("\n")];
      }
      if (getDocument().eol === 2) {
        lines = [_document.document.getText().split("\r\n")];
      }
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
    if (getType() === "html") {
      editSnippetInner(`[(ngModel)]=""`, textEditor.selection.active.character);
      vscode.commands.executeCommand("cursorLeft");
    }
  }
);
export const quickSurround = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickSurround",
  (textEditor, edit) => {
    console.log("这是打印的selection");
    console.log(textEditor.selection);
    const selection = textEditor.selection;
    const { ..._document } = vscode.window.activeTextEditor;
    console.log(_document);
    const document = _document.document;
    if (document.languageId === "html") {
      let lines: any
      if (document.eol === 1) {
        lines = [_document.document.getText().split("\n")];
      }
      if (document.eol === 2) {
        lines = [_document.document.getText().split("\r\n")];
      }

      let length = lines[0][selection.start.line].length;
      if (selection.start.line === selection.end.line) {
        // 同一行的才执行
        let str = lines[0][selection.start.line];
        console.log(
          str.slice(selection.start.character, selection.end.character)
        );
        let newStr = str.slice(
          selection.start.character,
          selection.end.character
        );
        console.log(`<${newStr}></${newStr}>`);
        lines[0][selection.start.line] = replacepos(
          lines[0][selection.start.line],
          selection.start.character,
          selection.end.character,
          `<${newStr}></${newStr}>`
        );
        console.log(lines[0][selection.start.line]);
        vscode.commands.executeCommand("deleteRight");
        editSnippetInner(
          `<${newStr}></${newStr}>`,
          textEditor.selection.start.character
        );
        let length = Math.floor(`<${newStr}></${newStr}>`.length / 2);
        for (let index = 0; index < length + 1; index++) {
          vscode.commands.executeCommand("cursorLeft");
        }
      }
    }
  }
);
export const quickSurroundSuper = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickSurroundSuper",
  (textEditor, edit) => {
    const selection = textEditor.selection;
    let document = getDocument();
    if (document.languageId === "html") {
      selectionAround(textEditor, {start: '<div>', end: '</div>'});
    }
    if (document.languageId === "typescript") {
      selectionAround(textEditor, {start: 'try {', end: '}',
        stringList: [
          '} catch (error) {',
          '  console.error(error)'
        ]});
    }
  }
);

export const quickStringAttr = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickStringAttr",
  (textEditor, edit) => {
    if (getType() === "typescript") {
      editSnippetInner("${}", textEditor.selection.active.character);
      commandsLoop("cursorLeft", 1);
    }
    if (getType() === "html") {
      editSnippetInner(`class=""`, textEditor.selection.active.character);
      commandsLoop("cursorLeft", 1);
    }
  }
);

export const quickMethod = vscode.commands.registerTextEditorCommand(
  "mayiwen.quickMethod",
  (textEditor, edit) => {
    if (getType() === "typescript") {
      // editSnippetInner("${}", textEditor.selection.active.character);

      commandsLoop("cursorEnd", 1);
      let time = setTimeout(() => {
        editSnippetInner(" {\n}", textEditor.selection.active.character);
        vscode.commands.executeCommand("editor.action.insertLineBefore");
        clearTimeout(time);
      }, 100);

      // commandsLoop("cursorLeft", 1);

    }
    if (getType() === "html") {
      editSnippetInner(`{{  }}`, textEditor.selection.active.character);
      commandsLoop("cursorLeft", 3);
    }
  }
);

export function replacepos(
  text: string,
  start: number,
  stop: number,
  replacetext: string
) {
  let mystr =
    text.substring(0, start - 1) + replacetext + text.substring(stop + 1);
  return mystr;
}

export function commandsLoop(command: string, count: number) {
  for (let index = 0; index < count; index++) {
    vscode.commands.executeCommand(command);
  }
}

