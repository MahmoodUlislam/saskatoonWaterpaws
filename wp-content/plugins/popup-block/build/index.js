!function(e){var t={};function o(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=24)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n},e.exports.default=e.exports,e.exports.__esModule=!0},,function(e,t,o){var n=o(4);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.primitives},function(e,t){e.exports=window.wp.blocks},function(e){e.exports=JSON.parse('{"a":{"width":{"type":"number","default":400},"waitTime":{"type":"number","default":1},"offset":{"type":"number","default":20},"openBehaviour":{"type":"string","default":"load"},"showCloseButton":{"type":"boolean","default":true},"closeButtonAlignment":{"type":"string","default":"right"},"closeButtonColor":{"type":"string","default":"#000000"},"overlayColor":{"type":"string","default":"#000000"},"overlayOpacity":{"type":"number","default":75},"closeButtonSize":{"type":"number","default":20},"borderRadius":{"type":"number","default":3},"closeOnClickOutside":{"type":"boolean","default":true},"closeOnAnchorClick":{"type":"boolean","default":false},"closeAnchor":{"type":"string"},"anchor":{"type":"string","default":""},"backgroundColor":{"type":"string"},"gradientBackground":{"type":"string"},"dismissForVisitors":{"type":"boolean","default":true},"dismissPeriod":{"type":"number","default":20},"uuid":{"type":"string","default":null}}}')},function(e,t){function o(){return e.exports=o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,o.apply(this,arguments)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,o){var n=o(16),l=o(17),r=o(6),a=o(18);e.exports=function(e,t){return n(e)||l(e,t)||r(e,t)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},e.exports.default=e.exports,e.exports.__esModule=!0},,,,function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,l,r=[],a=!0,c=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(r.push(n.value),!t||r.length!==t);a=!0);}catch(e){c=!0,l=e}finally{try{a||null==o.return||o.return()}finally{if(c)throw l}}return r}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,o){},,,,,function(e,t,o){"use strict";o.r(t);var n=o(1),l=o(8),r=o(9),a=o(10),c=o.n(a),u=o(11),i=o.n(u),s=o(0),p=o(2),b=o(3),d=o(7),m=Object(s.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(s.createElement)(d.Path,{d:"M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"}));let O=(e=21)=>{let t="",o=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let n=63&o[e];t+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return t};var f=function(e){var t={fontSize:e.size,color:e.color,lineHeight:1};return Object(s.createElement)("span",{style:t},"✕")},h=(o(19),function(e){var t=e.attributes,o=e.setAttributes,l=e.showPreview,r=t.width,a=t.backgroundColor,c=t.gradientBackground,u=t.closeButtonColor,i=t.closeButtonSize,d=t.borderRadius,m=t.overlayColor,O=t.overlayOpacity,f=t.showCloseButton;return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(p.PanelBody,{title:Object(n.__)("Modal Appearance","abs-popup")},Object(s.createElement)(p.PanelRow,null,Object(s.createElement)(p.RangeControl,{value:r,label:Object(n.__)("Popup Minimum Width","abs-popup"),onChange:function(e){l(),o({width:e})},min:0,max:1e3})),Object(s.createElement)(p.PanelRow,null,Object(s.createElement)(p.RangeControl,{value:d,label:Object(n.__)("Popup Border Radius","abs-popup"),onChange:function(e){l(),o({borderRadius:e})},min:0,max:100})),Object(s.createElement)(p.PanelRow,null,Object(s.createElement)(b.__experimentalColorGradientControl,{label:Object(n.__)("Background Color","abs-popup"),colorValue:a,gradientValue:c,onGradientChange:function(e){l(),o({gradientBackground:e||!1})},onColorChange:function(e){l(),o({backgroundColor:e||!1})}})),Object(s.createElement)("hr",null),f&&Object(s.createElement)(s.Fragment,null,Object(s.createElement)(p.PanelRow,null,Object(s.createElement)(p.RangeControl,{value:i,label:Object(n.__)("Close Icon Size","abs-popup"),onChange:function(e){l(),o({closeButtonSize:e})},min:0,max:60})),Object(s.createElement)(p.PanelRow,null,Object(s.createElement)(b.__experimentalColorGradientControl,{label:Object(n.__)("Close Button Color","abs-popup"),colorValue:u,onColorChange:function(e){l(),o({closeButtonColor:e||"#000000"})}})),Object(s.createElement)("hr",null)),Object(s.createElement)(p.PanelRow,null,Object(s.createElement)(b.__experimentalColorGradientControl,{label:Object(n.__)("Overlay Color","abs-popup"),colorValue:m,onColorChange:function(e){l(),o({overlayColor:e||"#000000"})}})),Object(s.createElement)(p.PanelRow,null,Object(s.createElement)(p.RangeControl,{value:O,label:Object(n.__)("Overlay Opacity","abs-popup"),onChange:function(e){l(),o({overlayOpacity:e})},min:0,max:100}))))}),j=function(e){var t=e.attributes,o=e.setAttributes,l=t.openBehaviour,r=t.anchor,a=t.waitTime,c=t.offset,u=[{label:Object(n.__)("Timer","abs-popup"),value:"load"},{label:Object(n.__)("On Anchor Click","abs-popup"),value:"anchor"},{label:Object(n.__)("On Scroll","abs-popup"),value:"scroll"},{label:Object(n.__)("On Exit Intent","abs-popup"),value:"exit"}];return Object(s.createElement)(p.PanelBody,{initialOpen:!1,title:Object(n.__)("Open Behaviour","abs-popup")},Object(s.createElement)(p.PanelRow,null,Object(s.createElement)(p.RadioControl,{onChange:function(e){o({openBehaviour:e})},selected:l,options:u})),Object(s.createElement)(p.PanelRow,null,"anchor"===l&&Object(s.createElement)(p.TextControl,{value:r,label:Object(n.__)("Anchor","abs-popup"),help:Object(s.createElement)(s.Fragment,null,Object(s.createElement)("small",null,Object(n.__)("You can add anchors to button blocks. Using the same anchor here will open the modal when you click the respective button.","abs-popup")),Object(s.createElement)("br",null),Object(s.createElement)("hr",null),Object(s.createElement)("span",null,Object(s.createElement)("code",null,"#example")," - ",Object(n.__)("for link href attributes","abs-popup")),Object(s.createElement)("br",null),Object(s.createElement)("span",null,Object(s.createElement)("code",null,"example")," - ",Object(n.__)("for anchor attributes","abs-popup"))),onChange:function(e){o({anchor:e})}}),"scroll"===l&&Object(s.createElement)(p.RangeControl,{label:Object(n.__)("Scroll Distance in Percent","abs-popup"),help:Object(s.createElement)("small",null,Object(n.__)("Show the modal when this percentage of the page has been scrolled.")),beforeIcon:"image-flip-vertical",value:c,onChange:function(e){o({offset:e})},min:0,max:100}),"load"===l&&Object(s.createElement)(p.RangeControl,{label:Object(n.__)("Wait Time in Seconds","abs-popup"),help:Object(s.createElement)("small",null,Object(n.__)("How much time to wait before showing the popup.")),beforeIcon:"clock",value:a,onChange:function(e){o({waitTime:e})},min:0,max:100}),"exit"===l&&Object(s.createElement)("small",null,Object(n.__)("Shows the modal when the user moves the mouse outside of the top of the window","abs-popup"))))},C=o(12),g=o.n(C),v=function(e){var t=e.attributes,o=e.setAttributes,l=t.showCloseButton,r=(t.closeButtonAlignment,t.closeOnClickOutside),a=t.closeOnAnchorClick,c=t.closeAnchor,u=t.dismissForVisitors,i=t.dismissPeriod,b=function(e,t){o(g()({},e,t))};return Object(s.createElement)(p.PanelBody,{initialOpen:!1,title:Object(n.__)("Close Behaviour","abs-popup")},Object(s.createElement)(p.PanelRow,null,Object(s.createElement)(p.CheckboxControl,{label:Object(n.__)("Show Close Button","abs-popup"),checked:l,onChange:function(e){return b("showCloseButton",e)}})),Object(s.createElement)(p.PanelRow,null,Object(s.createElement)(p.CheckboxControl,{label:Object(n.__)("Close On Click Outside","abs-popup"),checked:r,onChange:function(e){return b("closeOnClickOutside",e)}})),Object(s.createElement)(p.PanelRow,null,Object(s.createElement)(p.CheckboxControl,{label:Object(n.__)("Close On Anchor Click","abs-popup"),checked:a,onChange:function(e){return b("closeOnAnchorClick",e)}})),a&&Object(s.createElement)(p.PanelRow,null,Object(s.createElement)(p.TextControl,{value:c,label:Object(n.__)("Anchor","abs-popup"),help:Object(s.createElement)("small",null,Object(n.__)("You can add anchors to button blocks. Using the same anchor here will close the modal when you click the respective button.","abs-popup")),onChange:function(e){return b("closeAnchor",e)}})),Object(s.createElement)(p.PanelRow,null,Object(s.createElement)(p.CheckboxControl,{label:Object(n.__)("Dismiss for Recurrent Visitors","abs-popup"),checked:u,onChange:function(e){return b("dismissForVisitors",e)}})),u&&Object(s.createElement)(p.PanelRow,null,Object(s.createElement)(p.RangeControl,{value:i,label:Object(n.__)("Number of Days Until the Notice is Shown again","abs-popup"),onChange:function(e){o({dismissPeriod:e})},min:0,max:100})))},_=function(e){return Object(s.createElement)(b.InspectorControls,null,Object(s.createElement)(h,e),Object(s.createElement)(j,e),Object(s.createElement)(v,e))};Object(l.registerBlockType)("abs/popup-block",{title:Object(n.__)("Popup Block","abs-popup"),description:Object(n.__)("A popup block.","abs-popup"),category:"design",icon:function(){return Object(s.createElement)("svg",{viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg"},Object(s.createElement)("path",{fill:"#FF0066",d:"M28,-40.3C36.5,-32.3,43.7,-24.4,51.6,-13.6C59.5,-2.7,68.1,11.1,67,24.1C66,37.2,55.4,49.5,42.7,51.6C29.9,53.7,15,45.6,-0.3,46.1C-15.6,46.6,-31.2,55.5,-41.2,52.5C-51.1,49.4,-55.3,34.4,-55.4,21.1C-55.6,7.7,-51.6,-3.9,-48.5,-16.4C-45.3,-29,-43,-42.5,-35.1,-50.7C-27.1,-58.9,-13.6,-61.8,-1.9,-59.2C9.7,-56.5,19.5,-48.3,28,-40.3Z",transform:"translate(100 100)"}))},attributes:r.a,edit:function(e){var t=Object(s.useState)(!1),o=i()(t,2),l=o[0],r=o[1],a=e.attributes,u=e.setAttributes,d=a.width,h=a.backgroundColor,j=a.gradientBackground,C=a.showCloseButton,g=a.closeButtonColor,v=a.closeButtonSize,y=a.borderRadius,w=a.overlayColor,E=a.overlayOpacity;null===a.uuid&&u({uuid:O()});var x={minWidth:d,borderRadius:y},k={};h&&(x.backgroundColor=h),j&&(x.background=j),g&&(k.color=g);var B=function(e){e.preventDefault(),r(!l)};return Object(s.createElement)(s.Fragment,null,Object(s.createElement)("div",{className:"abs-popup"},Object(s.createElement)("div",{className:"popup-preview"},Object(s.createElement)(p.Button,{isPrimary:!0,icon:m,onClick:B},Object(n.__)("Show Popup","abs-popup"))),l&&Object(s.createElement)("div",{className:"abs-modal-wrap"},Object(s.createElement)("div",{style:{backgroundColor:w,opacity:E/100},role:"presentation",className:"overlay",onClick:B}),Object(s.createElement)("div",{className:"modal-content",style:x},C&&Object(s.createElement)("div",{className:"modal-header"},Object(s.createElement)("button",{className:"close",style:k,onClick:B},Object(s.createElement)(f,{color:g,size:v}))),Object(s.createElement)("div",{className:"modal-body"},Object(s.createElement)(b.InnerBlocks,null))))),Object(s.createElement)(_,c()({},e,{showPreview:function(){l||r(!0)}})))},save:function(e){var t=e.attributes,o=t.width,n=t.anchor,l=t.waitTime,r=t.offset,a=t.openBehaviour,c=t.backgroundColor,u=t.gradientBackground,i=t.closeButtonColor,p=t.closeButtonSize,d=t.borderRadius,m=t.overlayColor,O=t.overlayOpacity,h=t.closeAnchor,j=t.closeOnClickOutside,C=t.closeOnAnchorClick,g=t.dismissForVisitors,v=t.dismissPeriod,_=t.showCloseButton,y=t.uuid,w={minWidth:o,borderRadius:d};return c&&(w.backgroundColor=c),u&&(w.background=u),Object(s.createElement)("div",{className:"abs-popup front","data-open":a,"data-anchor":"anchor"===a?n:"","data-anchorclose":C?h:"","data-time":"load"===a?l:"","data-dismiss":g?v:"","data-offset":"scroll"===a?r:"","data-outside":j,"data-created":y},Object(s.createElement)("div",{className:"abs-modal-wrap"},Object(s.createElement)("div",{role:"presentation",className:"overlay",style:{backgroundColor:m,opacity:O/100}}),Object(s.createElement)("div",{className:"modal-content",style:w},_&&Object(s.createElement)("div",{className:"modal-header"},Object(s.createElement)("button",{className:"close"},Object(s.createElement)(f,{color:i,size:p}))),Object(s.createElement)("div",{className:"modal-body"},Object(s.createElement)(b.InnerBlocks.Content,null)))))}})}]);