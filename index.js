var wrap = require('word-wrap');

module.exports = {

  prompter: function(cz, commit) {
    cz.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'Commit 类型：',
        choices: [
        {
          name: 'FEATURE:  功能开发',
          value: 'FEATURE'
        }, {
          name: 'ISSUE:    普通 BUG 修复',
          value: 'ISSUE'
        }, {
          name: 'HOTFIX:   线上 BUG 修复',
          value: 'HOTFIX'
        }, {
          name: 'RELEASE:  发布相关的改动',
          value: 'RELEASE'
        }, {
          name: 'REFACTOR: 重构',
          value: 'REFACTOR'
        }, {
          name: 'CHORE:    其它更改， 比如更新工具或者更改文档',
          value: 'CHORE'
        }]
      }, {
        type: 'input',
        name: 'scope',
        message: '更改范围， 比如 views/board, models/task, lib/dropdown, webpack\n'
      }, {
        type: 'input',
        name: 'subject',
        message: 'Commit 描述: 修复.., 添加.., 删除.. \n'
      }, {
        type: 'input',
        name: 'body',
        message: '还有其它内容吗？ 比如更改理由, 更改细节, 或者什么奇怪的问题\n'
      }
    ]).then(function(answers) {

      var maxLineWidth = 80;

      var wrapOptions = {
        trim: true,
        newline: '\n',
        indent:'',
        width: maxLineWidth
      };

      var scope = answers.scope.trim();
      scope = scope ? '(' + answers.scope.trim() + ')' : '';

      var message = (answers.type + scope + ': ' + answers.subject.trim()).slice(0, maxLineWidth);

      var body = answers.body.trim();
      message = body ? message + '\n\n' + wrap(body, wrapOptions) : message;

      commit(message);
    });
  }
}

