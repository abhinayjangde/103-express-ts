```bash
sudo apt update
sudo apt upgrade
```

```bash
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
sudo apt-get install -y nodejs
npm i -g pm2
```

```bash
ssh -i "express-ts.pem" ubuntu@ec2-54-85-56-189.compute-1.amazonaws.com
```

```bash
nano ecosystem.config.js
module.exports = {
    apps : [
        {
            name: "myapp",
            script: "npm start",
            port: 3000
        }
    ]
}

pm2 start ecosystem.config.js
pm2 save
pm2 status```

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
chmod o+r /usr/share/keyrings/caddy-stable-archive-keyring.gpg
chmod o+r /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

Caddyfile

```bash
sudo vim /etc/caddy/Caddyfile

mydomain.com {
    reverse_proxy localhost:3000
}

sudo systemctl restart caddy
```