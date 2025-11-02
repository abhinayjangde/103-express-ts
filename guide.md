sudo apt update
sudo apt upgrade

curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
sudo apt-get install -y nodejs

rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env' \
-e "ssh -i ~/.ssh/express-ts.pem" \
. ubuntu@ec2-54-85-56-189.compute-1.amazonaws.com:~/app

ssh -i "express-ts.pem" ubuntu@ec2-54-85-56-189.compute-1.amazonaws.com