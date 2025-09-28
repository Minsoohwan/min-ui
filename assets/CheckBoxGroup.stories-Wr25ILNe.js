import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{R as o}from"./index-DpTt3J-R.js";import{C as ie}from"./CheckBox-XtxcCkuZ.js";import{V as se}from"./ValidationMessages-DkT8DR7l.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";const l=o.forwardRef(({value:e={},items:a=[],validationMessages:i=[],onChange:n,visible:t=!0,width:d,height:u,enableThreeState:y=!1,onInitialized:c,disabled:U=!1,direction:X="vertical",gap:C},Y)=>{const[T,Z]=o.useState([]),ee=o.useMemo(()=>Array.isArray(i)&&i.length>0,[i]);o.useEffect(()=>{T.length===a.length&&(c==null||c(T))},[T,a.length,c]);const ae=s=>h=>{const M={...e,[s]:y&&e[s]===!1?null:h.target.checked};n==null||n(M)},ne=s=>h=>{h&&Z(M=>{const x=[...M];return x[s]=h,x})},te=o.useMemo(()=>a.map(s=>typeof s=="object"&&s!==null?s:{value:s,display:String(s)}),[a]);return t?r.jsxs("div",{ref:Y,className:`min-ui-checkboxgroup-wrapper min-ui-checkboxgroup ${X==="horizontal"?"min-ui-checkboxgroup-horizontal":"min-ui-checkboxgroup-vertical"} ${C?"":"min-ui-gap-2"}`,style:{width:d??"100%",height:u,...C?{gap:C}:{}},children:[te.map((s,h)=>r.jsx(ie,{label:s.display,value:e[s.value]??null,onChange:ae(s.value),visible:t||s.visible,disabled:U||s.disabled,enableThreeState:y,onInitialized:ne(h)},s.value)),r.jsx(se,{visible:ee,messages:i})]}):null});l.displayName="CheckBoxGroup";l.__docgenInfo={description:"",methods:[],displayName:"CheckBoxGroup",props:{value:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]}],raw:"Record<string, boolean | null>"},description:"",defaultValue:{value:"{}",computed:!1}},items:{required:!1,tsType:{name:"union",raw:"CheckBoxGroupItem[] | (string | number)[]",elements:[{name:"Array",elements:[{name:"CheckBoxGroupItem"}],raw:"CheckBoxGroupItem[]"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"}]},description:"",defaultValue:{value:"[]",computed:!1}},validationMessages:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: Record<string, boolean | null>) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]}],raw:"Record<string, boolean | null>"},name:"value"}],return:{name:"void"}}},description:""},visible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},width:{required:!1,tsType:{name:'ReactCSSProperties["width"]',raw:'React.CSSProperties["width"]'},description:""},height:{required:!1,tsType:{name:'ReactCSSProperties["height"]',raw:'React.CSSProperties["height"]'},description:""},enableThreeState:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onInitialized:{required:!1,tsType:{name:"signature",type:"function",raw:"(elements: HTMLInputElement[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"HTMLInputElement"}],raw:"HTMLInputElement[]"},name:"elements"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}},gap:{required:!1,tsType:{name:"string"},description:""}}};const ce={title:"Components/CheckBoxGroup",component:l,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>r.jsx("div",{style:{padding:"1rem"},children:r.jsx(e,{})})],args:{items:[{value:"1",display:"Option 1"},{value:"2",display:"Option 2"},{value:"3",display:"Option 3"}],direction:"vertical",gap:"0.5rem",width:"fit-content",height:"fit-content",disabled:!1,enableThreeState:!1},argTypes:{onChange:{action:"changed"},direction:{control:"radio",options:["horizontal","vertical"],description:"Layout direction of checkboxes"},gap:{control:"text",description:'CSS gap value (e.g., "1rem", "10px")'},items:{control:"object",description:"Array of items to display as checkboxes"},width:{control:"text",description:"Width of the checkbox group (CSS value)",table:{type:{summary:"string | number"}}},height:{control:"text",description:"Height of the checkbox group (CSS value)",table:{type:{summary:"string | number"}}}}},g={render:function(a){const[i,n]=o.useState({1:!1,2:!0,3:!1}),t=d=>{var u;(u=a.onChange)==null||u.call(a,d),n(d)};return r.jsx(l,{items:a.items,...a.direction&&{direction:a.direction},...a.gap&&{gap:a.gap},width:a.width,height:a.height,...a.disabled!==void 0&&{disabled:a.disabled},...a.enableThreeState!==void 0&&{enableThreeState:a.enableThreeState},...a.validationMessages&&{validationMessages:a.validationMessages},value:i,onChange:t})}},p={args:{validationMessages:["Please select at least one option"]},render:function(a){const[i,n]=o.useState({1:!1,2:!1,3:!1}),t=d=>{var u;(u=a.onChange)==null||u.call(a,d),n(d)};return r.jsx(l,{items:a.items,...a.direction&&{direction:a.direction},...a.gap&&{gap:a.gap},width:a.width,height:a.height,...a.disabled!==void 0&&{disabled:a.disabled},...a.enableThreeState!==void 0&&{enableThreeState:a.enableThreeState},...a.validationMessages&&{validationMessages:a.validationMessages},value:i,onChange:t})}},m={args:{enableThreeState:!0},render:e=>{const[a,i]=o.useState({1:!0,2:null,3:!1});return r.jsx(l,{items:e.items,...e.direction&&{direction:e.direction},...e.gap&&{gap:e.gap},width:e.width,height:e.height,...e.disabled!==void 0&&{disabled:e.disabled},...e.enableThreeState!==void 0&&{enableThreeState:e.enableThreeState},...e.validationMessages&&{validationMessages:e.validationMessages},value:a,onChange:n=>{var t;(t=e.onChange)==null||t.call(e,n),i(n)}})}},b={args:{disabled:!0},render:function(a){return r.jsx(l,{items:a.items,...a.direction&&{direction:a.direction},...a.gap&&{gap:a.gap},width:a.width,height:a.height,...a.disabled!==void 0&&{disabled:a.disabled},...a.enableThreeState!==void 0&&{enableThreeState:a.enableThreeState},...a.validationMessages&&{validationMessages:a.validationMessages},value:{1:!0,2:!1,3:!0},onChange:i=>{var n;return(n=a.onChange)==null?void 0:n.call(a,i)}})}},v={args:{items:[{value:"1",display:"Option 1"},{value:"2",display:"Option 2",disabled:!0},{value:"3",display:"Option 3"}]},render:e=>{const[a,i]=o.useState({1:!0,2:!1,3:!0});return r.jsx(l,{items:e.items,...e.direction&&{direction:e.direction},...e.gap&&{gap:e.gap},width:e.width,height:e.height,...e.disabled!==void 0&&{disabled:e.disabled},...e.enableThreeState!==void 0&&{enableThreeState:e.enableThreeState},...e.validationMessages&&{validationMessages:e.validationMessages},value:a,onChange:n=>{var t;(t=e.onChange)==null||t.call(e,n),i(n)}})}},f={args:{width:300},render:e=>{const[a,i]=o.useState({1:!0,2:!1,3:!1});return r.jsx(l,{items:e.items,...e.direction&&{direction:e.direction},...e.gap&&{gap:e.gap},width:e.width,height:e.height,...e.disabled!==void 0&&{disabled:e.disabled},...e.enableThreeState!==void 0&&{enableThreeState:e.enableThreeState},...e.validationMessages&&{validationMessages:e.validationMessages},value:a,onChange:n=>{var t;(t=e.onChange)==null||t.call(e,n),i(n)}})}},S={args:{direction:"horizontal",gap:"2rem"},render:e=>{const[a,i]=o.useState({1:!0,2:!1,3:!1});return r.jsx(l,{items:e.items,...e.direction&&{direction:e.direction},...e.gap&&{gap:e.gap},width:e.width,height:e.height,...e.disabled!==void 0&&{disabled:e.disabled},...e.enableThreeState!==void 0&&{enableThreeState:e.enableThreeState},...e.validationMessages&&{validationMessages:e.validationMessages},value:a,onChange:n=>{var t;(t=e.onChange)==null||t.call(e,n),i(n)}})}},w={args:{gap:"3rem"},render:e=>{const[a,i]=o.useState({1:!0,2:!1,3:!1});return r.jsx(l,{items:e.items,...e.direction&&{direction:e.direction},...e.gap&&{gap:e.gap},width:e.width,height:e.height,...e.disabled!==void 0&&{disabled:e.disabled},...e.enableThreeState!==void 0&&{enableThreeState:e.enableThreeState},...e.validationMessages&&{validationMessages:e.validationMessages},value:a,onChange:n=>{var t;(t=e.onChange)==null||t.call(e,n),i(n)}})}};var V,R,k;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = React.useState<Record<string, boolean | null>>({
      "1": false,
      "2": true,
      "3": false
    });
    const handleChange: CheckBoxGroupProps["onChange"] = newValue => {
      args.onChange?.(newValue);
      setValue(newValue);
    };
    return <CheckBoxGroup items={args.items} {...args.direction && {
      direction: args.direction
    }} {...args.gap && {
      gap: args.gap
    }} width={args.width} height={args.height} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.enableThreeState !== undefined && {
      enableThreeState: args.enableThreeState
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} value={value} onChange={handleChange} />;
  }
}`,...(k=(R=g.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var G,B,j;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    validationMessages: ["Please select at least one option"]
  },
  render: function Render(args) {
    const [value, setValue] = React.useState<Record<string, boolean | null>>({
      "1": false,
      "2": false,
      "3": false
    });
    const handleChange: CheckBoxGroupProps["onChange"] = newValue => {
      args.onChange?.(newValue);
      setValue(newValue);
    };
    return <CheckBoxGroup items={args.items} {...args.direction && {
      direction: args.direction
    }} {...args.gap && {
      gap: args.gap
    }} width={args.width} height={args.height} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.enableThreeState !== undefined && {
      enableThreeState: args.enableThreeState
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} value={value} onChange={handleChange} />;
  }
}`,...(j=(B=p.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var q,O,W;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    enableThreeState: true
  },
  render: args => {
    const [value, setValue] = React.useState<Record<string, boolean | null>>({
      "1": true,
      "2": null,
      "3": false
    });
    return <CheckBoxGroup items={args.items} {...args.direction && {
      direction: args.direction
    }} {...args.gap && {
      gap: args.gap
    }} width={args.width} height={args.height} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.enableThreeState !== undefined && {
      enableThreeState: args.enableThreeState
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} value={value} onChange={newValue => {
      args.onChange?.(newValue);
      setValue(newValue);
    }} />;
  }
}`,...(W=(O=m.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var P,z,A;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: function Render(args) {
    return <CheckBoxGroup items={args.items} {...args.direction && {
      direction: args.direction
    }} {...args.gap && {
      gap: args.gap
    }} width={args.width} height={args.height} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.enableThreeState !== undefined && {
      enableThreeState: args.enableThreeState
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} value={{
      "1": true,
      "2": false,
      "3": true
    }} onChange={value => args.onChange?.(value)} />;
  }
}`,...(A=(z=b.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var E,I,D;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    items: [{
      value: "1",
      display: "Option 1"
    }, {
      value: "2",
      display: "Option 2",
      disabled: true
    }, {
      value: "3",
      display: "Option 3"
    }]
  },
  render: args => {
    const [value, setValue] = React.useState<Record<string, boolean | null>>({
      "1": true,
      "2": false,
      "3": true
    });
    return <CheckBoxGroup items={args.items} {...args.direction && {
      direction: args.direction
    }} {...args.gap && {
      gap: args.gap
    }} width={args.width} height={args.height} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.enableThreeState !== undefined && {
      enableThreeState: args.enableThreeState
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} value={value} onChange={newValue => {
      args.onChange?.(newValue);
      setValue(newValue);
    }} />;
  }
}`,...(D=(I=v.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var H,L,_;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    width: 300
  },
  render: args => {
    const [value, setValue] = React.useState<Record<string, boolean | null>>({
      "1": true,
      "2": false,
      "3": false
    });
    return <CheckBoxGroup items={args.items} {...args.direction && {
      direction: args.direction
    }} {...args.gap && {
      gap: args.gap
    }} width={args.width} height={args.height} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.enableThreeState !== undefined && {
      enableThreeState: args.enableThreeState
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} value={value} onChange={newValue => {
      args.onChange?.(newValue);
      setValue(newValue);
    }} />;
  }
}`,...(_=(L=f.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var N,$,F;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    gap: "2rem"
  },
  render: args => {
    const [value, setValue] = React.useState<Record<string, boolean | null>>({
      "1": true,
      "2": false,
      "3": false
    });
    return <CheckBoxGroup items={args.items} {...args.direction && {
      direction: args.direction
    }} {...args.gap && {
      gap: args.gap
    }} width={args.width} height={args.height} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.enableThreeState !== undefined && {
      enableThreeState: args.enableThreeState
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} value={value} onChange={newValue => {
      args.onChange?.(newValue);
      setValue(newValue);
    }} />;
  }
}`,...(F=($=S.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var J,K,Q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    gap: "3rem"
  },
  render: args => {
    const [value, setValue] = React.useState<Record<string, boolean | null>>({
      "1": true,
      "2": false,
      "3": false
    });
    return <CheckBoxGroup items={args.items} {...args.direction && {
      direction: args.direction
    }} {...args.gap && {
      gap: args.gap
    }} width={args.width} height={args.height} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.enableThreeState !== undefined && {
      enableThreeState: args.enableThreeState
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} value={value} onChange={newValue => {
      args.onChange?.(newValue);
      setValue(newValue);
    }} />;
  }
}`,...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ge=["Default","WithValidation","ThreeState","Disabled","WithSomeDisabled","WithCustomWidth","HorizontalLayout","CustomGap"];export{w as CustomGap,g as Default,b as Disabled,S as HorizontalLayout,m as ThreeState,f as WithCustomWidth,v as WithSomeDisabled,p as WithValidation,ge as __namedExportsOrder,ce as default};
