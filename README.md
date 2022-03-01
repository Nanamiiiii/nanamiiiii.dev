# Nanamiiiii.dev
[nanamiiiii.dev](https://nanamiiiii.dev)に置いているページのソースです。それ以上でもそれ以下でもないです。

## Deps
Nextとかを適当に使ってます。フロントエンド何も知らないんでよく分かりません。

## Dev
```
docker-compose build
docker-compose up -d
```
で`./app`以下がコンテナの`/app`と同期されます。コンテナのShellで`$ yarn dev`すれば`http://localhost:3000`でページが見れます。
別のポートが良ければ`docker-compose.yml`を書き換えるなりなんなりしてください。

## Prod
```
docker build -f Dockerfile -t nanamiiiii-prod:latest .
```
(よく考えたら`-f`オプションいらんわ)

`node`のdocker imageで依存モジュール導入とビルドをして、`distroless/nodejs:16`でサーバーを立ち上げるマルチステージ構成。
同じく`http://localhost:3000`で見れます。

