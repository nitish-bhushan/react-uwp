webpackJsonp([10],{83:function(e,t,n){"use strict";function r(e){var t=e.context.theme,n=e.props,r=n.style,o=n.renderContentWidth,c=n.renderContentHeight;return{root:(0,t.prepareStyles)(i({fontSize:14,color:t.baseMediumHigh,padding:40,width:o,minHeight:c,margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},r)),icon:{fontSize:280,color:t.accent},desc:{marginTop:40,borderLeft:"12px solid "+t.accent,padding:"0 10px",fontWeight:"lighter",color:t.accent},descTitle:{fontSize:36,lineHeight:1,fontWeight:"lighter"},descSubtitle:{fontWeight:"lighter",lineHeight:1.6,fontSize:16}}}var o=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},i=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},c=n(0),s=n(3),l=n(4),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={},t}return o(t,e),t.prototype.render=function(){var e=this.props,t=(e.screenType,e.renderContentWidth,e.renderContentHeight,this.context.theme,r(this));return c.createElement("div",{style:t.root},c.createElement(l.default,{style:t.icon},"MapDirections"),c.createElement("div",{style:t.desc},c.createElement("h5",{style:t.descTitle},"ERROR CODE: 404"),c.createElement("p",{style:t.descSubtitle},"We can't seem to find the page you're looking for.")))},t}(c.Component);a.defaultProps={},a.contextTypes={theme:s.object},Object.defineProperty(t,"__esModule",{value:!0}),t.default=a}});