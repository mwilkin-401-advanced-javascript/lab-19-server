'use strict';

const Q = require('@nmq/q/server');

Q.start();

const db = new Q('database');
db.monitorEvent('create');
db.monitorEvent('read');
db.monitorEvent('update');
db.monitorEvent('delete');

const network = new Q('network');
network.monitorEvent('file-save');
network.monitorEvent('file-error');
