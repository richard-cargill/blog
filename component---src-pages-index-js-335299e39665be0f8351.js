(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});var n=a(7),r=a.n(n),i=a(0),l=a.n(i),o=a(36),s=a(158),c=a(156),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return l.a.createElement(s.a,{location:this.props.location,title:t},l.a.createElement(c.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),a&&l.a.createElement("nav",{className:"list"},a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return l.a.createElement(o.Link,{className:"no-underline inline-block",style:{boxShadow:"none"},to:t.fields.slug,key:t.fields.slug},l.a.createElement("h3",{className:"list__title"},a),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))})))},t}(l.a.Component);t.default=u;var d="2271037629"},155:function(e){e.exports={data:{site:{siteMetadata:{author:"Richard Cargill"}}}}},156:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),l=a(1),o=a.n(l),s=a(160),c=a.n(s),u=a(36);function d(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title;return i.a.createElement(u.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.description,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d;var m="1025518380"},157:function(e){e.exports={data:{site:{siteMetadata:{title:"rc",description:"Richard Cargill's blog",author:"Richard Cargill"}}}}},158:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),l=a.n(i),o=a(36),s=a(155);a(159);var c="4027657132",u=function(){return l.a.createElement(o.StaticQuery,{query:c,render:function(e){var t=e.site.siteMetadata.author;return l.a.createElement("small",{className:"inline-block"},"Written by ",l.a.createElement("strong",null,t)," who lives and works in London building digital stuff.")},data:s})},d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,r=t.children;return e="/"===a.pathname?l.a.createElement("h1",{className:"logo"},l.a.createElement(o.Link,{className:"no-underline",to:"/"},n)):l.a.createElement("h3",{className:"logo"},l.a.createElement(o.Link,{className:"no-underline",to:"/"},n)),l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"header"},e,l.a.createElement(o.Link,{className:"no-underline sans-serif",to:"/"},"All posts")),r,l.a.createElement(u,null),l.a.createElement("footer",null,l.a.createElement("small",null,"© ",(new Date).getFullYear()," - Built with ❤")))},t}(l.a.Component);t.a=d}}]);
//# sourceMappingURL=component---src-pages-index-js-335299e39665be0f8351.js.map