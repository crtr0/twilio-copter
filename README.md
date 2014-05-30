# Twilio-Copter

Fly a [Parrot AR Drone 2.0][1] quadcopter by calling a phone number. 

## Introduction

Using the power of telephony, you can fly an AR-Done using nothing more than a phone call. Sadly, a rotary phone will not work because you will be piloting the drone using [DTMF][2] tones. 

![how it works](/diagram.png)

## Requirements

* Node
* Parrot AR Drone 2.0
* [Free Twilio account][3]
* Open Wi-Fi network (no password)

## Installation

Clone this repo, `cd` into it and run `npm install`.

Turn on your AR Drone and connect your laptop to its Wi-Fi access point. Then telnet into it:

`telnet 192.168.1.1`

Once you're in, execute the following one-liner command. Please insert a valid and open Wi-Fi access point in between the mustache braces. You can also use a different IP address than 192.168.1.10 if you need to. Just make note of what it is.

`killall udhcpd; iwconfig ath0 mode managed essid {{OPEN WIFI ACCESS POINT HERE}}; ifconfig ath0 192.168.1.10 netmask 255.255.255.0 up;`

At this point your telnet session will lock up. **THIS IS OK.** Just ctrl-C or kill the telnet session.

Now, connect your laptop to the same wireless access point that you specified above. This will place your computer and the drone on the same network. 

## Getting Ready to Fly

First, spin-up your Node server:

`node .`

Next, you need to expose your Node server to the public internet. I like using [Ngrok][4] for this. It's free and completely awesome. If you decide to install Ngrok, you can then make your Node server available on the public internet like this:

`ngrok 8080`

Last, connect Twilio to your Node server. Just [log-in to your account](https://www.twilio.com/user/account), select the number you want to use and set the Voice Request URL to the public internet address of your webserver, including a path to `/voice`. So an example URL might be: `https://foobar.ngrok.com/voice`. Remember to click Save. 

## Fly the Drone!

Finally, you're ready to fly your drone! Just dial your Twilio number and you should hear a simple greeting. When you're ready to fly, here are the commands you can use:

* * - Take off
* # - Land
* 1 - Up
* 7 - Down
* 2 - Forward
* 8 - Back
* 4 - Turn left
* 6 - Turn right
 
Enjoy piloting your drone! Ping me [@CarterRabasa][5] if you have any questions.


## Meta 

* No warranty expressed or implied.  Software is as is.
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Brought to you by [Twilio](http://www.twilio.com) Seattle

[1]:http://ardrone2.parrot.com/
[2]:http://en.wikipedia.org/wiki/Dual-tone_multi-frequency_signaling
[3]:http://twilio.com/try-twilio
[4]:http://ngrok.com
[5]:http://twitter.com/carterrabasa
