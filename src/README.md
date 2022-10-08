# WEBアプリケーション環境構築

## 使用技術

- docker
- Laravel：最新
- PHP：8.1
- React
- TypeScript
- mysql：8.0

## 参考

- https://github.com/ucan-lab/docker-laravel
- https://ics.media/entry/16329/
- https://zenn.dev/a_da_chi/articles/bd350f4bbebe9b

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
$ docker exec -i -t docker-laravel-app-1 bash
$ apt update
$ node -v
$ npm -v
```

## 3. フロントエンドの環境を構築

```
$ cd frontend
$ npm install
$ npm run build 
or
$ npm run build watch
```

## 4. tailwindコンパイル

```
npx tailwindcss -i ./tailwind/index.css -o ../public/bundles/tailwind.css --watch
```
