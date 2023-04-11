# Myuu.dev
Page source of [myuu.dev](https://myuu.dev)

## Language / Framework
- Typescript
- Next.js
- Chakra-UI

## Need for run / build
Only `docker`

## Development env
### Build and Launch container
```sh
$ docker-compose build
$ docker-compose up -d
```

### Launch dev server
```sh
$ docker-compose exec app pnpm dev
```

`docker-compose.yml` & `dev.Dockerfile` is compatible for VSCode Remote Container Extension

By default, dev server runs on `localhost:3000`.

## Build and Run production image
```sh
$ docker build -f Dockerfile -t nanamiiiii-dev:latest .
$ docker run -p 3000:3000 nanamiiiii-dev:latest
```
By default, server runs on `localhost:3000`

