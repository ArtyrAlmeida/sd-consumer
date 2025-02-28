# SD-Consumer

Sd-consumer is a proof of concept application to show the consumption of messages in a message-broker.

### Instructions

To run the project

1. First make sure you have docker installed in your machine.
2. in your terminal enter the following:

```
$ docker compose up
```

You can also do the following:

**Windows**

```shell
docker compose build; docker compose up;
```

**Linux**

```bash
docker compose build && docker compose up
```

3. After that, the application should be good to go
4. In an API Client (Insomnia, Postman, you name it), you can emmit a message to a RabbitMq queue by using an available route
   **Route: - POST Route**
   `http://localhost:<port>/api/emmit`

```Json
{
    message: "Your Message :)"  
}
```

You can see the message in the queue by accessing: http://localhost:15672 this will send you to the RabbitMq admin pannel.

You can also emmit messages from other publishers and applications, as long as they connect to the RabbitMq made available by the docker container

5. In the API Client, you can consume the messages in the queue by using the available route

**Route: - GET Route**
`http://localhost:<port>/api/consume`

6. After consuming the message, you will observe that it's no longer available in the queue because it has been consumed by our application.
7. After this, you can check the consumed message in the MongoExpress client available at: http://localhost:8081
8. On your first time accessing it you will have to insert a username and a password. You can use:
   **Username**
   `Sduser`
   **Password**
   `1234!`

after ensuring that everything is 👌 (Ok), you can just exit the terminal process or do a:

**Windows/Linux**

```shell
docker compose down
```

# Contributors

[Artur Almeida](https://www.genome.gov/)
[Immanuel Victor](https://www.genome.gov/)
