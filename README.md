# Nanamiiiii.dev
[nanamiiiii.dev](https://nanamiiiii.dev)に置いている(まだ置いてない)ページのソースです。それ以上でもそれ以下でもないです。

## Stack
NextとChakra-UIをネットで見つけたソースから適当に弄って使ってます。フロントエンド何も知らないんでよく分かりません。

## Dev
```
docker-compose build
docker-compose up -d
```
で`./app`以下がコンテナの`/app`と同期されます。コンテナのShellで`$ yarn dev`すれば`http://localhost:3000`でページが見れます。
別のポートが良ければ`docker-compose.yml`を書き換えるなりなんなりしてください。

## For Deploy
```
docker build -f Dockerfile -t nanamiiiii-prod:latest .
```
(よく考えたら`-f`オプションいらんわ)

`node`のdocker imageで依存モジュール導入とビルドをして、`distroless/nodejs:16`でサーバーを立ち上げるマルチステージ構成。
同じく`http://localhost:3000`で見れます。

自鯖k8sに載せやすいように作っただけ

# フロントエンド、なんも分からん！
動いたから、ヨシ！
