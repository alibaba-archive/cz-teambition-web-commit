[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://www.npmjs.com/package/commitizen)

# 如何向 Teambition Web 贡献你的代码

- Teambition git-flow 规范： [standard](https://github.com/teambition/standard/blob/master/git-flow.md)

每一次的改动都应该尽量与 Teambition 中的任务对应，方便回溯整个改动的起因和结果，
所以为了保证 Commit Tree 的规范以及减少改动的歧义，我们现在做出以下的规范：

- 使用 Teambition 中的任务 ID 就可以作为每次 Commit 的前缀。

    > 如果你还没有进入对应的项目，请联系对应的负责人将你加入对应的任务组

    > 如果你所在的项目还没有开启任务 ID，请在插件中将 `任务 ID` 开启

- 使用 [Commitizen](https://github.com/commitizen/cz-cli) 和 [Teambition 前端 Git Commit 规范](https://github.com/teambition/cz-teambition-web-commit) 提供方便的 Commit 模版

- 请在每次提交改动的时候，检查这次改动对应的 Commit Tree 是否符合规则，有疑问的 Commit Tree 需要无条件的进行 Rebase & Edit

#### 使用说明

1. 安装 [Commitizen](https://github.com/commitizen/cz-cli), `npm i commitizen -g` (确保项目中的 `cz-teambition-web-commit` 也已经安装)

2. `git commit` 的时候使用 `git cz` 或者 `npm run commit`

3. 提交你的改动

#### 示例
```
TB-3248: 修改 tb commitizen 模板

现在开始需要添加任务ID了
```
