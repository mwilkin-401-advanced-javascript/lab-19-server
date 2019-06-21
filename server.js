'use strict';
require('dotenv').config();

const Q = require('@nmq/q/server');

Q.start();

const db = new Q('database');
db.monitorEvent('create');
db.monitorEvent('read');
db.monitorEvent('update');
db.monitorEvent('delete');
db.monitorEvent('error');

const file = new Q('file');
file.monitorEvent('file-save');
file.monitorEvent('file-error');
