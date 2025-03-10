import amqp from 'amqplib'
import { MessageRepository } from '../repositories/MessageRepository';

export class MessageService {
    private repository = new MessageRepository();
    private queue = "messages";

    async consume () {
        try {
            const { channel } = await this.getRabbitConnection();

            channel.consume(this.queue, async (receivedMessage) => {
                if (receivedMessage != null) {
                    const message = receivedMessage.content.toString();
                    await this.repository.create({ message });
    
                    channel.ack(receivedMessage);   

                    console.log("Success consuming");
                    return;
                }

                console.log("Invalid Message not created in the database")
                return;
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

            return message;
        } catch (error) {
            console.log((error as Error));
            return null;
        }
        
    }

    private async getRabbitConnection () {
        const rabbitmq = await amqp.connect('amqp://guest:guest@rabbitmq:5672');
        const channel = await rabbitmq.createChannel();
        await channel.assertQueue(this.queue, { durable: true, arguments: { "x-queue-type": "quorum" } });

        return { channel, rabbitmq }
    }
}