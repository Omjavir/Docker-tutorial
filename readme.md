``` cpp
https://projects.100xdevs.com/tracks/docker-easy/docker-1
```

`https://codedamn.com/learn/docker`

``` cpp
# Docker description slides - harkirat
https://drive.google.com/file/d/1OvJyxoU3dHLXV7h-oU2IgpDB7S4RhLbp/view
```

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

# Docker CLI commands
    # - `docker image` to view all the possible cli commands on images
    # - `docker container` to view all the possible cli commands on containers
    - `docker images || docker image ls` displays all the available pulled images
    - `docker image pull node` pulls a node image
    - `docker image rm ${imageId}` which deletes the image
    - `docker inspect ${imageId}` which gives the metadata of image
    - `docker image pune -a` which deletes all the unused images
    ## Pushing an image to dockerhub
    > 1. Create a repository on docker hub
    > 2. Create an image
    > 3. Tag that image with repository and push it
    > 4. `docker tag ${imageName}/${repositoryName}
    > 5. `docker push ${repositoryName}`
    - `docker container ls` to display all the running containers
    - `docker container ls --all` to display all the containers
    - `docker run --name omjavir node` to run the container with my manually given name instead of dynamically created by docker
    - `docker prune` to delete all the containers
    - `docker run -it --name omjavir node` where `-it` means ### interactive which means connect my computer's terminal with docker terminal and the commands now creates a container with name omjavir running.
    - `docker start omjavir` which will run the container with name `omjavir`
    - `docker exec omjavir mkdir newDir` which executes the command on docker terminal
    - `docker run --help` gives all the possible flags
    


# Cheatsheet 
## Working with containers:
docker run <image>: creates and starts a container based on the specified image. Example: docker run nginx

docker start <container>: starts a stopped container. Example: docker start my-container

docker stop <container>: stops a running container. Example: docker stop my-container

docker rm <container>: removes a stopped container. Example: docker rm my-container

docker ps: lists all running containers. Example: docker ps

docker ps -a: lists all containers, including stopped ones. Example: docker ps -a

docker logs <container>: displays the logs of a container. Example: docker logs my-container

docker exec <container> <command>: runs a command inside a running container. Example: docker exec my-container ls

docker inspect <container>: displays detailed information about a container. Example: docker inspect my-container

## 'Working with images:
docker pull <image>: downloads an image from a registry. Example: docker pull ubuntu

docker build <path>: builds an image from a Dockerfile. Example: docker build.

docker tag <image> <repository>:<tag>: tags an image with a repository and tag. Example: docker tag my-image my-repo:1.0

docker push <repository>:<tag>: pushes an image to a registry. Example: docker push my-repo:1.0

docker rmi <image>: removes an image. Example: docker rmi my-image

# Docker Networking
Docker Networking: A Comprehensive Guide

Docker networking is an essential aspect of working with Docker containers. It allows containers to communicate with each other and with the outside world, enabling complex distributed applications to be built and deployed easily. In this article, we'll take a comprehensive look at Docker networking, covering everything from the basics to more advanced topics.

## Types of Docker Networks
Docker supports several types of networks, each with its own characteristics and use cases:

Bridge Network: This is the default network type in Docker, and it allows containers to communicate with each other over a private network. Each container is assigned an IP address on the bridge network, which is isolated from the host network.

Host Network: With this network type, containers share the same network namespace as the host machine, allowing them to use the same IP address and network interfaces as the host. This can be useful for high-performance applications that require low-latency communication.

Overlay Network: This type of network is used for connecting containers across multiple hosts, enabling the creation of distributed applications that can scale horizontally. It uses the VXLAN protocol to encapsulate network traffic and route it between hosts.

Macvlan Network: This network type allows containers to be assigned a MAC address and appear as a physical device on the host network. This can be useful for running legacy applications that require direct access to the network interface.

## Creating Docker Networks
To create a Docker network, you can use the "docker network create" command followed by the name and options of the network. For example, to create a bridge network called "my-network", you would run the following command:

docker network create my-network
You can also specify options such as the network driver, subnet, and gateway when creating a network.

Connecting Containers to Networks
To connect a container to a network, you can use the "--network" option when running the "docker run" command. For example, to run a container called "my-container" on the "my-network" network, you would run the following command:

docker run --network my-network my-container
You can also specify the network alias for the container using the "--network-alias" option.

## Docker DNS
Docker provides a built-in DNS service that allows containers to resolve each other by name. When a container is started on a network, Docker assigns it a hostname that corresponds to its container name. Containers can then resolve each other using their hostname, rather than their IP address.

## Conclusion
Docker networking is a powerful tool that enables the creation of complex distributed applications. By understanding the basics of Docker networking and how to create and connect containers to networks, you'll be well on your way to mastering Docker and containerization.
