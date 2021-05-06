# Postgres in Kubernetes
This contains the YAML files for creating
- Deployment of Node.js server with 3 replicas
- Deployment of Postgres with 1 replica
- ClusterIP service for each deployment
- NodePort service for remotely accessing Postgres
- Ingress that exposes Node.js ClusterIP service to the outside

# Usage
1. Run ```$ kubectl create secret generic pgpassword --from-literal PGPASSWORD=123456``` to create a secret
2. Run either ```skaffold dev``` or ```kubectl apply -f k8s```

  To run with kubectl don't forget to push the image to a registry and update the k8s files
