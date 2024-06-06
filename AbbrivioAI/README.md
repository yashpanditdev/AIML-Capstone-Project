```markdown
# Abbrivio AI - Text Summarization App

Welcome to Abbrivio AI, a web application designed for text summarization. Built using React for the frontend and Django with Django Rest Framework for the backend, Abbrivio AI simplifies the process of condensing lengthy text into concise summaries.

## Installation

### Backend (Django)

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Vikipatel1293/AIML-Capstone-Project.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd backend
   ```

3. Optionally, create a virtual environment for isolation:

   ```bash
   python -m venv venv
   ```

4. Activate the virtual environment:

   ```bash
   # Windows
   venv\Scripts\activate

   # macOS/Linux
   source venv/bin/activate
   ```

5. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

6. Apply database migrations:

   ```bash
   python manage.py migrate
   ```

7. Start the Django development server:

   ```bash
   python manage.py runserver
   ```

   The backend server will be accessible at http://localhost:8000.

### Frontend (React)

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install necessary dependencies:

   ```bash
   npm install
   ```

3. Run the React development server:

   ```bash
   npm start
   ```

   The frontend server will be available at http://localhost:3000.

## Usage

1. Open your web browser and navigate to http://localhost:3000.

2. Input the text you wish to summarize into the provided text input field.

3. Click the "Summarize" button to generate the summary.

## Technologies Utilized

- Material UI
- React
- Django
- Django Rest Framework
- Axios

```
```
