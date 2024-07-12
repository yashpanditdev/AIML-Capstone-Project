# Abbrivio AI

Abbrivio AI is a text summarization web application that helps users to summarize text. It uses a fine-tuned BART model trained on a limited subset of the CNN/Daily Mail dataset.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Downloading the Fine-Tuned BART Model](#downloading-the-fine-tuned-bart-model)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Additional Information](#additional-information)
- [License](#license)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- Summarize text using a fine-tuned BART model.
- Simple and intuitive user interface.

## Technologies Used

- **Backend**: Django, Django REST Framework, PyTorch, Transformers
- **Frontend**: React, Material-UI

## Installation

### Prerequisites

- Python 3.7+
- Node.js
- npm
- virtualenv

### Backend Setup

1. **Clone the repository**:
    ```sh
    git clone https://github.com/Vikipatel1293/AIML-Capstone-Project.git
    cd abbrivio-ai/backend
    ```

2. **Create a virtual environment and activate it**:
    ```sh
    python -m venv venv
    source venv/bin/activate  # For Linux/MacOS
    .\venv\Scripts\activate  # For Windows
    ```

3. **Install the dependencies**:
    ```sh
    pip install -r requirements.txt
    ```

4. **Set up the Django application**:
    ```sh
    python manage.py migrate
    python manage.py createsuperuser  # Follow the prompts to create a superuser
    python manage.py runserver
    ```

### Frontend Setup

1. **Navigate to the frontend directory**:
    ```sh
    cd ../frontend
    ```

2. **Install the dependencies**:
    ```sh
    npm install
    ```

3. **Start the development server**:
    ```sh
    npm start
    ```

### Downloading the Fine-Tuned BART Model

1. **Download the fine-tuned BART model folder**:
   - [Download link for fine-tuned BART model](#)

2. **Place the downloaded folder in the specified directory**:
   - After downloading, place the `fine-tuned-bart` folder in the following path:
     ```plaintext
     AbbrivioAI/backend/app/fine-tuned-bart
     ```

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Enter the text you want to summarize in the provided input box.
3. Click the "Summarize" button to generate the summary.

## Screenshots


## API Documentation


## Testing


## Troubleshooting


## Additional Information

This project uses Git Large File Storage (Git LFS) for handling large files. Ensure that you have Git LFS installed to clone and work with this repository. Follow the instructions to install Git LFS from the [official website](https://git-lfs.github.com/).

Before using the fine-tuned BART model, an attempt was made to train a custom model using an encoder-decoder architecture with self-attention and bidirectional LSTM. If you have expertise in this area or have sufficient resources to train this model further, please feel free to contact me.

### Work in Progress

- This project is in progress to fine-tune the BART model properly due to a lack of compute resources.
- Suggestions to improve this project are welcome.
- Contact me if you need any documentation or help in setting up the project.
- Work is in progress for deployment and making it better.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

If you would like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Contact

For any questions, suggestions, or help, please open an issue or contact me directly.

Viki Patel  
vickypatel1293@gmail.com
