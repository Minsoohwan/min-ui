import{j as m}from"./jsx-runtime-BjG_zV1W.js";import{R as t,r as R}from"./index-DpTt3J-R.js";import{V as U}from"./ValidationMessages-DkT8DR7l.js";const p=t.forwardRef(({className:H="",validationMessages:r,width:g,height:f,disabled:h,readOnly:x,style:I,placeholder:L,text:l,onChange:d,onInitialized:u,...D},s)=>{const W="min-ui-textbox",k="",z="min-ui-textbox-error",F=h?"min-ui-opacity-60 min-ui-cursor-not-allowed min-ui-pointer-events-none":"",G=x?"min-ui-cursor-default":"",y={...I,...g!=null?{width:g}:{width:"100%"},...f!=null?{height:f}:{}},[J,w]=t.useState(l??""),K=e=>{w(e.target.value),d==null||d(e)};R.useEffect(()=>{w(l??"")},[l]);const S=t.useRef(null),Q=t.useCallback(e=>{S.current=e,typeof s=="function"?s(e):s&&(s.current=e)},[s]);R.useEffect(()=>{u==null||u(S.current)},[]);const T=t.useMemo(()=>Array.isArray(r)&&r.length>0,[r]);return m.jsxs("div",{className:`min-ui-textbox-wrapper ${H}`,style:{width:y.width},children:[m.jsx("input",{ref:Q,disabled:h,readOnly:x,className:`${W} ${T?z:k} ${F} ${G}`.trim(),style:{height:y.height},value:J,onChange:K,placeholder:L,...D}),m.jsx(U,{visible:T,messages:r})]})});p.displayName="TextBox";p.__docgenInfo={description:"",methods:[],displayName:"TextBox",props:{validationMessages:{required:!1,tsType:{name:"union",raw:"string[] | null | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"},{name:"undefined"}]},description:""},width:{required:!1,tsType:{name:'ReactCSSProperties["width"]',raw:'React.CSSProperties["width"]'},description:""},height:{required:!1,tsType:{name:'ReactCSSProperties["height"]',raw:'React.CSSProperties["height"]'},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onInitialized:{required:!1,tsType:{name:"signature",type:"function",raw:"(el: HTMLInputElement | null) => void",signature:{arguments:[{type:{name:"union",raw:"HTMLInputElement | null",elements:[{name:"HTMLInputElement"},{name:"null"}]},name:"el"}],return:{name:"void"}}},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const ee={title:"Components/TextBox",component:p,tags:["autodocs"],args:{placeholder:"값을 입력하세요",disabled:!1,readOnly:!1,width:"fit-content",height:"fit-content",text:"",validationMessages:null},argTypes:{onChange:{action:"change"},onInitialized:{action:"initialized"},validationMessages:{control:"object"}}},a={args:{text:""}},n={args:{validationMessages:["값을 입력해주세요."]}},i={args:{disabled:!0}},o={args:{readOnly:!0,text:"읽기 전용입니다"}},c={args:{width:"320px",height:"44px"}};var b,v,E;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: ""
  }
}`,...(E=(v=a.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var q,C,M;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    validationMessages: ["값을 입력해주세요."]
  }
}`,...(M=(C=n.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var O,j,B;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(B=(j=i.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var V,N,$;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    text: "읽기 전용입니다"
  }
}`,...($=(N=o.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var P,_,A;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    width: "320px",
    height: "44px"
  }
}`,...(A=(_=c.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const se=["Basic","WithValidation","Disabled","ReadOnly","Sized"];export{a as Basic,i as Disabled,o as ReadOnly,c as Sized,n as WithValidation,se as __namedExportsOrder,ee as default};
