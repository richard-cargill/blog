(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{151:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return m});var n=a(7),r=a.n(n),i=a(0),l=a.n(i),o=a(36),s=a(158),c=a(156),u=(a(169),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,r=a.next;return l.a.createElement(s.a,{location:this.props.location,title:e},l.a.createElement(c.a,{title:t.frontmatter.title,description:t.excerpt}),l.a.createElement("h1",null,t.frontmatter.title),l.a.createElement("time",{datetime:t.frontmatter.date},t.frontmatter.formattedDate),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),l.a.createElement("hr",null),l.a.createElement("ul",null,n&&l.a.createElement("li",null,l.a.createElement(o.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),r&&l.a.createElement("li",null,l.a.createElement(o.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))},e}(l.a.Component));e.default=u;var m="2056101143"},155:function(t){t.exports={data:{site:{siteMetadata:{author:"Richard Cargill"}}}}},156:function(t,e,a){"use strict";var n=a(157),r=a(0),i=a.n(r),l=a(1),o=a.n(l),s=a(160),c=a.n(s),u=a(36);function m(t){var e=t.description,a=t.lang,r=t.meta,l=t.keywords,o=t.title;return i.a.createElement(u.StaticQuery,{query:d,render:function(t){var n=e||t.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+t.site.siteMetadata.description,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=m;var d="1025518380"},157:function(t){t.exports={data:{site:{siteMetadata:{title:"rc",description:"Richard Cargill's blog",author:"Richard Cargill"}}}}},158:function(t,e,a){"use strict";var n=a(7),r=a.n(n),i=a(0),l=a.n(i),o=a(36),s=a(155);a(159);var c="4027657132",u=function(){return l.a.createElement(o.StaticQuery,{query:c,render:function(t){var e=t.site.siteMetadata.author;return l.a.createElement("small",{className:"inline-block"},"Written by ",l.a.createElement("strong",null,e)," who lives and works in London building digital stuff.")},data:s})},m=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,r=e.children;return t="/blog/"===a.pathname?l.a.createElement("h1",{className:"logo"},l.a.createElement(o.Link,{className:"no-underline",to:"/"},n)):l.a.createElement("h3",{className:"logo"},l.a.createElement(o.Link,{className:"no-underline",to:"/"},n)),l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"header"},t,l.a.createElement(o.Link,{className:"no-underline sans-serif",to:"/"},"All posts")),r,l.a.createElement(u,null),l.a.createElement("footer",null,l.a.createElement("small",null,"© ",(new Date).getFullYear()," - Built with ❤")))},e}(l.a.Component);e.a=m},169:function(t,e,a){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-83794e95ea905396ce52.js.map