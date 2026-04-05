function t(t,e,i,s){var n,a=arguments.length,o=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(o=(a<3?n(o):a>3?n(e,i,o):n(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let a=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new a(i,t,s)},r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,u=globalThis,g=u.trustedTypes,_=g?g.emptyScript:"",f=u.reactiveElementPolyfillSupport,b=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!l(t,e),$={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&d(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const a=s?.call(this);n?.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s;const a=n.fromAttribute(e,t.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(void 0!==t){const a=this.constructor;if(!1===s&&(n=this[t]),i??=a.getPropertyOptions(t),!((i.hasChanged??v)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==n||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[b("elementProperties")]=new Map,x[b("finalized")]=new Map,f?.({ReactiveElement:x}),(u.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,A=t=>t,k=w.trustedTypes,E=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,D="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+S,I=`<${C}>`,T=document,P=()=>T.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,O="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,R=/>/g,H=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,j=/"/g,L=/^(?:script|style|textarea|title)$/i,q=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),B=q(1),W=q(2),V=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),J=new WeakMap,K=T.createTreeWalker(T,129);function Z(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,s=[];let n,a=2===e?"<svg>":3===e?"<math>":"",o=z;for(let e=0;e<i;e++){const i=t[e];let r,l,d=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===z?"!--"===l[1]?o=N:void 0!==l[1]?o=R:void 0!==l[2]?(L.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=H):void 0!==l[3]&&(o=H):o===H?">"===l[0]?(o=n??z,d=-1):void 0===l[1]?d=-2:(d=o.lastIndex-l[2].length,r=l[1],o=void 0===l[3]?H:'"'===l[3]?j:F):o===j||o===F?o=H:o===N||o===R?o=z:(o=H,n=void 0);const h=o===H&&t[e+1].startsWith("/>")?" ":"";a+=o===z?i+I:d>=0?(s.push(r),i.slice(0,d)+D+i.slice(d)+S+h):i+S+(-2===d?e:h)}return[Z(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class G{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,a=0;const o=t.length-1,r=this.parts,[l,d]=Y(t,e);if(this.el=G.createElement(l,i),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=K.nextNode())&&r.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(D)){const e=d[a++],i=s.getAttribute(t).split(S),o=/([.?@])?(.*)/.exec(e);r.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?st:"?"===o[1]?nt:"@"===o[1]?at:it}),s.removeAttribute(t)}else t.startsWith(S)&&(r.push({type:6,index:n}),s.removeAttribute(t));if(L.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],P()),K.nextNode(),r.push({type:2,index:++n});s.append(t[e],P())}}}else if(8===s.nodeType)if(s.data===C)r.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)r.push({type:7,index:n}),t+=S.length-1}n++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){if(e===V)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const a=U(e)?void 0:e._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=Q(t,n._$AS(t,e.values),n,s)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);K.currentNode=s;let n=K.nextNode(),a=0,o=0,r=i[0];for(;void 0!==r;){if(a===r.index){let e;2===r.type?e=new et(n,n.nextSibling,this,t):1===r.type?e=new r.ctor(n,r.name,r.strings,this,t):6===r.type&&(e=new ot(n,this,t)),this._$AV.push(e),r=i[++o]}a!==r?.index&&(n=K.nextNode(),a++)}return K.currentNode=T,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),U(t)?t===X||null==t||""===t?(this._$AH!==X&&this._$AR(),this._$AH=X):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==X&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new tt(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new G(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new et(this.O(P()),this.O(P()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=X,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=X}_$AI(t,e=this,i,s){const n=this.strings;let a=!1;if(void 0===n)t=Q(this,t,e,0),a=!U(t)||t!==this._$AH&&t!==V,a&&(this._$AH=t);else{const s=t;let o,r;for(t=n[0],o=0;o<n.length-1;o++)r=Q(this,s[i+o],e,o),r===V&&(r=this._$AH[o]),a||=!U(r)||r!==this._$AH[o],r===X?t=X:t!==X&&(t+=(r??"")+n[o+1]),this._$AH[o]=r}a&&!s&&this.j(t)}j(t){t===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===X?void 0:t}}class nt extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==X)}}class at extends it{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??X)===V)return;const i=this._$AH,s=t===X&&i!==X||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==X&&(i===X||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const rt=w.litHtmlPolyfillSupport;rt?.(G,et),(w.litHtmlVersions??=[]).push("3.3.2");const lt=globalThis;class dt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new et(e.insertBefore(P(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}dt._$litElement$=!0,dt.finalized=!0,lt.litElementHydrateSupport?.({LitElement:dt});const ct=lt.litElementPolyfillSupport;ct?.({LitElement:dt}),(lt.litElementVersions??=[]).push("4.2.2");const ht={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v},pt=(t=ht,e,i)=>{const{kind:s,metadata:n}=i;let a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function mt(t){return(e,i)=>"object"==typeof i?pt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}const ut={1:"周一",2:"周二",3:"周三",4:"周四",5:"周五",6:"周六",7:"周日"};function gt(){const t=(new Date).getDay();return 0===t?7:t}function _t(t,e){return(((t.records||{})[e]||{}).items||[]).map(t=>{const i=t.state||{};return{id:t.id,date:e,time:t.time||"",name:t.name||"",amount:t.amount||0,real_amount:i.real_amount||t.amount||0,status:t.status||0,is_executed:!1!==t.is_executed,is_completed:null!==i.completed_at&&void 0!==i.completed_at,completed_at:i.completed_at,src:t.src}})}function ft(t,e,i){const s=t.map((t,e)=>{const i=t.time.split(":"),s=3600*parseInt(i[0])+60*parseInt(i[1]);return{id:`plan_${t.itemId||t.time}_${e}`,itemId:t.itemId||`s${s}`,time:t.time,timeSeconds:s,name:t.name,itemType:"plan",plannedAmount:t.amount,isExecuted:!1,isEnabled:t.enabled,canDisable:!0,canDelete:!0}}),n=e.map((t,e)=>{let i;if(1===t.src){const e=t.time.split(":"),n=3600*parseInt(e[0])+60*parseInt(e[1]);i=s.find(e=>{const i=Math.abs((e.timeSeconds||0)-n);return e.name===t.name&&i<=120})}if(i)return i.isExecuted=t.is_completed,i.actualAmount=t.real_amount,i.completedAt=t.completed_at,i.isEnabled=0===t.status,i.status=t.status,null;const n=t.time.split(":"),a=3600*parseInt(n[0])+60*parseInt(n[1]);return 1===t.src?{id:`deleted_plan_${t.id||t.time}_${e}`,itemId:t.id||`s${a}`,time:t.time,timeSeconds:a,name:t.name||"已删除计划",itemType:"deleted_plan",plannedAmount:t.amount,actualAmount:t.real_amount,isExecuted:t.is_completed,isEnabled:!1,completedAt:t.completed_at,canDisable:!1,canDelete:!1}:{id:`manual_${t.id||t.time}_${e}`,itemId:t.id||`s${a}`,time:t.time,timeSeconds:a,name:t.name||"手动喂食",itemType:"manual",plannedAmount:0,actualAmount:t.real_amount,isExecuted:t.is_completed,isEnabled:!0,completedAt:t.completed_at,canDisable:!1,canDelete:!1}}),a=n.filter(t=>null!==t);return[...s,...a].sort((t,e)=>t.time.localeCompare(e.time))}function bt(t,e,i){const s=(t.records||{})[e]||{},n=s.plan_amount||0,a=s.real_amount||0,o=s.add_amount||0,r=s.times||i.length,l=i.filter(t=>t.isExecuted).length,d=r-l,c=i.length>0,h=i.filter(t=>t.isExecuted&&t.completedAt),p=h.length>0?h.reduce((t,e)=>e.completedAt>t.completedAt?e:t):void 0;return{planAmount:n,actualAmount:a,manualAmount:o,isOnline:c,lastFeedingTime:p?.completedAt,lastFeedingAmount:p?.actualAmount,totalCount:r,completedCount:l,pendingCount:d}}function yt(t,e){const i=function(t){const e=new Map,i=t.schedule||{};for(let t=1;t<=7;t++){const s=ut[t],n=i[s]||{},a=n.items||[],o=n.suspended??0,r=a.map((e,i)=>({id:`${t}_${i}`,itemId:e.id,name:e.name||`${s}喂食`,time:e.time||"",amount:e.amount||0,is_enabled:1!==o,is_completed:!1,enabled:1!==o}));e.set(t,{suspended:o,items:r})}return e}(t),s=function(){const t=new Date,e=t.getDay(),i=0===e?-6:1-e,s=[];for(let e=0;e<7;e++){const n=new Date(t);n.setDate(t.getDate()+i+e);const a=n.getFullYear(),o=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");s.push(`${a}-${o}-${r}`)}return s}(),n=new Map;for(let t=1;t<=7;t++){const a=i.get(t)||{suspended:0,items:[]},o=s[t-1],r=_t(e,o),l=ft(a.items,r),d=bt(e,o,l);n.set(t,{day:t,weekdayName:ut[t],suspended:a.suspended,timeline:l,summary:d})}return{days:n,lastUpdated:Date.now()}}const vt=o`
  :host {
    display: block;
  }
  
  ha-card {
    padding: 10px;
  }
  
  /* 区块 */
  .section {
    margin-bottom: 8px;
  }

  /* 周天切换栏 */
  .weekday-tabs {
    display: flex;
    gap: 4px;
    padding: 3px 0;
    margin-bottom: 3px;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
  }

  .weekday-tab {
    flex: 1;
    height: 30px;
    padding: 0 4px;
    border: 2px solid transparent;
    border-radius: 4px;
    background: transparent;
    color: var(--secondary-text-color, #757575);
    font-size: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
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

  /* 今天项：绘制空心框（当选中项不是今天时） */
  .weekday-tab.today:not(.active) {
    border-color: var(--primary-color, #03a9f4);
  }
`,$t=o`
  /* 头部 */
  .header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 3px;
    padding-bottom: 6px;
    border-bottom: 1px solid var(--divider-color);
    position: relative;
  }
  
  .header-title {
    font-size: 14px;
    font-weight: bold;
    z-index: 1;
  }
  
  .header-date {
    font-size: 12px;
    font-weight: bold;
    color: var(--secondary-text-color);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .header-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-left: auto;
    z-index: 1;
  }
`,xt=o`
  /* 统一的图标按钮样式 */
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
    outline: 2px solid var(--primary-color, #03a9f4);
    outline-offset: 2px;
  }
  
  .btn-svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* 刷新按钮 - 旋转动画 */
  .refresh-btn {
    color: var(--primary-text-color, #212121);
  }
  
  .refresh-btn:hover::before {
    opacity: 0;
  }
  
  .refresh-btn:hover .btn-svg {
    transform: rotate(180deg);
  }
  
  /* 手动喂食按钮 - 主要操作，突出显示 */
  .feed-btn {
    width: 36px;
    height: 36px;
    background: var(--primary-color, #03a9f4);
    color: white;
    box-shadow: 0 0 0 1px rgba(3, 169, 244, 0.1), 0 0 8px 2px rgba(3, 169, 244, 0.3);
  }
  
  .feed-btn::before {
    background: white;
  }
  
  .feed-btn:hover {
    box-shadow: 0 0 0 1px rgba(3, 169, 244, 0.15), 0 0 12px 3px rgba(3, 169, 244, 0.4);
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
  
  /* 编辑按钮 */
  .edit-btn {
    padding: 4px 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
  }
  
  .edit-btn.save {
    background-color: var(--success-color, #4caf50);
    color: white;
  }
  
  .edit-btn.cancel {
    background-color: #ccc;
    color: #333;
  }
  
  .edit-btn:hover {
    opacity: 0.8;
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
  
  /* 删除图标按钮 */
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
  
  /* 禁用状态的按钮 */
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
  
  /* 开关样式 */
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
  
  .action-btn {
    --mdc-typography-button-font-size: 11px;
    --mdc-button-horizontal-padding: 6px;
    --mdc-button-vertical-padding: 3px;
    min-width: auto;
  }
  
  .action-btn.danger {
    --mdc-theme-primary: var(--error-color, #f44336);
  }
`,wt=o`
  /* 时间线条目（紧凑布局） */
  .timeline-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  
  .timeline-item {
    border: 1px solid var(--divider-color);
    border-radius: 6px;
    padding: 8px 10px;
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
    font-size: 12px;
    color: var(--primary-color);
    flex-shrink: 0;
    width: 55px;
  }
  
  .name {
    font-size: 11px;
    color: var(--secondary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1 1 auto;
    min-width: 14px;
  }
  
  .amount {
    font-weight: bold;
    font-size: 11px;
    color: var(--primary-text-color);
    flex-shrink: 0;
    width: 40px;
    text-align: center;
  }
  
  .status-icon {
    flex-shrink: 0;
  }
  
  .item-actions {
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
  
  /* 编辑模式 */
  .timeline-item.editing {
    background-color: rgba(3, 169, 244, 0.1);
    border: 1px solid var(--primary-color, #03a9f4);
  }
  
  /* 状态图标 */
  .status-icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }
  
  .status-icon:hover {
    transform: scale(1.1);
  }
  
  .status-icon.done {
    /* 绿色对号 */
  }
  
  .status-icon.pending {
    /* 灰色对号，绿色圆环 */
  }
  
  .status-done {
    color: var(--success-color, #4caf50);
  }
  
  .status-pending {
    color: var(--warning-color, #ff9800);
  }
  
  .item-actions {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: flex-end;
  }
  
  /* 禁用状态的计划项 */
  .timeline-item.disabled {
    opacity: 0.5;
  }
  
  /* 已删除计划的记录项 */
  .timeline-item.plan-deleted {
    opacity: 0.4;
  }
  
  .timeline-item.plan-deleted .time,
  .timeline-item.plan-deleted .name,
  .timeline-item.plan-deleted .amount {
    color: var(--disabled-text-color, #9e9e9e);
  }
  
  /* 时间线列表底部（新增计划按钮） */
  .timeline-list-footer {
    margin-top: 6px;
    margin-bottom: 8px;
  }
`,At=o`
  .edit-time, .edit-name, .edit-amount {
    font-size: 11px;
    font-family: inherit;
    padding: 2px 3px;
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
    text-align: center;
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
    padding: 2px 4px;
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
    padding: 2px 3px;
    text-align: center;
  }
`,kt=o`
  /* 统计行 */
  .summary-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    padding: 6px 8px;
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
    font-size: 9px;
    color: var(--secondary-text-color);
  }
  
  .summary-value {
    font-size: 12px;
    font-weight: bold;
    color: var(--primary-text-color);
  }
`,Et=o`
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
`;function Dt(t,e){const i=new Map,s=new Map;t.filter(t=>"plan"===t.itemType).forEach(t=>{i.set(t.itemId,t)}),e.filter(t=>"plan"===t.itemType).forEach(t=>{s.set(t.itemId,t)});const n={added:[],modified:[],deleted:[]};return s.forEach((t,e)=>{const s=i.get(e);s?function(t,e){return t.time!==e.time||t.name!==e.name||t.plannedAmount!==e.plannedAmount||t.isEnabled!==e.isEnabled}(s,t)&&n.modified.push(t):n.added.push(t)}),i.forEach((t,e)=>{s.has(e)||n.deleted.push(e)}),0===n.added.length&&0===n.modified.length&&0===n.deleted.length?null:n}class St{_originData=null;_cacheData=null;get originData(){return this._originData}get cacheData(){return this._cacheData}initOrigin(t){this._originData=this._deepClone(t),this._cacheData=this._deepClone(t)}cloneToCache(){this._originData&&(this._cacheData=this._deepClone(this._originData))}updateDayTimeline(t,e){if(!this._cacheData)return;const i=this._cacheData.days.get(t);i&&(i.timeline=this._deepCloneTimeline(e))}getDayCache(t){return this._cacheData?.days.get(t)||null}getDayOrigin(t){return this._originData?.days.get(t)||null}rollback(){this._originData&&(this._cacheData=this._deepClone(this._originData))}commit(){this._cacheData&&(this._originData=this._deepClone(this._cacheData))}detectChanges(){if(!this._originData||!this._cacheData)return[];const t=[];for(let e=1;e<=7;e++){const i=this._originData.days.get(e),s=this._cacheData.days.get(e);if(!i||!s)continue;Dt(i.timeline,s.timeline)&&t.push({day:e,items:s.timeline.filter(t=>"plan"===t.itemType).map(t=>({time:t.time,amount:t.plannedAmount,name:t.name,enabled:t.isEnabled}))})}return t}hasChanges(){return this.detectChanges().length>0}clear(){this._originData=null,this._cacheData=null}_deepClone(t){const e=new Map;return t.days.forEach((t,i)=>{e.set(i,{...t,timeline:this._deepCloneTimeline(t.timeline),summary:{...t.summary}})}),{days:e,lastUpdated:t.lastUpdated}}_deepCloneTimeline(t){return t.map(t=>({...t}))}}let Ct=class extends dt{hass;_config;_weeklyCache=new St;_selectedDay=1;_editingItem=null;_originalItemData=null;_saveDebounceTimer=null;_isSaving=!1;_pendingFocus=null;_isAddingNewPlan=!1;_isTogglingItem=!1;_getEntityId(t){return this._config?function(t,e){const i=t.device_id;return i?`sensor.petkit_feeder_${i}_${e}`:t.entity||""}(this._config,t):""}static getStubConfig(){return{device_id:"",show_timeline:!0,show_summary:!0,show_actions:!0}}static getConfigElement(){return document.createElement("petkit-feeder-card-editor")}setConfig(t){if(!t.device_id&&!t.entity)throw new Error("需要定义 device_id 或 entity");this._config={...t,show_timeline:t.show_timeline??!0,show_summary:t.show_summary??!0,show_actions:t.show_actions??!0}}shouldUpdate(){return!0}updated(){if(this._pendingFocus){const{itemId:t,field:e}=this._pendingFocus,i=`edit-${e}-${t}`,s=this.shadowRoot?.getElementById(i);s&&(s.focus(),"name"===e?s.select():"time"===e&&s.showPicker?.()),this._isAddingNewPlan=!1,this._pendingFocus=null}}render(){if(!this._config||!this.hass)return B`<div>加载中...</div>`;const t=this._config.entity||this._getEntityId("feeding_schedule"),e=this._config.history_entity||this._getEntityId("feeding_records"),i=this.hass.states[t],s=e?this.hass.states[e]:null;if(!i)return B`
        <ha-card>
          <div class="error-state">
            <ha-icon .icon=${"mdi:alert-circle"}></ha-icon>
            <p>实体不存在：${t}</p>
          </div>
        </ha-card>
      `;const n=yt(i.attributes,s?.attributes||{});this._weeklyCache.originData||(this._weeklyCache.initOrigin(n),this._selectedDay=gt());const a=this._weeklyCache.getDayCache(this._selectedDay),o=a?.timeline||[],r=a?.summary||this._emptySummary();let l=this._config.name;if(!l){const t=this._config.device_name_entity||this._getEntityId("device_name"),e=this.hass.states[t];l=e?.state}return l||(l=i.attributes.friendly_name||"小佩喂食器"),B`
      <ha-card @focusout=${this._handleCardFocusOut}>
        <div class="header">
          <span class="header-title">${l}</span>
          <span class="header-date">${this._getDateDisplay()}</span>
          <div class="header-actions">
            <button 
              class="icon-btn refresh-btn" 
              @click=${this._handleRefresh}
              title="刷新数据"
            >
              <svg viewBox="0 0 1024 1024" class="btn-svg">
                <path d="M680.64 32.768a41.6 41.6 0 0 0-56.384-17.152c-10.88 5.824-16 15.808-20.864 27.072l-22.336 47.68A450.752 450.752 0 0 0 512 85.12C271.68 85.12 74.688 275.072 74.688 512c0 77.952 21.44 151.04 58.816 213.952a41.6 41.6 0 0 0 57.088 14.528 41.856 41.856 0 0 0 14.464-57.28A333.696 333.696 0 0 1 157.952 512c0-188.48 157.312-343.36 354.048-343.36 36.288 0 71.232 5.248 104.064 15.04l1.984 0.64c16.64 4.928 32.064 9.536 44.032 11.776 6.144 1.216 14.592 2.432 23.36 1.664a50.56 50.56 0 0 0 35.2-17.92 50.688 50.688 0 0 0 10.944-37.312 81.472 81.472 0 0 0-5.888-22.656 442.944 442.944 0 0 0-19.2-38.528l-0.96-1.92-24.96-46.72zM890.56 298.048a41.6 41.6 0 0 0-57.152-14.528 41.856 41.856 0 0 0-14.464 57.28c30.016 50.432 47.104 108.8 47.104 171.2 0 188.48-157.312 343.36-354.048 343.36a363.968 363.968 0 0 1-104.064-15.04l-2.176-0.64a504 504 0 0 0-43.84-11.776 85.952 85.952 0 0 0-23.36-1.664 50.56 50.56 0 0 0-35.2 17.92 50.752 50.752 0 0 0-10.944 37.312c0.832 8.96 3.648 16.96 5.888 22.656 4.416 10.88 11.584 24.32 19.136 38.464l25.92 48.64a41.6 41.6 0 0 0 56.384 17.152c10.88-5.824 16.384-17.152 20.864-27.072L448 934.4c20.928 2.944 42.24 4.48 64 4.48 240.32 0 437.312-189.888 437.312-426.88 0-77.952-21.44-151.04-58.752-213.952z"/>
              </svg>
            </button>
            <button 
              class="icon-btn feed-btn" 
              @click=${this._handleManualFeed}
              title="手动喂食"
            >
              <svg viewBox="150 150 724 724" class="btn-svg">
                <path d="M431.424 246.336c36.576-14.208 74.112-1.024 107.04 40.48l-0.32-0.384-2.016-2.464 7.264-3.84c42.432-21.44 83.84-22.304 112 16.128l0.864 1.248 3.552-1.92c34.24-17.376 75.168-2.144 116.832 50.304l5.024 6.496 3.2 4.416c4.16 6.848 6.4 14.4 6.4 22.272l-0.128-2.752 1.76 13.76 2.56 17.664c0.96 6.176 1.984 12.608 3.104 19.328 6.4 38.24 14.368 76.448 24 111.968 9.216 34.08 19.52 63.808 30.24 86.816l2.72 5.76 1.504 3.744c1.6 4.224 2.848 8.448 3.616 12.736 0.608 3.104 0.928 6.176 0.928 9.248 0 69.312-162.336 126.272-343.552 128.352l-10.272 0.064c-186.88 0-353.888-55.232-353.888-125.536 0-7.136 1.408-14.112 3.904-21.76 1.216-3.68 2.56-7.136 4.48-11.936l3.648-9.056c0.736-1.92 1.12-3.2 1.792-5.44a786.496 786.496 0 0 0 43.648-166.016c2.72-18.432 4.448-35.104 5.408-49.664l0.672-13.44 0.096-3.84 0.32-5.184a43.52 43.52 0 0 1 7.264-18.912l2.272-3.488c4.96-8.32 13.568-19.904 25.696-31.552 34.496-33.12 76.672-45.216 121.152-20.16l-2.464-1.312 2.336-3.328c14.4-20.224 31.04-36.48 50.688-45.92z m318.912 183.04c-49.728 25.664-140.224 39.104-245.952 39.104h-10.24c-99.072-0.864-183.712-13.696-232.416-37.44a821.888 821.888 0 0 1-48.48 196l-1.664 5.408a161.76 161.76 0 0 1-2.24 5.696l-2.656 6.528c-1.568 3.84-2.528 6.4-3.296 8.736a25.408 25.408 0 0 0-1.504 6.816c0 29.44 145.504 77.536 305.856 77.536 155.968 0 299.712-48.192 305.6-78.496l0.192-2.016-0.064-0.384a28.256 28.256 0 0 0-1.376-4.512l-1.088-2.688-1.184-2.432c-12.576-26.88-23.68-59.104-33.6-95.648a1218.656 1218.656 0 0 1-25.024-116.608z m-416.096 85.12a24 24 0 0 1 24.16 20.288l0.32 3.648c0.256 28.576-6.496 71.712-26.88 121.92a24 24 0 1 1-44.48-18.08c10.336-25.44 16.96-50.08 20.544-73.056 0.832-5.44 1.472-10.496 1.92-15.168l0.736-9.504 0.128-5.632a24 24 0 0 1 23.552-24.384z m166.624-197.824c-20.64-26.048-36.544-31.616-52.064-25.6-13.44 5.216-27.392 19.2-39.36 37.344-12.832 19.488-38.784 24.48-58.816 13.152l-4.544-2.336c-21.12-9.696-40.384-3.296-59.744 15.264l-3.072 3.072-1.696 1.856-1.152 1.344 2.464 1.312c39.488 19.744 76.992 28.608 109.056 26.048l3.264-0.32c32.96-4.16 56.896-23.328 63.008-53.024l0.544-3.072a56.32 56.32 0 0 0-12.8-9.824l-3.712-1.984c-2.88-1.6-5.952-3.328-9.152-5.248l2.112-2.048c20.864-20.032 43.584-25.536 62.4-14.272 6.368 3.68 12.032 8.768 17.376 15.68z m79.552-64.64c-6.336-3.68-10.56-9.408-12.992-17.28l-0.64-2.304 3.456 1.664c6.464 3.136 10.24 8.256 11.456 14.72l0.384 2.88-1.664 0.32z"/>
              </svg>
            </button>
          </div>
        </div>

        ${this._renderWeekdayTabs()}
        ${this._config.show_timeline?this._renderTimeline(o):""}
        ${this._config.show_timeline?this._renderAddPlanButton():""}
        ${this._config.show_summary?this._renderSummary(r):""}
      </ha-card>
    `}_emptySummary(){return{planAmount:0,actualAmount:0,manualAmount:0,isOnline:!1,totalCount:0,completedCount:0,pendingCount:0}}_renderWeekdayTabs(){const t=gt();return B`
      <div class="weekday-tabs">
        ${[1,2,3,4,5,6,7].map(e=>B`
          <button 
            class="weekday-tab ${this._selectedDay===e?"active":""} ${e===t?"today":""}"
            @click=${()=>this._handleDaySwitch(e)}
          >
            ${ut[e]}
          </button>
        `)}
      </div>
    `}_handleDaySwitch(t){this._selectedDay!==t&&(this._selectedDay=t,this._cancelEdit(),this.requestUpdate())}_getDateDisplay(){const t=new Date,e=t.getDay(),i=0===e?7:e,s=this._selectedDay-i,n=new Date(t);n.setDate(t.getDate()+s);return`${n.getMonth()+1}月${n.getDate()}日 ${ut[this._selectedDay]}`}_renderTimeline(t){return t.length?B`
      <div class="section">
        <div class="timeline-list">
          ${t.map(t=>this._renderTimelineItem(t))}
        </div>
      </div>
    `:B`
        <div class="section">
          <div class="empty-state">
            <ha-icon .icon=${"mdi:calendar-blank"}></ha-icon>
            <p>暂无喂食计划</p>
          </div>
        </div>
      `}_renderTimelineItem(t){const e=this._editingItem?.itemId===t.itemId?this._editingItem?.field:null,i=t.isExecuted?B`
          <svg viewBox="4 4 92 92" class="status-icon done">
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgb(74,222,119)" stroke-width="12"/>
            <line x1="45" y1="70" x2="70" y2="40" stroke="rgb(74,222,119)" stroke-width="15" stroke-linecap="round"/>
            <line x1="28" y1="50" x2="45" y2="70" stroke="rgb(74,222,119)" stroke-width="15" stroke-linecap="round"/>
          </svg>
        `:B`
          <svg viewBox="4 4 92 92" class="status-icon pending">
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgb(156,163,175)" stroke-width="12"/>
            <line x1="45" y1="70" x2="70" y2="40" stroke="rgb(156,163,175)" stroke-width="15" stroke-linecap="round"/>
            <line x1="28" y1="50" x2="45" y2="70" stroke="rgb(156,163,175)" stroke-width="15" stroke-linecap="round"/>
          </svg>
        `,s=W`
      <svg viewBox="4 4 92 92" class="delete-icon">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#ff0000" stroke-width="12"/>
        <line x1="35" y1="50" x2="65" y2="50" stroke="#ff0000" stroke-width="15" stroke-linecap="round"/>
      </svg>
    `,n=gt(),a=this._selectedDay===n;let o=!1;if(this._selectedDay<n)o=!0;else if(a&&t.time){const e=new Date,i=60*e.getHours()+e.getMinutes(),[s,n]=t.time.split(":").map(Number);o=60*s+n<i}const r="plan"===t.itemType&&t.canDisable&&!o,l="plan"===t.itemType&&t.canDelete,d="plan"===t.itemType,c="time"===e&&this._editingItem?B`
          <input 
            id="edit-time-${t.itemId}"
            type="time" 
            class="edit-time" 
            .value=${this._editingItem.time}
            @change=${t=>{this._editingItem&&(this._editingItem.time=t.target.value)}}
            @keydown=${t=>{"Escape"===t.key&&this._cancelEdit()}}
          />
        `:B`<span class="time ${d?"editable":""}" @click=${d?()=>this._startEdit(t,"time"):void 0}>${t.time}</span>`,h="name"===e&&this._editingItem?B`
          <input 
            id="edit-name-${t.itemId}"
            type="text" 
            class="edit-name" 
            .value=${this._editingItem.name}
            @change=${t=>{this._editingItem&&(this._editingItem.name=t.target.value)}}
            @keydown=${t=>{"Escape"===t.key&&this._cancelEdit()}}
            placeholder="名称"
          />
        `:B`<span class="name ${d?"editable":""}" @click=${d?()=>this._startEdit(t,"name"):void 0}>${t.name}</span>`,p=void 0!==t.actualAmount?t.actualAmount:t.plannedAmount,m="amount"===e&&this._editingItem?B`
          <input 
            id="edit-amount-${t.itemId}"
            type="number" 
            class="edit-amount" 
            .value=${String(this._editingItem.amount)}
            min="1" max="100"
            @change=${t=>{this._editingItem&&(this._editingItem.amount=parseInt(t.target.value)||10)}}
            @keydown=${t=>{"Escape"===t.key&&this._cancelEdit()}}
          />
        `:B`<span class="amount ${d?"editable":""}" @click=${d?()=>this._startEdit(t,"amount"):void 0}>${p}g</span>`;return B`
      <div class="timeline-item ${t.itemType} ${e?"editing":""} ${"deleted_plan"===t.itemType?"plan-deleted":""}">
        <div class="item-row">
          ${c}
          ${h}
          ${m}
          ${i}
          <div class="item-actions">
            ${this._config?.show_actions?B`
                  <div 
                    class="toggle-switch ${t.isEnabled?"on":"off"} ${r?"":"disabled"}"
                    @click=${r?()=>this._handleToggle(t):void 0}
                    title="${"deleted_plan"===t.itemType?"已删除计划":o?"已过期":t.isExecuted?"已执行":t.isEnabled?"点击禁用":"点击启用"}"
                  >
                    <div class="toggle-thumb"></div>
                  </div>
                  <button 
                    class="icon-delete-btn ${l?"":"disabled"}" 
                    @click=${l?()=>this._handleDelete(t):void 0}
                    title="${"deleted_plan"===t.itemType?"已删除计划":"删除计划"}"
                    ?disabled=${!l}
                  >
                    ${s}
                  </button>
                `:""}
          </div>
        </div>
      </div>
    `}_renderAddPlanButton(){return B`
      <div class="timeline-list-footer">
        <button class="add-plan-btn" @click=${this._handleAddPlan} title="新增计划">
          <span class="add-plus"></span>
        </button>
      </div>
    `}_renderSummary(t){return B`
      <div class="summary-row">
        <span class="summary-item">
          <span class="summary-label">在线状态</span>
          <span class="summary-value">${t.isOnline?"在线":"离线"}</span>
        </span>
        <span class="summary-item">
          <span class="summary-label">计划喂食</span>
          <span class="summary-value">${t.planAmount}g</span>
        </span>
        <span class="summary-item">
          <span class="summary-label">实际喂食</span>
          <span class="summary-value">${t.actualAmount}g</span>
        </span>
        <span class="summary-item">
          <span class="summary-label">手动喂食</span>
          <span class="summary-value">${t.manualAmount}g</span>
        </span>
      </div>
    `}async _handleManualFeed(){if(!this.hass||!this._config)return;const t=this._getManualFeedEntity();if(t)try{await this.hass.callService("button","press",{entity_id:t})}catch(t){console.error("[PetkitFeeder] 手动喂食失败:",t)}}_getManualFeedEntity(){if(this.hass)for(const t in this.hass.states)if(t.startsWith("button.")&&t.includes("petkit")){const e=this.hass.states[t],i=e?.attributes?.friendly_name||"";if((i.includes("手动")||i.includes("出粮")||i.toLowerCase().includes("feed"))&&!i.includes("刷新")&&!i.toLowerCase().includes("refresh"))return t}return null}async _handleRefresh(){if(!this.hass||!this._config)return;const t=this._getRefreshEntity();if(t)try{await this.hass.callService("button","press",{entity_id:t})}catch(t){console.error("[PetkitFeeder] 刷新失败:",t)}}_getRefreshEntity(){if(this._config?.refresh_entity)return this._config.refresh_entity;if(this.hass)for(const t in this.hass.states)if(t.startsWith("button.")&&t.includes("petkit")){const e=this.hass.states[t],i=e?.attributes?.friendly_name||"";if(i.includes("刷新")||i.toLowerCase().includes("refresh"))return t}return null}async _handleToggle(t){this.hass&&this._config&&(t.isExecuted||(this._isTogglingItem=!0,await async function(t,e,i,s,n,a){if(i.isExecuted)return;const o=!i.isEnabled,r=s.getDayCache(e);if(r){const t=r.timeline.find(t=>t.itemId===i.itemId);t&&(t.isEnabled=o,t.status=o?0:1)}n?.();try{await t.callService("petkit_feeder","toggle_feeding_item",{day:e,item_id:i.itemId,enabled:o}),console.log("[PetkitFeeder] 切换状态成功"),s.commit()}catch(t){console.error("[PetkitFeeder] 切换状态失败:",t),s.rollback(),a?.(t)}}(this.hass,this._selectedDay,t,this._weeklyCache,()=>{this._isTogglingItem=!1,this.requestUpdate()},t=>{this._isTogglingItem=!1,console.error("[PetkitFeeder] 切换失败:",t),this.requestUpdate()})))}_handleDelete(t){if(!this.hass||!this._config)return;const e=this._weeklyCache.getDayCache(this._selectedDay);e&&(e.timeline=e.timeline.filter(e=>e.itemId!==t.itemId)),this.requestUpdate(),this._isSaving?console.log("[PetkitFeeder] 正在保存中，删除操作将在下次保存时生效"):(this._saveDebounceTimer&&clearTimeout(this._saveDebounceTimer),console.log("[PetkitFeeder] 删除计划，启动防抖保存 (2000ms)"),this._saveDebounceTimer=window.setTimeout(()=>{this._saveDebounceTimer=null,this._triggerSave()},2e3))}_handleAddPlan(){if(!this.hass||!this._config)return;this._saveDebounceTimer&&(clearTimeout(this._saveDebounceTimer),this._saveDebounceTimer=null),this._isAddingNewPlan=!0;const t=`new_${Date.now()}`,e={id:t,itemId:t,time:"08:00",name:"早餐",timeSeconds:28800,itemType:"plan",plannedAmount:10,isExecuted:!1,isEnabled:!0,canDisable:!0,canDelete:!0},i=this._weeklyCache.getDayCache(this._selectedDay);i&&(i.timeline.push(e),i.timeline.sort((t,e)=>t.time.localeCompare(e.time))),this._editingItem={itemId:t,field:"name",time:"08:00",name:"早餐",amount:10},this._originalItemData={time:"08:00",name:"早餐",amount:10},this._pendingFocus={itemId:t,field:"name"},this.requestUpdate()}_startEdit(t,e){this._saveDebounceTimer&&(clearTimeout(this._saveDebounceTimer),this._saveDebounceTimer=null),this._editingItem&&this._editingItem.itemId!==t.itemId&&this._finishEditSilent(),this._editingItem={itemId:t.itemId,field:e,time:t.time,name:t.name,amount:t.plannedAmount},this._originalItemData={time:t.time,name:t.name,amount:t.plannedAmount},this._isAddingNewPlan=!0,this._pendingFocus={itemId:t.itemId,field:e},this.requestUpdate()}_finishEditSilent(){if(!this._editingItem||!this._originalItemData)return;const{itemId:t,time:e,name:i,amount:s}=this._editingItem;if(e!==this._originalItemData.time||i!==this._originalItemData.name||s!==this._originalItemData.amount){const n=this._weeklyCache.getDayCache(this._selectedDay);if(n){const a=n.timeline.find(e=>e.itemId===t);if(a){a.time=e,a.name=i,a.plannedAmount=s;const[t,o]=e.split(":").map(Number);a.timeSeconds=3600*t+60*o,n.timeline.sort((t,e)=>t.time.localeCompare(e.time))}}}this._editingItem=null,this._originalItemData=null}_cancelEdit(){this._editingItem=null,this._originalItemData=null,this._saveDebounceTimer&&(clearTimeout(this._saveDebounceTimer),this._saveDebounceTimer=null),this.requestUpdate()}_handleCardFocusOut(t){if(this._isAddingNewPlan||this._isTogglingItem)return;const e=document.activeElement;if(e&&(e.classList.contains("edit-time")||e.classList.contains("edit-name")||e.classList.contains("edit-amount")))return void(this._editingItem&&(this._finishEditSilent(),this.requestUpdate()));const i=t.relatedTarget;i&&this.contains(i)?this._editingItem&&(this._finishEditSilent(),this.requestUpdate()):(this._editingItem&&(this._finishEditSilent(),this.requestUpdate()),this._isSaving?console.log("[PetkitFeeder] 正在保存中，跳过新的保存请求"):(this._saveDebounceTimer&&clearTimeout(this._saveDebounceTimer),console.log("[PetkitFeeder] 焦点离开卡片，启动防抖保存 (1000ms)"),this._saveDebounceTimer=window.setTimeout(()=>{this._saveDebounceTimer=null,this._triggerSave()},1e3)))}async _triggerSave(){if(!this.hass||!this._config)return;if(this._isSaving)return void console.log("[PetkitFeeder] 正在保存中，跳过重复调用");const t=this._weeklyCache.detectChanges();if(0!==t.length){this._isSaving=!0,console.log("[PetkitFeeder] 检测到变更，准备保存:",t);try{await async function(t,e,i,s,n){if(0!==e.length){console.log("[PetkitFeeder] 批量保存计划:",e);try{await t.callService("petkit_feeder","save_feed",{weekly_plan:e.map(t=>({day:t.day,suspended:0,items:t.items}))}),console.log("[PetkitFeeder] 批量保存计划成功"),i.commit(),s?.()}catch(t){console.error("[PetkitFeeder] 批量保存计划失败:",t),i.rollback(),n?.(t)}}else console.log("[PetkitFeeder] 无变更，跳过保存")}(this.hass,t,this._weeklyCache,()=>{console.log("[PetkitFeeder] 保存成功"),this.requestUpdate()},t=>{console.error("[PetkitFeeder] 保存失败:",t),this.requestUpdate()})}finally{this._isSaving=!1}}}static styles=(()=>o`
  ${vt}
  ${$t}
  ${xt}
  ${wt}
  ${At}
  ${kt}
  ${Et}
`)()};t([mt({attribute:!1})],Ct.prototype,"hass",void 0),t([mt({attribute:!1})],Ct.prototype,"_config",void 0),Ct=t([(t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("petkit-feeder-card")],Ct),customElements.get("petkit-feeder-card")||customElements.define("petkit-feeder-card",Ct);export{Ct as PetkitFeederCard};
