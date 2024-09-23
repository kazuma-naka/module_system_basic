# Date Display App (TypeScript)

This is a simple TypeScript application that uses the `date-fns` library to display the current date and time in the format `yyyy-MM-dd HH:mm:ss`. The time is updated every second.

## Features

- Displays the current time in the `yyyy-MM-dd HH:mm:ss` format.
- Automatically updates every second.

## Requirements

- Node.js (v12 or higher)
- npm (Node Package Manager)
- TypeScript
- `date-fns` library

## Installation

### Step 1: Clone or download the repository.

```bash
git clone https://github.com/kazuma-naka/module_system_basic.git
cd module_system_basic
```

### Step 2: Compile TypeScript to JavaScript.

Compile a specific TypeScript file manually:

```bash
npx tsc app.ts
```

### Step 3: Run the Application.

After compiling the TypeScript code to JavaScript, run the generated `app.js` file:

```bash
node app.js
```

You should see the current date and time printed to the console, and it will update every second.

## Usage

This app will display the current date and time in the terminal in the following format:

```
2024-09-23 12:45:32
2024-09-23 12:45:33
2024-09-23 12:45:34
...
```
