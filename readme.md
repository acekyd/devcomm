# DevComm

DevComm is a directory of developers and designers interested in community activities all across Nigeria.

## Stack
- Laravel


## Team

- Abati Adewale (@acekyd)
- Victor Olowe (@1hndrxx)

## Setup

- Run composer install or composer update
- Run npm install
- Duplicate .env.example and rename your copy to .env
- Replace the database details in .env with yours
- php artisan migrate
- php artisan passport:install
- Update config in your .env
- php artisan key:generate -> to generate your app key
- update your .env file with your app key
- chmod 600 storage/oauth-private.key
- chmod 600 storage/oauth-public.key
- php artisan serve
- npm run watch