(self.webpackChunkem_guide_app=self.webpackChunkem_guide_app||[]).push([[1380],{96643:h=>{function x(s,e,p,o){for(var d=s.length,u=p+(o?1:-1);o?u--:++u<d;)if(e(s[u],u,s))return u;return-1}h.exports=x},40564:(h,x,s)=>{var e=s(96643),p=s(98386),o=s(41814);function d(u,y,A){return y===y?o(u,y,A):e(u,p,A)}h.exports=d},93410:h=>{function x(s,e,p,o){for(var d=p-1,u=s.length;++d<u;)if(o(s[d],e))return d;return-1}h.exports=x},98386:h=>{function x(s){return s!==s}h.exports=x},74365:(h,x,s)=>{var e=s(41710),p=s(40564),o=s(93410),d=s(130),u=s(19183),y=Array.prototype,A=y.splice;function U(j,k,R,Z){var z=Z?o:p,$=-1,F=k.length,_=j;for(j===k&&(k=u(k)),R&&(_=e(j,d(R)));++$<F;)for(var b=0,D=k[$],G=R?R(D):D;(b=z(_,G,b,Z))>-1;)_!==j&&A.call(_,b,1),A.call(j,b,1);return j}h.exports=U},41814:h=>{function x(s,e,p){for(var o=p-1,d=s.length;++o<d;)if(s[o]===e)return o;return-1}h.exports=x},53648:(h,x,s)=>{var e=s(41710),p=s(52536),o=s(48949),d=s(28768);function u(y,A){var U=d(y)?e:o;return U(y,p(A,3))}h.exports=u},2433:(h,x,s)=>{var e=s(164),p=s(11638),o=e(p);h.exports=o},11638:(h,x,s)=>{var e=s(74365);function p(o,d){return o&&o.length&&d&&d.length?e(o,d):o}h.exports=p},84995:(h,x,s)=>{var e=s(20409);function p(o){var d=o==null?0:o.length;return d?e(o,1,d):[]}h.exports=p},1380:(h,x,s)=>{"use strict";s.d(x,{A:()=>Se});var e=s(56940),p=s(75937),o=s(65094),d=s(66041),u=s(74065),y=s(78054),A=s(11674),U=s(22512),j=s(95984),k=s(58400),R=s(54997),Z=s(72082),z=s(47479),$=s(53295),F=s(5483),_=s(30956),b=s(24926),D=s(48288),G=s(40829),ce=s(93484),oe=s(82018),pe=s(26420),ue=s(63355),ge=s(51812),H=s(28366),L=s(86067),a=s(14025),he=s(30454),Ee=s(39416),_e=s(53648),me=s(84995),V=s(19681),xe=s(37257),Ae=s(74419),re=s(2433);const[fe,Pe]=(0,pe.k)("ApiTokenPermissionsContext"),Te=({children:t,...i})=>(0,e.jsx)(fe,{...i,children:t}),Q=()=>Pe("useApiTokenPermissions"),le=t=>{const i={allActionsIds:[],permissions:[]};return i.permissions=Object.keys(t).map(n=>({apiId:n,label:n.split("::")[1],controllers:Object.keys(t[n].controllers).map(g=>({controller:g,actions:t[n].controllers[g].map(r=>{const E=`${n}.${g}.${r}`;return n.includes("api::")&&i.allActionsIds.push(E),{action:r,actionId:E}}).flat()})).flat()})),i},X=({errors:t,onChange:i,canEditInputs:n,isCreating:g,values:r,apiToken:E,onDispatch:c,setHasChangedPermissions:v})=>{const{formatMessage:C}=(0,D.Z)(),M=({target:{value:I}})=>{v(!1),I==="full-access"&&c({type:"SELECT_ALL_ACTIONS"}),I==="read-only"&&c({type:"ON_CHANGE_READ_ONLY"})},B=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return(0,e.jsx)(o.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(d.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(u.Z,{variant:"delta",as:"h2",children:C({id:"global.details",defaultMessage:"Details"})}),(0,e.jsxs)(y.r,{gap:5,children:[(0,e.jsx)(A.P,{col:6,xs:12,children:(0,e.jsx)(L.T,{errors:t,values:r,canEditInputs:n,onChange:i})},"name"),(0,e.jsx)(A.P,{col:6,xs:12,children:(0,e.jsx)(L.a,{errors:t,values:r,canEditInputs:n,onChange:i})},"description"),(0,e.jsx)(A.P,{col:6,xs:12,children:(0,e.jsx)(L.L,{isCreating:g,errors:t,values:r,onChange:i,token:E})},"lifespan"),(0,e.jsx)(A.P,{col:6,xs:12,children:(0,e.jsx)(L.b,{values:r,errors:t,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:I=>{M({target:{value:I}}),i({target:{name:"type",value:I}})},options:B,canEditInputs:n})},"type")]})]})})};X.propTypes={errors:a.shape({name:a.string,description:a.string,lifespan:a.string,type:a.string}),onChange:a.func.isRequired,canEditInputs:a.bool.isRequired,values:a.shape({name:a.string,description:a.string,lifespan:a.oneOfType([a.number,a.string]),type:a.string}).isRequired,isCreating:a.bool.isRequired,apiToken:a.shape({id:a.oneOfType([a.number,a.string]),type:a.string,lifespan:a.string,name:a.string,accessKey:a.string,permissions:a.array,description:a.string,createdAt:a.string}),onDispatch:a.func.isRequired,setHasChangedPermissions:a.func.isRequired},X.defaultProps={errors:{},apiToken:{}};const J=({apiTokenName:t})=>{const{formatMessage:i}=(0,D.Z)();return(0,_.useFocusWhenNavigate)(),(0,e.jsxs)(U.o,{"aria-busy":"true",children:[(0,e.jsx)(_.SettingsPageTitle,{name:"API Tokens"}),(0,e.jsx)(j.T,{primaryAction:(0,e.jsx)(k.z,{disabled:!0,startIcon:(0,e.jsx)(he.Z,{}),type:"button",size:"L",children:i({id:"global.save",defaultMessage:"Save"})}),title:t||i({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),(0,e.jsx)(R.D,{children:(0,e.jsx)(_.LoadingIndicatorPage,{})})]})};J.defaultProps={apiTokenName:null},J.propTypes={apiTokenName:a.string};const ye=t=>{switch(t){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Oe=(0,V.default)(o.x)`
  margin: -1px;
  border-radius: ${({theme:t})=>t.spaces[1]} 0 0 ${({theme:t})=>t.spaces[1]};
`;function w({route:t}){const{formatMessage:i}=(0,D.Z)(),{method:n,handler:g,path:r}=t,E=r?me(r.split("/")):[],[c="",v=""]=g?g.split("."):[],C=ye(t.method);return(0,e.jsxs)(d.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,e.jsxs)(u.Z,{variant:"delta",as:"h3",children:[i({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",(0,e.jsx)("span",{children:c}),(0,e.jsxs)(u.Z,{variant:"delta",textColor:"primary600",children:[".",v]})]}),(0,e.jsxs)(d.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0,children:[(0,e.jsx)(Oe,{background:C.background,borderColor:C.border,padding:2,children:(0,e.jsx)(u.Z,{fontWeight:"bold",textColor:C.text,children:n})}),(0,e.jsx)(o.x,{paddingLeft:2,paddingRight:2,children:_e(E,M=>(0,e.jsxs)(u.Z,{textColor:M.includes(":")?"neutral600":"neutral900",children:["/",M]},M))})]})]})}w.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},w.propTypes={route:a.shape({handler:a.string,method:a.string,path:a.string})};const Ce=()=>{const{value:{selectedAction:t,routes:i}}=Q(),{formatMessage:n}=(0,D.Z)(),g=t?.split(".")[0];return(0,e.jsx)(A.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"},children:t?(0,e.jsx)(d.k,{direction:"column",alignItems:"stretch",gap:2,children:i[g]?.map(r=>r.config.auth?.scope?.includes(t)||r.handler===t?(0,e.jsx)(w,{route:r},r.handler):null)}):(0,e.jsxs)(d.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,e.jsx)(u.Z,{variant:"delta",as:"h3",children:n({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})}),(0,e.jsx)(u.Z,{as:"p",textColor:"neutral600",children:n({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"})})]})})},de=(0,V.css)`
  background: ${t=>t.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Me=(0,V.default)(o.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${t=>t.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${t=>t.isActive&&de}
  &:hover {
    ${de}
  }
`,Ie=V.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,q=({controllers:t,label:i,orderNumber:n,disabled:g,onExpanded:r,indexExpandendCollapsedContent:E})=>{const{value:{onChangeSelectAll:c,onChange:v,selectedActions:C,setSelectedAction:M,selectedAction:B}}=Q(),[I,Y]=(0,p.useState)(!1),{formatMessage:se}=(0,D.Z)(),N=()=>{Y(m=>!m),r(n)};(0,p.useEffect)(()=>{E!==null&&E!==n&&I&&Y(!1)},[E,n,I]);const P=m=>m===B;return(0,e.jsxs)(Z.U,{expanded:I,onToggle:N,variant:n%2?"primary":"secondary",children:[(0,e.jsx)(z.B,{title:xe(i)}),(0,e.jsx)($.v,{children:t?.map(m=>{const W=m.actions.every(T=>C.includes(T.actionId)),te=m.actions.some(T=>C.includes(T.actionId));return(0,e.jsxs)(o.x,{children:[(0,e.jsxs)(d.k,{justifyContent:"space-between",alignItems:"center",padding:4,children:[(0,e.jsx)(o.x,{paddingRight:4,children:(0,e.jsx)(u.Z,{variant:"sigma",textColor:"neutral600",children:m?.controller})}),(0,e.jsx)(Ie,{}),(0,e.jsx)(o.x,{paddingLeft:4,children:(0,e.jsx)(F.X,{value:W,indeterminate:!W&&te,onValueChange:()=>{c({target:{value:[...m.actions]}})},disabled:g,children:se({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,e.jsx)(y.r,{gap:4,padding:4,children:m?.actions&&m?.actions.map(T=>(0,e.jsx)(A.P,{col:6,children:(0,e.jsxs)(Me,{isActive:P(T.actionId),padding:2,hasRadius:!0,children:[(0,e.jsx)(F.X,{value:C.includes(T.actionId),name:T.actionId,onValueChange:()=>{v({target:{value:T.actionId}})},disabled:g,children:T.action}),(0,e.jsx)("button",{type:"button","data-testid":"action-cog",onClick:()=>M({target:{value:T.actionId}}),style:{display:"inline-flex",alignItems:"center"},children:(0,e.jsx)(Ee.Z,{})})]})},T.actionId))})]},`${i}.${m?.controller}`)})})]})};q.defaultProps={controllers:[],orderNumber:0,disabled:!1,onExpanded:()=>null,indexExpandendCollapsedContent:null},q.propTypes={controllers:a.array,orderNumber:a.number,label:a.string.isRequired,disabled:a.bool,onExpanded:a.func,indexExpandendCollapsedContent:a.number};const ee=({section:t,...i})=>{const[n,g]=(0,p.useState)(null),r=E=>g(E);return(0,e.jsx)(o.x,{padding:4,background:"neutral0",children:t&&t.map((E,c)=>(0,e.jsx)(q,{label:E.label,controllers:E.controllers,orderNumber:c,indexExpandendCollapsedContent:n,onExpanded:r,name:E.apiId,...i},E.apiId))})};ee.defaultProps={section:null},ee.propTypes={section:a.arrayOf(a.object)};const De=({...t})=>{const{value:{data:i}}=Q(),{formatMessage:n}=(0,D.Z)();return(0,e.jsxs)(y.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0",children:[(0,e.jsxs)(A.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[(0,e.jsxs)(d.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,e.jsx)(u.Z,{variant:"delta",as:"h2",children:n({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})}),(0,e.jsx)(u.Z,{as:"p",textColor:"neutral600",children:n({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."})})]}),i?.permissions&&(0,e.jsx)(ee,{section:i?.permissions,...t})]}),(0,e.jsx)(Ce,{})]})},ve=(0,p.memo)(De),je=(t,i=[])=>({...t,selectedAction:null,routes:[],selectedActions:[],data:le(i)}),ke={data:{},selectedActions:[]},Re=(t,i)=>(0,Ae.default)(t,n=>{switch(i.type){case"ON_CHANGE":{n.selectedActions.includes(i.value)?re(n.selectedActions,i.value):n.selectedActions.push(i.value);break}case"SELECT_ALL_IN_PERMISSION":{i.value.every(r=>n.selectedActions.includes(r.actionId))?i.value.forEach(r=>{re(n.selectedActions,r.actionId)}):i.value.forEach(r=>{n.selectedActions.push(r.actionId)});break}case"SELECT_ALL_ACTIONS":{n.selectedActions=[...n.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const g=n.data.allActionsIds.filter(r=>r.includes("find")||r.includes("findOne"));n.selectedActions=[...g];break}case"UPDATE_PERMISSIONS_LAYOUT":{n.data=le(i.value);break}case"UPDATE_ROUTES":{n.routes={...i.value};break}case"UPDATE_PERMISSIONS":{n.selectedActions=[...i.value];break}case"SET_SELECTED_ACTION":{n.selectedAction=i.value;break}default:return n}}),Le="Name already taken",Se=()=>{(0,_.useFocusWhenNavigate)();const{formatMessage:t}=(0,D.Z)(),{lockApp:i,unlockApp:n}=(0,_.useOverlayBlocker)(),g=(0,_.useNotification)(),r=(0,oe.k6)(),E=(0,ce.useSelector)(ue.s),[c,v]=(0,p.useState)(r.location.state?.apiToken.accessKey?{...r.location.state.apiToken}:null),{trackUsage:C}=(0,_.useTracking)(),M=(0,p.useRef)(C),{setCurrentStep:B}=(0,_.useGuidedTour)(),{allowedActions:{canCreate:I,canUpdate:Y,canRegenerate:se}}=(0,_.useRBAC)(E.settings["api-tokens"]),[N,P]=(0,p.useReducer)(Re,ke,l=>je(l,{})),{params:{id:m}}=(0,oe.$B)("/settings/api-tokens/:id"),{get:W,post:te,put:T}=(0,_.useFetchClient)(),O=m==="create";(0,G.useQuery)("content-api-permissions",async()=>{const[l,S]=await Promise.all(["/admin/content-api/permissions","/admin/content-api/routes"].map(async K=>{const{data:f}=await W(K);return f.data}));P({type:"UPDATE_PERMISSIONS_LAYOUT",value:l}),P({type:"UPDATE_ROUTES",value:S}),c&&(c?.type==="read-only"&&P({type:"ON_CHANGE_READ_ONLY"}),c?.type==="full-access"&&P({type:"SELECT_ALL_ACTIONS"}),c?.type==="custom"&&P({type:"UPDATE_PERMISSIONS",value:c?.permissions}))},{onError(){g({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),(0,p.useEffect)(()=>{M.current(O?"didAddTokenFromList":"didEditTokenFromList",{tokenType:H.A})},[O]);const{status:Ue}=(0,G.useQuery)(["api-token",m],async()=>{const{data:{data:l}}=await W(`/admin/api-tokens/${m}`);return v({...l}),l?.type==="read-only"&&P({type:"ON_CHANGE_READ_ONLY"}),l?.type==="full-access"&&P({type:"SELECT_ALL_ACTIONS"}),l?.type==="custom"&&P({type:"UPDATE_PERMISSIONS",value:l?.permissions}),l},{enabled:!O&&!c,onError(){g({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),be=async(l,S)=>{M.current(O?"willCreateToken":"willEditToken",{tokenType:H.A}),i();const K=l.lifespan&&parseInt(l.lifespan,10)&&l.lifespan!=="0"?parseInt(l.lifespan,10):null;try{const{data:{data:f}}=O?await te("/admin/api-tokens",{...l,lifespan:K,permissions:l.type==="custom"?N.selectedActions:null}):await T(`/admin/api-tokens/${m}`,{name:l.name,description:l.description,type:l.type,permissions:l.type==="custom"?N.selectedActions:null});O&&(r.replace(`/settings/api-tokens/${f.id}`,{apiToken:f}),B("apiTokens.success")),n(),v({...f}),g({type:"success",message:t(O?{id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"}:{id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),M.current(O?"didCreateToken":"didEditToken",{type:c.type,tokenType:H.A})}catch(f){const ie=(0,ge.f)(f.response.data);S.setErrors(ie),f?.response?.data?.error?.message===Le?g({type:"warning",message:f.response.data.message||"notification.error.tokennamenotunique"}):g({type:"warning",message:f?.response?.data?.message||"notification.error"}),n()}},[Be,ne]=(0,p.useState)(!1),Ne={...N,onChange:({target:{value:l}})=>{ne(!0),P({type:"ON_CHANGE",value:l})},onChangeSelectAll:({target:{value:l}})=>{ne(!0),P({type:"SELECT_ALL_IN_PERMISSION",value:l})},setSelectedAction:({target:{value:l}})=>{P({type:"SET_SELECTED_ACTION",value:l})}},ae=Y&&!O||I&&O;return!O&&!c&&Ue!=="success"?(0,e.jsx)(J,{apiTokenName:c?.name}):(0,e.jsx)(Te,{value:Ne,children:(0,e.jsxs)(U.o,{children:[(0,e.jsx)(_.SettingsPageTitle,{name:"API Tokens"}),(0,e.jsx)(b.Formik,{validationSchema:L.s,validateOnChange:!1,initialValues:{name:c?.name||"",description:c?.description||"",type:c?.type,lifespan:c?.lifespan?c.lifespan.toString():c?.lifespan},enableReinitialize:!0,onSubmit:(l,S)=>be(l,S),children:({errors:l,handleChange:S,isSubmitting:K,values:f,setFieldValue:ie})=>(Be&&f?.type!=="custom"&&ie("type","custom"),(0,e.jsxs)(_.Form,{children:[(0,e.jsx)(L.F,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:c,setToken:v,canEditInputs:ae,canRegenerate:se,isSubmitting:K,regenerateUrl:"/admin/api-tokens/"}),(0,e.jsx)(R.D,{children:(0,e.jsxs)(d.k,{direction:"column",alignItems:"stretch",gap:6,children:[Boolean(c?.name)&&(0,e.jsx)(L.c,{token:c?.accessKey,tokenType:H.A}),(0,e.jsx)(X,{errors:l,onChange:S,canEditInputs:ae,isCreating:O,values:f,apiToken:c,onDispatch:P,setHasChangedPermissions:ne}),(0,e.jsx)(ve,{disabled:!ae||f?.type==="read-only"||f?.type==="full-access"})]})})]}))})]})})}}}]);