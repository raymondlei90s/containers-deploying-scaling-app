# Commands:
k port-forward po/dov-po 8080:3000 -n myns
k get all -n myns -o wide

# Notes:
https://docs.aws.amazon.com/eks/latest/userguide/getting-started-console.html
Need to create namespace myns in Fargate

# Debug
k run debug --rm -ti --image=nicolaka/netshoot -- /bin/bash
k run debug --image=nicolaka/netshoot
k exec -it debug -- sh
k logs <pod-name>