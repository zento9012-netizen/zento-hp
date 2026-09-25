# ZENTO HP

ZENTOの本番ブランドサイトと、店舗・飲食店向けHP制作テンプレートを管理するリポジトリです。

## 構成

- `index.html` — ZENTO本番ブランドページ
- `data/zento.js` — ZENTO本番ページの表示内容
- `store-template.html` — 店舗・飲食店向けHPテンプレート
- `data/store.js` — 店舗HPの差し替えデータ
- `images/` — 店舗HPで使用する画像を配置する場所（店舗ごとに必要）

## 店舗HPを作る流れ

1. ヒアリングシートから店舗情報を整理する
2. `data/store.js` の内容を対象店舗の情報へ差し替える
3. `images/` に店舗画像を配置する
4. `store-template.html` を店舗用ページとして複製・公開する
5. 独自ドメインを接続する場合はCloudflare側でドメインとルートを設定する

## 本番ブランドページ

本番ブランドページの文章・サービス内容などは `data/zento.js` を変更します。ページ本体のHTML構造を直接編集する必要がない構成です。

## デプロイ

GitHubの `main` への変更は、接続済みのCloudflare側デプロイ設定から本番反映する構成です。GitHub Pagesのワークフローもリポジトリには存在しますが、ZENTOの本番公開先はCloudflare Workersです。

## 公開前チェック

- 店舗名・住所・電話番号・営業時間・定休日
- メニュー名・価格
- 画像ファイル名とパス
- Google Maps URL
- メールアドレス・SNS URL
- canonical / sitemap / robots.txt
- スマートフォン表示

実店舗サイトを公開するときは、プレースホルダー（`【...】`、`info@example.com`、`00-0000-0000` 等）が残っていないことを確認してください。
