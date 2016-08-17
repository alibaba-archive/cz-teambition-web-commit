var wrap = require('word-wrap');

module.exports = {

  prompter: function(cz, commit) {
    cz.prompt([
      {
        type: 'input',
        name: 'id',
        message: '任务ID'
      },
      {
			  type: 'confirm',
        name: 'hotfix',
        default: false,
        message: 'hotfix?'
      },
      {
        type: 'input',
        name: 'subject',
        message: 'Commit 描述: 修复XX功能..., 添加XX模块... \n'
      }, {
        type: 'input',
        name: 'body',
        message: '还有其它更改理由, 更改细节, 或者需要注意的地方吗\n'
      }
    ]).then(function(answers) {

      var maxLineWidth = 80;
      var wrapOptions = {
        trim: true,
        newline: '\n',
        indent:'',
        width: maxLineWidth
      };

      var id = answers.id.trim();
      var isHotfix = answers.hotfix;
      var subject = answers.subject.trim();
      var body = answers.body.trim();

      var message = [
        id ? id + ':' : '',
        isHotfix ? '(hotfix)' : '',
        subject
      ].filter(function(s){ return s }).join(' ')

      if (body) {
        message = message + '\n\n' + wrap(body, wrapOptions)
      }

      commit(message);
    });
  }
}

