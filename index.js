var Logdown = require('logdown');

var options = {
    alignOutput: true,
    prefix: 'MyLogger'
};

var MyLogger = new Logdown(options);

options.prefix = 'YourLogger';
var YourLogger = new Logdown(options);

options.prefix = 'AwesomeLoggerRocker';
var AwesomeLoggerRocker = new Logdown(options);

function log(instance) {
    var methods = [
        'debug',
        'error',
        'info',
        'log',
        'warn'
    ];

    var text = 'Hello World';
    var object = {
        name: 'Arnold',
        age: 69
    };

    methods.forEach(function (method) {
        instance[method](text)
    });

    methods.forEach(function (method) {
        instance[method](text, object)
    });
};

log(MyLogger);
log(YourLogger);
log(AwesomeLoggerRocker);