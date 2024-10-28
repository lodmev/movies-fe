## For run this project locally
## Backend:
### Clone repository
```bash
git clone https://github.com/lodmev/movies-be
```
### Go to directory
```bash
cd movies-be
```
### Up the containers 
```bash
docker compose up -d
```
### Run folow commands 
```bash
pnpm install
```
```bash
pnpm prisma migrate deploy
```
```bash
pnpm prisma generate
```
### For filling base with some dummy data you may execute
```bash
pnpm ts-node prisma/seed.ts
```
### And
```bash
$ pnpm start
```
## Frontend:
### Clone this repository
```bash
$ git clone https://github.com/lodmev/movies-fe
```
### Go to folder
```bash
$ cd movies-fe
```
### Run folow commands 
```bash
$ pnpm install
```
```bash
$ pnpm dev
```

