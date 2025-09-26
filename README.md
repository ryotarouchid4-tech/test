# PWA Vite + React テンプレート

**目的**: 最小限の構成で PWA を作り、スマホとPCで動くアプリを公開するためのテンプレートです。

## ローカルで試す（非エンジニア向け手順）

1. Node.js をインストール（公式サイトから LTS を選んでインストール）
2. このリポジトリをダウンロード（または GitHub にアップロードして clone）
3. ターミナル（またはコマンドプロンプト）でプロジェクトフォルダに移動

```bash
npm install
npm run dev
```

4. ブラウザで `http://localhost:5173` を開く

## 公開（Vercel が最も簡単）

1. GitHub にリポジトリを作る（`New repository` → ファイルをアップロードするだけでも OK）
2. Vercel にログインして `Import Project` → GitHub リポジトリを選択
3. Build Command: `npm run build`
   Publish directory: `dist`
4. Deploy を押すと自動的に HTTPS で公開されます。

## スマホでの確認方法

1. 公開された URL をスマホのブラウザで開く
2. ブラウザメニューから「ホーム画面に追加」
3. インストール後はスタンドアロン表示（アプリのように見える）になります

## カスタマイズ／注意点

- `public/icons/` に 192x192 と 512x512 のPNGアイコンを追加してください
- iOS の PWA は一部制限があります（プッシュ通知不可等）
- サービスワーカーのキャッシュ戦略は用途に合わせて調整してください
