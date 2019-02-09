# DevComm

DevComm is a directory of developers and designers interested in community activities all across Nigeria.

This project is currently offline to re-evaluate approach to achieve intended goal.

## Stack
- Laravel


## Team

- Abati Adewale (@acekyd)
- Contributors

## Getting Started

### Install Dependencies
- Run composer install or composer update
```bash
composer install
```
OR
```bash
composer update
```

### Install dependencies in `package.json`
```bash
npm install
```

### Database Setup

Duplicate .env.example and rename your copy to .env and proceed to replace the database details in
`.env` file with yours.

```bash

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=Your-database-name
DB_USERNAME=Your-database-username
DB_PASSWORD=Your-database-password

```

### Migrating and Creating Table
```bash
php artisan migrate
```

### Install Laravel Passport
```bash
php artisan passport:install
```
Add keys generated to .env

### Generate a new Application Key
```bash
php artisan key:generate
```

### Change Access Permissions
```bash
chmod 600 storage/oauth-private.key
chmod 600 storage/oauth-public.key
```

### Run the Application
```bash
php artisan serve
```
### Run and compile Script
```bash
npm run watch
```

If you are having any issues properly running `npm run watch`, could be as a result of different node versions. Run `npm install -s node`

Home page designs
https://www.figma.com/file/MYpNNDsSPLVPXquHR0Jq5NlE/Devcomm