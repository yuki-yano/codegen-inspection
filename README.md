typescript-language-server(tsserver)でGraphQL Codegenされた補完候補を検証するためのリポジトリ

## インストール

```sh
yarn install
```

## 起動

以下でできるはずだけどLSの検証にはそもそも不要

```sh
yarn run dev
```

## 補完の検証方法

- `src/pages/index.tsx` に `graphql` タグでfragmentやqueryを定義して `yarn run codegen` を実行してgeneratedに反映させる
- `src/pages/index.tsx` に `// 検証用` とコメントしてあるgraphql関数の引数の中でmanual completeを実行する
