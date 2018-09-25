var assert = require('assert');
var sinon = require('sinon');
var PassThrough = require('stream').PassThrough;
var http = require('http');

var api = require('../question2.js');

describe('api', function() {


	it('Should return true for correct file parameter', function() {
		api.fileName = 'student.json';
		api.modifyXMLData(function(err, result) {
				assert.equal(api.result,'true');
		});
	});

	it('Should return false the for incorrect file parameter', function() {
		api.fileName = 'jksdfjdkjfs.sdf';
		api.result ='';
		api.modifyXMLData(function(err, result) {
				assert.equal(api.result,'false');
		});
	}); 
});