"use strict";
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
