const fastify = require('fastify')({logger: false})

fastify.register(require('fastify-cors'), {})

fastify.post('/sendData', async (request, reply) => {
    const len = request.body.fireExpectancyArray.length;
    setTimeout(() => {
        const alarms = [];
        for (let i = 0; i < request.body.alarm.count; i++) {
            alarms.push({
                x: Math.floor(Math.random() * len),
                y: Math.floor(Math.random() * len),
                r: request.body.alarm.radius
            });
        }
        console.log(alarms);
        reply.send({error: false, alarms});
    }, 2000);
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3002)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()