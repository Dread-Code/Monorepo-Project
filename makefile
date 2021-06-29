run: 
	sudo docker run -p 3000:3000 -p 6006:6006 -v $(PWD):/mnt/monorepo-project api-docker-test

build: 
	sudo docker build -t api-docker-test .