import { DDP } from 'meteor/ddp-client'

var remote = DDP.connect('http://127.0.0.1:3000/');

export const Campaigns = new Mongo.Collection('campaigns', { connection: remote });