"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[383],{44527:function(e,r,t){var n=t(85893),o=t(40639);t(67294),r.Z=function(e){let{children:r}=e;return(0,n.jsx)(o.xv,{mb:2,textColor:"teal.500",fontWeight:"semibold",lineHeight:"6",children:r})}},34269:function(e,r){let t=new class{async get(e){try{let r=await fetch(e),t=await r.json();return t}catch(r){throw console.error(r),Error("Failed to fetch "+e)}}};r.Z=t},2789:function(e,r,t){t.d(r,{Kn:function(){return l},L3:function(){return n},XE:function(){return s},XK:function(){return workerTypeFromJSON},Yz:function(){return U},cX:function(){return u},lW:function(){return S},qb:function(){return I},u:function(){return workerTypeToJSON},yM:function(){return c}});let n={UNSPECIFIED:"UNSPECIFIED",FRONTEND:"FRONTEND",COMPUTE_NODE:"COMPUTE_NODE",RISE_CTL:"RISE_CTL",COMPACTOR:"COMPACTOR",META:"META",UNRECOGNIZED:"UNRECOGNIZED"};function workerTypeFromJSON(e){switch(e){case 0:case"UNSPECIFIED":return n.UNSPECIFIED;case 1:case"FRONTEND":return n.FRONTEND;case 2:case"COMPUTE_NODE":return n.COMPUTE_NODE;case 3:case"RISE_CTL":return n.RISE_CTL;case 4:case"COMPACTOR":return n.COMPACTOR;case 5:case"META":return n.META;default:return n.UNRECOGNIZED}}function workerTypeToJSON(e){switch(e){case n.UNSPECIFIED:return"UNSPECIFIED";case n.FRONTEND:return"FRONTEND";case n.COMPUTE_NODE:return"COMPUTE_NODE";case n.RISE_CTL:return"RISE_CTL";case n.COMPACTOR:return"COMPACTOR";case n.META:return"META";case n.UNRECOGNIZED:default:return"UNRECOGNIZED"}}let o={DIRECTION_UNSPECIFIED:"DIRECTION_UNSPECIFIED",DIRECTION_ASCENDING:"DIRECTION_ASCENDING",DIRECTION_DESCENDING:"DIRECTION_DESCENDING",UNRECOGNIZED:"UNRECOGNIZED"},N={NULLS_ARE_UNSPECIFIED:"NULLS_ARE_UNSPECIFIED",NULLS_ARE_LARGEST:"NULLS_ARE_LARGEST",NULLS_ARE_SMALLEST:"NULLS_ARE_SMALLEST",UNRECOGNIZED:"UNRECOGNIZED"},i={UNSPECIFIED:"UNSPECIFIED",OK:"OK",UNKNOWN_WORKER:"UNKNOWN_WORKER",UNRECOGNIZED:"UNRECOGNIZED"},E={UNSPECIFIED:"UNSPECIFIED",STARTING:"STARTING",RUNNING:"RUNNING",UNRECOGNIZED:"UNRECOGNIZED"},a={UNSPECIFIED:"UNSPECIFIED",NONE:"NONE",UNRECOGNIZED:"UNRECOGNIZED"},I={fromJSON:e=>({code:isSet(e.code)?function(e){switch(e){case 0:case"UNSPECIFIED":return i.UNSPECIFIED;case 1:case"OK":return i.OK;case 2:case"UNKNOWN_WORKER":return i.UNKNOWN_WORKER;default:return i.UNRECOGNIZED}}(e.code):i.UNSPECIFIED,message:isSet(e.message)?String(e.message):""}),toJSON(e){let r={};return e.code!==i.UNSPECIFIED&&(r.code=function(e){switch(e){case i.UNSPECIFIED:return"UNSPECIFIED";case i.OK:return"OK";case i.UNKNOWN_WORKER:return"UNKNOWN_WORKER";case i.UNRECOGNIZED:default:return"UNRECOGNIZED"}}(e.code)),""!==e.message&&(r.message=e.message),r},create:e=>I.fromPartial(null!=e?e:{}),fromPartial(e){var r,t;let n={code:i.UNSPECIFIED,message:""};return n.code=null!==(r=e.code)&&void 0!==r?r:i.UNSPECIFIED,n.message=null!==(t=e.message)&&void 0!==t?t:"",n}},s={fromJSON:e=>({host:isSet(e.host)?String(e.host):"",port:isSet(e.port)?Number(e.port):0}),toJSON(e){let r={};return""!==e.host&&(r.host=e.host),0!==e.port&&(r.port=Math.round(e.port)),r},create:e=>s.fromPartial(null!=e?e:{}),fromPartial(e){var r,t;let n={host:"",port:0};return n.host=null!==(r=e.host)&&void 0!==r?r:"",n.port=null!==(t=e.port)&&void 0!==t?t:0,n}},l={fromJSON:e=>({id:isSet(e.id)?Number(e.id):0,workerNodeId:isSet(e.workerNodeId)?Number(e.workerNodeId):0}),toJSON(e){let r={};return 0!==e.id&&(r.id=Math.round(e.id)),0!==e.workerNodeId&&(r.workerNodeId=Math.round(e.workerNodeId)),r},create:e=>l.fromPartial(null!=e?e:{}),fromPartial(e){var r,t;let n={id:0,workerNodeId:0};return n.id=null!==(r=e.id)&&void 0!==r?r:0,n.workerNodeId=null!==(t=e.workerNodeId)&&void 0!==t?t:0,n}},u={fromJSON:e=>({id:isSet(e.id)?Number(e.id):0,type:isSet(e.type)?workerTypeFromJSON(e.type):n.UNSPECIFIED,host:isSet(e.host)?s.fromJSON(e.host):void 0,state:isSet(e.state)?function(e){switch(e){case 0:case"UNSPECIFIED":return E.UNSPECIFIED;case 1:case"STARTING":return E.STARTING;case 2:case"RUNNING":return E.RUNNING;default:return E.UNRECOGNIZED}}(e.state):E.UNSPECIFIED,parallelUnits:Array.isArray(null==e?void 0:e.parallelUnits)?e.parallelUnits.map(e=>l.fromJSON(e)):[],property:isSet(e.property)?d.fromJSON(e.property):void 0,transactionalId:isSet(e.transactionalId)?Number(e.transactionalId):void 0}),toJSON(e){var r;let t={};return 0!==e.id&&(t.id=Math.round(e.id)),e.type!==n.UNSPECIFIED&&(t.type=workerTypeToJSON(e.type)),void 0!==e.host&&(t.host=s.toJSON(e.host)),e.state!==E.UNSPECIFIED&&(t.state=function(e){switch(e){case E.UNSPECIFIED:return"UNSPECIFIED";case E.STARTING:return"STARTING";case E.RUNNING:return"RUNNING";case E.UNRECOGNIZED:default:return"UNRECOGNIZED"}}(e.state)),(null===(r=e.parallelUnits)||void 0===r?void 0:r.length)&&(t.parallelUnits=e.parallelUnits.map(e=>l.toJSON(e))),void 0!==e.property&&(t.property=d.toJSON(e.property)),void 0!==e.transactionalId&&(t.transactionalId=Math.round(e.transactionalId)),t},create:e=>u.fromPartial(null!=e?e:{}),fromPartial(e){var r,t,o,N,i;let a={id:0,type:n.UNSPECIFIED,host:void 0,state:E.UNSPECIFIED,parallelUnits:[],property:void 0,transactionalId:void 0};return a.id=null!==(t=e.id)&&void 0!==t?t:0,a.type=null!==(o=e.type)&&void 0!==o?o:n.UNSPECIFIED,a.host=void 0!==e.host&&null!==e.host?s.fromPartial(e.host):void 0,a.state=null!==(N=e.state)&&void 0!==N?N:E.UNSPECIFIED,a.parallelUnits=(null===(r=e.parallelUnits)||void 0===r?void 0:r.map(e=>l.fromPartial(e)))||[],a.property=void 0!==e.property&&null!==e.property?d.fromPartial(e.property):void 0,a.transactionalId=null!==(i=e.transactionalId)&&void 0!==i?i:void 0,a}},d={fromJSON:e=>({isStreaming:!!isSet(e.isStreaming)&&!!e.isStreaming,isServing:!!isSet(e.isServing)&&!!e.isServing,isUnschedulable:!!isSet(e.isUnschedulable)&&!!e.isUnschedulable}),toJSON(e){let r={};return!0===e.isStreaming&&(r.isStreaming=e.isStreaming),!0===e.isServing&&(r.isServing=e.isServing),!0===e.isUnschedulable&&(r.isUnschedulable=e.isUnschedulable),r},create:e=>d.fromPartial(null!=e?e:{}),fromPartial(e){var r,t,n;let o={isStreaming:!1,isServing:!1,isUnschedulable:!1};return o.isStreaming=null!==(r=e.isStreaming)&&void 0!==r&&r,o.isServing=null!==(t=e.isServing)&&void 0!==t&&t,o.isUnschedulable=null!==(n=e.isUnschedulable)&&void 0!==n&&n,o}},S={fromJSON:e=>({compression:isSet(e.compression)?function(e){switch(e){case 0:case"UNSPECIFIED":return a.UNSPECIFIED;case 1:case"NONE":return a.NONE;default:return a.UNRECOGNIZED}}(e.compression):a.UNSPECIFIED,body:isSet(e.body)?function(e){if(D.Buffer)return Uint8Array.from(D.Buffer.from(e,"base64"));{let r=D.atob(e),t=new Uint8Array(r.length);for(let e=0;e<r.length;++e)t[e]=r.charCodeAt(e);return t}}(e.body):new Uint8Array(0)}),toJSON(e){let r={};return e.compression!==a.UNSPECIFIED&&(r.compression=function(e){switch(e){case a.UNSPECIFIED:return"UNSPECIFIED";case a.NONE:return"NONE";case a.UNRECOGNIZED:default:return"UNRECOGNIZED"}}(e.compression)),0!==e.body.length&&(r.body=function(e){if(D.Buffer)return D.Buffer.from(e).toString("base64");{let r=[];return e.forEach(e=>{r.push(String.fromCharCode(e))}),D.btoa(r.join(""))}}(e.body)),r},create:e=>S.fromPartial(null!=e?e:{}),fromPartial(e){var r,t;let n={compression:a.UNSPECIFIED,body:new Uint8Array(0)};return n.compression=null!==(r=e.compression)&&void 0!==r?r:a.UNSPECIFIED,n.body=null!==(t=e.body)&&void 0!==t?t:new Uint8Array(0),n}},c={fromJSON:e=>({originalIndices:Array.isArray(null==e?void 0:e.originalIndices)?e.originalIndices.map(e=>Number(e)):[],data:Array.isArray(null==e?void 0:e.data)?e.data.map(e=>Number(e)):[]}),toJSON(e){var r,t;let n={};return(null===(r=e.originalIndices)||void 0===r?void 0:r.length)&&(n.originalIndices=e.originalIndices.map(e=>Math.round(e))),(null===(t=e.data)||void 0===t?void 0:t.length)&&(n.data=e.data.map(e=>Math.round(e))),n},create:e=>c.fromPartial(null!=e?e:{}),fromPartial(e){var r,t;let n={originalIndices:[],data:[]};return n.originalIndices=(null===(r=e.originalIndices)||void 0===r?void 0:r.map(e=>e))||[],n.data=(null===(t=e.data)||void 0===t?void 0:t.map(e=>e))||[],n}},C={fromJSON:e=>({direction:isSet(e.direction)?function(e){switch(e){case 0:case"DIRECTION_UNSPECIFIED":return o.DIRECTION_UNSPECIFIED;case 1:case"DIRECTION_ASCENDING":return o.DIRECTION_ASCENDING;case 2:case"DIRECTION_DESCENDING":return o.DIRECTION_DESCENDING;default:return o.UNRECOGNIZED}}(e.direction):o.DIRECTION_UNSPECIFIED,nullsAre:isSet(e.nullsAre)?function(e){switch(e){case 0:case"NULLS_ARE_UNSPECIFIED":return N.NULLS_ARE_UNSPECIFIED;case 1:case"NULLS_ARE_LARGEST":return N.NULLS_ARE_LARGEST;case 2:case"NULLS_ARE_SMALLEST":return N.NULLS_ARE_SMALLEST;default:return N.UNRECOGNIZED}}(e.nullsAre):N.NULLS_ARE_UNSPECIFIED}),toJSON(e){let r={};return e.direction!==o.DIRECTION_UNSPECIFIED&&(r.direction=function(e){switch(e){case o.DIRECTION_UNSPECIFIED:return"DIRECTION_UNSPECIFIED";case o.DIRECTION_ASCENDING:return"DIRECTION_ASCENDING";case o.DIRECTION_DESCENDING:return"DIRECTION_DESCENDING";case o.UNRECOGNIZED:default:return"UNRECOGNIZED"}}(e.direction)),e.nullsAre!==N.NULLS_ARE_UNSPECIFIED&&(r.nullsAre=function(e){switch(e){case N.NULLS_ARE_UNSPECIFIED:return"NULLS_ARE_UNSPECIFIED";case N.NULLS_ARE_LARGEST:return"NULLS_ARE_LARGEST";case N.NULLS_ARE_SMALLEST:return"NULLS_ARE_SMALLEST";case N.UNRECOGNIZED:default:return"UNRECOGNIZED"}}(e.nullsAre)),r},create:e=>C.fromPartial(null!=e?e:{}),fromPartial(e){var r,t;let n={direction:o.DIRECTION_UNSPECIFIED,nullsAre:N.NULLS_ARE_UNSPECIFIED};return n.direction=null!==(r=e.direction)&&void 0!==r?r:o.DIRECTION_UNSPECIFIED,n.nullsAre=null!==(t=e.nullsAre)&&void 0!==t?t:N.NULLS_ARE_UNSPECIFIED,n}},U={fromJSON:e=>({columnIndex:isSet(e.columnIndex)?Number(e.columnIndex):0,orderType:isSet(e.orderType)?C.fromJSON(e.orderType):void 0}),toJSON(e){let r={};return 0!==e.columnIndex&&(r.columnIndex=Math.round(e.columnIndex)),void 0!==e.orderType&&(r.orderType=C.toJSON(e.orderType)),r},create:e=>U.fromPartial(null!=e?e:{}),fromPartial(e){var r;let t={columnIndex:0,orderType:void 0};return t.columnIndex=null!==(r=e.columnIndex)&&void 0!==r?r:0,t.orderType=void 0!==e.orderType&&null!==e.orderType?C.fromPartial(e.orderType):void 0,t}},D="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window;function isSet(e){return null!=e}}}]);