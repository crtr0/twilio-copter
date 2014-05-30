var Hapi = require('hapi')
  , twilio = require('twilio')
  , arDrone = require('ar-drone')
  , client  = arDrone.createClient({ 'ip': '192.168.1.10' });

var options = {
    views: {
        path: 'views',
        engines: {
            hjs: 'handlebars'
        }
    }
};

var server = new Hapi.Server(+process.env.PORT || 8080 , options);

var sms = function(request) {
  var resp = new twilio.TwimlResponse();
  switch(request.payload.Body.toUpperCase()) {
    case 'TAKEOFF':
      client.takeoff();
      resp.message('Taking Off!');
      request.reply(resp.toString());
      break;
    case 'LAND':
      client.land();
      resp.message('Landing!');
      request.reply(resp.toString());
      break;
    case 'FLIP':
      flip();
      resp.message('Flipping!');
      request.reply(resp.toString());
      break;
    default:
      resp.message("Sorry, don't understand that command :(");
      request.reply(resp.toString());
  }
};

var voice = function(request) {
  request.reply.view('voice');
};

var option = function(request) {
  switch (request.payload.Digits) {
    case "*":
      client.takeoff();
      break;
    case "#":
      client.land();
      break;
    case "1":
      client.up(0.3);
      client.after(300, function() {
        this.stop();
      });
      break;
    case "2":
      client.front(0.2);
      client.after(100, function() {
        this.stop();
      });
      break;
    case "4":
      client.counterClockwise(0.5);
      client.after(100, function() {
        this.stop();
      });
      break;
    case "6":
      client.clockwise(0.5);
      client.after(100, function() {
        this.stop();
      });
      break;
    case "7":
      client.down(0.3);
      client.after(300, function() {
        this.stop();
      });
      break;
    case "8":
      client.back(0.2);
      client.after(100, function() {
        this.stop();
      });
      break;
    case "9":
      client.up(0.7);
      client.after(1000, function() {
        this.stop();
        this.animate('flipLeft', 300);
      });
      break;
    
    request.reply.view('option');
  }
}

server.route({
  method: 'POST',
  path: '/sms',
  handler: sms
});

server.route({
  method: 'POST',
  path: '/voice',
  handler: voice
});

server.route({
 method: 'POST',
 path: '/voice/option',
 handler: option 
});  

server.start();
