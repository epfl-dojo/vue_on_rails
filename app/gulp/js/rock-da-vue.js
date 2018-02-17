//import Vue from 'vue'
var Vue = require('Vue')//import Hello from "../vue/hello.vue"


$(function(){
  var Hello = require('../vue/hello.vue');
  debugger;
  new Vue(Hello).$mount($('<div />').appendTo('body')[0]);
  alert("C'est tout vue")
})
