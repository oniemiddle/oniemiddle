# Docker Cheat Sheet

## Container Management

```bash
# Run container
docker run <image>
docker run -d <image>                    # Detached mode
docker run -it <image> /bin/bash         # Interactive mode
docker run -p 8080:80 <image>           # Port mapping

# List containers
docker ps                                # Running containers
docker ps -a                             # All containers

# Stop/Start containers
docker stop <container>
docker start <container>
docker restart <container>

# Remove containers
docker rm <container>
docker rm -f <container>                 # Force remove
docker container prune                   # Remove all stopped
```

## Image Management

```bash
# List images
docker images

# Pull image
docker pull <image>

# Build image
docker build -t <name> .

# Remove image
docker rmi <image>
docker image prune                       # Remove dangling images
```

## Logs and Debugging

```bash
# View logs
docker logs <container>
docker logs -f <container>               # Follow logs

# Execute command in container
docker exec -it <container> /bin/bash

# Inspect container
docker inspect <container>

# View container stats
docker stats
```

## Docker Compose

```bash
# Start services
docker-compose up
docker-compose up -d                     # Detached mode

# Stop services
docker-compose down

# View logs
docker-compose logs
docker-compose logs -f

# Rebuild services
docker-compose build
docker-compose up --build
```

## Networking

```bash
# List networks
docker network ls

# Create network
docker network create <name>

# Connect container to network
docker network connect <network> <container>
```

## Volumes

```bash
# List volumes
docker volume ls

# Create volume
docker volume create <name>

# Remove volume
docker volume rm <name>
docker volume prune                      # Remove unused volumes
```

## System Cleanup

```bash
# Remove all stopped containers
docker container prune

# Remove unused images
docker image prune

# Remove unused volumes
docker volume prune

# Remove everything
docker system prune
docker system prune -a                   # Include unused images
```

## Useful Aliases

```bash
alias dps='docker ps'
alias dpa='docker ps -a'
alias di='docker images'
alias drm='docker rm'
alias dstop='docker stop $(docker ps -q)'
alias dclean='docker system prune -af'
```
