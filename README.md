# Assignment: Open Data

Visual represntation of data reveived from 4 different sensors during the day, along with past data.

The application is currently hosted at `https://opendata-assignment.herokuapp.com/`

## Tech Stack Used

I have used MERN stack to complete this assignment. And styling is done with custom css for each component. ReactJS chart liobrary is used for visula reprentation of data.

URl used for pulling the data:`https://opendata.hopefully.works/api/events`. Bearer token is used to fetch the data.

To access the data you need to `/api/signup` to our API. The signup is easy; you **POST** your email and a password **as JSON** in the request body into our signup endpoint `https://opendata.hopefully.works/api/signup`. As a return message you will receive an **accessToken**, which you will have to use for the subsequent requests.

## Instructions

#### 1. Clone the Repo
` git clone https://github.com/khushboogoyal88/opendata-assignment-2021.git`

#### 2. Install all packages
```
npm install
```
Then, navigate to the client directory and again run the following command:
```
cd client/
npm install
```
#### 3. Add .env
At the root of the application add a file with name `.env`. Inside that file add the following:
```
MONGODB_URI=<your database link>
TOKEN=<your token>
```
#### 4. Run the application 
To run the application, use the following command:
```
npm run dev
```
## Running the docker Dev container 
```
docker-compose up
```
the app will be running at `http://localhost:3000`