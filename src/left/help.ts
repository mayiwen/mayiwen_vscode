import * as vscode from "vscode";

// 树节点
export class EntryItem extends vscode.TreeItem {}

//树的内容组织管理
export class EntryList implements vscode.TreeDataProvider<EntryItem> {
  onDidChangeTreeData?:
    | vscode.Event<void | EntryItem | null | undefined>
    | undefined;
  getTreeItem(element: EntryItem): vscode.TreeItem | Thenable<vscode.TreeItem> {
    return element;
  }
  getChildren(element?: EntryItem): vscode.ProviderResult<EntryItem[]> {
    if (element) {
      //子节点
      var childs = [];
      for (let index = 0; index < 3; index++) {
        let str = index.toString();
        var item = new EntryItem(str, vscode.TreeItemCollapsibleState.None);
        item.command = {
          command: "sidebar_test_id1.openChild", //命令id
          title: "标题",
          arguments: [str], //命令接收的参数
        };
        childs[index] = item;
      }

      console.log(childs);
      return childs;
    } else {
      //根节点
      // return [new EntryItem("根目录", vscode.TreeItemCollapsibleState.Collapsed)];
      let childs = [];
      childs.push(this.setData("需在设置中禁用enable menu bar mnemonics"));
      childs.push(this.setData("l => console.log('')"));
      childs.push(this.setData("le => console.error('')"));
      childs.push(this.setData("alt q => 外部-打开浏览器"));
      childs.push(this.setData("alt w => 外部-打开vscode"));
      childs.push(this.setData("alt e => 上移一行"));
      childs.push(this.setData("alt r => 下移一行"));
      childs.push(this.setData("alt t => html 包裹div ts 包裹 try catch"));
      childs.push(this.setData("alt y => pubilc"));
      childs.push(this.setData("alt u => let ngif"));
      childs.push(this.setData("alt i => const ngfor"));
      childs.push(this.setData("alt o =>  = ngforindex"));
      childs.push(this.setData("alt p => 关闭其他拆分"));
      childs.push(this.setData("alt delete => 关闭其他窗口"));
      childs.push(this.setData("alt a => 打开代码界面"));
      childs.push(this.setData("alt s => 打开搜索"));
      childs.push(this.setData("alt d => 打开收藏"));
      childs.push(this.setData("alt f => 收藏开关"));
      childs.push(this.setData("alt g => 清空收藏"));
      childs.push(this.setData("alt h => private border: 1px solid red"));
      childs.push(this.setData("alt j => console.log() click"));
      childs.push(this.setData("alt k => 找{ ngmodel"));
      childs.push(this.setData("alt l => 找} style"));
      childs.push(this.setData("alt ; => ${} class"));
      childs.push(this.setData("alt z => 上方插入一行"));
      childs.push(this.setData("alt x => 下方插入一行"));
      childs.push(this.setData("alt c => 复制一行"));
      childs.push(this.setData("alt v => 删除一行"));
      childs.push(this.setData("alt b => 将选中的元素变成标签"));
      childs.push(this.setData("alt m => 箭头函数 ngclass"));
      childs.push(this.setData("alt n => 补全扩号"));
      childs.push(this.setData("alt , => :string ngstyle"));
      childs.push(this.setData("alt . => :number"));
      childs.push(this.setData("alt ' => 注释"));
      return childs;
    }
  }
  setData(message: string) {
    var item = new EntryItem(message, vscode.TreeItemCollapsibleState.None);
    item.command = {
      command: "sidebar_test_id1.openChild", //命令id
      title: "标题",
      arguments: [""], //命令接收的参数
    };
    return item;
  }
}
