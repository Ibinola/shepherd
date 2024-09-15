## How to Contribute

A simple guide on how to contribute. Please follow these steps:

### 1. Fork the Repository

- Click on the `Fork` button at the top right of this repository page to create a copy of the repository in your GitHub account.

 - ![alt text](/public/readme-images/image-1.png)


 - ![alt text](/public/readme-images/image-3.png)

### 2. Clone the Forked Repository

- Clone the repository to your local machine using the following command:

  ```bash
  git clone https://github.com/YOUR-USERNAME/shephard.git
  ```
- YOUR-USERNAME will be your actual GitHub username.

![alt text](/public/readme-images/image-4.png)

### 3. Run npm install to install dependencies
   ```bash
   npm install
   ```

### 4. Create a New Branch

- Navigate to the project directory:

    ```bash
    cd shephard
    ```
- Create a new branch for the task or page you working on:

    ```bash
    git checkout -b feature/your-feature-name
    ```
- Name your branch based on the changes/task you are assigned on. For example if I'm working on the NavBar section name your branch 

    ```bash
    git checkout -b feature/nav-bar
    ```
### 5. Make Your Changes

- Add the files you've worked on

    ```bash
    git add .
    ```

- Commit your changes with a clear and descriptive commit message.

    ```bash
    git commit -m "Add detailed description of your changes"
    ```

### 6. Push Your Changes to GitHub

- Push your branch to your forked repository:

    ```bash
    git push origin feature/your-feature-name. 
    ```
- For example:   
    ```bash
    git push origin feature/nav-bar
    ```

### 7. Create a Pull Request

- Go to the original repository on GitHub.
- Click the Compare & pull request button.
- Provide a clear title and description for your pull request.
- Submit the pull request for review.

