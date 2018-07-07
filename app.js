var cluster = require('cluster');

if (cluster.isMaster) {
    var cpuCount = require('os').cpus().length;
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
        console.log('Cluster forked.');
    }
    cluster.on('exit', function (worker) {
        console.log('Worker ' + worker.id + ' died :(');
        cluster.fork();
    });

} else {

    const express = require('express');
    const aws = require('./config/aws-config');
    const app = express();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server listening on port ${port}..`))

    require('./dynamo/test');


    app.use(express.static('public'))


}