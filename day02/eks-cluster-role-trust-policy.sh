aws iam create-role \
  --role-name raymond-container-scaling-course-myAmazonEKSClusterRole \
  --assume-role-policy-document file://"eks-cluster-role-trust-policy.json"

aws iam attach-role-policy \
  --policy-arn arn:aws:iam::aws:policy/AmazonEKSClusterPolicy \
  --role-name raymond-container-scaling-course-myAmazonEKSClusterRole