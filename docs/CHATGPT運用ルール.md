# ChatGPTによるZENTO HP運用ルール

## ZENTO本番HP

本番ブランドサイトは `index.html` と `data/zento.js` で構成する。

内容変更の依頼を受けた場合は、原則として `data/zento.js` を変更し、HTML構造・デザインは変更しない。

## 店舗HP

店舗サイトは `store-template.html` と `data/store.js` を基本テンプレートとして使用する。

店舗ごとの制作では、ヒアリングシートの内容を一次情報として整理し、店舗データへ反映する。

## 情報の扱い

- ユーザーから提供された情報を優先する
- ヒアリングシートにない事実を推測して追加しない
- 例示データを実店舗の情報として使用しない
- 未確定情報はプレースホルダーまたは確認事項として扱う
- 実店舗公開前にプレースホルダーを除去する

## 本番URL

ZENTO本番URLは `https://still-base-7db3.zento9012.workers.dev/`。

ユーザーから明示的な変更指示がない限り、URL、canonical、sitemap、robotsの基準を変更しない。

## GitHub / Cloudflare

- GitHubリポジトリ: `zento9012-netizen/zento-hp`
- 本番ブランチ: `main`
- 公開先: Cloudflare Workers
- GitHub Pagesは使用しない

GitHubの `main` に変更を反映した後、CloudflareのGit連携によるデプロイを前提とする。

## 変更前チェック

- 対象ファイルが本当に変更対象か確認
- 本番ブランドHPと店舗HPを混同しない
- URLやSEO設定を不用意に変更しない
- 店舗固有情報をテンプレート本体へ直接埋め込まない

## 変更後チェック

- GitHubの変更が `main` に反映されている
- 不要なGitHub Pages Workflowが存在しない
- Cloudflare側のデプロイ対象が `main` である
- 本番URLが維持されている
- HTML / JavaScriptの参照パスが壊れていない
- 店舗データのプレースホルダーが公開対象に残っていない
