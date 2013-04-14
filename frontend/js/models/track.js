/*global define*/
define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var TrackModel = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		// defaults: {
		// 	title: '',
		// 	completed: false
		// },
	});

	return TrackModel;
});