# 環境構築メモ

1. [課題リポジトリ](https://github.com/praha-inc/praha-challenge-templates)をフォークする
1. `git clone` する

## jestSample

node v16.13.2  
npm 8.3.1

1. `cd jestSample`
1. `npm install --legacy-peer-deps`
1. `npm audit fix`
1. `npm test`（動確）
1. 拡張機能 vscode-jest をインストールする
1. VSCode を再起動する

***

## References

Jest
- [TypeScript の単体テストで Jest 使おう - Qiita](https://qiita.com/okazuki/items/991a068892e946531612)

vscode-jest
- [vscode-jest を導入してテストの開発体験を向上させる - mizdra's blog](https://www.mizdra.net/entry/2021/12/13/011842)

npm install
- [そろそろ適当に npm install するのを卒業する - Qiita](https://qiita.com/sugurutakahashi12345/items/3cc49926faeaf25d3051)
- [npm v7で\`ERESOLVE unable to resolve dependency tree Could not resolve dependency:\` - Qiita](https://qiita.com/masato_makino/items/06011fcecc91be583636)
- [npmのパッケージをnpm-check-updatesで一括更新する方法｜weev【ウィーブ】](https://weev.media/article/296)
- [npmパッケージのvulnerability対応フロー - Qiita](https://qiita.com/riversun/items/7f1679509f38b1ae8adb)

