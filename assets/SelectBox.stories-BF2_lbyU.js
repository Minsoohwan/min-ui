import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{R as r}from"./index-DpTt3J-R.js";import{S as i}from"./SelectBox-qxA2r7T9.js";import{a as l}from"./index-B-lxVbXh.js";import"./index-D9ZhQrDp.js";import"./ValidationMessages-DkT8DR7l.js";import"./CheckBox-XtxcCkuZ.js";import"./v4-CtRu48qb.js";const ne={title:"Components/SelectBox",component:i,parameters:{layout:"centered"},tags:["autodocs"],args:{items:[{value:"a",display:"Alpha"},{value:"b",display:"Bravo"},{value:"c",display:"Charlie"}],multiple:!1,disabled:!1,width:"fit-content",height:"fit-content",validationMessages:null},argTypes:{onChange:{action:"changed"},multiple:{control:"boolean"},disabled:{control:"boolean"},items:{control:"object",description:"Array of items to display in the select box"},width:{control:"text",description:"Width of the select box (CSS value like '200px', '100%', etc.)",table:{type:{summary:"string | number"}}},height:{control:"text",description:"Height of the select box (CSS value like '40px', 'auto', etc.)",table:{type:{summary:"string | number"}}}}},d={render:e=>{const[s,n]=r.useState(null);return a.jsx(i,{items:e.items,multiple:e.multiple,disabled:e.disabled,width:e.width,height:e.height,validationMessages:e.validationMessages,value:s,onChange:t=>{l("onChange")(t),n(t)}})}},h={args:{multiple:!0},render:e=>{const[s,n]=r.useState(["b"]);return a.jsx(i,{items:e.items,multiple:e.multiple,disabled:e.disabled,width:e.width,height:e.height,validationMessages:e.validationMessages,value:s,onChange:t=>{l("onChange")(t),n(t??[])}})}},u={args:{validationMessages:["Selection is required"]},render:e=>{const[s,n]=r.useState(null);return a.jsx(i,{items:e.items,multiple:e.multiple,disabled:e.disabled,width:e.width,height:e.height,validationMessages:e.validationMessages,value:s,onChange:t=>{l("onChange")(t),n(t)}})}},g={args:{disabled:!0},render:e=>a.jsx(i,{items:e.items,multiple:e.multiple,disabled:e.disabled,width:e.width,height:e.height,validationMessages:e.validationMessages,value:"a",onChange:l("onChange")})},p={args:{items:["A","B","C"]},render:e=>{const[s,n]=r.useState("B");return a.jsx(i,{items:e.items,multiple:e.multiple,disabled:e.disabled,width:e.width,height:e.height,validationMessages:e.validationMessages,value:s,onChange:t=>{l("onChange")(t),n(t)}})}},m={args:{items:[1,2,3]},render:e=>{const[s,n]=r.useState(2);return a.jsx(i,{items:e.items,multiple:e.multiple,disabled:e.disabled,width:e.width,height:e.height,validationMessages:e.validationMessages,value:s,onChange:t=>{l("onChange")(t),n(t)}})}},c={args:{width:"300px",height:"50px"},render:e=>{const[s,n]=r.useState(null);return a.jsx(i,{items:e.items,multiple:e.multiple,disabled:e.disabled,width:e.width,height:e.height,validationMessages:e.validationMessages,value:s,onChange:t=>{l("onChange")(t),n(t)}})}},v={args:{items:[{value:"short",display:"Short"},{value:"verylongtext",display:"This is a very long text that should be truncated with ellipsis"},{value:"medium",display:"Medium length text"},{value:"anotherlongone",display:"Another very long text item that exceeds the container width"}],width:"150px"},render:e=>{const[s,n]=r.useState("verylongtext");return a.jsxs("div",{style:{padding:"20px",border:"1px dashed #ccc"},children:[a.jsx("h4",{children:"Single Mode with Ellipsis (Width: 150px)"}),a.jsx(i,{items:e.items,multiple:e.multiple,disabled:e.disabled,width:e.width,height:e.height,validationMessages:e.validationMessages,value:s,onChange:t=>{l("onChange")(t),n(t)}})]})}},x={args:{items:[{value:"short",display:"Short"},{value:"verylongtext",display:"This is a very long text that should be truncated with ellipsis"},{value:"medium",display:"Medium length text"},{value:"anotherlongone",display:"Another very long text item that exceeds the container width"},{value:"superlong",display:"Super duper extremely long text that definitely needs ellipsis truncation"}],multiple:!0,width:"200px"},render:e=>{const[s,n]=r.useState(["verylongtext","anotherlongone"]);return a.jsxs("div",{style:{padding:"20px",border:"1px dashed #ccc"},children:[a.jsx("h4",{children:"Multiple Mode with Ellipsis (Width: 200px)"}),a.jsx(i,{items:e.items,multiple:e.multiple,disabled:e.disabled,width:e.width,height:e.height,validationMessages:e.validationMessages,value:s,onChange:t=>{l("onChange")(t),n(t??[])}})]})}},y={render:()=>{const[e,s]=r.useState("verylongtext"),[n,t]=r.useState(["verylongtext","anotherlongone"]),b=[{value:"short",display:"Short"},{value:"verylongtext",display:"This is a very long text that should be truncated with ellipsis"},{value:"medium",display:"Medium length text"},{value:"anotherlongone",display:"Another very long text item that exceeds the container width"},{value:"superlong",display:"Super duper extremely long text that definitely needs ellipsis truncation"}];return a.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:[a.jsx("h3",{children:"Ellipsis Comparison"}),a.jsxs("div",{style:{border:"1px dashed #ccc",padding:"15px"},children:[a.jsx("h4",{children:"Single Mode (150px width)"}),a.jsx(i,{items:b,multiple:!1,width:"150px",value:e,onChange:o=>{l("onChange")(o),s(o)}})]}),a.jsxs("div",{style:{border:"1px dashed #ccc",padding:"15px"},children:[a.jsx("h4",{children:"Multiple Mode (200px width)"}),a.jsx(i,{items:b,multiple:!0,width:"200px",value:n,onChange:o=>{l("onChange")(o),t(o??[])}})]})]})}};var S,w,M;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = React.useState<string | number | null>(null);
    return <SelectBox items={args.items} multiple={args.multiple} disabled={args.disabled} width={args.width} height={args.height} validationMessages={args.validationMessages} value={val} onChange={v => {
      action("onChange")(v);
      setVal(v);
    }} />;
  }
}`,...(M=(w=d.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var C,V,f;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(f=(V=h.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};var j,B,E;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(E=(B=u.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var A,R,W;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <SelectBox items={args.items} multiple={args.multiple} disabled={args.disabled} width={args.width} height={args.height} validationMessages={args.validationMessages} value={"a"} onChange={action("onChange")} />
}`,...(W=(R=g.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var I,T,D;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(D=(T=p.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var k,q,z;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var N,_,H;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(H=(_=c.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var O,F,G;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(G=(F=v.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,L;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(L=(K=x.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var P,Q,U;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const ie=["Default","Multiple","WithValidation","Disabled","SimpleStringItems","NumericItems","WithCustomSize","EllipsisSingleMode","EllipsisMultipleMode","EllipsisComparison"];export{d as Default,g as Disabled,y as EllipsisComparison,x as EllipsisMultipleMode,v as EllipsisSingleMode,h as Multiple,m as NumericItems,p as SimpleStringItems,c as WithCustomSize,u as WithValidation,ie as __namedExportsOrder,ne as default};
