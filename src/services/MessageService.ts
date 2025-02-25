import amqp from 'amqplib'
import { MessageRepository } from '../repositories/MessageRepository';

export class MessageService {
    private repository = new MessageRepository();
    private queue = "messages";

    async consume () {
        try {
            const { channel, rabbitmq } = await this.getRabbitConnection();

            channel.consume(this.queue, async (receivedMessage) => {
                if (receivedMessage != null) {
                    const message = receivedMessage.content.toString();
                    await this.repository.create({ message });
    
                    channel.ack(receivedMessage);   

                    console.log("Succes consuming");
                }

                console.log("Invalid Message not created in the database")
            })

        } catch (error) {
            console.log("Error consuming")
        }
    }

    async emmitToQueue (message: string) {
        try {
            const { channel, rabbitmq } = await this.getRabbitConnection();
            channel.sendToQueue(this.queue, Buffer.from(message))
            
            await channel.close();
            await rabbitmq.close();

            console.log("Succes emmiting");
        } catch (error) {
            console.log("Error emmiting");
        }
        
    }

    private async getRabbitConnection () {
        const rabbitmq = await amqp.connect('amqp://localhost');
        const channel = await rabbitmq.createChannel();
        await channel.assertQueue(this.queue, { durable: true, arguments: { "x-queue-type": "quorum" } });

        return { channel, rabbitmq }
    }
}