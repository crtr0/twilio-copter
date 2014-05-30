# Twilio-Copter

Fly a [Parrot AR Drone 2.0][1] quadcopter by calling a phone number. 

## Introduction

Using the power of telephony, you can fly an AR-Done using nothing more than a phone. Sadly, a rotary phone will not work because you will be piloting the drone using [DTMF][2] tones. 

![how it works](/diagram.png)

## Requirements

* Parrot AR Drone 2.0
* [Free Twilio account][3]
* Open Wi-Fi network (no password)

## Installation



Connect to Drone Wi-Fi

telnet 192.168.1.1

killall udhcpd; iwconfig ath0 mode managed essid Twilio-Carter-MiFi; ifconfig ath0 192.168.1.10 netmask 255.255.255.0 up;

## Meta 

* No warranty expressed or implied.  Software is as is.
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Brought to you by [Twilio](http://www.twilio.com) Seattle

[1]:http://ardrone2.parrot.com/
[2]:http://en.wikipedia.org/wiki/Dual-tone_multi-frequency_signaling
[3]:http://twilio.com/try-twilio
