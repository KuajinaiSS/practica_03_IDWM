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
    php artisan serve --host=0.0.0.0
    ```

## Frontend
### Instalación del Frontend
1. Nos dirigimos al frontend
    ```bash
    cd ../frontend
    ```
2. Instalamos las dependencias
    ```bash
    npm install
    ```
3. ejecutamos el proyecto en Android studio
    ```bash
    npx react-native run android
    ```

   


