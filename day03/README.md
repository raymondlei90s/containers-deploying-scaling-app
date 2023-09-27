https://artifacthub.io/packages/helm/ingress-nginx/ingress-nginx
helm install ingress-nginx ingress-nginx/ingress-nginx -f values-ingress-nginx.yaml -n ingress-nginx --create-namespace
helm install <release_name> <repo> <values_file> <namespace>
kubectl --namespace ingress-nginx get services -o wide -w ingress-nginx-controller


# Load Balancer - Ingress
SSL Term
Rate limiting
Canary
Sticky Session
WAF
Open API Spec

Route by domain
Route by resource/path
