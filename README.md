# Blog Management System

## Overview
This project is a Blog Management System built with Django for the backend and React for the frontend. It allows users to create, read, update, and delete blog posts. The backend API is built with Django and uses PostgreSQL as the database. The frontend is built with React and fetches data from the backend API.

## Features
- Create, read, update, and delete blog posts
- View blog details

## Technologies Used
- **Backend**: Django, Django REST Framework
- **Frontend**: React, Axios
- **Database**: PostgreSQL

## Getting Started

### Prerequisites
- Python 3.x
- Node.js and npm
- PostgreSQL

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo

## Backend Setup:

   - Set up the PostgreSQL database and update the `DATABASES` setting in `settings.py` with your database credentials.
     - Example configuration in `settings.py`:

       ```python
       DATABASES = {
           'default': {
               'ENGINE': 'django.db.backends.postgresql',
               'NAME': 'your_database_name',
               'USER': 'your_database_user',
               'PASSWORD': 'your_database_password',
               'HOST': 'localhost',
               'PORT': '5432',
           }
       }
       ```

   - Run migrations:

     ```bash
     python manage.py makemigrations
     ```
  - and 
     ```bash
     python manage.py migrate
     ```

   - Create a superuser:

     ```bash
     python manage.py createsuperuser
     ```

   - Start the backend server:

     ```bash
     python manage.py runserver
     ```

3. **Frontend Setup:**

   - Navigate to the frontend directory:

     ```bash
     cd frontend/blog-post-management
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Start the frontend development server:

     ```bash
     npm run dev
     ```

## Usage
- Navigate to `http://localhost:5173/` to view the frontend application.
- Use the Django admin interface at `http://localhost:8000/admin` to manage users, permissions, and blog posts.



## Scripts

-- Script 1: Insert Blog Post 1
INSERT INTO blog_blog (title, content, author, created_at, updated_at)
VALUES 
('First Blog Post', 'This is the content of the first blog post.', 'author_username_1', NOW(), NOW());

-- Script 2: Insert Blog Post 2
INSERT INTO blog_blog (title, content, author, created_at, updated_at)
VALUES 
('Second Blog Post', 'This is the content of the second blog post.', 'author_username_2', NOW(), NOW());

-- Script 3: Insert Blog Post 3
INSERT INTO blog_blog (title, content, author, created_at, updated_at)
VALUES 
('Third Blog Post', 'This is the content of the third blog post.', 'author_username_3', NOW(), NOW());
