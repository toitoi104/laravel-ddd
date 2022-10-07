# WEBアプリケーション環境構築

## 使用技術

- docker
- Laravel：最新
- PHP：8.1
- React
- TypeScript


## 1.docker立ち上げ

````
$ mkdir -p src
$ docker compose build
$ docker compose up -d
$ docker compose exec app composer create-project --prefer-dist laravel/laravel .
$ docker compose exec app php artisan key:generate
$ docker compose exec app php artisan storage:link
$ docker compose exec app chmod -R 777 storage bootstrap/cache
$ docker compose exec app php artisan migrate
```

## 2. npmをインストール

```
$ docker exec -i -t docker-laravel-web-1 bash
$ apt update
$ node -v
$ npm -v
```

## vimをインストール
```
$ apt-get update
$ apt-get install vim
```

## 3. フロントエンドの環境を構築

```
$ cd frontend
$ npm install
$ npm run build 
or
$ npm run build watch
```
