# pulling an image
docker pull node
docker pull ubuntu

# Dockerfile
1. FROM node:latest
    - Image we want to use
2.  COPY index.js /home/app/index.js
    COPY package.json /home/app/package.json
    - For adding the important files to a root directory
            OR
    COPY . /home/app/
    - For adding all the files in case of a huge project
3. WORKDIR /home/app/
    - Assigning the work directory 
4. RUN npm install
    - Next step to download the node_modules and necessary dependencies
5. CMD ["node", "index"]
    - Command to run after the installation
6. EXPOSE 9000
    - Exposing the port

# .dockerignore
    - Add node_modules/ 

# Docker commands
1. docker build -t myapp .
    - for creating a image
    - where "-t" is tag and "." is the current directory "myapp" is the name of the image

2. docker run -it node
    - for interacting with node image
    - where "-it" is for interacting with the image

3. docker run -p 3000:9000 myapp
    - Port mapping of docker port with local port 
    - where 3000 is local port and 9000 is docker port
    - best practice is the use the same port of docker for local port

4. docker run -p 9000:9000 myapp

5. docker build -t omjavir/myfirstapp .
    - where omjavir is username and myfirstapp is the name of the container

6. docker push omjavir/myfirstapp
    - pushing the container to docker hub

7. docker run -it -p 9000:9000 omjavir/myfirstapp
    - pulling the container from docker hub

8. docker container ls
    - to list all the containers

9. docker images / docker image ls
    - to list all the images