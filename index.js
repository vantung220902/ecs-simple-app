import express from 'express';
import os from 'os';

const app = express();

app.get('/user', (req, res) => {
    const clientId = req.header('x-forwarded-for');
    const elbIP = req.socket.remoteAddress;
    const dockerIp = req.socket.localAddress;
    const dockerName = os.hostname();

    console.log('Hello this is an ecs simple app');

    return res.json({
        serviceName: 'User Service V2',
        message: 'Hello nha',
        clientId,
        elbIP,
        dockerIp,
        dockerName
    });

});

app.listen(8080, () => {
    console.log('App started successfully');
})