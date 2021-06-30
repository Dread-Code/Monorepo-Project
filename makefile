run: 
	sudo docker run -p 3000:3000 -p 6006:6006 -v $(PWD):/mnt/monorepo-project users-portal-core

build: 
	sudo docker build -t dreadfulcrazy/users-portal-core .