"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2565],{51753:function(e,t,r){r.d(t,{$:function(){return v},m:function(){return y}});var n=r(93130),s=r(14339),a=r(83901),i=r(22209),o=r(87648),l=r(22189),c=r(19841),u=r(8308),d=r(57784),f=r(47566),m=r(21531),h=r(37218),p=r(91829),g=r(35250);function y(e){let{clientThreadId:t,isInPopover:r=!1}=e,a=(0,s.XK)(t),o=(0,n.t)(),{isUserUnauthenticated:l}=(0,i.EH)(),c=(0,s.eV)(t),f=(0,s.Ao)(t),p=(0,u.V_)();return(0,g.jsxs)(g.Fragment,{children:[null!=o&&o.canInteractWithGizmos()?(0,g.jsx)(m.Dy,{currentGizmoId:c}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m.Vq,{isActive:void 0===c,isNewConversation:f}),(0,g.jsx)(h.Z,{})]}),!l&&(0,g.jsx)(d.Z,{activeId:p?void 0:a,isInPopover:r})]})}function v(e){let{isInPopover:t,className:r,onNewThread:n,historyDisabled:s}=e,i=(0,o.w$)(),u=(0,g.jsx)(p.W,{onClick:()=>{i?a.vm.toggleDesktopNavCollapsed():a.vm.toggleActiveSidebar("mobile-nav")},className:(0,c.default)({"ml-auto block":t}),icon:i?f.BSo:f.Oqj,surfaceContext:t?"primary":"secondary"});return(0,g.jsxs)("div",{className:(0,c.default)("flex justify-between",r),children:[t?(0,g.jsx)(l.x8,{asChild:!0,children:u}):u,!t&&(0,g.jsx)(p.W,{onClick:()=>{i||a.vm.toggleActiveSidebar("mobile-nav"),n()},icon:s?f.Ezi:f.bl$,surfaceContext:t?"primary":"secondary"})]})}},33347:function(e,t,r){r.d(t,{C:function(){return u}});var n=r(39993),s=r(91530),a=r.n(s),i=r(78103);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let c={showReferralInviteModal:!1},u=(0,i.ZP)()(e=>l(l({},c),{},{setShowReferralInviteModal:function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a();e({showReferralInviteModal:t}),null==r||r()}}))},16787:function(e,t,r){r.d(t,{ZP:function(){return el}});var n,s,a=r(49292),i=r(39993),o=r(97206),l=r(93130),c=r(83901),u=r(22209),d=r(30569),f=r(32148),m=r(29057),h=r(83398),p=r(44929),g=r(19841),y=r(70079),v=r(71711),b=r(9063),x=r(84692),j=r(68498),w=r(21389),O=r(77919),P=r(8308);r(6716);var k=r(47566),C=r(21531),M=r(32353),N=r(28420),S=r(44506),_=r(49679),T=r(21218),E=r(22348),Z=r(71023),I=r(51293),D=r(28592),F=r(83737),A=r(61236),H=r(35250);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function W(e){let{showFreeTrialLoadingPayment:t,handleGetPaymentLink:r}=e,n=(0,b.Z)(),{data:s,isLoading:a,isSuccess:i}=(0,A.a)({queryKey:["claimedReferralInvite"],queryFn:()=>S.Z.getClaimedReferralInvite(),refetchOnMount:!1,refetchOnWindowFocus:!1,refetchInterval:!1,refetchOnReconnect:!1}),o=null==s?void 0:s.invite_code,{0:l,1:c}=(0,y.useState)(!1);if((0,y.useEffect)(()=>{o&&!l&&i&&(c(!0),p.m9.logEvent("chatgpt_referral_show_claimed_sidebar_menu_promo"),m.A.logEvent(T.M.chatgptReferralShowClaimedSidebartMenuPromo))},[o,c,l,i]),!o||a||!i)return null;let u=o.invite_metadata.invite_data,d=null!=u&&u.referral_trial_duration_months?(null==u?void 0:u.referral_trial_duration_months)>1?n.formatMessage(z.monthsOfBenefit,{referralTrialDurationMonths:null==u?void 0:u.referral_trial_duration_months}):n.formatMessage(z.daysOfBenefit,{referralTrialDurationDays:null==u?void 0:u.referral_trial_duration_days}):null;return(0,H.jsx)(F.E.div,{className:(0,g.default)("relative",{"cursor-progress opacity-50":t}),layout:"position",initial:{y:-10,opacity:1},animate:{y:0,opacity:1,transition:{duration:.1,ease:"easeIn"}},children:(0,H.jsxs)(U,{className:(0,g.default)(t&&"opacity-75"),onClick:()=>{t||((0,I.Vk)(!0),r())},children:[(0,H.jsxs)("div",{className:"flex w-full flex-row items-center justify-start gap-3 ",children:[(0,H.jsx)(v.E33,{className:"icon-sm shrink-0"}),(0,H.jsx)(x.Z,R(R({},z.freeTrialCta),{},{values:{duration:d}}))]}),!t&&(0,H.jsx)(k.tPq,{onClick:e=>{e.stopPropagation(),(0,I.zG)(!0),(0,I.H1)(!0)},className:"icon-md shrink-0 rounded-full p-0.5 text-token-text-tertiary opacity-50 transition-colors duration-200 hover:bg-[#0077FF] hover:text-red-500 group-hover:opacity-100"}),(0,H.jsx)("span",{className:"absolute top-11 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0077FF] transition-colors duration-200 group-hover:border-t-[#0077FF]"})]})})}let U=w.Z.a(n||(n=(0,a.Z)(["group relative mb-1 rounded-md hover:[#0077FF] bg-[#0077FF] flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm"]))),z=(0,j.vU)({freeTrialCta:{id:"PaymentMenuItems.freeTrialCta",defaultMessage:"Get {duration}!"},monthsOfBenefit:{id:"FreeTrialMenuItem.monthsOfBenefit",defaultMessage:"{referralTrialDurationMonths, plural, one {one month free} other {# months free}}"},daysOfBenefit:{id:"FreeTrialMenuItem.daysOfBenefit",defaultMessage:"{referralTrialDurationDays, plural, one {one day free} other {# days free}}"}});var q=r(42797),B=r(33347);function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function $(){var e,t,r,n,s,a,i;let o=(0,E.useRouter)(),c=(0,b.Z)(),u=(0,l.hz)(),d=(0,l.t)(),f=!d,h=null!==(e=null==d?void 0:d.hasPaidSubscription())&&void 0!==e&&e,g=null!==(t=null==d?void 0:d.hasClaimedFreeTrial())&&void 0!==t&&t,v=(0,y.useMemo)(()=>null==d?void 0:d.subscriptionAnalyticsParams,[d]),x=async()=>{(0,I.Vk)(!0),m.A.logEvent(T.M.clickAccountPaymentCheckout,v);try{let e=await S.Z.getCheckoutLink(u);o.push(e.url)}catch(e){D.m.warning(c.formatMessage(Y.paymentErrorWarning),{hasCloseButton:!0}),(0,I.Vk)(!1)}finally{}},j=(0,I.tS)(e=>e.didCloseFreeTrial),w=(0,I.tS)(e=>e.showFreeTrialLoadingPayment),O=!j&&g,P=null!==(r=null==d?void 0:d.wasPaidCustomer())&&void 0!==r&&r,k=null!==(n=null==d?void 0:d.isWorkspaceAccount())&&void 0!==n&&n,C=null!==(s=null==d?void 0:d.isPlus())&&void 0!==s&&s,M=!f&&!k&&(!1===C||null!==(a=null==u?void 0:u.includes(_.L0.Teams))&&void 0!==a&&a),{setShowReferralInviteModal:N}=(0,B.C)(e=>({setShowReferralInviteModal:e.setShowReferralInviteModal})),Z=(0,y.useCallback)(()=>{p.m9.logEvent("chatgpt_referral_invite_sidebar_clicked"),m.A.logEvent(T.M.chatgptReferralInviteSidebarClicked,v),N(!0,()=>{m.A.logEvent(T.M.clickSidebarAccountPaymentMenuItem,v)})},[v,N]),F=null!==(i=null==d?void 0:d.isTeam())&&void 0!==i&&i;return(0,H.jsxs)(H.Fragment,{children:[((null==u?void 0:u.includes(_.a3))||h)&&(0,H.jsx)(Q,{analyticsParams:v,handleReferralInvite:Z}),!h&&O&&(0,H.jsx)(W,{showFreeTrialLoadingPayment:w,handleGetPaymentLink:x}),F&&(0,H.jsx)(X,{}),M&&(0,H.jsx)(q.Vq,{onClick:O?()=>{w||((0,I.Vk)(!0),x())}:()=>{m.A.logEvent(T.M.clickSidebarAccountPaymentMenuItem,v);let e=o.asPath.split("#");o.push("".concat(e[0],"#pricing"))},className:"m-0 rounded-lg px-2",children:(0,H.jsx)("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:(0,H.jsx)("div",{className:"flex items-center gap-2",children:(0,H.jsx)(K,{wasPaidCustomer:P,showFreeTrialLoadingPayment:w,hasPlusSubscription:C})})})})]})}let K=e=>{let{wasPaidCustomer:t,showFreeTrialLoadingPayment:r,hasPlusSubscription:n}=e;return r?(0,H.jsx)(Z.Z,{className:"icon-sm shrink-0"}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:(0,H.jsx)(k.X72,{className:"icon-sm shrink-0"})}),(0,H.jsx)("div",{className:"flex flex-col",children:t?(0,H.jsx)(x.Z,G({},Y.renewPlus)):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("span",{children:n?(0,H.jsx)(x.Z,G({},Y.createATeamWorkspace)):(0,H.jsx)(x.Z,G({},Y.upgradePlan))}),(0,H.jsx)("span",{className:"line-clamp-1 text-xs text-token-text-tertiary",children:n?(0,H.jsx)(x.Z,G({},Y.upgradeToTeamUpsell)):(0,H.jsx)(x.Z,G({},Y.upgradeToPlusUpsell))})]})})]})},X=()=>{let e=(0,l.t)();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(q.Vq,{onClick:()=>{c.vm.openModal(c.B.InviteUsersToWorkspace)},className:"rounded-lg",children:(0,H.jsx)("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:(0,H.jsxs)("span",{className:"flex items-center gap-2",children:[(0,H.jsx)("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:(0,H.jsx)(k.pF9,{className:"icon-sm shrink-0"})}),(0,H.jsx)(x.Z,G({},Y.inviteMembers))]})})}),null!=e?(0,H.jsx)(N.Z,{workspace:e}):null]})},Q=e=>{var t;let{analyticsParams:r,handleReferralInvite:n}=e,s=(0,l.hz)(),a=null!==(t=null==s?void 0:s.includes(_.a3))&&void 0!==t&&t,i=(0,l.t)(),{data:o}=(0,A.a)({queryKey:["referralInvites"],queryFn:()=>S.Z.getEligibleReferralInvites(),enabled:a}),c=i&&!i.isOrWasPaidCustomer()&&!i.hasPlusFeatures(),u=(null==o?void 0:o.invites_remaining)&&(null==o?void 0:o.invites_remaining)>0,d=c&&u,{0:f,1:h}=(0,y.useState)(!1);return((0,y.useEffect)(()=>{d&&!f&&(h(!0),p.m9.logEvent("chatgpt_referral_show_sidebar_menu_item"),m.A.logEvent(T.M.chatgptReferralShowSidebarMenuItem,r))},[d,h,f,r]),d)?(0,H.jsx)(q.Vq,{onClick:n,className:"rounded-lg",children:(0,H.jsx)("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:(0,H.jsxs)("span",{className:"flex items-center gap-2",children:[(0,H.jsx)("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:(0,H.jsx)(k.pF9,{className:"icon-sm shrink-0"})}),(0,H.jsx)(x.Z,G({},Y.inviteReferral))]})})}):null},Y=(0,j.vU)({upgradePlan:{id:"PaymentMenuItems.upgradePlan",defaultMessage:"Upgrade plan"},createATeamWorkspace:{id:"PaymentMenuItems.createATeamWorkspace",defaultMessage:"Add Team workspace"},upgradeToTeamUpsell:{id:"PaymentMenuItems.upgradeToTeamUpsell",defaultMessage:"Collaborate on a Team plan"},upgradeToPlusUpsell:{id:"PaymentMenuItems.upgradeToPlusUpsell.0",defaultMessage:"Get GPT-4, DALL\xb7E, and more"},renewPlus:{id:"PaymentMenuItems.renewPlus",defaultMessage:"Renew Plus"},inviteReferral:{id:"PaymentMenuItems.inviteReferral",defaultMessage:"Refer a friend"},inviteMembers:{id:"PaymentMenuItems.inviteMembers.0",defaultMessage:"Invite members"},paymentErrorWarning:{id:"PaymentMenuItems.paymentErrorWarning",defaultMessage:"The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."}});var J=r(61069),ee=r(87648),et=r(25494),er=r(35687);let en=()=>(0,A.a)({queryKey:["userSurvey"],queryFn:async()=>S.Z.getActiveUserSurvey()}),es=()=>(0,et.D)({mutationFn:async e=>{let{surveyId:t,reason:r}=e;return S.Z.completeUserSurvey(t,r)},onSuccess:async()=>{er.E.invalidateQueries({queryKey:["userSurvey"]})}});function ea(){var e;let t=(0,b.Z)(),r=(0,ee.w$)(),{0:n,1:s}=(0,y.useState)(!1),a=null===(e=en().data)||void 0===e?void 0:e.survey,i=es(),o=e=>{s(!0),null!=a&&i.mutate({surveyId:a.id,reason:e})};return n||null==a?null:(0,H.jsx)("div",{className:"mx-1 mb-1 rounded-sm bg-brand-blue-800",children:(0,H.jsxs)("div",{className:"flex flex-col items-center justify-stretch gap-3 p-3 text-sm text-white",children:[(0,H.jsxs)("div",{className:"flex w-full items-start",children:[(0,H.jsxs)("div",{className:"flex flex-grow flex-col gap-1",children:[(0,H.jsx)("div",{className:"font-bold",children:(0,H.jsx)(x.Z,{id:"navigation.survey.title",defaultMessage:"We are asking a small group of people for their opinion"})}),(0,H.jsx)("div",{children:(0,H.jsx)(x.Z,{id:"navigation.survey.description",defaultMessage:"Could you spare few minutes to take a short survey?"})})]}),(0,H.jsx)("button",{className:"text-white/25 hover:text-white/40",onClick:()=>o("dismissed"),"aria-label":t.formatMessage({id:"navigation.survey.dismiss",defaultMessage:"Dismiss survey"}),children:(0,H.jsx)(k.tPq,{width:r?"20px":"24px",height:r?"20px":"24px"})})]}),(0,H.jsxs)("a",{href:a.link,target:"_blank",className:"flex w-full flex-row items-center justify-center gap-2 rounded bg-white/25 p-2 hover:bg-white/40",rel:"noreferrer",onClick:()=>o("link_clicked"),children:[(0,H.jsx)(k.Pfi,{className:"icon-sm"}),(0,H.jsx)(x.Z,{id:"navigation.survey.takeSurvey",defaultMessage:"Take survey"})]})]})})}function ei(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function eo(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ei(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ei(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function el(e){let{onNewThread:t,currentGizmoId:r,navHeader:n,children:s,className:a}=e,i=(0,b.Z)(),o=(0,l.t)(),c=null==o?void 0:o.isWorkspaceAccount(),m=(0,y.useRef)(null),h=(0,P.V_)(),{openSettings:p}=(0,M.Fr)(),{isUserUnauthenticated:j}=(0,u.EH)();(0,y.useEffect)(()=>{P._P.getModifiedSettings()&&p()},[]);let w=(0,d.cQ)(),k=(0,y.useCallback)(()=>{t(),P._P.enableHistory({useLocalStorage:!w})},[t,w]),N=(0,H.jsxs)("div",{className:(0,g.default)("absolute left-0 top-0 z-20 w-full overflow-hidden transition-all duration-500",h?"visible max-h-72":"invisible max-h-0"),children:[(0,H.jsx)("div",{className:"px-3 py-3.5",children:(0,H.jsx)(C.jl,{gizmo:void 0,historyDisabled:!0,isActive:void 0===r})}),(0,H.jsxs)("div",{className:"bg-gray-900 px-4 py-3",children:[(0,H.jsx)("div",{className:"p-1 text-sm text-gray-100",children:(0,H.jsx)(x.Z,eo({},ef.chatHistoryOff))}),(0,H.jsx)("div",{className:"p-1 text-xs text-token-text-tertiary",children:(0,H.jsx)(x.Z,eo(eo({},c?ef.chatHistoryOffDescriptionBusiness:ef.chatHistoryOffDescription),{},{values:{learnMore:(0,H.jsx)("a",{href:"https://help.openai.com/en/articles/7730893",target:"_blank",className:"underline",rel:"noreferrer",children:(0,H.jsx)(x.Z,eo({},ef.learnMore))}),b:e=>(0,H.jsx)("strong",{children:e})}}))}),(0,H.jsxs)(O.z,{className:"mt-4 w-full",onClick:k,color:"primary",size:"medium",children:[(0,H.jsx)(v.$IY,{className:"icon-sm"}),(0,H.jsx)(x.Z,eo({},ef.enableChatHistory))]})]}),(0,H.jsx)("div",{className:"h-24 bg-gradient-to-t from-gray-900/0 to-gray-900"})]});return(0,H.jsx)(H.Fragment,{children:(0,H.jsxs)("div",{className:"scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20",children:[(0,H.jsx)(f.f,{asChild:!0,children:(0,H.jsx)("h2",{children:(0,H.jsx)(x.Z,eo({},ef.chatHistoryLabel))})}),(0,H.jsxs)("nav",{className:(0,g.default)("flex h-full w-full flex-col px-3 pb-3.5 juice:pb-0",a),"aria-label":i.formatMessage(ef.chatHistoryLabel),children:[n,o&&!w&&!j&&N,(0,H.jsx)(ed,{ref:m,$disableScroll:h&&!w&&!j,children:s}),(0,H.jsx)(ec,{})]})]})})}function ec(){let{0:e}=(0,y.useState)(()=>{let e=h.bX.getCookie(h.cn.Workspace);return"string"==typeof e&&e!==o.b}),t=(0,l.t)(),r=(null==t?void 0:t.data)==null,{openSettings:n}=(0,M.Fr)(),{isUserUnauthenticated:s}=(0,u.EH)();return e&&r||!t?null:s?(0,H.jsx)(eu,{}):(0,H.jsxs)("div",{className:"flex flex-col pt-2 empty:hidden juice:py-2 dark:border-white/20",children:[(0,H.jsx)(ea,{}),(0,H.jsx)($,{}),(0,H.jsx)("div",{className:"flex w-full items-center",children:(0,H.jsx)("div",{className:"max-w-[100%] grow",children:(0,H.jsx)(J.W,{onClickSettings:()=>n()})})})]})}let eu=()=>{let{navigateToAuth:e}=(0,u.EH)();return(0,H.jsxs)("div",{children:[(0,H.jsxs)("div",{className:"mb-4 mt-2",children:[(0,H.jsx)("p",{className:"mb-1 text-sm font-medium text-token-text-primary",children:(0,H.jsx)(x.Z,eo({},ef.signUpOrLogIn))}),(0,H.jsx)("p",{className:"text-sm text-token-text-secondary",children:(0,H.jsx)(x.Z,{id:"NavigationContent.unauthSidebarSigninDesc",defaultMessage:"Save your chat history, share chats, and personalize your experience."})})]}),(0,H.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,H.jsx)(O.z,{as:"button",size:"medium",color:"primary",onClick:()=>{let t=e({authType:"signup"});m.A.logSignUpButtonClicked({location:"Sidebar bottom unit",provider:t}),p.m9.logEvent("chatgpt_sidebar_signup_button_clicked")},children:(0,H.jsx)(x.Z,eo({},ef.unauthSignupCta))}),(0,H.jsx)(O.z,{as:"button",size:"medium",color:"secondary",onClick:()=>{let t=e({authType:"login"});m.A.logLogInButtonClicked({location:"Sidebar bottom unit",provider:t}),p.m9.logEvent("chatgpt_sidebar_login_button_clicked")},children:(0,H.jsx)(x.Z,eo({},ef.unauthLoginCta))})]})]})},ed=w.Z.div(s||(s=(0,a.Z)(["flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2\n  ",""])),e=>{let{$disableScroll:t}=e;return t?"overflow-y-hidden opacity-20 pointer-events-none":"overflow-y-auto"}),ef=(0,j.vU)({chatHistoryLabel:{id:"NavigationContent.chatHistoryLabel",defaultMessage:"Chat history"},chatHistoryOff:{id:"NavigationContent.chatHistoryOff",defaultMessage:"Chat History is off for this browser."},chatHistoryOffDescription:{id:"NavigationContent.chatHistoryOffDescription",defaultMessage:"When history is turned off, new chats on this browser won't appear in your history on any of your devices, be used to train our models, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}"},chatHistoryOffDescriptionBusiness:{id:"NavigationContent.chatHistoryOffDescriptionBusiness",defaultMessage:"When history is turned off, new chats on this browser won't appear in your history on any of your devices, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}"},learnMore:{id:"NavigationContent.learnMore",defaultMessage:"Learn more"},enableChatHistory:{id:"NavigationContent.enableChatHistory",defaultMessage:"Enable chat history"},closeSidebar:{id:"NavigationContent.closeSidebar",defaultMessage:"Close sidebar"},signInToChat:{id:"NavigationContent.signInToChat",defaultMessage:"Sign in to ChatGPT"},signUpOrLogIn:{id:"NavigationContent.signUpOrLogIn",defaultMessage:"Sign up or log in"},unauthSignupCta:{id:"NavigationContent.unauthSignupCta",defaultMessage:"Sign up"},unauthLoginCta:{id:"NavigationContent.unauthLoginCta",defaultMessage:"Log in"}})},51293:function(e,t,r){r.d(t,{H1:function(){return m},Vk:function(){return d},tS:function(){return u},zG:function(){return f}});var n=r(39993),s=r(91530),a=r.n(s),i=r(78103);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let c={showEmbeddedPaymentModal:!1,embeddedCheckoutInstance:void 0,showFreeTrialLoadingPayment:!1,showConfirmDismissFreeTrial:!1,didCloseFreeTrial:!1},u=(0,i.ZP)()(e=>l(l({},c),{},{setShowEmbeddedPaymentModal:function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a();e({showEmbeddedPaymentModal:t}),r&&r()},setEmbeddedCheckoutInstance:function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a();e({showEmbeddedPaymentModal:t}),r&&r()}}));function d(e){u.setState({showFreeTrialLoadingPayment:e})}function f(e){u.setState({showConfirmDismissFreeTrial:e})}function m(e){u.setState({didCloseFreeTrial:e})}}}]);
//# sourceMappingURL=2565-5f8ec7665a405ee5.js.map