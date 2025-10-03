import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{C as d}from"./CheckBoxGroup-dibTUBOw.js";import"./index-B-lxVbXh.js";import{R as o}from"./index-DpTt3J-R.js";import"./CheckBox-XtxcCkuZ.js";import"./ValidationMessages-DkT8DR7l.js";import"./v4-CtRu48qb.js";const U={title:"Components/CheckBoxGroup",component:d,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>s.jsx("div",{style:{padding:"1rem"},children:s.jsx(e,{})})],args:{items:[{value:"1",display:"Option 1"},{value:"2",display:"Option 2"},{value:"3",display:"Option 3"}],direction:"vertical",gap:"0.5rem",width:"fit-content",height:"fit-content",disabled:!1,enableThreeState:!1},argTypes:{onChange:{action:"changed"},direction:{control:"radio",options:["horizontal","vertical"],description:"Layout direction of checkboxes"},gap:{control:"text",description:'CSS gap value (e.g., "1rem", "10px")'},items:{control:"object",description:"Array of items to display as checkboxes"},width:{control:"text",description:"Width of the checkbox group (CSS value)",table:{type:{summary:"string | number"}}},height:{control:"text",description:"Height of the checkbox group (CSS value)",table:{type:{summary:"string | number"}}}}},h={render:function(a){const[i,n]=o.useState({1:!1,2:!0,3:!1}),t=r=>{var l;(l=a.onChange)==null||l.call(a,r),n(r)};return s.jsx(d,{items:a.items,...a.direction&&{direction:a.direction},...a.gap&&{gap:a.gap},width:a.width,height:a.height,...a.disabled!==void 0&&{disabled:a.disabled},...a.enableThreeState!==void 0&&{enableThreeState:a.enableThreeState},...a.validationMessages&&{validationMessages:a.validationMessages},value:i,onChange:t})}},u={args:{validationMessages:["Please select at least one option"]},render:function(a){const[i,n]=o.useState({1:!1,2:!1,3:!1}),t=r=>{var l;(l=a.onChange)==null||l.call(a,r),n(r)};return s.jsx(d,{items:a.items,...a.direction&&{direction:a.direction},...a.gap&&{gap:a.gap},width:a.width,height:a.height,...a.disabled!==void 0&&{disabled:a.disabled},...a.enableThreeState!==void 0&&{enableThreeState:a.enableThreeState},...a.validationMessages&&{validationMessages:a.validationMessages},value:i,onChange:t})}},g={args:{enableThreeState:!0},render:e=>{const[a,i]=o.useState({1:!0,2:null,3:!1});return s.jsx(d,{items:e.items,...e.direction&&{direction:e.direction},...e.gap&&{gap:e.gap},width:e.width,height:e.height,...e.disabled!==void 0&&{disabled:e.disabled},...e.enableThreeState!==void 0&&{enableThreeState:e.enableThreeState},...e.validationMessages&&{validationMessages:e.validationMessages},value:a,onChange:n=>{var t;(t=e.onChange)==null||t.call(e,n),i(n)}})}},c={args:{disabled:!0},render:function(a){return s.jsx(d,{items:a.items,...a.direction&&{direction:a.direction},...a.gap&&{gap:a.gap},width:a.width,height:a.height,...a.disabled!==void 0&&{disabled:a.disabled},...a.enableThreeState!==void 0&&{enableThreeState:a.enableThreeState},...a.validationMessages&&{validationMessages:a.validationMessages},value:{1:!0,2:!1,3:!0},onChange:i=>{var n;return(n=a.onChange)==null?void 0:n.call(a,i)}})}},p={args:{items:[{value:"1",display:"Option 1"},{value:"2",display:"Option 2",disabled:!0},{value:"3",display:"Option 3"}]},render:e=>{const[a,i]=o.useState({1:!0,2:!1,3:!0});return s.jsx(d,{items:e.items,...e.direction&&{direction:e.direction},...e.gap&&{gap:e.gap},width:e.width,height:e.height,...e.disabled!==void 0&&{disabled:e.disabled},...e.enableThreeState!==void 0&&{enableThreeState:e.enableThreeState},...e.validationMessages&&{validationMessages:e.validationMessages},value:a,onChange:n=>{var t;(t=e.onChange)==null||t.call(e,n),i(n)}})}},b={args:{width:300},render:e=>{const[a,i]=o.useState({1:!0,2:!1,3:!1});return s.jsx(d,{items:e.items,...e.direction&&{direction:e.direction},...e.gap&&{gap:e.gap},width:e.width,height:e.height,...e.disabled!==void 0&&{disabled:e.disabled},...e.enableThreeState!==void 0&&{enableThreeState:e.enableThreeState},...e.validationMessages&&{validationMessages:e.validationMessages},value:a,onChange:n=>{var t;(t=e.onChange)==null||t.call(e,n),i(n)}})}},v={args:{direction:"horizontal",gap:"2rem"},render:e=>{const[a,i]=o.useState({1:!0,2:!1,3:!1});return s.jsx(d,{items:e.items,...e.direction&&{direction:e.direction},...e.gap&&{gap:e.gap},width:e.width,height:e.height,...e.disabled!==void 0&&{disabled:e.disabled},...e.enableThreeState!==void 0&&{enableThreeState:e.enableThreeState},...e.validationMessages&&{validationMessages:e.validationMessages},value:a,onChange:n=>{var t;(t=e.onChange)==null||t.call(e,n),i(n)}})}},m={args:{gap:"3rem"},render:e=>{const[a,i]=o.useState({1:!0,2:!1,3:!1});return s.jsx(d,{items:e.items,...e.direction&&{direction:e.direction},...e.gap&&{gap:e.gap},width:e.width,height:e.height,...e.disabled!==void 0&&{disabled:e.disabled},...e.enableThreeState!==void 0&&{enableThreeState:e.enableThreeState},...e.validationMessages&&{validationMessages:e.validationMessages},value:a,onChange:n=>{var t;(t=e.onChange)==null||t.call(e,n),i(n)}})}};var S,f,C;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(f=h.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var T,w,M;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(w=u.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var V,x,R;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(x=g.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var y,k,G;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(G=(k=c.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var j,B,O;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(O=(B=p.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var W,D,z;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(z=(D=b.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var P,H,L;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(H=v.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var E,_,A;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(A=(_=m.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const X=["Default","WithValidation","ThreeState","Disabled","WithSomeDisabled","WithCustomWidth","HorizontalLayout","CustomGap"];export{m as CustomGap,h as Default,c as Disabled,v as HorizontalLayout,g as ThreeState,b as WithCustomWidth,p as WithSomeDisabled,u as WithValidation,X as __namedExportsOrder,U as default};
