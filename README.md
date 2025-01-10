# docker-reference
A reference and playground for Docker

## Useful docker commands

### Containers
List running containers: `docker ps`

List all containers: `docker ps -a`

Start a stopped container: `docker start <name-of-container>`

Stop container: `docker stop <name-of-container>`

Remove container: `docker rm <name-of-container>`

Create and run container from image: `docker run --name <container-name> -p <host-port>:<container-port> <image-name>`

### Images
List all images: `docker images`

Create image from Dockerfile: `docker build -t <image-name>:<tag> <path-to-dockerfile-directory>`

Remove image: `docker image rm <image-id>`

### Compose

Create resources according to compose file: `docker compose up`

Shut down the resources: `docker compose down`