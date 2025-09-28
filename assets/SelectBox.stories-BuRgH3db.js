import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{R as i}from"./index-DpTt3J-R.js";import{V as Ce}from"./ValidationMessages-DkT8DR7l.js";import{C as O}from"./CheckBox-XtxcCkuZ.js";import{a as c}from"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";const d=i.forwardRef(({items:e,value:l=null,multiple:n=!1,validationMessages:a=[],onChange:u,visible:m=!0,width:D,height:L,onInitialized:R,disabled:p=!1,style:xe,className:ye="",...Ve},b)=>{var H;const v=i.useMemo(()=>Array.isArray(e)?e.map(t=>typeof t=="object"&&t!==null?t:{value:t,display:String(t)}):[],[e]),k=i.useCallback(t=>{if(/^-?\d+(\.\d+)?$/.test(t)){const r=Number(t);return Number.isNaN(r)?t:r}return t},[]),q=i.useCallback(t=>n?Array.isArray(t)?t.map(r=>r==null?"":String(r)):[]:t==null?"":String(t),[n]),[h,S]=i.useState(()=>q(l));i.useEffect(()=>{S(q(l))},[l,q]);const W=i.useRef(null),be=t=>{W.current=t,typeof b=="function"?b(t):b&&(b.current=t)};if(i.useEffect(()=>{R==null||R(W.current)},[]),!m)return null;const Se=t=>{const r=Array.isArray(h)?[...h]:[],o=r.indexOf(t);o>=0?r.splice(o,1):r.push(t),S(r);const y=r.map(Me=>k(String(Me)));u==null||u(y)},[g,x]=i.useState(!1),f=i.useRef(null);i.useEffect(()=>{function t(r){f.current&&(f.current.contains(r.target)||x(!1))}return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]);const I={...xe,...D!=null?{width:D}:{},...L!=null?{height:L}:{}},fe=Array.isArray(a)&&a.length>0,we=i.useMemo(()=>{if(!n)return"";const t=Array.isArray(h)?h:[];if(t.length===0)return"None";const r=v.filter(o=>t.indexOf(String(o.value))>=0).map(o=>o.display);return r.length>0?r.join(", "):`${t.length} selected`},[h,n,v]);return s.jsxs("div",{ref:be,style:I,className:`min-ui-selectbox-wrapper ${ye} min-ui-selectbox-container`,children:[n?s.jsxs("div",{ref:f,className:"min-ui-selectbox-dropdown-container",style:{height:I.height},children:[s.jsxs("button",{type:"button",onClick:()=>x(t=>!t),disabled:p,className:"min-ui-selectbox-button","aria-haspopup":"listbox","aria-expanded":g,children:[s.jsx("span",{className:"min-ui-selectbox-text",children:we}),s.jsx("span",{className:`min-ui-selectbox-arrow ${g?"min-ui-selectbox-arrow-open":""}`})]}),g&&s.jsx("div",{role:"listbox","aria-multiselectable":!0,className:"min-ui-selectbox-dropdown",children:v.map((t,r)=>{if(t.visible===!1)return null;const o=String(t.value),y=Array.isArray(h)&&h.indexOf(o)>=0;return s.jsx("div",{className:`min-ui-selectbox-item ${t.disabled||p?"min-ui-selectbox-item-disabled":""}`,children:s.jsx(O,{checked:y,disabled:p||t.disabled,onChange:()=>Se(o),label:t.display,width:"auto",className:"min-ui-selectbox-checkbox"})},r)})})]}):s.jsxs("div",{ref:f,className:"min-ui-selectbox-dropdown-container",style:{height:I.height},children:[s.jsxs("button",{type:"button",onClick:()=>x(t=>!t),disabled:p,className:"min-ui-selectbox-button","aria-haspopup":"listbox","aria-expanded":g,children:[s.jsx("span",{className:"min-ui-selectbox-text",children:((H=v.find(t=>String(t.value)===String(h)))==null?void 0:H.display)||"--"}),s.jsx("span",{className:`min-ui-selectbox-arrow ${g?"min-ui-selectbox-arrow-open":""}`})]}),g&&s.jsx("div",{role:"listbox",className:"min-ui-selectbox-dropdown",children:v.map((t,r)=>{if(t.visible===!1)return null;const o=String(t.value),y=String(h)===o;return s.jsx("div",{className:`min-ui-selectbox-item ${t.disabled||p?"min-ui-selectbox-item-disabled":""}`,onClick:()=>{!t.disabled&&!p&&(S(o),u==null||u(o===""?null:k(o)),x(!1))},children:n?s.jsx(O,{checked:y,disabled:p||t.disabled,onChange:()=>{S(o),u==null||u(o===""?null:k(o)),x(!1)},label:t.display,width:"auto",className:"min-ui-selectbox-checkbox"}):s.jsx("span",{className:"min-ui-selectbox-item-label",children:t.display})},r)})})]}),s.jsx(Ce,{visible:fe,messages:a})]})});d.displayName="SelectBox";d.__docgenInfo={description:"",methods:[],displayName:"SelectBox",props:{items:{required:!0,tsType:{name:"union",raw:"SelectBoxItem[] | (string | number)[]",elements:[{name:"Array",elements:[{name:"SelectBoxItem"}],raw:"SelectBoxItem[]"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"}]},description:""},value:{required:!1,tsType:{name:"any"},description:"",defaultValue:{value:"null",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},validationMessages:{required:!1,tsType:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}]},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},visible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},width:{required:!1,tsType:{name:'ReactCSSProperties["width"]',raw:'React.CSSProperties["width"]'},description:""},height:{required:!1,tsType:{name:'ReactCSSProperties["height"]',raw:'React.CSSProperties["height"]'},description:""},onInitialized:{required:!1,tsType:{name:"signature",type:"function",raw:"(el: HTMLDivElement | HTMLSelectElement | null) => void",signature:{arguments:[{type:{name:"union",raw:"HTMLDivElement | HTMLSelectElement | null",elements:[{name:"HTMLDivElement"},{name:"HTMLSelectElement"},{name:"null"}]},name:"el"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const Re={title:"Components/SelectBox",component:d,parameters:{layout:"centered"},tags:["autodocs"],args:{items:[{value:"a",display:"Alpha"},{value:"b",display:"Bravo"},{value:"c",display:"Charlie"}],multiple:!1,disabled:!1,width:"fit-content",height:"fit-content",validationMessages:null},argTypes:{onChange:{action:"changed"},multiple:{control:"boolean"},disabled:{control:"boolean"},items:{control:"object",description:"Array of items to display in the select box"},width:{control:"text",description:"Width of the select box (CSS value like '200px', '100%', etc.)",table:{type:{summary:"string | number"}}},height:{control:"text",description:"Height of the select box (CSS value like '40px', 'auto', etc.)",table:{type:{summary:"string | number"}}}}},w={render:e=>{const[l,n]=i.useState(null);return s.jsx(d,{items:e.items,multiple:e.multiple,disabled:e.disabled,width:e.width,height:e.height,validationMessages:e.validationMessages,value:l,onChange:a=>{c("onChange")(a),n(a)}})}},M={args:{multiple:!0},render:e=>{const[l,n]=i.useState(["b"]);return s.jsx(d,{items:e.items,multiple:e.multiple,disabled:e.disabled,width:e.width,height:e.height,validationMessages:e.validationMessages,value:l,onChange:a=>{c("onChange")(a),n(a??[])}})}},C={args:{validationMessages:["Selection is required"]},render:e=>{const[l,n]=i.useState(null);return s.jsx(d,{items:e.items,multiple:e.multiple,disabled:e.disabled,width:e.width,height:e.height,validationMessages:e.validationMessages,value:l,onChange:a=>{c("onChange")(a),n(a)}})}},V={args:{disabled:!0},render:e=>s.jsx(d,{items:e.items,multiple:e.multiple,disabled:e.disabled,width:e.width,height:e.height,validationMessages:e.validationMessages,value:"a",onChange:c("onChange")})},j={args:{items:["A","B","C"]},render:e=>{const[l,n]=i.useState("B");return s.jsx(d,{items:e.items,multiple:e.multiple,disabled:e.disabled,width:e.width,height:e.height,validationMessages:e.validationMessages,value:l,onChange:a=>{c("onChange")(a),n(a)}})}},A={args:{items:[1,2,3]},render:e=>{const[l,n]=i.useState(2);return s.jsx(d,{items:e.items,multiple:e.multiple,disabled:e.disabled,width:e.width,height:e.height,validationMessages:e.validationMessages,value:l,onChange:a=>{c("onChange")(a),n(a)}})}},N={args:{width:"300px",height:"50px"},render:e=>{const[l,n]=i.useState(null);return s.jsx(d,{items:e.items,multiple:e.multiple,disabled:e.disabled,width:e.width,height:e.height,validationMessages:e.validationMessages,value:l,onChange:a=>{c("onChange")(a),n(a)}})}},E={args:{items:[{value:"short",display:"Short"},{value:"verylongtext",display:"This is a very long text that should be truncated with ellipsis"},{value:"medium",display:"Medium length text"},{value:"anotherlongone",display:"Another very long text item that exceeds the container width"}],width:"150px"},render:e=>{const[l,n]=i.useState("verylongtext");return s.jsxs("div",{style:{padding:"20px",border:"1px dashed #ccc"},children:[s.jsx("h4",{children:"Single Mode with Ellipsis (Width: 150px)"}),s.jsx(d,{items:e.items,multiple:e.multiple,disabled:e.disabled,width:e.width,height:e.height,validationMessages:e.validationMessages,value:l,onChange:a=>{c("onChange")(a),n(a)}})]})}},B={args:{items:[{value:"short",display:"Short"},{value:"verylongtext",display:"This is a very long text that should be truncated with ellipsis"},{value:"medium",display:"Medium length text"},{value:"anotherlongone",display:"Another very long text item that exceeds the container width"},{value:"superlong",display:"Super duper extremely long text that definitely needs ellipsis truncation"}],multiple:!0,width:"200px"},render:e=>{const[l,n]=i.useState(["verylongtext","anotherlongone"]);return s.jsxs("div",{style:{padding:"20px",border:"1px dashed #ccc"},children:[s.jsx("h4",{children:"Multiple Mode with Ellipsis (Width: 200px)"}),s.jsx(d,{items:e.items,multiple:e.multiple,disabled:e.disabled,width:e.width,height:e.height,validationMessages:e.validationMessages,value:l,onChange:a=>{c("onChange")(a),n(a??[])}})]})}},T={render:()=>{const[e,l]=i.useState("verylongtext"),[n,a]=i.useState(["verylongtext","anotherlongone"]),u=[{value:"short",display:"Short"},{value:"verylongtext",display:"This is a very long text that should be truncated with ellipsis"},{value:"medium",display:"Medium length text"},{value:"anotherlongone",display:"Another very long text item that exceeds the container width"},{value:"superlong",display:"Super duper extremely long text that definitely needs ellipsis truncation"}];return s.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:[s.jsx("h3",{children:"Ellipsis Comparison"}),s.jsxs("div",{style:{border:"1px dashed #ccc",padding:"15px"},children:[s.jsx("h4",{children:"Single Mode (150px width)"}),s.jsx(d,{items:u,multiple:!1,width:"150px",value:e,onChange:m=>{c("onChange")(m),l(m)}})]}),s.jsxs("div",{style:{border:"1px dashed #ccc",padding:"15px"},children:[s.jsx("h4",{children:"Multiple Mode (200px width)"}),s.jsx(d,{items:u,multiple:!0,width:"200px",value:n,onChange:m=>{c("onChange")(m),a(m??[])}})]})]})}};var $,P,_;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = React.useState<string | number | null>(null);
    return <SelectBox items={args.items} multiple={args.multiple} disabled={args.disabled} width={args.width} height={args.height} validationMessages={args.validationMessages} value={val} onChange={v => {
      action("onChange")(v);
      setVal(v);
    }} />;
  }
}`,...(_=(P=w.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var F,G,J;M.parameters={...M.parameters,docs:{...(F=M.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: args => {
    const [val, setVal] = React.useState<Array<string | number>>(["b"]);
    return <SelectBox items={args.items} multiple={args.multiple} disabled={args.disabled} width={args.width} height={args.height} validationMessages={args.validationMessages} value={val} onChange={v => {
      action("onChange")(v);
      setVal(v as any ?? []);
    }} />;
  }
}`,...(J=(G=M.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    validationMessages: ["Selection is required"]
  },
  render: args => {
    const [val, setVal] = React.useState<string | number | null>(null);
    return <SelectBox items={args.items} multiple={args.multiple} disabled={args.disabled} width={args.width} height={args.height} validationMessages={args.validationMessages} value={val} onChange={v => {
      action("onChange")(v);
      setVal(v);
    }} />;
  }
}`,...(U=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;V.parameters={...V.parameters,docs:{...(X=V.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <SelectBox items={args.items} multiple={args.multiple} disabled={args.disabled} width={args.width} height={args.height} validationMessages={args.validationMessages} value={"a"} onChange={action("onChange")} />
}`,...(Z=(Y=V.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var z,ee,te;j.parameters={...j.parameters,docs:{...(z=j.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: ["A", "B", "C"]
  },
  render: args => {
    const [val, setVal] = React.useState<string | number | null>("B");
    return <SelectBox items={args.items} multiple={args.multiple} disabled={args.disabled} width={args.width} height={args.height} validationMessages={args.validationMessages} value={val} onChange={v => {
      action("onChange")(v);
      setVal(v);
    }} />;
  }
}`,...(te=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ae,ne;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    items: [1, 2, 3]
  },
  render: args => {
    const [val, setVal] = React.useState<number | null>(2);
    return <SelectBox items={args.items} multiple={args.multiple} disabled={args.disabled} width={args.width} height={args.height} validationMessages={args.validationMessages} value={val} onChange={v => {
      action("onChange")(v);
      setVal(v as number | null);
    }} />;
  }
}`,...(ne=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var ie,le,re;N.parameters={...N.parameters,docs:{...(ie=N.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    width: "300px",
    height: "50px"
  },
  render: args => {
    const [val, setVal] = React.useState<string | number | null>(null);
    return <SelectBox items={args.items} multiple={args.multiple} disabled={args.disabled} width={args.width} height={args.height} validationMessages={args.validationMessages} value={val} onChange={v => {
      action("onChange")(v);
      setVal(v);
    }} />;
  }
}`,...(re=(le=N.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var oe,de,ue;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    items: [{
      value: "short",
      display: "Short"
    }, {
      value: "verylongtext",
      display: "This is a very long text that should be truncated with ellipsis"
    }, {
      value: "medium",
      display: "Medium length text"
    }, {
      value: "anotherlongone",
      display: "Another very long text item that exceeds the container width"
    }],
    width: "150px"
  },
  render: args => {
    const [val, setVal] = React.useState<string | number | null>("verylongtext");
    return <div style={{
      padding: "20px",
      border: "1px dashed #ccc"
    }}>
        <h4>Single Mode with Ellipsis (Width: 150px)</h4>
        <SelectBox items={args.items} multiple={args.multiple} disabled={args.disabled} width={args.width} height={args.height} validationMessages={args.validationMessages} value={val} onChange={v => {
        action("onChange")(v);
        setVal(v);
      }} />
      </div>;
  }
}`,...(ue=(de=E.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ce,he,me;B.parameters={...B.parameters,docs:{...(ce=B.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    items: [{
      value: "short",
      display: "Short"
    }, {
      value: "verylongtext",
      display: "This is a very long text that should be truncated with ellipsis"
    }, {
      value: "medium",
      display: "Medium length text"
    }, {
      value: "anotherlongone",
      display: "Another very long text item that exceeds the container width"
    }, {
      value: "superlong",
      display: "Super duper extremely long text that definitely needs ellipsis truncation"
    }],
    multiple: true,
    width: "200px"
  },
  render: args => {
    const [val, setVal] = React.useState<Array<string | number>>(["verylongtext", "anotherlongone"]);
    return <div style={{
      padding: "20px",
      border: "1px dashed #ccc"
    }}>
        <h4>Multiple Mode with Ellipsis (Width: 200px)</h4>
        <SelectBox items={args.items} multiple={args.multiple} disabled={args.disabled} width={args.width} height={args.height} validationMessages={args.validationMessages} value={val} onChange={v => {
        action("onChange")(v);
        setVal(v as any ?? []);
      }} />
      </div>;
  }
}`,...(me=(he=B.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var pe,ge,ve;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const [val1, setVal1] = React.useState<string | number | null>("verylongtext");
    const [val2, setVal2] = React.useState<Array<string | number>>(["verylongtext", "anotherlongone"]);
    const longItems = [{
      value: "short",
      display: "Short"
    }, {
      value: "verylongtext",
      display: "This is a very long text that should be truncated with ellipsis"
    }, {
      value: "medium",
      display: "Medium length text"
    }, {
      value: "anotherlongone",
      display: "Another very long text item that exceeds the container width"
    }, {
      value: "superlong",
      display: "Super duper extremely long text that definitely needs ellipsis truncation"
    }];
    return <div style={{
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
        <h3>Ellipsis Comparison</h3>

        <div style={{
        border: "1px dashed #ccc",
        padding: "15px"
      }}>
          <h4>Single Mode (150px width)</h4>
          <SelectBox items={longItems} multiple={false} width="150px" value={val1} onChange={v => {
          action("onChange")(v);
          setVal1(v);
        }} />
        </div>

        <div style={{
        border: "1px dashed #ccc",
        padding: "15px"
      }}>
          <h4>Multiple Mode (200px width)</h4>
          <SelectBox items={longItems} multiple={true} width="200px" value={val2} onChange={v => {
          action("onChange")(v);
          setVal2(v as any ?? []);
        }} />
        </div>
      </div>;
  }
}`,...(ve=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};const ke=["Default","Multiple","WithValidation","Disabled","SimpleStringItems","NumericItems","WithCustomSize","EllipsisSingleMode","EllipsisMultipleMode","EllipsisComparison"];export{w as Default,V as Disabled,T as EllipsisComparison,B as EllipsisMultipleMode,E as EllipsisSingleMode,M as Multiple,A as NumericItems,j as SimpleStringItems,N as WithCustomSize,C as WithValidation,ke as __namedExportsOrder,Re as default};
