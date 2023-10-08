(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[980],{92299:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/await_tree",function(){return r(61070)}])},79086:function(e,t,r){"use strict";r.d(t,{OL:function(){return getClusterInfoComputeNode},X8:function(){return getClusterMetrics},xv:function(){return getClusterInfoFrontend}});var n=r(2789),a=r(34269);async function getClusterMetrics(){let e=await a.Z.get("/api/metrics/cluster");return e}async function getClusterInfoFrontend(){let e=(await a.Z.get("/api/clusters/1")).map(n.cX.fromJSON);return e}async function getClusterInfoComputeNode(){let e=(await a.Z.get("/api/clusters/2")).map(n.cX.fromJSON);return e}},30707:function(e,t,r){"use strict";r.d(t,{Z:function(){return useFetch}});var n=r(66479),a=r(67294);function useFetch(e){let[t,r]=(0,a.useState)(),c=(0,n.pm)();return(0,a.useEffect)(()=>{let fetchData=async()=>{try{let t=await e();r(t)}catch(e){c({title:"Error Occurred",description:e.toString(),status:"error",duration:5e3,isClosable:!0}),console.error(e)}};fetchData()},[c,e]),{response:t}}},61070:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return AwaitTreeDump}});var n=r(85893),a=r(40639),c=r(83234),o=r(57026),i=r(47741),l=r(19604),u=r(96486),s=r.n(u),d=r(9008),m=r.n(d),f=r(67294),p=r(13817),h=r(44527),T=r(63528),g=r(34269),v=r(79086),j=r(30707);function AwaitTreeDump(){let{response:e}=(0,j.Z)(v.OL),[t,r]=(0,f.useState)(),[u,d]=(0,f.useState)("");(0,f.useEffect)(()=>{e&&!t&&e.length>0&&r(e[0].id)},[e,t]);let dumpTree=async()=>{let e;let r="Await-Tree Dump of Compute Node ".concat(t,":");d(void 0);try{let n=T.Kv.fromJSON(await g.Z.get("/api/monitor/await_tree/".concat(t))),a=s()(n.actorTraces).entries().map(e=>{let[t,r]=e;return"[Actor ".concat(t,"]\n").concat(r)}).join("\n"),c=s()(n.rpcTraces).entries().map(e=>{let[t,r]=e;return"[RPC ".concat(t,"]\n").concat(r)}).join("\n");e="".concat(r,"\n\n").concat(a,"\n").concat(c)}catch(t){e="".concat(r,"\n\nError: ").concat(t.message)}d(e)},w=(0,n.jsxs)(a.kC,{p:3,height:"calc(100vh - 20px)",flexDirection:"column",children:[(0,n.jsx)(h.Z,{children:"Await Tree Dump"}),(0,n.jsxs)(a.kC,{flexDirection:"row",height:"full",width:"full",children:[(0,n.jsx)(a.gC,{mr:3,spacing:3,alignItems:"flex-start",width:200,height:"full",children:(0,n.jsxs)(c.NI,{children:[(0,n.jsx)(c.lX,{children:"Compute Nodes"}),(0,n.jsxs)(a.gC,{children:[(0,n.jsx)(o.Ph,{onChange:e=>r(parseInt(e.target.value)),children:e&&e.map(e=>{var t,r;return(0,n.jsxs)("option",{value:e.id,children:["(",e.id,") ",null===(t=e.host)||void 0===t?void 0:t.host,":",null===(r=e.host)||void 0===r?void 0:r.port]},e.id)})}),(0,n.jsx)(i.zx,{onClick:e=>dumpTree(),width:"full",children:"Dump"})]})]})}),(0,n.jsx)(a.xu,{flex:1,height:"full",ml:3,overflowX:"scroll",overflowY:"scroll",children:void 0===u?(0,n.jsx)(p.Z,{}):(0,n.jsx)(l.ZP,{language:"sql",options:{fontSize:13,readOnly:!0,renderWhitespace:"boundary",wordWrap:"on"},defaultValue:'Select a compute node and click "Dump"...',value:u})})]})]});return(0,n.jsxs)(f.Fragment,{children:[(0,n.jsx)(m(),{children:(0,n.jsx)("title",{children:"Await Tree Dump"})}),w]})}},63528:function(e,t,r){"use strict";r.d(t,{Kv:function(){return n},R_:function(){return a}});let n={fromJSON:e=>({actorTraces:isObject(e.actorTraces)?Object.entries(e.actorTraces).reduce((e,t)=>{let[r,n]=t;return e[Number(r)]=String(n),e},{}):{},rpcTraces:isObject(e.rpcTraces)?Object.entries(e.rpcTraces).reduce((e,t)=>{let[r,n]=t;return e[r]=String(n),e},{}):{},compactionTaskTraces:isObject(e.compactionTaskTraces)?Object.entries(e.compactionTaskTraces).reduce((e,t)=>{let[r,n]=t;return e[r]=String(n),e},{}):{}}),toJSON(e){let t={};if(e.actorTraces){let r=Object.entries(e.actorTraces);r.length>0&&(t.actorTraces={},r.forEach(e=>{let[r,n]=e;t.actorTraces[r]=n}))}if(e.rpcTraces){let r=Object.entries(e.rpcTraces);r.length>0&&(t.rpcTraces={},r.forEach(e=>{let[r,n]=e;t.rpcTraces[r]=n}))}if(e.compactionTaskTraces){let r=Object.entries(e.compactionTaskTraces);r.length>0&&(t.compactionTaskTraces={},r.forEach(e=>{let[r,n]=e;t.compactionTaskTraces[r]=n}))}return t},create:e=>n.fromPartial(null!=e?e:{}),fromPartial(e){var t,r,n;let a={actorTraces:{},rpcTraces:{},compactionTaskTraces:{}};return a.actorTraces=Object.entries(null!==(t=e.actorTraces)&&void 0!==t?t:{}).reduce((e,t)=>{let[r,n]=t;return void 0!==n&&(e[Number(r)]=String(n)),e},{}),a.rpcTraces=Object.entries(null!==(r=e.rpcTraces)&&void 0!==r?r:{}).reduce((e,t)=>{let[r,n]=t;return void 0!==n&&(e[r]=String(n)),e},{}),a.compactionTaskTraces=Object.entries(null!==(n=e.compactionTaskTraces)&&void 0!==n?n:{}).reduce((e,t)=>{let[r,n]=t;return void 0!==n&&(e[r]=String(n)),e},{}),a}},a={fromJSON:e=>({dir:null!=e.dir?String(e.dir):"",nameManually:Array.isArray(null==e?void 0:e.nameManually)?e.nameManually.map(e=>String(e)):[],nameAuto:Array.isArray(null==e?void 0:e.nameAuto)?e.nameAuto.map(e=>String(e)):[]}),toJSON(e){var t,r;let n={};return""!==e.dir&&(n.dir=e.dir),(null===(t=e.nameManually)||void 0===t?void 0:t.length)&&(n.nameManually=e.nameManually),(null===(r=e.nameAuto)||void 0===r?void 0:r.length)&&(n.nameAuto=e.nameAuto),n},create:e=>a.fromPartial(null!=e?e:{}),fromPartial(e){var t,r,n;let a={dir:"",nameManually:[],nameAuto:[]};return a.dir=null!==(n=e.dir)&&void 0!==n?n:"",a.nameManually=(null===(t=e.nameManually)||void 0===t?void 0:t.map(e=>e))||[],a.nameAuto=(null===(r=e.nameAuto)||void 0===r?void 0:r.map(e=>e))||[],a}};function isObject(e){return"object"==typeof e&&null!==e}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window}},function(e){e.O(0,[662,235,383,774,888,179],function(){return e(e.s=92299)}),_N_E=e.O()}]);