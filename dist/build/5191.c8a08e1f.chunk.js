"use strict";(self.webpackChunkem_guide_app=self.webpackChunkem_guide_app||[]).push([[5191],{45191:(m,e,s)=>{s.r(e),s.d(e,{CreateActionEE:()=>P});var t=s(56940),n=s(66041),E=s(78506),r=s(81583),o=s(58400),d=s(57120),a=s(99130),M=s(91963),l=s(14025),_=s(48288),D=s(74089),i=s(75937),C=s(30956),O=s(40829);const P=({onClick:L})=>{const{formatMessage:u}=(0,_.Z)(),{license:{permittedSeats:g,shouldStopCreate:c},isError:A,isLoading:p}=(0,D.u)();return A||p?null:(0,t.jsxs)(n.k,{gap:2,children:[!M(g)&&c&&(0,t.jsx)(E.u,{description:u({id:"Settings.application.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),position:"left",children:(0,t.jsx)(r.J,{width:`${14/16}rem`,height:`${14/16}rem`,color:"danger500",as:d.Z})}),(0,t.jsx)(o.z,{"data-testid":"create-user-button",onClick:L,startIcon:(0,t.jsx)(a.Z,{}),size:"S",disabled:c,children:u({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})})]})};P.propTypes={onClick:l.func.isRequired}},74089:(m,e,s)=>{s.d(e,{u:()=>r});var t=s(75937),n=s(30956),E=s(40829);function r({enabled:o}={enabled:!0}){const{get:d}=(0,n.useFetchClient)(),{data:a,isError:M,isLoading:l}=(0,E.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:i}}=await d("/admin/license-limit-information");return i},{enabled:o}),_=t.useMemo(()=>a??{},[a]),D=t.useCallback(i=>(_?.features??[]).find(O=>O.name===i)?.options??{},[_?.features]);return{license:_,getFeature:D,isError:M,isLoading:l}}}}]);