# API Documentation

## Create Data / Insert Data

- URL: `/api/list_buku`
- Method: `POST`
- Description: This endpoint is used to create or insert data into the list of books.
- Request Body: JSON object representing the book data.
- Example Request:
    ```http
    POST /api/list_buku HTTP/1.1
    Content-Type: application/json

    {
        "title": "Book Title",
        "author": "Book Author",
        "year": 2022
    }
    ```
- Example Response:
    ```http
    HTTP/1.1 201 Created
    Content-Type: application/json

    {
        "message": "Data created successfully"
    }
    ```

## Read Data / Get Data

- URL: `/api/list_buku`
- Method: `GET`
- Description: This endpoint is used to retrieve the list of books.
- Example Request:
    ```http
    GET /api/list_buku HTTP/1.1
    ```
- Example Response:
    ```http
    HTTP/1.1 200 OK
    Content-Type: application/json

    {
        "books": [
            {
                "title": "Book Title",
                "author": "Book Author",
                "year": 2022
            },
            {
                "title": "Another Book Title",
                "author": "Another Book Author",
                "year": 2021
            }
        ]
    }
    ```

## Update Data

- URL: `/api/list_buku/:id`
- Method: `PUT`
- Description: This endpoint is used to update a specific book in the list.
- Request Parameters: `id` - The ID of the book to be updated.
- Request Body: JSON object representing the updated book data.
- Example Request:
    ```http
    PUT /api/list_buku/123 HTTP/1.1
    Content-Type: application/json

    {
        "title": "Updated Book Title",
        "author": "Updated Book Author",
        "year": 2023
    }
    ```
- Example Response:
    ```http
    HTTP/1.1 200 OK
    Content-Type: application/json

    {
        "message": "Data updated successfully"
    }
    ```

## Delete Data

- URL: `/api/list_buku/:id`
- Method: `DELETE`
- Description: This endpoint is used to delete a specific book from the list.
- Request Parameters: `id` - The ID of the book to be deleted.
- Example Request:
    ```http
    DELETE /api/list_buku/123 HTTP/1.1
    ```
- Example Response:
    ```http
    HTTP/1.1 200 OK
    Content-Type: application/json

    {
        "message": "Data deleted successfully"
    }
    ```