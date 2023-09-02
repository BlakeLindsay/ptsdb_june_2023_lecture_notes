# Getting Started
- Create a `package.json`
	- using the command `npm init`
		- Initializes our project
- create an `index.js`

- Install our Dependencies 
	- express: `npm install express`

- Install Dependencies gives us and updates 2 files
	- `package.json`
		- updates to contain the new dependencies we have installed
	- `package-lock.json`
		- contain each specific dependency for our entire project, including dependencies for our dependencies, as well as what specific version is required

If we ever need to, we can delete our `node_modules` folder safely. This may happen if a file is corrupted, if we make an edit, if something gets accidentally deleted or moved. If we want to recover our folder, we can delete the `node_modules` folder and run the command `npm install` in  our terminal.

- Ignore files using a `.gitignore`
	- `.gitignore` file will specify different files, folders, and file extensions that will NOT be tracked using git

## Starting the server
	-`node index.js`
		- this will use "node" to run our 
		- We will need to stop, then re-run our server in order to interact with changes we make to our files

## CRUD (Create, Read, Update, Delete)
	- Create: POST
	- Read: GET
	- Update: PUT / PATCH
	- Delete: DELETE