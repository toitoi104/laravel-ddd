# WEBアプリケーション環境構築

## 使用技術

- docker
- Laravel：最新
- PHP：8.1
- React
- TypeScript
- mysql：8.0
- php cs fixer
- larastan(phpstan)

## 参考

- https://github.com/ucan-lab/docker-laravel
- https://ics.media/entry/16329/
- https://zenn.dev/a_da_chi/articles/bd350f4bbebe9b

## 1.docker立ち上げ

```bash
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

```bash
$ docker exec -i -t docker-laravel-app-1 bash
$ apt update
$ node -v
$ npm -v
```

## 3. フロントエンドの環境を構築

```bash
$ cd frontend
$ npm install
$ npm run build 
or
$ npm run build watch
```

## 4. tailwindコンパイル

```bash
npx tailwindcss -i ./tailwind/index.css -o ../public/bundles/tailwind.css --watch
```

## 4. 自動整形(php-cs-fixer)

- 参考：https://qiita.com/ucan-lab/items/7d4180462347a42009d5

```bash
# 自動整形しない(差分表示のみ)
$ ./tools/php-cs-fixer/vendor/bin/php-cs-fixer fix -v --diff --dry-run

# 自動整形する
$ ./tools/php-cs-fixer/vendor/bin/php-cs-fixer fix -v --diff
```

## 5. コードの品質チェック larastan(php stan)

- 設定ファイル：phpstan.neon.dist

```bash
./vendor/bin/phpstan analyse
```

- エラーを無視する方法

```bash
/** @phpstan-ignore-next-line */
$hoge = $this->hogehoge();
```
