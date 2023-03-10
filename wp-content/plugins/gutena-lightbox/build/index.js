!function(){"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var t;e.g.importScripts&&(t=e.g.location+"");var o=e.g.document;if(!t&&o&&(o.currentScript&&(t=o.currentScript.src),!t)){var i=o.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t}();var t=window.wp.element,o=window.wp.blocks,i=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutena/lightbox","title":"Video Lightbox","category":"gutena","keywords":["lightbox","popup","block","youtube","vimeo"],"description":"Gutena Video Lightbox","textdomain":"gutena-lightbox","supports":{"__experimentalLayout":true,"align":["wide","full"],"html":false,"color":{"text":false,"link":false,"gradients":true,"background":true,"enableContrastChecker":false},"spacing":{"padding":true,"margin":true}},"editorScript":"file:./index.js","editorStyle":"file:./index.css"}'),r=window.wp.i18n,n=window.wp.data,l=window.wp.blockEditor,a=e.p+"images/image.90689475.jpg",c=[{name:"default",title:(0,r.__)("Default"),description:(0,r.__)("Default Style"),isDefault:!0,innerBlocks:[["gutena/play-button",{buttonColor:"#0EA489",iconColor:"#ffffff"}],["core/paragraph",{content:"A Message from CEO",align:"center",style:{typography:{fontSize:"18px"},spacing:{padding:{top:"0px",right:"0px",bottom:"0px",left:"0px"},margin:{top:"0px",bottom:"0px"}}}}]],scope:["block"]},{name:"style-one",title:(0,r.__)("Style 1"),description:(0,r.__)("Style 1 - Circle"),icon:(0,t.createElement)("svg",{width:"534",height:"352",viewBox:"0 0 534 352",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)("rect",{width:"533.684",height:"351.411",fill:"#CCD5EC"}),(0,t.createElement)("circle",{cx:"267",cy:"176",r:"38",fill:"white"}),(0,t.createElement)("path",{d:"M258.837 163.915L282.283 176.439L259.714 190.481L258.837 163.915Z",fill:"#0EA489"})),innerBlocks:[["core/cover",{url:a,dimRatio:50,overlayColor:"primary"},[["gutena/play-button"],["core/paragraph",{content:"A Message from CEO",align:"center",style:{typography:{fontSize:"18px"},spacing:{padding:{top:"10px",right:"0px",bottom:"0px",left:"0px"},margin:{top:"0px",bottom:"0px"}}}}]]]],scope:["block"]},{name:"style-two",title:(0,r.__)("Style 2"),description:(0,r.__)("Style 2 - Square"),icon:(0,t.createElement)("svg",{width:"534",height:"352",viewBox:"0 0 534 352",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)("rect",{width:"533.684",height:"351.411",fill:"#CCD5EC"}),(0,t.createElement)("rect",{x:"228",y:"137",width:"78",height:"78",fill:"white"}),(0,t.createElement)("path",{d:"M258.837 162.915L282.283 175.439L259.714 189.481L258.837 162.915Z",fill:"#0EA489"})),innerBlocks:[["core/cover",{url:a,dimRatio:50,overlayColor:"primary"},[["gutena/play-button",{buttonShape:"square"}],["core/paragraph",{content:"A Message from CEO",align:"center",style:{typography:{fontSize:"18px"},spacing:{padding:{top:"10px",right:"0px",bottom:"0px",left:"0px"},margin:{top:"0px",bottom:"0px"}}}}]]]],scope:["block"]}];function s(){const e=(0,l.useBlockProps)({className:"gutena-lightbox-block"}),o=(0,l.useInnerBlocksProps)(e,{orientation:"horizontal",renderAppender:!1});return(0,t.createElement)("div",o)}function p(e){let{clientId:i,setAttributes:a}=e;const s=c.filter((e=>e.isDefault))[0]||c[0],{replaceInnerBlocks:p}=(0,n.useDispatch)(l.store),g=(0,l.useBlockProps)({className:"gutena-lightbox-block"});return(0,t.createElement)("div",g,(0,t.createElement)(l.__experimentalBlockVariationPicker,{label:(0,r.__)("Lightbox Style","gutena-lightbox"),instructions:(0,r.__)("Select a Lightbox style to start with.","gutena-lightbox"),variations:c,onSelect:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;e.attributes&&a(e.attributes),e.innerBlocks&&p(i,(0,o.createBlocksFromInnerBlocksTemplate)(e.innerBlocks),!0)},allowSkip:!0}))}(0,o.registerBlockType)(i,{edit:function(e){const{clientId:o}=e,i=(0,n.useSelect)((e=>e(l.store).getBlocks(o).length>0),[o])?s:p;return(0,t.createElement)(i,e)},save:function(){const e=l.useBlockProps.save({className:"gutena-lightbox-block"}),o=l.useInnerBlocksProps.save(e);return(0,t.createElement)("div",o)},icon:(0,t.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)("rect",{x:"1",y:"3",width:"2",height:"19",fill:"#0EA489"}),(0,t.createElement)("rect",{x:"21",y:"10",width:"2",height:"11",fill:"#0EA489"}),(0,t.createElement)("rect",{x:"2",y:"5",width:"2",height:"11",transform:"rotate(-90 2 5)",fill:"#0EA489"}),(0,t.createElement)("rect",{x:"2",y:"22",width:"2",height:"21",transform:"rotate(-90 2 22)",fill:"#0EA489"}),(0,t.createElement)("path",{d:"M19 3.11125L22.1113 0L23 0.888749L19.8887 4L23 7.11125L22.1113 8L19 4.88875L15.8887 8L15 7.11125L18.1113 4L15 0.888749L15.8887 0L19 3.11125Z",fill:"#0EA489"}),(0,t.createElement)("path",{d:"M14.904 12.5166L10.335 15.6298C10.3025 15.6518 10.2648 15.6645 10.2258 15.6664C10.1869 15.6683 10.1482 15.6594 10.1138 15.6406C10.0794 15.6218 10.0507 15.5938 10.0307 15.5596C10.0106 15.5254 10 15.4863 10 15.4465V9.22018C10 9.18033 10.0106 9.14123 10.0307 9.10706C10.0507 9.07288 10.0794 9.04489 10.1138 9.02608C10.1482 9.00728 10.1869 8.99835 10.2258 9.00025C10.2648 9.00216 10.3025 9.01482 10.335 9.0369L14.904 12.1501C14.9336 12.1702 14.9578 12.1974 14.9745 12.2294C14.9912 12.2614 15 12.2971 15 12.3333C15 12.3696 14.9912 12.4053 14.9745 12.4373C14.9578 12.4692 14.9336 12.4965 14.904 12.5166Z",fill:"#0EA489"}))})}();