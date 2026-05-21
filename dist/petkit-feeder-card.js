function e(e,t,i,s){var n,a=arguments.length,o=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let a=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(t,e))}return e}toString(){return this.cssText}};const o=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new a(i,e,s)},r=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,m=globalThis,_=m.trustedTypes,g=_?_.emptyScript:"",f=m.reactiveElementPolyfillSupport,y=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},v=(e,t)=>!l(e,t),$={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&d(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const a=s?.call(this);n?.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...h(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{if(i)e.adoptedStyleSheets=s.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of s){const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,e.appendChild(s)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=s;const a=n.fromAttribute(t,e.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(e,t,i,s=!1,n){if(void 0!==e){const a=this.constructor;if(!1===s&&(n=this[e]),i??=a.getPropertyOptions(e),!((i.hasChanged??v)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:n},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==n||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,i,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[y("elementProperties")]=new Map,w[y("finalized")]=new Map,f?.({ReactiveElement:w}),(m.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,k=e=>e,A=x.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,D="?"+C,I=`<${D}>`,P=document,T=()=>P.createComment(""),z=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,U="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,H=/>/g,R=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,L=/"/g,j=/^(?:script|style|textarea|title)$/i,q=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),B=q(1),W=q(2),V=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),G=new WeakMap,J=P.createTreeWalker(P,129);function K(e,t){if(!O(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const Z=(e,t)=>{const i=e.length-1,s=[];let n,a=2===t?"<svg>":3===t?"<math>":"",o=M;for(let t=0;t<i;t++){const i=e[t];let r,l,d=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===M?"!--"===l[1]?o=F:void 0!==l[1]?o=H:void 0!==l[2]?(j.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=R):void 0!==l[3]&&(o=R):o===R?">"===l[0]?(o=n??M,d=-1):void 0===l[1]?d=-2:(d=o.lastIndex-l[2].length,r=l[1],o=void 0===l[3]?R:'"'===l[3]?L:N):o===L||o===N?o=R:o===F||o===H?o=M:(o=R,n=void 0);const h=o===R&&e[t+1].startsWith("/>")?" ":"";a+=o===M?i+I:d>=0?(s.push(r),i.slice(0,d)+S+i.slice(d)+C+h):i+C+(-2===d?t:h)}return[K(e,a+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class Y{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,a=0;const o=e.length-1,r=this.parts,[l,d]=Z(e,t);if(this.el=Y.createElement(l,i),J.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=J.nextNode())&&r.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(S)){const t=d[a++],i=s.getAttribute(e).split(C),o=/([.?@])?(.*)/.exec(t);r.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?se:"?"===o[1]?ne:"@"===o[1]?ae:ie}),s.removeAttribute(e)}else e.startsWith(C)&&(r.push({type:6,index:n}),s.removeAttribute(e));if(j.test(s.tagName)){const e=s.textContent.split(C),t=e.length-1;if(t>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],T()),J.nextNode(),r.push({type:2,index:++n});s.append(e[t],T())}}}else if(8===s.nodeType)if(s.data===D)r.push({type:2,index:n});else{let e=-1;for(;-1!==(e=s.data.indexOf(C,e+1));)r.push({type:7,index:n}),e+=C.length-1}n++}}static createElement(e,t){const i=P.createElement("template");return i.innerHTML=e,i}}function Q(e,t,i=e,s){if(t===V)return t;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const a=z(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(e),n._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(t=Q(e,n._$AS(e,t.values),n,s)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??P).importNode(t,!0);J.currentNode=s;let n=J.nextNode(),a=0,o=0,r=i[0];for(;void 0!==r;){if(a===r.index){let t;2===r.type?t=new te(n,n.nextSibling,this,e):1===r.type?t=new r.ctor(n,r.name,r.strings,this,e):6===r.type&&(t=new oe(n,this,e)),this._$AV.push(t),r=i[++o]}a!==r?.index&&(n=J.nextNode(),a++)}return J.currentNode=P,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),z(e)?e===X||null==e||""===e?(this._$AH!==X&&this._$AR(),this._$AH=X):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>O(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==X&&z(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Y.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new ee(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=G.get(e.strings);return void 0===t&&G.set(e.strings,t=new Y(e)),t}k(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new te(this.O(T()),this.O(T()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=k(e).nextSibling;k(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ie{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=X,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=X}_$AI(e,t=this,i,s){const n=this.strings;let a=!1;if(void 0===n)e=Q(this,e,t,0),a=!z(e)||e!==this._$AH&&e!==V,a&&(this._$AH=e);else{const s=e;let o,r;for(e=n[0],o=0;o<n.length-1;o++)r=Q(this,s[i+o],t,o),r===V&&(r=this._$AH[o]),a||=!z(r)||r!==this._$AH[o],r===X?e=X:e!==X&&(e+=(r??"")+n[o+1]),this._$AH[o]=r}a&&!s&&this.j(e)}j(e){e===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class se extends ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===X?void 0:e}}class ne extends ie{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==X)}}class ae extends ie{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=Q(this,e,t,0)??X)===V)return;const i=this._$AH,s=e===X&&i!==X||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==X&&(i===X||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class oe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const re=x.litHtmlPolyfillSupport;re?.(Y,te),(x.litHtmlVersions??=[]).push("3.3.2");const le=globalThis;class de extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=i?.renderBefore??t;let n=s._$litPart$;if(void 0===n){const e=i?.renderBefore??null;s._$litPart$=n=new te(t.insertBefore(T(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}de._$litElement$=!0,de.finalized=!0,le.litElementHydrateSupport?.({LitElement:de});const ce=le.litElementPolyfillSupport;ce?.({LitElement:de}),(le.litElementVersions??=[]).push("4.2.2");const he=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},pe={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:v},ue=(e=pe,t,i)=>{const{kind:s,metadata:n}=i;let a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),a.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,n,e,!0,i)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];t.call(this,i),this.requestUpdate(s,n,e,!0,i)}}throw Error("Unsupported decorator location: "+s)};function me(e){return(t,i)=>"object"==typeof i?ue(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function _e(){const e=(new Date).getDay();return 0===e?7:e}const ge=W`
  <svg viewBox="0 0 1024 1024" class="btn-svg">
    <path d="M680.64 32.768a41.6 41.6 0 0 0-56.384-17.152c-10.88 5.824-16 15.808-20.864 27.072l-22.336 47.68A450.752 450.752 0 0 0 512 85.12C271.68 85.12 74.688 275.072 74.688 512c0 77.952 21.44 151.04 58.816 213.952a41.6 41.6 0 0 0 57.088 14.528 41.856 41.856 0 0 0 14.464-57.28A333.696 333.696 0 0 1 157.952 512c0-188.48 157.312-343.36 354.048-343.36 36.288 0 71.232 5.248 104.064 15.04l1.984 0.64c16.64 4.928 32.064 9.536 44.032 11.776 6.144 1.216 14.592 2.432 23.36 1.664a50.56 50.56 0 0 0 35.2-17.92 50.688 50.688 0 0 0 10.944-37.312 81.472 81.472 0 0 0-5.888-22.656 442.944 442.944 0 0 0-19.2-38.528l-0.96-1.92-24.96-46.72zM890.56 298.048a41.6 41.6 0 0 0-57.152-14.528 41.856 41.856 0 0 0-14.464 57.28c30.016 50.432 47.104 108.8 47.104 171.2 0 188.48-157.312 343.36-354.048 343.36a363.968 363.968 0 0 1-104.064-15.04l-2.176-0.64a504 504 0 0 0-43.84-11.776 85.952 85.952 0 0 0-23.36-1.664 50.56 50.56 0 0 0-35.2 17.92 50.752 50.752 0 0 0-10.944 37.312c0.832 8.96 3.648 16.96 5.888 22.656 4.416 10.88 11.584 24.32 19.136 38.464l25.92 48.64a41.6 41.6 0 0 0 56.384 17.152c10.88-5.824 16.384-17.152 20.864-27.072L448 934.4c20.928 2.944 42.24 4.48 64 4.48 240.32 0 437.312-189.888 437.312-426.88 0-77.952-21.44-151.04-58.752-213.952z"/>
  </svg>
`,fe=W`
  <svg viewBox="150 150 724 724" class="btn-svg">
    <path d="M431.424 246.336c36.576-14.208 74.112-1.024 107.04 40.48l-0.32-0.384-2.016-2.464 7.264-3.84c42.432-21.44 83.84-22.304 112 16.128l0.864 1.248 3.552-1.92c34.24-17.376 75.168-2.144 116.832 50.304l5.024 6.496 3.2 4.416c4.16 6.848 6.4 14.4 6.4 22.272l-0.128-2.752 1.76 13.76 2.56 17.664c0.96 6.176 1.984 12.608 3.104 19.328 6.4 38.24 14.368 76.448 24 111.968 9.216 34.08 19.52 63.808 30.24 86.816l2.72 5.76 1.504 3.744c1.6 4.224 2.848 8.448 3.616 12.736 0.608 3.104 0.928 6.176 0.928 9.248 0 69.312-162.336 126.272-343.552 128.352l-10.272 0.064c-186.88 0-353.888-55.232-353.888-125.536 0-7.136 1.408-14.112 3.904-21.76 1.216-3.68 2.56-7.136 4.48-11.936l3.648-9.056c0.736-1.92 1.12-3.2 1.792-5.44a786.496 786.496 0 0 0 43.648-166.016c2.72-18.432 4.448-35.104 5.408-49.664l0.672-13.44 0.096-3.84 0.32-5.184a43.52 43.52 0 0 1 7.264-18.912l2.272-3.488c4.96-8.32 13.568-19.904 25.696-31.552 34.496-33.12 76.672-45.216 121.152-20.16l-2.464-1.312 2.336-3.328c14.4-20.224 31.04-36.48 50.688-45.92z m318.912 183.04c-49.728 25.664-140.224 39.104-245.952 39.104h-10.24c-99.072-0.864-183.712-13.696-232.416-37.44a821.888 821.888 0 0 1-48.48 196l-1.664 5.408a161.76 161.76 0 0 1-2.24 5.696l-2.656 6.528c-1.568 3.84-2.528 6.4-3.296 8.736a25.408 25.408 0 0 0-1.504 6.816c0 29.44 145.504 77.536 305.856 77.536 155.968 0 299.712-48.192 305.6-78.496l0.192-2.016-0.064-0.384a28.256 28.256 0 0 0-1.376-4.512l-1.088-2.688-1.184-2.432c-12.576-26.88-23.68-59.104-33.6-95.648a1218.656 1218.656 0 0 1-25.024-116.608z m-416.096 85.12a24 24 0 0 1 24.16 20.288l0.32 3.648c0.256 28.576-6.496 71.712-26.88 121.92a24 24 0 1 1-44.48-18.08c10.336-25.44 16.96-50.08 20.544-73.056 0.832-5.44 1.472-10.496 1.92-15.168l0.736-9.504 0.128-5.632a24 24 0 0 1 23.552-24.384z m166.624-197.824c-20.64-26.048-36.544-31.616-52.064-25.6-13.44 5.216-27.392 19.2-39.36 37.344-12.832 19.488-38.784 24.48-58.816 13.152l-4.544-2.336c-21.12-9.696-40.384-3.296-59.744 15.264l-3.072 3.072-1.696 1.856-1.152 1.344 2.464 1.312c39.488 19.744 76.992 28.608 109.056 26.048l3.264-0.32c32.96-4.16 56.896-23.328 63.008-53.024l0.544-3.072a56.32 56.32 0 0 0-12.8-9.824l-3.712-1.984c-2.88-1.6-5.952-3.328-9.152-5.248l2.112-2.048c20.864-20.032 43.584-25.536 62.4-14.272 6.368 3.68 12.032 8.768 17.376 15.68z m79.552-64.64c-6.336-3.68-10.56-9.408-12.992-17.28l-0.64-2.304 3.456 1.664c6.464 3.136 10.24 8.256 11.456 14.72l0.384 2.88-1.664 0.32z"/>
  </svg>
`,ye=W`
  <svg viewBox="4 4 92 92" class="delete-icon">
    <circle cx="50" cy="50" r="40" fill="none" stroke="#ff0000" stroke-width="12"/>
    <line x1="35" y1="50" x2="65" y2="50" stroke="#ff0000" stroke-width="15" stroke-linecap="round"/>
  </svg>
`,be=W`
  <svg viewBox="0 0 24 24" class="spinner-svg">
    <defs>
      <linearGradient id="spinner-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="0">
        <stop offset="0%" stop-color="currentColor" stop-opacity="1"/>
        <stop offset="40%" stop-color="currentColor" stop-opacity="1"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.1"/>
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="none" stroke="url(#spinner-gradient)" stroke-width="3.5" stroke-dasharray="20 40" stroke-linecap="round"/>
  </svg>
`,ve=W`
  <svg viewBox="0 0 1024 1024" class="btn-svg">
    <path d="M974.46 433.54A40.662 40.662 0 0 0 933.8 474.2a256 256 0 0 1-256 256h-393.45l134.586-134.586a40.662 40.662 0 0 0-57.27-57.27L159.498 739.937a40.662 40.662 0 0 0-12.027 28.636 41.235 41.235 0 0 0 12.027 28.635l207.892 207.32a40.662 40.662 0 0 0 57.271-57.27l-137.45-135.732h389.441A337.324 337.324 0 0 0 1013.978 474.2a40.662 40.662 0 0 0-39.517-40.662zM344.484 293.798h395.168L605.065 428.385a40.662 40.662 0 0 0 57.27 57.27l202.166-199.302a40.662 40.662 0 0 0 12.027-28.635 41.235 41.235 0 0 0-12.027-28.635L656.61 18.899a40.662 40.662 0 0 0-57.271 57.271l135.731 135.732H344.483A337.324 337.324 0 0 0 8.304 549.799a40.662 40.662 0 0 0 81.325 0 256 256 0 0 1 254.854-256z" fill="#2c2c2c"/>
  </svg>
`;function $e(e,t){return(((e.records||{})[t]||{}).items||[]).map(e=>{const i=e.state||{};return{id:e.id,date:t,time:e.time||"",name:e.name||"",amount:e.amount||0,real_amount:i.real_amount||e.amount||0,status:e.status||0,is_executed:!1!==e.is_executed,is_completed:null!==i.completed_at&&void 0!==i.completed_at,completed_at:i.completed_at,src:e.src}})}function we(e,t){const i=e.map((e,t)=>({id:`plan_${e.itemId||e.time}_${t}`,itemId:e.itemId||e.time,time:e.time,name:e.name,itemType:"plan",plannedAmount:e.amount,isExecuted:!1,isEnabled:e.enabled,canDisable:!0,canDelete:!0})),s=t.map((e,t)=>{let s;return 1===e.src&&(s=i.find(t=>t.time===e.time&&t.plannedAmount===e.amount)),s?(s.isExecuted=e.is_completed,s.actualAmount=e.real_amount,s.completedAt=e.completed_at,s.isEnabled=0===e.status,s.status=e.status,null):1===e.src?{id:`deleted_plan_${e.id||e.time}_${t}`,itemId:e.id||e.time,time:e.time,name:e.name||"已删除计划",itemType:"deleted_plan",plannedAmount:e.amount,actualAmount:e.real_amount,isExecuted:e.is_completed,isEnabled:!1,completedAt:e.completed_at,canDisable:!1,canDelete:!1}:{id:`manual_${e.id||e.time}_${t}`,itemId:e.id||e.time,time:e.time,name:e.name||"手动喂食",itemType:"manual",plannedAmount:0,actualAmount:e.real_amount,isExecuted:e.is_completed,isEnabled:!0,completedAt:e.completed_at,canDisable:!1,canDelete:!1}}),n=s.filter(e=>null!==e);return[...i,...n].sort((e,t)=>e.time.localeCompare(t.time))}function xe(e,t,i,s){const n=(e.records||{})[t]||{},a=n.plan_amount||0,o=n.real_amount||0,r=n.add_amount||0,l=n.times||i.length,d=i.filter(e=>e.isExecuted).length,c=l-d,h=i.filter(e=>e.isExecuted&&e.completedAt),p=h.length>0?h.reduce((e,t)=>t.completedAt>e.completedAt?t:e):void 0;return{planAmount:a,actualAmount:o,manualAmount:r,isOnline:s,lastFeedingTime:p?.completedAt,lastFeedingAmount:p?.actualAmount,totalCount:l,completedCount:d,pendingCount:c}}const ke={zh:{"common.loading":"加载中...","common.loading_editor":"正在加载...","error.entity_not_found":"实体不存在：{entityId}","error.device_or_entity_required":"需要定义 device_id 或 entity","button.refresh":"刷新数据","button.manual_feed":"手动喂食","button.add_plan":"新增计划","button.delete_plan":"删除计划","button.sync":"同步计划","confirm.sync_plan":"确定将一周七天的计划都同步为 {day} 的计划吗？此操作将覆盖其他天的计划。","error.no_plan_to_sync":"当前没有计划可同步","error.sync_failed":"同步计划失败，请稍后重试","status.online":"在线","status.offline":"离线","status.executed":"已执行","status.expired":"已过期","status.deleted":"已删除计划","status.click_enable":"点击启用","status.click_disable":"点击禁用","summary.online_status":"在线状态","summary.planned_feed":"计划喂食","summary.actual_feed":"实际喂食","summary.manual_feed":"手动喂食","editor.device_id":"设备ID","editor.entity":"喂食计划实体","editor.entity_hint":"（可选，提供 device_id 时自动推断）","editor.history_entity":"历史记录实体","editor.card_title":"卡片标题","editor.card_title_hint":"（可选，默认使用设备名称）","editor.display_control":"显示控制","editor.show_timeline":"显示时间线","editor.show_summary":"显示统计","editor.show_actions":"显示操作按钮","weekday.1":"周一","weekday.2":"周二","weekday.3":"周三","weekday.4":"周四","weekday.5":"周五","weekday.6":"周六","weekday.7":"周日","date.format":"{month}月{day}日 {weekday}","timeline.empty":"暂无喂食计划","default.plan_name":"早餐","default.device_name":"小佩喂食器","placeholder.name":"名称"},en:{"common.loading":"Loading...","common.loading_editor":"Loading...","error.entity_not_found":"Entity not found: {entityId}","error.device_or_entity_required":"device_id or entity is required","button.refresh":"Refresh","button.manual_feed":"Manual Feed","button.add_plan":"Add Plan","button.delete_plan":"Delete Plan","button.sync":"Sync Plan","confirm.sync_plan":"Are you sure you want to sync all 7 days' plans to {day}'s plan? This will overwrite plans on other days.","error.no_plan_to_sync":"No plan to sync","error.sync_failed":"Sync failed, please try again later","status.online":"Online","status.offline":"Offline","status.executed":"Executed","status.expired":"Expired","status.deleted":"Deleted Plan","status.click_enable":"Click to enable","status.click_disable":"Click to disable","summary.online_status":"Online Status","summary.planned_feed":"Planned Feed","summary.actual_feed":"Actual Feed","summary.manual_feed":"Manual Feed","editor.device_id":"Device ID","editor.entity":"Feeding Schedule Entity","editor.entity_hint":"(optional, auto-detected if device_id provided)","editor.history_entity":"History Entity","editor.card_title":"Card Title","editor.card_title_hint":"(optional, defaults to device name)","editor.display_control":"Display Options","editor.show_timeline":"Show Timeline","editor.show_summary":"Show Summary","editor.show_actions":"Show Action Buttons","weekday.1":"Mon","weekday.2":"Tue","weekday.3":"Wed","weekday.4":"Thu","weekday.5":"Fri","weekday.6":"Sat","weekday.7":"Sun","date.format":"{weekday} {month}/{day}","timeline.empty":"No feeding plans","default.plan_name":"Breakfast","default.device_name":"Petkit Feeder","placeholder.name":"Name"}},Ae="zh";function Ee(e,t=Ae,i){let s=ke[t]?.[e]||ke[Ae]?.[e]||e;return i&&Object.entries(i).forEach(([e,t])=>{s=s.replace(`{${e}}`,String(t))}),s}function Se(e){const t=e?.locale?.language||Ae;return t.startsWith("zh")?"zh":ke[t]?t:Ae}function Ce(e,t,i,s="zh"){const n=function(e){const t=new Map,i=e.schedule||{};for(let e=1;e<=7;e++){const s=i[e]||{},n=s.items||[],a=s.suspended??0,o=n.map((t,i)=>({id:`${e}_${i}`,itemId:t.id,name:t.name||"Feeding",time:t.time||"",amount:t.amount||0,enabled:1!==a,is_completed:!1}));t.set(e,{suspended:a,items:o})}return t}(e),a=function(){const e=new Date,t=e.getDay(),i=0===t?-6:1-t,s=[];for(let t=0;t<7;t++){const n=new Date(e);n.setDate(e.getDate()+i+t);const a=n.getFullYear(),o=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");s.push(`${a}-${o}-${r}`)}return s}(),o=new Map;for(let e=1;e<=7;e++){const r=n.get(e)||{suspended:0,items:[]},l=a[e-1],d=$e(t,l),c=we(r.items,d),h=xe(t,l,c,i);o.set(e,{day:e,weekdayName:Ee(`weekday.${e}`,s),suspended:r.suspended,timeline:c,summary:h})}return{days:o,lastUpdated:Date.now()}}const De=o`
  :host {
    display: block;
  }

  ha-card {
    padding: 10px;
  }

  /* 区块 */
  .section {
    margin-bottom: 0px;
  }

  /* 周天切换栏 */
  .weekday-tabs {
    display: flex;
    gap: 2px;
    padding: 4px 0;
    margin-bottom: 4px;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
  }

  .weekday-tab {
    flex: 1;
    min-width: 0;
    height: 28px;
    padding: 0 2px;
    border: 2px solid transparent;
    border-radius: 4px;
    background: transparent;
    color: var(--secondary-text-color, #757575);
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
  }

  .weekday-tab:hover {
    background: var(--card-background-color, #f5f5f5);
  }

  .weekday-tab.active {
    background: var(--primary-color, #03a9f4);
    border-color: var(--primary-color, #03a9f4);
    color: white;
    font-weight: 500;
  }

  .weekday-tab.today:not(.active) {
    border-color: var(--primary-color, #03a9f4);
  }

  /* 头部 */
  .header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 0px;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--divider-color);
    position: relative;
  }

  .header-title {
    font-size: 15px;
    font-weight: bold;
    z-index: 1;
    position: relative;
  }

  .header-date {
    font-size: 14px;
    font-weight: bold;
    color: var(--secondary-text-color);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    background: linear-gradient(
      to right,
      transparent 0%,
      var(--card-background-color, var(--card-background-color, var(--paper-card-background-color, #fff))) 2%,
      var(--card-background-color, var(--card-background-color, var(--paper-card-background-color, #fff))) 98%,
      transparent 100%
    );
    padding: 2px 12px;
    border-radius: 4px;
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-left: auto;
    z-index: 3;
  }

  /* 同步按钮与刷新按钮之间的间距 */
  .sync-btn {
    margin-right: -5px;  /* 调整与刷新按钮的间距为 1px (6px gap - 5px = 1px) */
  }
`,Ie=o`
  /* 时间线条目 */
  .timeline-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .timeline-item {
    border: 1px solid var(--divider-color);
    border-radius: 6px;
    padding: 6px 10px;
    background: var(--card-background-color);
  }

  .timeline-item.manual {
    background: var(--secondary-background-color);
  }

  .item-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 0;
  }

  .time {
    font-weight: bold;
    font-size: 14px;
    color: var(--primary-color);
    flex-shrink: 0;
    width: 55px;
  }

  .name {
    font-size: 14px;
    color: var(--primary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1 1 auto;
    min-width: 14px;
  }

  .amount {
    font-weight: bold;
    font-size: 14px;
    color: var(--primary-text-color);
    flex-shrink: 0;
    width: 40px;
    text-align: center;
  }

  .status-icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  .item-actions {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: flex-end;
    flex-shrink: 0;
  }

  .time.editable, .name.editable, .amount.editable {
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  .time.editable:hover, .name.editable:hover, .amount.editable:hover {
    background-color: var(--primary-color, #03a9f4);
    color: white;
  }

  .timeline-item.editing {
    background-color: rgba(3, 169, 244, 0.1);
    border: 1px solid var(--primary-color, #03a9f4);
  }

  .timeline-item.disabled {
    opacity: 0.5;
  }

  .timeline-item.plan-deleted {
    opacity: 0.4;
  }

  .timeline-item.plan-deleted .time,
  .timeline-item.plan-deleted .name,
  .timeline-item.plan-deleted .amount {
    color: var(--disabled-text-color, #9e9e9e);
  }

  .timeline-list-footer {
    margin-top: 4px;
    margin-bottom: 4px;
  }

  /* 统一图标按钮 */
  .icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .icon-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: currentColor;
    opacity: 0;
    transition: opacity 0.2s;
  }

  .icon-btn:hover::before {
    opacity: 0.1;
  }

  .icon-btn:active {
    transform: scale(0.92);
  }

  .icon-btn:focus {
    outline: 0px solid var(--primary-color, #03a9f4);
    outline-offset: 0px;
  }

  .icon-btn.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .icon-btn.disabled:hover {
    transform: none;
  }

  .icon-btn.disabled:hover::before {
    opacity: 0;
  }

  .btn-svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .refresh-btn {
    color: var(--primary-text-color, #212121);
  }

  .refresh-btn:hover::before {
    opacity: 0;
  }

  .refresh-btn:hover .btn-svg {
    transform: rotate(180deg);
  }

  .feed-btn {
    width: 36px;
    height: 36px;
    background: var(--primary-color, #03a9f4);
    color: white;
    box-shadow: 0 0 0 1px var(--primary-color, #03a9f4), 0 0 8px 2px var(--primary-color, #03a9f4);
  }

  .feed-btn::before {
    background: white;
  }

  .feed-btn:hover {
    box-shadow: 0 0 0 1px var(--primary-color, #03a9f4), 0 0 12px 3px var(--primary-color, #03a9f4);
  }

  .feed-btn:active {
    transform: scale(0.95);
  }

  .feed-btn .btn-svg {
    width: 20px;
    height: 20px;
  }

  .feed-btn:hover .btn-svg {
    transform: scale(1.1);
  }

  /* 新增计划按钮 */
  .add-plan-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 24px;
    padding: 0;
    border: 1px dashed var(--divider-color);
    background: transparent;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.2s ease;
  }

  .add-plan-btn:hover {
    border-color: var(--primary-color, #03a9f4);
    background: rgba(3, 169, 244, 0.05);
  }

  .add-plan-btn:hover .add-plus,
  .add-plan-btn:hover .add-plus::after {
    background: var(--primary-color, #03a9f4);
  }

  .add-plan-btn:active {
    transform: scale(0.98);
  }

  .add-plan-btn.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .add-plan-btn.disabled:hover {
    transform: none;
    background: transparent;
  }

  .add-plus {
    position: relative;
    width: 16px;
    height: 2px;
    background: var(--secondary-text-color, #757575);
    border-radius: 2px;
    transition: background 0.2s ease;
  }

  .add-plus::after {
    content: '';
    position: absolute;
    top: -7px;
    left: 7px;
    width: 2px;
    height: 16px;
    background: var(--secondary-text-color, #757575);
    border-radius: 2px;
    transition: background 0.2s ease;
  }

  /* 删除按钮 */
  .icon-delete-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: visible;
  }

  .icon-delete-btn::before {
    content: '';
    position: absolute;
    inset: -6px;
    background: var(--error-color, #f44336);
    opacity: 0;
    transition: opacity 0.2s;
    border-radius: 50%;
    z-index: -1;
  }

  .icon-delete-btn:hover::before {
    opacity: 0.15;
  }

  .icon-delete-btn:active {
    transform: scale(0.9);
  }

  .delete-icon {
    width: 16px;
    height: 16px;
    fill: var(--secondary-text-color, #757575);
    transition: transform 0.2s ease;
  }

  .icon-delete-btn:hover .delete-icon {
    fill: var(--error-color, #f44336);
    transform: scale(1.1);
  }

  .icon-delete-btn.disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  .icon-delete-btn.disabled:hover::before {
    opacity: 0;
  }

  .icon-delete-btn.disabled:hover .delete-icon {
    fill: var(--secondary-text-color, #757575);
    transform: none;
  }

  /* 开关 */
  .toggle-switch {
    position: relative;
    width: 28px;
    height: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    flex-shrink: 0;
  }

  .toggle-switch:hover {
    transform: scale(1.1);
  }

  .toggle-switch.on {
    background: var(--primary-color, #03a9f4);
  }

  .toggle-switch.off {
    background: var(--disabled-color, #bdbdbd);
  }

  .toggle-switch.disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  .toggle-switch.disabled:hover {
    transform: none;
  }

  .toggle-thumb {
    position: absolute;
    top: 2px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .toggle-switch.on .toggle-thumb {
    transform: translateX(14px);
  }

  .toggle-switch.off .toggle-thumb {
    transform: translateX(2px);
  }

  .toggle-switch:hover .toggle-thumb {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  }

  .toggle-switch:active .toggle-thumb {
    width: 16px;
  }

  .toggle-switch.on:active .toggle-thumb {
    transform: translateX(10px);
  }

  .toggle-switch.off:active .toggle-thumb {
    transform: translateX(0px);
  }

  /* Toggle 加载状态 */
  .toggle-switch.loading {
    pointer-events: none;  /* 加载中禁止点击 */
  }

  .toggle-switch.loading .toggle-thumb {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* spinner 颜色跟随开关状态 */
  .toggle-switch.loading.on .spinner-svg {
    color: var(--primary-color, #03a9f4);
  }

  .toggle-switch.loading.off .spinner-svg {
    color: var(--disabled-color, #bdbdbd);
  }

  .spinner-svg {
    width: 8px;
    height: 8px;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* 统计行 */
  .summary-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    padding: 4px 4px;
    border: 1px solid var(--divider-color);
    border-radius: 6px;
    background: var(--card-background-color);
  }

  .summary-item {
    display: flex;
    flex-direction: column;
    gap: 1px;
    text-align: center;
  }

  .summary-item:not(:last-child) {
    border-right: 1px solid var(--divider-color);
  }

  .summary-label {
    font-size: 11px;
    color: var(--secondary-text-color);
  }

  .summary-value {
    font-size: 12px;
    font-weight: bold;
    color: var(--primary-text-color);
  }

  /* 空状态 */
  .empty-state {
    text-align: center;
    padding: 16px 0;
    color: var(--secondary-text-color);
  }

  .empty-state ha-icon {
    --mdc-icon-size: 32px;
    margin-bottom: 8px;
    opacity: 0.5;
  }

  .empty-state p {
    margin: 0;
    font-size: 12px;
  }

  /* 错误状态 */
  .error-state {
    text-align: center;
    padding: 16px 0;
    color: var(--error-color, #f44336);
  }

  .error-state ha-icon {
    --mdc-icon-size: 32px;
    margin-bottom: 8px;
  }

  .error-state p {
    margin: 0;
    font-size: 12px;
  }
`,Pe=o`
  .edit-time, .edit-name, .edit-amount {
    font-size: 14px;
    font-family: inherit;
    padding: 0px 0px;
    border: 1px solid var(--primary-color, #03a9f4);
    border-radius: 4px;
    outline: none;
    background: white;
    color: #333;
  }
  
  .edit-time:focus, .edit-name:focus, .edit-amount:focus {
    border-color: var(--primary-color, #03a9f4);
    box-shadow: 0 0 0 1px var(--primary-color, #03a9f4);
  }
  
  .edit-time {
    width: 55px;
    min-width: 55px;
    max-width: 55px;
    padding: 0;
    text-align: left;
    cursor: pointer;
    position: relative;
  }
  
  .edit-time::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: pointer;
    opacity: 0;
  }
  
  .edit-time::-webkit-datetime-edit {
    padding: 0px 0px;
    display: flex;
    justify-content: center;
  }
  
  .edit-time::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
    display: flex;
    justify-content: center;
  }
  
  .edit-time::-webkit-datetime-edit-text {
    color: #333;
    padding: 0 1px;
  }
  
  .edit-time::-webkit-datetime-edit-hour-field,
  .edit-time::-webkit-datetime-edit-minute-field {
    color: #333;
    font-weight: bold;
    padding: 0 1px;
    background: transparent;
  }
  
  .edit-time::-webkit-datetime-edit-hour-field:focus,
  .edit-time::-webkit-datetime-edit-minute-field:focus {
    background: transparent;
    outline: none;
  }
  
  .edit-name {
    flex: 1 1 auto;
    min-width: 14px;
  }
  
  .edit-amount {
    width: 40px;
    min-width: 40px;
    max-width: 40px;
    padding: 0px 0px;
    text-align: center;
  }
`;async function Te(e,t,i="Button"){try{await e.callService("button","press",{entity_id:t})}catch(e){console.error(`[PetkitFeeder] ${i}失败:`,e)}}class ze{_editingItem=null;_originalItemData=null;get editingItem(){return this._editingItem}get originalItemData(){return this._originalItemData}get isEditing(){return null!==this._editingItem}startEdit(e,t,i,s,n,a,o,r){this._editingItem={itemId:e,field:t,time:i,name:s,amount:n},this._originalItemData={time:a,name:o,amount:r}}updateEditData(e,t,i){this._editingItem&&(void 0!==e&&(this._editingItem.time=e),void 0!==t&&(this._editingItem.name=t),void 0!==i&&(this._editingItem.amount=i))}cancelEdit(){this._editingItem=null,this._originalItemData=null}completeEdit(){this._editingItem=null,this._originalItemData=null}}function Oe(e,t){const i=new Map,s=new Map;e.filter(e=>"plan"===e.itemType).forEach(e=>{i.set(e.itemId,e)}),t.filter(e=>"plan"===e.itemType).forEach(e=>{s.set(e.itemId,e)});const n={added:[],modified:[],deleted:[]};return s.forEach((e,t)=>{const s=i.get(t);s?function(e,t){return e.time!==t.time||e.name!==t.name||e.plannedAmount!==t.plannedAmount||e.isEnabled!==t.isEnabled}(s,e)&&n.modified.push(e):n.added.push(e)}),i.forEach((e,t)=>{s.has(t)||n.deleted.push(t)}),0===n.added.length&&0===n.modified.length&&0===n.deleted.length?null:n}class Ue{_originData=null;_cacheData=null;get originData(){return this._originData}initOrigin(e){this._originData=this._deepClone(e),this._cacheData=this._deepClone(e)}getDayCache(e){return this._cacheData?.days.get(e)||null}rollback(){this._originData&&(this._cacheData=this._deepClone(this._originData))}commit(){this._cacheData&&(this._originData=this._deepClone(this._cacheData))}detectChanges(){if(!this._originData||!this._cacheData)return[];const e=[];for(let t=1;t<=7;t++){const i=this._originData.days.get(t),s=this._cacheData.days.get(t);if(!i||!s)continue;Oe(i.timeline,s.timeline)&&e.push({day:t,items:s.timeline.filter(e=>"plan"===e.itemType).map(e=>({time:e.time,amount:e.plannedAmount,name:e.name,enabled:e.isEnabled}))})}return e}_deepClone(e){const t=new Map;return e.days.forEach((e,i)=>{t.set(i,{...e,timeline:this._deepCloneTimeline(e.timeline),summary:{...e.summary}})}),{days:t,lastUpdated:e.lastUpdated}}_deepCloneTimeline(e){return e.map(e=>({...e}))}}let Me=class extends de{hass;_config;_weeklyCache=new Ue;_editState=new ze;_selectedDay=1;_isOnline=!0;_saveDebounceTimer=null;_isSaving=!1;_pendingFocus=null;_isInEditMode=!1;_togglingItemIds=new Set;_getEntityId(e){return this._config?function(e,t){const i=e.device_id;return i?`sensor.petkit_feeder_${i}_${t}`:e.entity||""}(this._config,e):""}static getStubConfig(){return{device_id:"",show_timeline:!0,show_summary:!0,show_actions:!0}}static getConfigElement(){return document.createElement("petkit-feeder-card-editor")}setConfig(e){if(!e.device_id&&!e.entity)throw new Error(Ee("error.device_or_entity_required"));this._config={...e,show_timeline:e.show_timeline??!0,show_summary:e.show_summary??!0,show_actions:e.show_actions??!0}}shouldUpdate(){return!0}updated(){if(this._pendingFocus){const{itemId:e,field:t}=this._pendingFocus,i=`edit-${t}-${e}`,s=this.shadowRoot?.getElementById(i);s&&(s.focus(),"name"===t?s.select():"time"===t&&s.showPicker?.()),this._isInEditMode=!1,this._pendingFocus=null}}render(){if(!this._config||!this.hass)return B`<div>${this._localize("common.loading")}</div>`;const e=this._config.entity||this._getEntityId("feeding_schedule"),t=this._config.history_entity||this._getEntityId("feeding_records"),i=this.hass.states[e],s=t?this.hass.states[t]:null;if(!i)return B`
        <ha-card>
          <div class="error-state">
            <ha-icon .icon=${"mdi:alert-circle"}></ha-icon>
            <p>${this._localize("error.entity_not_found",{entityId:e})}</p>
          </div>
        </ha-card>
      `;const n=(a=this._config).connectivity_entity||`binary_sensor.petkit_feeder_${a.device_id}_online`;var a;const o=this.hass.states[n],r="on"===o?.state;this._isOnline=r;const l=Se(this.hass),d=Ce(i.attributes,s?.attributes||{},r,l);this._weeklyCache.originData||(this._weeklyCache.initOrigin(d),this._selectedDay=_e());const c=this._weeklyCache.getDayCache(this._selectedDay),h=c?.timeline||[],p=c?.summary||{planAmount:0,actualAmount:0,manualAmount:0,isOnline:!1,totalCount:0,completedCount:0,pendingCount:0};let u=this._config.name;if(!u){const e=this._config.device_name_entity||this._getEntityId("device_name"),t=this.hass.states[e];u=t?.state}return u||(u=i.attributes.friendly_name||this._localize("default.device_name")),B`
      <ha-card @focusout=${this._handleCardFocusOut}>
        <div class="header">
          <span class="header-title">${u}</span>
          <span class="header-date">${function(e,t){const i=new Date,s=i.getDay(),n=e-(0===s?7:s),a=new Date(i);a.setDate(i.getDate()+n);const o=a.getMonth()+1,r=a.getDate(),l=t(`weekday.${e}`);return t("date.format",{month:o,day:r,weekday:l})}(this._selectedDay,this._localize.bind(this))}</span>
          <div class="header-actions">
            <button
              class="icon-btn sync-btn ${r?"":"disabled"}"
              @click=${r?this._handleSync:void 0}
              title="${r?this._localize("button.sync"):this._localize("status.offline")}"
              ?disabled=${!r}
            >
              ${ve}
            </button>
            <button
              class="icon-btn refresh-btn"
              @click=${this._handleRefresh}
              title="${this._localize("button.refresh")}"
            >
              ${ge}
            </button>
            <button
              class="icon-btn feed-btn ${r?"":"disabled"}"
              @click=${r?this._handleManualFeed:void 0}
              title="${r?this._localize("button.manual_feed"):this._localize("status.offline")}"
              ?disabled=${!r}
            >
              ${fe}
            </button>
          </div>
        </div>

        ${this._renderWeekdayTabs()}
        ${this._config.show_timeline?this._renderTimeline(h,this._isOnline):""}
        ${this._config.show_timeline?this._renderAddPlanButton(this._isOnline):""}
        ${this._config.show_summary?this._renderSummary(p):""}
      </ha-card>
    `}_renderWeekdayTabs(){const e=_e();return B`
      <div class="weekday-tabs">
        ${[1,2,3,4,5,6,7].map(t=>B`
          <button 
            class="weekday-tab ${this._selectedDay===t?"active":""} ${t===e?"today":""}"
            @click=${()=>this._handleDaySwitch(t)}
          >
            ${this._localize(`weekday.${t}`)}
          </button>
        `)}
      </div>
    `}_handleDaySwitch(e){this._selectedDay!==e&&(this._selectedDay=e,this._cancelEdit(),this.requestUpdate())}_renderTimeline(e,t){return e.length?B`
      <div class="section">
        <div class="timeline-list">
          ${e.map(e=>this._renderTimelineItem(e,t))}
        </div>
      </div>
    `:B`
        <div class="section">
          <div class="empty-state">
            <ha-icon .icon=${"mdi:calendar-blank"}></ha-icon>
            <p>${this._localize("timeline.empty")}</p>
          </div>
        </div>
      `}_renderTimelineItem(e,t){const i=this._editState.editingItem,s=i?.itemId===e.itemId?i?.field:null,n=function(e,t){const i=_e();if(t<i)return!0;if(t!==i||!e.time)return!1;const s=new Date,n=60*s.getHours()+s.getMinutes(),[a,o]=e.time.split(":").map(Number);return 60*a+o<n}(e,this._selectedDay),a=t&&"plan"===e.itemType&&e.canDisable&&!n,o=t&&"plan"===e.itemType&&e.canDelete,r=t&&"plan"===e.itemType,l="time"===s&&i?B`
          <input
            id="edit-time-${e.itemId}"
            type="time"
            class="edit-time"
            .value=${i.time}
            @change=${e=>this._editState.updateEditData(e.target.value)}
            @keydown=${e=>{"Escape"===e.key&&this._cancelEdit()}}
          />
        `:B`<span class="time ${r?"editable":""}" @click=${r?()=>this._startEdit(e,"time"):void 0}>${e.time}</span>`,d="name"===s&&i?B`
          <input
            id="edit-name-${e.itemId}"
            type="text"
            class="edit-name"
            .value=${i.name}
            @change=${e=>this._editState.updateEditData(void 0,e.target.value)}
            @keydown=${e=>{"Escape"===e.key&&this._cancelEdit()}}
            placeholder="${this._localize("placeholder.name")}"
          />
        `:B`<span class="name ${r?"editable":""}" @click=${r?()=>this._startEdit(e,"name"):void 0}>${e.name}</span>`,c=void 0!==e.actualAmount?e.actualAmount:e.plannedAmount,h="amount"===s&&i?B`
          <input
            id="edit-amount-${e.itemId}"
            type="number"
            class="edit-amount"
            .value=${String(i.amount)}
            min="1" max="100"
            @change=${e=>this._editState.updateEditData(void 0,void 0,parseInt(e.target.value)||10)}
            @keydown=${e=>{"Escape"===e.key&&this._cancelEdit()}}
          />
        `:B`<span class="amount ${r?"editable":""}" @click=${r?()=>this._startEdit(e,"amount"):void 0}>${c}g</span>`;return B`
      <div class="timeline-item ${e.itemType} ${s?"editing":""} ${"deleted_plan"===e.itemType?"plan-deleted":""}">
        <div class="item-row">
          ${l}
          ${d}
          ${h}
          ${(e=>{const t=e?"rgb(74,222,119)":"rgb(156,163,175)";return W`
    <svg viewBox="4 4 92 92" class="status-icon ${e?"done":"pending"}">
      <circle cx="50" cy="50" r="40" fill="none" stroke="${t}" stroke-width="12"/>
      <line x1="45" y1="70" x2="70" y2="40" stroke="${t}" stroke-width="15" stroke-linecap="round"/>
      <line x1="28" y1="50" x2="45" y2="70" stroke="${t}" stroke-width="15" stroke-linecap="round"/>
    </svg>
  `})(e.isExecuted)}
          <div class="item-actions">
            ${this._config?.show_actions?B`
                  <div
                    class="toggle-switch ${e.isEnabled?"on":"off"} ${a?"":"disabled"} ${this._togglingItemIds.has(e.itemId)?"loading":""}"
                    @click=${a&&!this._togglingItemIds.has(e.itemId)?()=>this._handleToggle(e):void 0}
                    title="${function(e,t,i){return"deleted_plan"===e.itemType?i("status.deleted"):t?i("status.expired"):e.isExecuted?i("status.executed"):e.isEnabled?i("status.click_disable"):i("status.click_enable")}(e,n,this._localize.bind(this))}"
                  >
                    <div class="toggle-thumb">
                      ${this._togglingItemIds.has(e.itemId)?be:""}
                    </div>
                  </div>
                  <button
                    class="icon-delete-btn ${o?"":"disabled"}"
                    @click=${o?()=>this._handleDelete(e):void 0}
                    title="${"deleted_plan"===e.itemType?this._localize("status.deleted"):this._localize("button.delete_plan")}"
                    ?disabled=${!o}
                  >
                    ${ye}
                  </button>
                `:""}
          </div>
        </div>
      </div>
    `}_renderAddPlanButton(e){return B`
      <div class="timeline-list-footer">
        <button
          class="add-plan-btn ${e?"":"disabled"}"
          @click=${e?this._handleAddPlan:void 0}
          title="${e?this._localize("button.add_plan"):this._localize("status.offline")}"
          ?disabled=${!e}
        >
          <span class="add-plus"></span>
        </button>
      </div>
    `}_renderSummary(e){return B`
      <div class="summary-row">
        <span class="summary-item">
          <span class="summary-label">${this._localize("summary.online_status")}</span>
          <span class="summary-value ${e.isOnline?"":"offline"}">${e.isOnline?this._localize("status.online"):this._localize("status.offline")}</span>
        </span>
        <span class="summary-item">
          <span class="summary-label">${this._localize("summary.planned_feed")}</span>
          <span class="summary-value">${e.planAmount}g</span>
        </span>
        <span class="summary-item">
          <span class="summary-label">${this._localize("summary.actual_feed")}</span>
          <span class="summary-value">${e.actualAmount}g</span>
        </span>
        <span class="summary-item">
          <span class="summary-label">${this._localize("summary.manual_feed")}</span>
          <span class="summary-value">${e.manualAmount}g</span>
        </span>
      </div>
    `}async _handleManualFeed(){if(!this.hass)return;if(!this._isOnline)return;const e=function(e){for(const t in e.states)if(t.startsWith("button.")&&t.includes("petkit")){const i=e.states[t],s=i?.attributes?.friendly_name||"";if((s.includes("手动")||s.includes("出粮")||s.toLowerCase().includes("feed"))&&!s.includes("刷新")&&!s.toLowerCase().includes("refresh"))return t}return null}(this.hass);e&&await Te(this.hass,e,"手动喂食")}async _handleRefresh(){if(!this.hass||!this._config)return;const e=function(e,t){if(t)return t;for(const t in e.states)if(t.startsWith("button.")&&t.includes("petkit")){const i=e.states[t],s=i?.attributes?.friendly_name||"";if(s.includes("刷新")||s.toLowerCase().includes("refresh"))return t}return null}(this.hass,this._config.refresh_entity);e&&await Te(this.hass,e,"刷新")}async _handleSync(){if(!this.hass||!this._config)return;if(!this._isOnline)return;if(!window.confirm(this._localize("confirm.sync_plan",{day:this._localize(`weekday.${this._selectedDay}`)})))return;const e=this._weeklyCache.getDayCache(this._selectedDay);if(!e)return;const t=e.timeline.filter(e=>"plan"===e.itemType).map(e=>({time:e.time,amount:e.plannedAmount,name:e.name,enabled:e.isEnabled}));if(0===t.length)return void window.alert(this._localize("error.no_plan_to_sync"));for(let t=1;t<=7;t++){const i=this._weeklyCache.getDayCache(t);i&&(i.timeline=e.timeline.filter(e=>"plan"===e.itemType).map(e=>({...e,itemId:e.itemId.startsWith("new_")?`new_${t}_${Date.now()}_${e.time.replace(":","")}`:`s${t}${e.itemId.replace(/^s\d+/,"")}`})))}this.requestUpdate();const i=[];for(let e=1;e<=7;e++)i.push({day:e,suspended:0,items:t});try{await this.hass.callService("petkit_feeder","save_feed",{weekly_plan:i}),this._weeklyCache.commit(),console.log("[PetkitFeeder] 同步计划成功")}catch(e){console.error("[PetkitFeeder] 同步计划失败:",e),this._weeklyCache.rollback(),this.requestUpdate(),window.alert(this._localize("error.sync_failed"))}}async _handleToggle(e){if(!this.hass||!this._config)return;if(!this._isOnline)return;if(e.isExecuted)return;if(this._togglingItemIds.has(e.itemId))return;this._togglingItemIds.add(e.itemId),this.requestUpdate();const t=await async function(e,t,i,s){if(i.isExecuted)return{success:!1,error:"Item already executed"};const n=!i.isEnabled,a=s.getDayCache(t);if(a){const e=a.timeline.find(e=>e.itemId===i.itemId);e&&(e.isEnabled=n,e.status=n?0:1)}try{return await e.callService("petkit_feeder","toggle_feeding_item",{day:t,item_id:i.itemId,enabled:n}),console.log("[PetkitFeeder] 切换状态成功"),s.commit(),{success:!0}}catch(e){return console.error("[PetkitFeeder] 切换状态失败:",e),s.rollback(),{success:!1,error:e}}}(this.hass,this._selectedDay,e,this._weeklyCache);this._togglingItemIds.delete(e.itemId),t.success||console.error("[PetkitFeeder] 切换失败:",t.error),this.requestUpdate()}_handleDelete(e){if(!this.hass||!this._config)return;if(!this._isOnline)return;const t=this._weeklyCache.getDayCache(this._selectedDay);t&&(t.timeline=t.timeline.filter(t=>t.itemId!==e.itemId)),this.requestUpdate(),this._isSaving?console.log("[PetkitFeeder] 正在保存中，删除操作将在下次保存时生效"):(this._clearSaveTimer(),console.log("[PetkitFeeder] 删除计划，启动防抖保存 (5000ms)"),this._saveDebounceTimer=window.setTimeout(()=>{this._saveDebounceTimer=null,this._triggerSave()},5e3))}_handleAddPlan(){if(!this.hass||!this._config)return;if(!this._isOnline)return;this._clearSaveTimer(),this._isInEditMode=!0;const e=`new_${Date.now()}`,t=this._localize("default.plan_name"),i={id:e,itemId:e,time:"08:00",name:t,itemType:"plan",plannedAmount:10,isExecuted:!1,isEnabled:!0,canDisable:!0,canDelete:!0},s=this._weeklyCache.getDayCache(this._selectedDay);s&&(s.timeline.push(i),s.timeline.sort((e,t)=>e.time.localeCompare(t.time))),this._editState.startEdit(e,"name","08:00",t,10,"08:00",t,10),this._pendingFocus={itemId:e,field:"name"},this.requestUpdate()}_startEdit(e,t){this._isOnline&&(this._clearSaveTimer(),this._editState.isEditing&&this._editState.editingItem?.itemId!==e.itemId&&this._finishEditSilent(),this._editState.startEdit(e.itemId,t,e.time,e.name,e.plannedAmount,e.time,e.name,e.plannedAmount),this._isInEditMode=!0,this._pendingFocus={itemId:e.itemId,field:t},this.requestUpdate())}_finishEditSilent(){const e=this._editState.editingItem,t=this._editState.originalItemData;if(!e||!t)return;const{itemId:i,time:s,name:n,amount:a}=e;if(s!==t.time||n!==t.name||a!==t.amount){const e=this._weeklyCache.getDayCache(this._selectedDay);if(e){const t=e.timeline.find(e=>e.itemId===i);t&&(t.time=s,t.name=n,t.plannedAmount=a,e.timeline.sort((e,t)=>e.time.localeCompare(t.time)))}}this._editState.completeEdit()}_cancelEdit(){this._editState.cancelEdit(),this._clearSaveTimer(),this.requestUpdate()}_clearSaveTimer(){this._saveDebounceTimer&&(clearTimeout(this._saveDebounceTimer),this._saveDebounceTimer=null)}_handleCardFocusOut(e){if(this._isInEditMode||this._togglingItemIds.size>0)return;const t=document.activeElement;if((i=t)&&(i.classList.contains("edit-time")||i.classList.contains("edit-name")||i.classList.contains("edit-amount")))return void(this._editState.isEditing&&(this._finishEditSilent(),this.requestUpdate()));var i;const s=e.relatedTarget;s&&this.contains(s)?this._editState.isEditing&&(this._finishEditSilent(),this.requestUpdate()):(this._editState.isEditing&&(this._finishEditSilent(),this.requestUpdate()),this._isSaving?console.log("[PetkitFeeder] 正在保存中，跳过新的保存请求"):(this._clearSaveTimer(),console.log("[PetkitFeeder] 焦点离开卡片，启动防抖保存 (1000ms)"),this._saveDebounceTimer=window.setTimeout(()=>{this._saveDebounceTimer=null,this._triggerSave()},1e3)))}async _triggerSave(){if(!this.hass||!this._config)return;if(this._isSaving)return void console.log("[PetkitFeeder] 正在保存中，跳过重复调用");const e=this._weeklyCache.detectChanges();if(0===e.length)return;this._isSaving=!0,console.log("[PetkitFeeder] 检测到变更，准备保存:",e);const t=await async function(e,t,i){if(0===t.length)return console.log("[PetkitFeeder] 无变更，跳过保存"),{success:!0};console.log("[PetkitFeeder] 批量保存计划:",t);try{return await e.callService("petkit_feeder","save_feed",{weekly_plan:t.map(e=>({day:e.day,suspended:0,items:e.items}))}),console.log("[PetkitFeeder] 批量保存计划成功"),i.commit(),{success:!0}}catch(e){return console.error("[PetkitFeeder] 批量保存计划失败:",e),i.rollback(),{success:!1,error:e}}}(this.hass,e,this._weeklyCache);this._isSaving=!1,t.success?console.log("[PetkitFeeder] 保存成功"):console.error("[PetkitFeeder] 保存失败:",t.error),this.requestUpdate()}static styles=(()=>o`
  ${De}
  ${Ie}
  ${Pe}
`)();_localize(e,t){return Ee(e,Se(this.hass),t)}};e([me({attribute:!1})],Me.prototype,"hass",void 0),e([me({attribute:!1})],Me.prototype,"_config",void 0),Me=e([he("petkit-feeder-card")],Me),customElements.get("petkit-feeder-card")||customElements.define("petkit-feeder-card",Me);let Fe=class extends de{hass;config;_schema=[{name:"device_id",required:!1,selector:{text:{}},label:"editor.device_id"},{name:"entity",required:!1,selector:{entity:{domain:["sensor"]}},label:"editor.entity"},{name:"history_entity",required:!1,selector:{entity:{domain:["sensor"]}},label:"editor.history_entity"},{name:"name",selector:{text:{}},label:"editor.card_title"},{type:"grid",name:"",title:"editor.display_control",schema:[{name:"show_timeline",selector:{boolean:{}},label:"editor.show_timeline"},{name:"show_summary",selector:{boolean:{}},label:"editor.show_summary"},{name:"show_actions",selector:{boolean:{}},label:"editor.show_actions"}]}];render(){return this.hass&&this.config?B`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:B`<div>${this._localize("common.loading_editor")}</div>`}_computeLabel=e=>this._localize(e.name||e.label||e.title);_valueChanged(e){const t=e.detail.value;this.config=t;const i=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(i)}_localize(e){return Ee(e,Se(this.hass||{}))}static get styles(){return o`
      :host {
        display: block;
      }
      ha-form {
        margin-top: 16px;
      }
    `}};e([me()],Fe.prototype,"hass",void 0),e([me()],Fe.prototype,"config",void 0),Fe=e([he("petkit-feeder-card-editor")],Fe),customElements.get("petkit-feeder-card-editor")||customElements.define("petkit-feeder-card-editor",Fe),window.customCards=window.customCards||[],window.customCards.push({type:"petkit-feeder-card",name:"Petkit Feeder Card",description:"Display Petkit feeder status, feeding schedule and history",preview:!0,documentationURL:"https://github.com/ningjx/petkit-feeder-card"});export{Me as PetkitFeederCard,Fe as PetkitFeederCardEditor};
