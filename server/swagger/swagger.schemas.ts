/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: d290f1ee-6c54-4b01-90e6-d701748f0851
 *         first_name:
 *           type: string
 *           example: John
 *         last_name:
 *           type: string
 *           nullable: true
 *           example: Doe
 *         user_name:
 *           type: string
 *           nullable: true
 *           example: john_doe
 *         chat_id:
 *           type: string
 *           example: 123456789
 *         avatar_path:
 *           type: string
 *           nullable: true
 *           example: /uploads/images/default_avatar.png
 *         role:
 *           type: string
 *           enum:
 *             - USER
 *             - STAFF
 *             - ADMIN
 *           example: USER
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: 2026-01-01T12:00:00Z
 *         updated_at:
 *           type: string
 *           format: date-time
 *           example: 2026-01-01T12:00:00Z
 *       required:
 *         - id
 *         - first_name
 *         - chat_id
 *         - role
 *         - created_at
 *         - updated_at
 *
 *     UserCreationAttributes:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         first_name:
 *           type: string
 *         last_name:
 *           type: string
 *           nullable: true
 *         user_name:
 *           type: string
 *           nullable: true
 *         chat_id:
 *           type: string
 *         avatar_path:
 *           type: string
 *           nullable: true
 *         role:
 *           type: string
 *           enum:
 *             - USER
 *             - STAFF
 *             - ADMIN
 *         created_at:
 *           type: string
 *           format: date-time
 *         updated_at:
 *           type: string
 *           format: date-time
 *       required: []
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     TariffToUser:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "d290f1ee-6c54-4b01-90e6-d701748f0851"
 *         tariff_id:
 *           type: string
 *           format: uuid
 *           example: "b6f1d0ee-6c54-4b01-90e6-d701748f0851"
 *         user_id:
 *           type: string
 *           format: uuid
 *           example: "a5c9f1ee-6c54-4b01-90e6-d701748f0851"
 *         status:
 *           type: string
 *           enum:
 *             - ACTIVE
 *             - EXPIRED
 *             - CANCELLED
 *           example: ACTIVE
 *         started_at:
 *           type: string
 *           format: date-time
 *           example: "2026-01-01T12:00:00Z"
 *         ended_at:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           example: "2026-02-01T12:00:00Z"
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: "2026-01-01T12:00:00Z"
 *         updated_at:
 *           type: string
 *           format: date-time
 *           example: "2026-01-01T12:00:00Z"
 *       required:
 *         - id
 *         - tariff_id
 *         - user_id
 *         - status
 *         - started_at
 *         - created_at
 *         - updated_at
 *
 *     TariffToUserCreationAttributes:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         tariff_id:
 *           type: string
 *           format: uuid
 *         user_id:
 *           type: string
 *           format: uuid
 *         status:
 *           type: string
 *           enum:
 *             - ACTIVE
 *             - EXPIRED
 *             - CANCELLED
 *         started_at:
 *           type: string
 *           format: date-time
 *         ended_at:
 *           type: string
 *           format: date-time
 *           nullable: true
 *         created_at:
 *           type: string
 *           format: date-time
 *         updated_at:
 *           type: string
 *           format: date-time
 *       required: []
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Tariff:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "d290f1ee-6c54-4b01-90e6-d701748f0851"
 *         name:
 *           type: string
 *           example: "Premium"
 *         description:
 *           type: string
 *           nullable: true
 *           example: "Полный доступ ко всем функциям"
 *         price:
 *           type: number
 *           format: float
 *           example: 49.99
 *         period:
 *           type: string
 *           enum:
 *             - daily
 *             - weekly
 *             - monthly
 *             - yearly
 *           example: monthly
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: "2026-01-01T12:00:00Z"
 *         updated_at:
 *           type: string
 *           format: date-time
 *           example: "2026-01-01T12:00:00Z"
 *       required:
 *         - id
 *         - name
 *         - price
 *         - period
 *         - created_at
 *         - updated_at
 *
 *     TariffCreationAttributes:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         name:
 *           type: string
 *         description:
 *           type: string
 *           nullable: true
 *         price:
 *           type: number
 *           format: float
 *         period:
 *           type: string
 *           enum:
 *             - daily
 *             - weekly
 *             - monthly
 *             - yearly
 *       required: []
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Role:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "d290f1ee-6c54-4b01-90e6-d701748f0851"
 *         name:
 *           type: string
 *           example: "ADMIN"
 *         description:
 *           type: string
 *           nullable: true
 *           example: "Полные права доступа"
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: "2026-01-01T12:00:00Z"
 *         updated_at:
 *           type: string
 *           format: date-time
 *           example: "2026-01-01T12:00:00Z"
 *       required:
 *         - id
 *         - name
 *         - created_at
 *         - updated_at
 *
 *     RoleCreationAttributes:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         name:
 *           type: string
 *         description:
 *           type: string
 *           nullable: true
 *       required: []
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Message:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "d290f1ee-6c54-4b01-90e6-d701748f0851"
 *         message_id:
 *           type: string
 *           example: "123456"
 *         author_name:
 *           type: string
 *           nullable: true
 *           example: "John Doe"
 *         text:
 *           type: string
 *           example: "Hello, world!"
 *         date:
 *           type: string
 *           format: date-time
 *           example: "2026-01-01T12:00:00Z"
 *         group_id:
 *           type: string
 *           example: "group_123"
 *       required:
 *         - id
 *         - message_id
 *         - text
 *         - group_id
 *         - date
 *
 *     MessageCreationAttributes:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         message_id:
 *           type: string
 *         author_name:
 *           type: string
 *           nullable: true
 *         text:
 *           type: string
 *         date:
 *           type: string
 *           format: date-time
 *         group_id:
 *           type: string
 *       required: []
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Group:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "d290f1ee-6c54-4b01-90e6-d701748f0851"
 *         group_id:
 *           type: string
 *           example: "123456789"
 *         title:
 *           type: string
 *           example: "My Telegram Group"
 *         username:
 *           type: string
 *           nullable: true
 *           example: "my_group"
 *         type:
 *           type: string
 *           enum:
 *             - group
 *             - supergroup
 *           example: group
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: "2026-01-01T12:00:00Z"
 *         updated_at:
 *           type: string
 *           format: date-time
 *           example: "2026-01-01T12:00:00Z"
 *       required:
 *         - id
 *         - group_id
 *         - title
 *         - type
 *         - created_at
 *         - updated_at
 *
 *     GroupCreationAttributes:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         group_id:
 *           type: string
 *         title:
 *           type: string
 *         username:
 *           type: string
 *           nullable: true
 *         type:
 *           type: string
 *           enum:
 *             - group
 *             - supergroup
 *         created_at:
 *           type: string
 *           format: date-time
 *         updated_at:
 *           type: string
 *           format: date-time
 *       required: []
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     FolderToUser:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "d290f1ee-6c54-4b01-90e6-d701748f0851"
 *         folder_id:
 *           type: string
 *           format: uuid
 *           example: "b6f1d0ee-6c54-4b01-90e6-d701748f0851"
 *         user_id:
 *           type: string
 *           format: uuid
 *           example: "a5c9f1ee-6c54-4b01-90e6-d701748f0851"
 *       required:
 *         - id
 *         - folder_id
 *         - user_id
 *
 *     FolderToUserCreationAttributes:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         folder_id:
 *           type: string
 *           format: uuid
 *         user_id:
 *           type: string
 *           format: uuid
 *       required: []
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     FolderToGroups:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "d290f1ee-6c54-4b01-90e6-d701748f0851"
 *         folder_id:
 *           type: string
 *           format: uuid
 *           example: "b6f1d0ee-6c54-4b01-90e6-d701748f0851"
 *         group_id:
 *           type: string
 *           format: uuid
 *           example: "a5c9f1ee-6c54-4b01-90e6-d701748f0851"
 *       required:
 *         - id
 *         - folder_id
 *         - group_id
 *
 *     FolderToGroupsCreationAttributes:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         folder_id:
 *           type: string
 *           format: uuid
 *         group_id:
 *           type: string
 *           format: uuid
 *       required: []
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Folder:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "d290f1ee-6c54-4b01-90e6-d701748f0851"
 *         name:
 *           type: string
 *           example: "Main folder"
 *         link:
 *           type: string
 *           example: "https://example.com/folder"
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: "2026-01-01T12:00:00Z"
 *         updated_at:
 *           type: string
 *           format: date-time
 *           example: "2026-01-01T12:00:00Z"
 *       required:
 *         - id
 *         - name
 *         - link
 *         - created_at
 *         - updated_at
 *
 *     FolderCreationAttributes:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         name:
 *           type: string
 *         link:
 *           type: string
 *       required: []
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Country:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Уникальный идентификатор страны
 *           example: "550e8400-e29b-41d4-a716-446655440000"
 *         name_rus:
 *           type: string
 *           description: Название страны на русском языке
 *           example: "Россия"
 *         name_uzb:
 *           type: string
 *           description: Название страны на узбекском языке
 *           example: "Rossiya"
 *         name_eng:
 *           type: string
 *           description: Название страны на английском языке
 *           example: "Russia"
 *         keywords:
 *           type: array
 *           items:
 *             type: string
 *           description: Ключевые слова для поиска страны
 *           example: ["Россия", "Rossiya", "Russia"]
 *       required:
 *         - name_rus
 *         - name_uzb
 *         - name_eng
 */



/**
 * @swagger
 * components:
 *   schemas:
 *     City:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Уникальный идентификатор города
 *           example: "550e8400-e29b-41d4-a716-446655440001"
 *         name_rus:
 *           type: string
 *           description: Название города на русском языке
 *           example: "Томск"
 *         name_uzb:
 *           type: string
 *           description: Название города на узбекском языке
 *           example: "Tomsk"
 *         name_eng:
 *           type: string
 *           description: Название города на английском языке
 *           example: "Tomsk"
 *         keywords:
 *           type: array
 *           items:
 *             type: string
 *           description: Ключевые слова для поиска города
 *           example: ["Томск", "Tomsk", "Tomsk city"]
 *         country_id:
 *           type: string
 *           format: uuid
 *           description: Идентификатор страны, к которой относится город
 *           example: "550e8400-e29b-41d4-a716-446655440000"
 *       required:
 *         - name_rus
 *         - name_uzb
 *         - name_eng
 *         - country_id
 */



/**
 * @swagger
 * /cities:
 *   post:
 *     summary: Создать новый город
 *     tags: [Cities]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               country_id:
 *                 type: string
 *                 format: uuid
 *                 description: Идентификатор страны, к которой относится город
 *                 example: "550e8400-e29b-41d4-a716-446655440000"
 *               name_rus:
 *                 type: string
 *                 description: Название города на русском языке
 *                 example: "Томск"
 *               name_uzb:
 *                 type: string
 *                 description: Название города на узбекском языке
 *                 example: "Tomsk"
 *               name_eng:
 *                 type: string
 *                 description: Название города на английском языке
 *                 example: "Tomsk"
 *               keywords:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Ключевые слова для поиска города
 *                 example: ["Томск", "Tomsk", "Tomsk city"]
 *             required:
 *               - country_id
 *               - name_rus
 *               - name_uzb
 *               - name_eng
 *     responses:
 *       201:
 *         description: Созданный город
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/City'
 *       400:
 *         description: Некорректные данные
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /cities/{id}:
 *   put:
 *     summary: Обновить существующий город
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Уникальный идентификатор города
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               country_id:
 *                 type: string
 *                 format: uuid
 *                 description: Идентификатор страны, к которой относится город
 *                 example: "550e8400-e29b-41d4-a716-446655440000"
 *               name_rus:
 *                 type: string
 *                 description: Название города на русском языке
 *                 example: "Томск"
 *               name_uzb:
 *                 type: string
 *                 description: Название города на узбекском языке
 *                 example: "Tomsk"
 *               name_eng:
 *                 type: string
 *                 description: Название города на английском языке
 *                 example: "Tomsk"
 *               keywords:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Ключевые слова для поиска города
 *                 example: ["Томск", "Tomsk", "Tomsk city"]
 *     responses:
 *       201:
 *         description: Обновленный город
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/City'
 *       400:
 *         description: Некорректные данные
 *       404:
 *         description: Город с указанным ID не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /cities/{id}:
 *   patch:
 *     summary: Частично обновить город
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Уникальный идентификатор города
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               country_id:
 *                 type: string
 *                 format: uuid
 *                 description: Идентификатор страны, к которой относится город
 *                 example: "550e8400-e29b-41d4-a716-446655440000"
 *               name_rus:
 *                 type: string
 *                 description: Название города на русском языке
 *                 example: "Томск"
 *               name_uzb:
 *                 type: string
 *                 description: Название города на узбекском языке
 *                 example: "Tomsk"
 *               name_eng:
 *                 type: string
 *                 description: Название города на английском языке
 *                 example: "Tomsk"
 *               keywords:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Ключевые слова для поиска города
 *                 example: ["Томск", "Tomsk", "Tomsk city"]
 *     responses:
 *       201:
 *         description: Частично обновленный город
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/City'
 *       400:
 *         description: Некорректные данные
 *       404:
 *         description: Город с указанным ID не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /cities/{id}:
 *   delete:
 *     summary: Удалить город по ID
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Уникальный идентификатор города
 *     responses:
 *       200:
 *         description: Город успешно удален
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/City'
 *       404:
 *         description: Город с указанным ID не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /cities/{id}:
 *   get:
 *     summary: Получить город по ID
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Уникальный идентификатор города
 *     responses:
 *       200:
 *         description: Город найден
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/City'
 *       404:
 *         description: Город с указанным ID не найден
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /cities:
 *   get:
 *     summary: Получить список городов с пагинацией и фильтрацией
 *     tags: [Cities]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Номер страницы для пагинации
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Количество элементов на странице
 *       - in: query
 *         name: where
 *         schema:
 *           type: string
 *         description: Значение для фильтрации по определённому полю
 *       - in: query
 *         name: where_field
 *         schema:
 *           type: string
 *         description: Поле, по которому применяется фильтр
 *       - in: query
 *         name: order_by
 *         schema:
 *           type: string
 *         description: Поле для сортировки
 *       - in: query
 *         name: order_type
 *         schema:
 *           type: string
 *           enum: [ASC, DESC]
 *         description: Тип сортировки
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Значение для поиска по определённому полю
 *       - in: query
 *         name: search_field
 *         schema:
 *           type: string
 *         description: Поле для поиска
 *     responses:
 *       200:
 *         description: Список городов с пагинацией
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/City'
 *       500:
 *         description: Внутренняя ошибка сервера
 */
