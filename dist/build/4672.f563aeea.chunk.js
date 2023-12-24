"use strict";(self.webpackChunkem_guide_app=self.webpackChunkem_guide_app||[]).push([[4672],{24672:(Y,m,s)=>{s.r(m),s.d(m,{default:()=>U});var e=s(56940),O=s(84319),_=s(22512),u=s(95984),E=s(54997),y=s(58400),A=s(65094),T=s(66041),x=s(74065),L=s(78054),p=s(11674),R=s(22884),C=s(82180),i=s(30956),S=s(30454),I=s(24926),j=s(48288),r=s(40829),t=s(58317),k=s(49079),o=s(42052);const W=[{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,t.g)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,t.g)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,t.g)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,t.g)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,t.g)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,t.g)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,t.g)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}],f=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),B=o.Ry().shape({email_confirmation_redirection:o.nK().when("email_confirmation",{is:!0,then:o.Z_().matches(f).required(),otherwise:o.Z_().nullable()}),email_reset_password:o.Z_(i.translatedErrors.string).matches(f,i.translatedErrors.regex).nullable()}),U=()=>(0,e.jsx)(i.CheckPagePermissions,{permissions:t.P.readAdvancedSettings,children:(0,e.jsx)(F,{})}),F=()=>{const{formatMessage:d}=(0,j.Z)(),l=(0,i.useNotification)(),{lockApp:K,unlockApp:M}=(0,i.useOverlayBlocker)(),{notifyStatus:b}=(0,O.G)(),z=(0,r.useQueryClient)(),{get:N,put:w}=(0,i.useFetchClient)(),{formatAPIError:Z}=(0,i.useAPIErrorHandler)();(0,i.useFocusWhenNavigate)();const{isLoading:H,allowedActions:{canUpdate:h}}=(0,i.useRBAC)({update:t.P.updateAdvancedSettings}),{isLoading:G,data:v}=(0,r.useQuery)(["users-permissions","advanced"],async()=>{const{data:n}=await N("/users-permissions/advanced");return n},{onSuccess(){b(d({id:(0,t.g)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){l({type:"warning",message:{id:(0,t.g)("notification.error"),defaultMessage:"An error occured"}})}}),Q=H||G,P=(0,r.useMutation)(n=>w("/users-permissions/advanced",n),{async onSuccess(){await z.invalidateQueries(["users-permissions","advanced"]),l({type:"success",message:{id:(0,t.g)("notification.success.saved"),defaultMessage:"Saved"}}),M()},onError(n){l({type:"warning",message:Z(n)}),M()},refetchActive:!0}),{isLoading:V}=P,X=async n=>{K(),P.mutate({...n,email_confirmation_redirection:n.email_confirmation?n.email_confirmation_redirection:""})};return Q?(0,e.jsxs)(_.o,{"aria-busy":"true",children:[(0,e.jsx)(i.SettingsPageTitle,{name:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,e.jsx)(u.T,{title:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,e.jsx)(E.D,{children:(0,e.jsx)(i.LoadingIndicatorPage,{})})]}):(0,e.jsxs)(_.o,{"aria-busy":V,children:[(0,e.jsx)(i.SettingsPageTitle,{name:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,e.jsx)(I.Formik,{onSubmit:X,initialValues:v.settings,validateOnChange:!1,validationSchema:B,enableReinitialize:!0,children:({errors:n,values:g,handleChange:D,isSubmitting:$,dirty:J})=>(0,e.jsxs)(i.Form,{children:[(0,e.jsx)(u.T,{title:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:(0,e.jsx)(y.z,{loading:$,type:"submit",disabled:h?!J:!h,startIcon:(0,e.jsx)(S.Z,{}),size:"S",children:d({id:"global.save",defaultMessage:"Save"})})}),(0,e.jsx)(E.D,{children:(0,e.jsx)(A.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(T.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(x.Z,{variant:"delta",as:"h2",children:d({id:"global.settings",defaultMessage:"Settings"})}),(0,e.jsxs)(L.r,{gap:6,children:[(0,e.jsx)(p.P,{col:6,s:12,children:(0,e.jsx)(R.P,{label:d({id:(0,t.g)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:g.default_role,hint:d({id:(0,t.g)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:a=>D({target:{name:"default_role",value:a}}),children:v.roles.map(a=>(0,e.jsx)(C.W,{value:a.type,children:a.name},a.type))})}),W.map(a=>{let c=g[a.name];return c||(c=a.type==="bool"?!1:""),(0,e.jsx)(p.P,{...a.size,children:(0,e.jsx)(i.GenericInput,{...a,value:c,error:n[a.name],disabled:a.name==="email_confirmation_redirection"&&g.email_confirmation===!1,onChange:D})},a.name)})]})]})})})]})})]})}}}]);