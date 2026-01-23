"use strict";
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
