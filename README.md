# devops app
To manually deploy new code:

1. sudo buildah bud -t devops:latest /devops
   // used for building an image
   // /devops is folder, if you inside it then just .

1.1 Optional to test, Create and run the container from the new image:
        buildah from devops:latest
        buildah containers
        buildah run <container_id> -- npm start

2.This command pushes the image devops:latest into a Docker-compatible tarball
        sudo buildah push devops:latest docker-archive:/tmp/devops.tar

3. Import the image into containerd:
        sudo ctr images import /tmp/devops.tar
        // verify it: sudo ctr images ls | grep devops

4. apply yamls:
        kubectl apply -f deployment.yaml
        kubectl apply -f service.yaml

5. Verify and test from external PC
        kubectl get services
        // check ports and access the api
        http://ip:port
