## Backend (Laravel)

### Requisitos del Backend

- PHP instalado
- Composer instalado

### Instalación del Backend

1. Accede al directorio del backend
    ```bash
    cd backend
    ```

2. Instala las dependencias
    ```bash
    composer install
    ```

3. Copia el archivo de configuración
    ```bash
    cp .env.example .env
    ```

4. Genera la clave de la aplicación
    ```bash
    php artisan key:generate
    ```

5. Configura la base de datos en el archivo `.env`

6. Ejecuta las migraciones
    ```bash
    php artisan migrate
    ```

7. Ejecuta los seeders
    ```bash
    php artisan migrate:fresh --seed
    ```

8. Ejecuta el servidor de desarrollo
    ```bash
    php artisan serve
    ```

### Requisitos del Frontend
7. Copia el archivo de configuración: `cp .env.example .env`
8. Genera la clave de la aplicación: `php artisan key:generate`
9. Configura la base de datos en el archivo `.env`
10. Ejecuta las migraciones: `php artisan migrate`
11. utiliza los seeders: `php artisan migrate:fresh --seed`
12. Ejecuta el servidor de desarrollo: `php artisan serve`
```
