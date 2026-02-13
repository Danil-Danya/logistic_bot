/**
 * @swagger
 * /groups:
 *   get:
 *     tags:
 *       - Groups
 *     summary: Get all groups with pagination and filters
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Items per page
 *       - in: query
 *         name: where
 *         schema:
 *           type: string
 *         description: Filter value
 *       - in: query
 *         name: where_field
 *         schema:
 *           type: string
 *         description: Field to filter by
 *       - in: query
 *         name: order_by
 *         schema:
 *           type: string
 *         description: Field to order by
 *       - in: query
 *         name: order_type
 *         schema:
 *           type: string
 *           enum: [ASC, DESC]
 *         description: Order type
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search value
 *       - in: query
 *         name: search_field
 *         schema:
 *           type: string
 *         description: Field to search in
 *     responses:
 *       200:
 *         description: Paginated list of groups
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 offset:
 *                   type: integer
 *                   example: 0
 *                 total_items:
 *                   type: integer
 *                   example: 100
 *                 total_pages:
 *                   type: integer
 *                   example: 10
 *                 rows:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Group'
 *               required:
 *                 - page
 *                 - limit
 *                 - offset
 *                 - total_items
 *                 - total_pages
 *                 - rows
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /groups/{id}:
 *   get:
 *     tags:
 *       - Groups
 *     summary: Get group by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Group ID
 *     responses:
 *       200:
 *         description: Group object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Group'
 *       404:
 *         description: Group not found
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /groups/{id}:
 *   delete:
 *     tags:
 *       - Groups
 *     summary: Delete group by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Group ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Group deleted successfully
 *       404:
 *         description: Group not found
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /groups/{id}:
 *   put:
 *     tags:
 *       - Groups
 *     summary: Update group by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Group ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Group name
 *                 example: "My Group"
 *               user_name:
 *                 type: string
 *                 description: Username of the group owner
 *                 example: "john_doe"
 *               type:
 *                 type: string
 *                 description: Group type
 *                 example: "public"
 *     responses:
 *       200:
 *         description: Updated group object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Group'
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: Group not found
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /groups/{id}:
 *   patch:
 *     tags:
 *       - Groups
 *     summary: Edit group by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Group ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Group name
 *                 example: "My Group"
 *               user_name:
 *                 type: string
 *                 description: Username of the group owner
 *                 example: "john_doe"
 *               type:
 *                 type: string
 *                 description: Group type
 *                 example: "public"
 *     responses:
 *       200:
 *         description: Updated group object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Group'
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: Group not found
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /folders:
 *   post:
 *     tags:
 *       - Folders
 *     summary: Create a new folder
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Folder name
 *                 example: "My Folder"
 *               link:
 *                 type: string
 *                 description: Folder link
 *                 example: "my-folder-link"
 *     responses:
 *       201:
 *         description: Folder created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Folder'
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /folders/{id}:
 *   put:
 *     tags:
 *       - Folders
 *     summary: Update folder by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Folder id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Folder name
 *                 example: "My Folder"
 *               link:
 *                 type: string
 *                 description: Folder link
 *                 example: "my-folder-link"
 *     responses:
 *       200:
 *         description: Folder updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Folder'
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: Folder not found
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /folders/{id}:
 *   patch:
 *     tags:
 *       - Folders
 *     summary: Edit folder by id (partial update)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Folder id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Folder name
 *                 example: "My Folder"
 *               link:
 *                 type: string
 *                 description: Folder link
 *                 example: "my-folder-link"
 *     responses:
 *       200:
 *         description: Folder edited successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Folder'
 *       400:
 *         description: Invalid input data
 *       404:
 *         description: Folder not found
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /folders/{id}:
 *   delete:
 *     tags:
 *       - Folders
 *     summary: Delete folder by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Folder id
 *     responses:
 *       200:
 *         description: Folder deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Folder deleted successfully"
 *       400:
 *         description: Invalid id
 *       404:
 *         description: Folder not found
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /folders:
 *   get:
 *     tags:
 *       - Folders
 *     summary: Get all folders with pagination
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of items per page
 *       - in: query
 *         name: where
 *         schema:
 *           type: string
 *         description: Filter value
 *       - in: query
 *         name: where_field
 *         schema:
 *           type: string
 *         description: Field to filter by
 *       - in: query
 *         name: order_by
 *         schema:
 *           type: string
 *         description: Field to order by
 *       - in: query
 *         name: order_type
 *         schema:
 *           type: string
 *           enum: [ASC, DESC]
 *         description: Order direction
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search value
 *       - in: query
 *         name: search_field
 *         schema:
 *           type: string
 *         description: Field to search in
 *     responses:
 *       200:
 *         description: List of folders with pagination
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 offset:
 *                   type: integer
 *                   example: 0
 *                 total_items:
 *                   type: integer
 *                   example: 100
 *                 total_pages:
 *                   type: integer
 *                   example: 10
 *                 rows:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "uuid"
 *                       name:
 *                         type: string
 *                         example: "Folder 1"
 *                       link:
 *                         type: string
 *                         example: "https://example.com"
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /folders/{id}:
 *   get:
 *     tags:
 *       - Folders
 *     summary: Get folder by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Folder id
 *     responses:
 *       200:
 *         description: Folder object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "uuid"
 *                 name:
 *                   type: string
 *                   example: "Folder 1"
 *                 link:
 *                   type: string
 *                   example: "https://example.com"
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Folder not found
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /folders/add-group:
 *   post:
 *     tags:
 *       - Folders
 *     summary: Add a group to a folder
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               folderId:
 *                 type: string
 *                 example: "uuid"
 *               groupId:
 *                 type: string
 *                 example: "uuid"
 *     responses:
 *       200:
 *         description: Group added to folder successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 folder_id:
 *                   type: string
 *                 group_id:
 *                   type: string
 *                 id:
 *                   type: string
 *       400:
 *         description: Invalid data
 *       404:
 *         description: Folder or group not found
 *       500:
 *         description: Server error
 */



/**
 * @swagger
 * /countries:
 *   post:
 *     summary: Создать новую страну
 *     tags: [Countries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name_rus:
 *                 type: string
 *                 description: Название страны на русском языке
 *                 example: "Россия"
 *               name_uzb:
 *                 type: string
 *                 description: Название страны на узбекском языке
 *                 example: "Rossiya"
 *               name_eng:
 *                 type: string
 *                 description: Название страны на английском языке
 *                 example: "Russia"
 *               keywords:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Ключевые слова для поиска страны
 *                 example: ["Россия", "Rossiya", "Russia"]
 *             required:
 *               - name_rus
 *               - name_uzb
 *               - name_eng
 *     responses:
 *       201:
 *         description: Созданная страна
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Country'
 *       400:
 *         description: Некорректные данные
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /countries/{id}:
 *   put:
 *     summary: Обновить существующую страну
 *     tags: [Countries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Уникальный идентификатор страны
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name_rus:
 *                 type: string
 *                 description: Название страны на русском языке
 *                 example: "Россия"
 *               name_uzb:
 *                 type: string
 *                 description: Название страны на узбекском языке
 *                 example: "Rossiya"
 *               name_eng:
 *                 type: string
 *                 description: Название страны на английском языке
 *                 example: "Russia"
 *               keywords:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Ключевые слова для поиска страны
 *                 example: ["Россия", "Rossiya", "Russia"]
 *     responses:
 *       201:
 *         description: Обновленная страна
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Country'
 *       400:
 *         description: Некорректные данные
 *       404:
 *         description: Страна не найдена
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /countries/{id}:
 *   patch:
 *     summary: Редактировать существующую страну
 *     tags: [Countries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Уникальный идентификатор страны
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name_rus:
 *                 type: string
 *                 description: Название страны на русском языке
 *                 example: "Россия"
 *               name_uzb:
 *                 type: string
 *                 description: Название страны на узбекском языке
 *                 example: "Rossiya"
 *               name_eng:
 *                 type: string
 *                 description: Название страны на английском языке
 *                 example: "Russia"
 *               keywords:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Ключевые слова для поиска страны
 *                 example: ["Россия", "Rossiya", "Russia"]
 *     responses:
 *       201:
 *         description: Отредактированная страна
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Country'
 *       400:
 *         description: Некорректные данные
 *       404:
 *         description: Страна не найдена
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /countries/{id}:
 *   delete:
 *     summary: Удалить страну по ID
 *     tags: [Countries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Уникальный идентификатор страны
 *     responses:
 *       200:
 *         description: Страна успешно удалена
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Country'
 *       404:
 *         description: Страна с указанным ID не найдена
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /countries/{id}:
 *   get:
 *     summary: Получить страну по ID
 *     tags: [Countries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Уникальный идентификатор страны
 *     responses:
 *       200:
 *         description: Страна найдена
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Country'
 *       404:
 *         description: Страна с указанным ID не найдена
 *       500:
 *         description: Внутренняя ошибка сервера
 */


/**
 * @swagger
 * /countries:
 *   get:
 *     summary: Получить список стран с пагинацией и фильтрацией
 *     tags: [Countries]
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
 *         description: Поле, по которому применяются фильтры
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
 *         description: Список стран с пагинацией
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Country'
 *       500:
 *         description: Внутренняя ошибка сервера
 */
