import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{R as h}from"./index-DpTt3J-R.js";import{V as Nn}from"./ValidationMessages-DkT8DR7l.js";import{C as In}from"./CheckBox-XtxcCkuZ.js";const g=h.forwardRef(({data:e=[],value:r=[],selectMode:l="single",validationMessages:d=[],onChange:a,visible:v=!0,width:I,height:xn,onInitialized:se,disabled:z=!1,expandable:oe=!0,showCheckboxes:mn=!1,indentSize:ae=20,loading:wn=!1,onLoadingChange:S,onNodeExpand:te,onNodeCollapse:ie},E)=>{const[m,T]=h.useState([]),[vn,A]=h.useState(!1),[re,P]=h.useState(new Set),[j,ce]=h.useState(new Set(r)),[Sn,R]=h.useState(new Set),[Cn,W]=h.useState(new Map),[he,L]=h.useState(null);h.useEffect(()=>{(async()=>{if(typeof e=="function"){A(!0),S==null||S(!0),L(null);try{const i=await e();T(i),P(new Set(i.filter(c=>c.expanded).map(c=>c.id)))}catch(i){console.error("Failed to load tree data:",i);const c=i instanceof Error?i.message:"Failed to load tree data";L(c),T([])}finally{A(!1),S==null||S(!1)}}else T(e),P(new Set(e.filter(i=>i.expanded).map(i=>i.id)))})()},[e,S]);const ue=h.useRef(null),fn=n=>{ue.current=n,typeof E=="function"?E(n):E&&(E.current=n)};if(h.useEffect(()=>{se==null||se(ue.current)},[]),h.useEffect(()=>{ce(new Set(r))},[r]),!v)return null;const Mn=Array.isArray(d)&&d.length>0,C=(n,i)=>{for(const c of n){if(c.id===i)return c;if(c.children){const t=C(c.children,i);if(t)return t}}return null},le=(n,i,c)=>n.map(t=>t.id===i?{...t,children:c}:t.children?{...t,children:le(t.children,i,c)}:t),y=n=>{const i=[];if(n.children)for(const c of n.children)i.push(c.id),i.push(...y(c));return i},$=n=>{const i=[],c=(o,N,f)=>{for(const p of o){if(p.id===N)return f||null;if(p.children){const u=c(p.children,N,p.id);if(u)return u}}return null};let t=n;for(;t;){const o=c(m,t);if(o)i.push(o),t=o;else break}return i},yn=async n=>{if(!oe)return;const i=C(m,n);if(i!=null&&i.disabled)return;if(re.has(n))P(t=>{const o=new Set(t);return o.delete(n),o}),ie==null||ie(n);else if(P(t=>{const o=new Set(t);return o.add(n),o}),te==null||te(n),i&&(!i.children||i.children.length===0)&&i.loadChildren){W(t=>{const o=new Map(t);return o.delete(n),o}),R(t=>{const o=new Set(t);return o.add(n),o});try{const t=await i.loadChildren();T(o=>le(o,n,t))}catch(t){console.error(`Failed to load children for node ${n}:`,t);const o=t instanceof Error?t.message:"Failed to load children";W(N=>{const f=new Map(N);return f.set(n,o),f})}finally{R(t=>{const o=new Set(t);return o.delete(n),o})}}},be=n=>{if(z||l==="none")return;ce(c=>{const t=new Set(c);if(l==="single")t.clear(),t.add(n);else if(l==="multiple")t.has(n)?t.delete(n):t.add(n);else if(l==="recursive"){const o=C(m,n);if(!o)return c;t.has(n)?(t.delete(n),y(o).forEach(u=>t.delete(u)),$(n).forEach(u=>{const M=C(m,u);M&&(y(M).some(b=>t.has(b))||t.delete(u))})):(t.add(n),y(o).forEach(u=>{const M=C(m,u);M&&!M.disabled&&t.add(u)}),$(n).forEach(u=>{const M=C(m,u);M&&y(M).every(b=>{const k=C(m,b);return(k==null?void 0:k.disabled)||t.has(b)})&&t.add(u)}))}return t});let i=[];if(l==="single")i=[n];else if(l==="multiple"){const c=new Set(j);c.has(n)?c.delete(n):c.add(n),i=Array.from(c)}else if(l==="recursive"){const c=C(m,n);if(!c)return;const t=j.has(n),o=new Set(j);t?(o.delete(n),y(c).forEach(p=>o.delete(p)),$(n).forEach(p=>{const u=C(m,p);u&&(y(u).some(x=>o.has(x))||o.delete(p))})):(o.add(n),y(c).forEach(p=>{const u=C(m,p);u&&!u.disabled&&o.add(p)}),$(n).forEach(p=>{const u=C(m,p);u&&y(u).every(x=>{const b=C(m,x);return(b==null?void 0:b.disabled)||o.has(x)})&&o.add(p)})),i=Array.from(o)}a==null||a(i)},ge=(n,i=0)=>{if(n.visible===!1)return null;const c=re.has(n.id),t=j.has(n.id),o=n.children&&n.children.length>0,N=n.hasChildren||n.loadChildren&&(!n.children||n.children.length===0),f=Sn.has(n.id),p=Cn.get(n.id),u={paddingLeft:`${i*ae}px`},M=(()=>{if(l!=="recursive"||!o)return!1;const w=y(n),x=w.some(k=>j.has(k)),b=w.every(k=>{const D=C(m,k);return(D==null?void 0:D.disabled)||j.has(k)});return x&&!b})();return s.jsxs("div",{className:"min-ui-tree-node",children:[s.jsxs("div",{className:`min-ui-tree-node-content ${t?"selected":""} ${n.disabled||z?"disabled":""}`,style:u,onClick:()=>{n.disabled||z||l!=="none"&&be(n.id)},children:[oe&&(o||N)?s.jsx("button",{type:"button",className:`min-ui-tree-expand-button ${c?"expanded":""} ${n.disabled||z,""}`,disabled:n.disabled||z||f,onClick:w=>{w.stopPropagation(),yn(n.id)},children:f&&s.jsx("div",{className:"min-ui-tree-loading-spinner"})}):s.jsx("div",{className:"min-ui-tree-expand-placeholder"}),mn&&s.jsx(In,{disabled:n.disabled||z,onChange:w=>{w.stopPropagation(),l!=="none"&&be(n.id)},width:"auto",className:"min-ui-tree-checkbox",enableThreeState:l==="recursive",value:M?null:t}),s.jsx("span",{className:"min-ui-tree-label",children:n.label})]}),c&&s.jsx("div",{className:"min-ui-tree-children",children:f?s.jsxs("div",{className:"min-ui-tree-loading",style:{paddingLeft:`${(i+1)*ae}px`},children:[s.jsx("div",{className:"min-ui-tree-loading-spinner"}),s.jsx("span",{className:"min-ui-text-gray-500 min-ui-text-sm",children:"Loading..."})]}):p?s.jsxs("div",{className:"min-ui-tree-error",style:{paddingLeft:`${(i+1)*ae}px`},children:[s.jsxs("span",{className:"min-ui-tree-error-text",children:["⚠️ ",p]}),s.jsx("button",{type:"button",className:"min-ui-tree-error-retry",onClick:async w=>{if(w.stopPropagation(),W(x=>{const b=new Map(x);return b.delete(n.id),b}),n&&n.loadChildren){R(x=>{const b=new Set(x);return b.add(n.id),b});try{const x=await n.loadChildren();T(b=>le(b,n.id,x))}catch(x){console.error(`Failed to load children for node ${n.id}:`,x);const b=x instanceof Error?x.message:"Failed to load children";W(k=>{const D=new Map(k);return D.set(n.id,b),D})}finally{R(x=>{const b=new Set(x);return b.delete(n.id),b})}}},children:"Retry"})]}):o?n.children.map(w=>ge(w,i+1)):null})]},n.id)},kn={width:I??"100%",height:xn||300};return s.jsxs("div",{ref:fn,style:kn,className:"min-ui-tree-wrapper min-ui-tree-container",children:[vn||wn?s.jsx("div",{className:"min-ui-flex min-ui-items-center min-ui-justify-center min-ui-p-4",children:s.jsx("div",{className:"min-ui-text-gray-500",children:"Loading..."})}):he?s.jsx("div",{className:"min-ui-flex min-ui-items-center min-ui-justify-center min-ui-p-4",children:s.jsx("div",{className:"min-ui-bg-red-500 min-ui-text-white min-ui-rounded min-ui-p-4",style:{maxWidth:"28rem"},children:s.jsxs("div",{className:"min-ui-flex min-ui-items-center",children:[s.jsx("span",{className:"min-ui-text-lg min-ui-mr-2",children:"⚠️"}),s.jsxs("div",{children:[s.jsx("div",{className:"min-ui-font-semibold",children:"Failed to load data"}),s.jsx("div",{className:"min-ui-text-sm min-ui-mt-1",children:he}),s.jsx("button",{type:"button",className:"min-ui-mt-2 min-ui-text-white min-ui-underline min-ui-text-sm",onClick:()=>{L(null),typeof e=="function"&&(A(!0),S==null||S(!0),e().then(n=>{T(n),P(new Set(n.filter(i=>i.expanded).map(i=>i.id)))}).catch(n=>{console.error("Failed to load tree data:",n);const i=n instanceof Error?n.message:"Failed to load tree data";L(i),T([])}).finally(()=>{A(!1),S==null||S(!1)}))},children:"Retry"})]})]})})}):s.jsx("div",{className:"min-ui-tree-container",children:m.map(n=>ge(n))}),s.jsx(Nn,{visible:Mn,messages:d})]})});g.displayName="Tree";g.__docgenInfo={description:"",methods:[],displayName:"Tree",props:{data:{required:!1,tsType:{name:"union",raw:"TreeNode[] | (() => Promise<TreeNode[]>)",elements:[{name:"Array",elements:[{name:"TreeNode"}],raw:"TreeNode[]"},{name:"unknown"}]},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},selectMode:{required:!1,tsType:{name:"union",raw:'"none" | "single" | "multiple" | "recursive"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'},{name:"literal",value:'"recursive"'}]},description:"",defaultValue:{value:'"single"',computed:!1}},validationMessages:{required:!1,tsType:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}]},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedIds"}],return:{name:"void"}}},description:""},visible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},width:{required:!1,tsType:{name:'ReactCSSProperties["width"]',raw:'React.CSSProperties["width"]'},description:""},height:{required:!1,tsType:{name:'ReactCSSProperties["height"]',raw:'React.CSSProperties["height"]'},description:""},onInitialized:{required:!1,tsType:{name:"signature",type:"function",raw:"(el: HTMLDivElement | null) => void",signature:{arguments:[{type:{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]},name:"el"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},expandable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCheckboxes:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indentSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onLoadingChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(loading: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"loading"}],return:{name:"void"}}},description:""},onNodeExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(nodeId: string) => void",signature:{arguments:[{type:{name:"string"},name:"nodeId"}],return:{name:"void"}}},description:""},onNodeCollapse:{required:!1,tsType:{name:"signature",type:"function",raw:"(nodeId: string) => void",signature:{arguments:[{type:{name:"string"},name:"nodeId"}],return:{name:"void"}}},description:""}}};const Pn={title:"Components/Tree",component:g,parameters:{layout:"centered"},tags:["autodocs"],args:{data:[{id:"1",label:"Root Node 1",expanded:!0,children:[{id:"1-1",label:"Child Node 1-1",children:[{id:"1-1-1",label:"Grandchild Node 1-1-1"},{id:"1-1-2",label:"Grandchild Node 1-1-2"}]},{id:"1-2",label:"Child Node 1-2",children:[{id:"1-2-1",label:"Grandchild Node 1-2-1"}]}]},{id:"2",label:"Root Node 2",children:[{id:"2-1",label:"Child Node 2-1"},{id:"2-2",label:"Child Node 2-2"}]}],selectMode:"single",disabled:!1,expandable:!0,showCheckboxes:!1,indentSize:20,width:"fit-content",height:"fit-content",validationMessages:null},argTypes:{onChange:{action:"changed"},selectMode:{control:"radio",options:["none","single","multiple","recursive"],description:"Selection mode for tree nodes"},disabled:{control:"boolean"},expandable:{control:"boolean"},showCheckboxes:{control:"boolean"},data:{control:"object",description:"Tree data structure"},value:{control:"object",description:"Selected node IDs"},width:{control:"text",description:"Width of the tree (CSS value)",table:{type:{summary:"string | number"}}},height:{control:"text",description:"Height of the tree (CSS value)",table:{type:{summary:"string | number"}}},indentSize:{control:"number",description:"Indentation size in pixels"},loading:{control:"boolean",description:"Whether data is currently loading"},onLoadingChange:{action:"loadingChanged"},onNodeExpand:{action:"nodeExpanded"},onNodeCollapse:{action:"nodeCollapsed"}}},q={render:e=>{const[r,l]=h.useState([]);return s.jsx(g,{...e.data&&{data:e.data},...e.selectMode!==void 0&&{selectMode:e.selectMode},...e.disabled!==void 0&&{disabled:e.disabled},...e.expandable!==void 0&&{expandable:e.expandable},...e.showCheckboxes!==void 0&&{showCheckboxes:e.showCheckboxes},...e.indentSize&&{indentSize:e.indentSize},...e.width&&{width:e.width},...e.height&&{height:e.height},...e.validationMessages&&{validationMessages:e.validationMessages},value:r,onChange:d=>{var a;(a=e.onChange)==null||a.call(e,d),l(d)}})}},G={args:{showCheckboxes:!0,selectMode:"multiple"},render:e=>{const[r,l]=h.useState(["1-1"]);return s.jsx(g,{...e.data&&{data:e.data},...e.selectMode!==void 0&&{selectMode:e.selectMode},...e.disabled!==void 0&&{disabled:e.disabled},...e.expandable!==void 0&&{expandable:e.expandable},...e.showCheckboxes!==void 0&&{showCheckboxes:e.showCheckboxes},...e.indentSize&&{indentSize:e.indentSize},...e.width&&{width:e.width},...e.height&&{height:e.height},...e.validationMessages&&{validationMessages:e.validationMessages},value:r,onChange:d=>{var a;(a=e.onChange)==null||a.call(e,d),l(d)}})}},V={args:{selectMode:"single"},render:e=>{const[r,l]=h.useState(["1-1"]);return s.jsx(g,{...e.data&&{data:e.data},...e.selectMode!==void 0&&{selectMode:e.selectMode},...e.disabled!==void 0&&{disabled:e.disabled},...e.expandable!==void 0&&{expandable:e.expandable},...e.showCheckboxes!==void 0&&{showCheckboxes:e.showCheckboxes},...e.indentSize&&{indentSize:e.indentSize},...e.width&&{width:e.width},...e.height&&{height:e.height},...e.validationMessages&&{validationMessages:e.validationMessages},value:r,onChange:d=>{var a;(a=e.onChange)==null||a.call(e,d),l(d)}})}},H={args:{selectMode:"none"},render:e=>{const[r,l]=h.useState([]);return s.jsx(g,{...e.data&&{data:e.data},...e.selectMode!==void 0&&{selectMode:e.selectMode},...e.disabled!==void 0&&{disabled:e.disabled},...e.expandable!==void 0&&{expandable:e.expandable},...e.showCheckboxes!==void 0&&{showCheckboxes:e.showCheckboxes},...e.indentSize&&{indentSize:e.indentSize},...e.width&&{width:e.width},...e.height&&{height:e.height},...e.validationMessages&&{validationMessages:e.validationMessages},value:r,onChange:d=>{var a;(a=e.onChange)==null||a.call(e,d),l(d)}})}},F={args:{selectMode:"recursive",showCheckboxes:!0},render:e=>{const[r,l]=h.useState(["1-1"]);return s.jsx(g,{...e.data&&{data:e.data},...e.selectMode!==void 0&&{selectMode:e.selectMode},...e.disabled!==void 0&&{disabled:e.disabled},...e.expandable!==void 0&&{expandable:e.expandable},...e.showCheckboxes!==void 0&&{showCheckboxes:e.showCheckboxes},...e.indentSize&&{indentSize:e.indentSize},...e.width&&{width:e.width},...e.height&&{height:e.height},...e.validationMessages&&{validationMessages:e.validationMessages},value:r,onChange:d=>{var a;(a=e.onChange)==null||a.call(e,d),l(d)}})}},B={args:{expandable:!1},render:e=>{const[r,l]=h.useState([]);return s.jsx(g,{...e.data&&{data:e.data},...e.selectMode!==void 0&&{selectMode:e.selectMode},...e.disabled!==void 0&&{disabled:e.disabled},...e.expandable!==void 0&&{expandable:e.expandable},...e.showCheckboxes!==void 0&&{showCheckboxes:e.showCheckboxes},...e.indentSize&&{indentSize:e.indentSize},...e.width&&{width:e.width},...e.height&&{height:e.height},...e.validationMessages&&{validationMessages:e.validationMessages},value:r,onChange:d=>{var a;(a=e.onChange)==null||a.call(e,d),l(d)}})}},_={args:{validationMessages:["Please select at least one item"]},render:e=>{const[r,l]=h.useState([]);return s.jsx(g,{...e.data&&{data:e.data},...e.selectMode!==void 0&&{selectMode:e.selectMode},...e.disabled!==void 0&&{disabled:e.disabled},...e.expandable!==void 0&&{expandable:e.expandable},...e.showCheckboxes!==void 0&&{showCheckboxes:e.showCheckboxes},...e.indentSize&&{indentSize:e.indentSize},...e.width&&{width:e.width},...e.height&&{height:e.height},...e.validationMessages&&{validationMessages:e.validationMessages},value:r,onChange:d=>{var a;(a=e.onChange)==null||a.call(e,d),l(d)}})}},O={args:{disabled:!0},render:e=>{const[r,l]=h.useState(["1-1"]);return s.jsx(g,{...e.data&&{data:e.data},...e.selectMode!==void 0&&{selectMode:e.selectMode},...e.disabled!==void 0&&{disabled:e.disabled},...e.expandable!==void 0&&{expandable:e.expandable},...e.showCheckboxes!==void 0&&{showCheckboxes:e.showCheckboxes},...e.indentSize&&{indentSize:e.indentSize},...e.width&&{width:e.width},...e.height&&{height:e.height},...e.validationMessages&&{validationMessages:e.validationMessages},value:r,onChange:d=>{var a;(a=e.onChange)==null||a.call(e,d),l(d)}})}},J={args:{width:"400px",height:"300px"},render:e=>{const[r,l]=h.useState([]);return s.jsx(g,{...e.data&&{data:e.data},...e.selectMode!==void 0&&{selectMode:e.selectMode},...e.disabled!==void 0&&{disabled:e.disabled},...e.expandable!==void 0&&{expandable:e.expandable},...e.showCheckboxes!==void 0&&{showCheckboxes:e.showCheckboxes},...e.indentSize&&{indentSize:e.indentSize},...e.width&&{width:e.width},...e.height&&{height:e.height},...e.validationMessages&&{validationMessages:e.validationMessages},value:r,onChange:d=>{var a;(a=e.onChange)==null||a.call(e,d),l(d)}})}},K={args:{data:[{id:"1",label:"Root Node 1",expanded:!0,children:[{id:"1-1",label:"Child Node 1-1 (Normal)",children:[{id:"1-1-1",label:"Grandchild Node 1-1-1"},{id:"1-1-2",label:"Grandchild Node 1-1-2 (Disabled)",disabled:!0}]},{id:"1-2",label:"Child Node 1-2 (Disabled)",disabled:!0,children:[{id:"1-2-1",label:"Grandchild Node 1-2-1"},{id:"1-2-2",label:"Grandchild Node 1-2-2"}]},{id:"1-3",label:"Child Node 1-3 (Hidden)",visible:!1,children:[{id:"1-3-1",label:"Grandchild Node 1-3-1"}]}]},{id:"2",label:"Root Node 2 (Disabled)",disabled:!0,children:[{id:"2-1",label:"Child Node 2-1"},{id:"2-2",label:"Child Node 2-2"}]},{id:"3",label:"Root Node 3 (Hidden)",visible:!1,children:[{id:"3-1",label:"Child Node 3-1"}]},{id:"4",label:"Root Node 4 (Normal)",children:[{id:"4-1",label:"Child Node 4-1"},{id:"4-2",label:"Child Node 4-2 (Disabled)",disabled:!0},{id:"4-3",label:"Child Node 4-3 (Hidden)",visible:!1}]}],selectMode:"multiple",showCheckboxes:!0},render:e=>{const[r,l]=h.useState(["1-1","4-1"]);return s.jsx(g,{...e.data&&{data:e.data},...e.selectMode!==void 0&&{selectMode:e.selectMode},...e.disabled!==void 0&&{disabled:e.disabled},...e.expandable!==void 0&&{expandable:e.expandable},...e.showCheckboxes!==void 0&&{showCheckboxes:e.showCheckboxes},...e.indentSize&&{indentSize:e.indentSize},...e.width&&{width:e.width},...e.height&&{height:e.height},...e.validationMessages&&{validationMessages:e.validationMessages},value:r,onChange:d=>{var a;(a=e.onChange)==null||a.call(e,d),l(d)}})}},Q={args:{data:async()=>(await new Promise(e=>setTimeout(e,2e3)),[{id:"1",label:"Async Root Node 1",expanded:!0,children:[{id:"1-1",label:"Async Child Node 1-1",children:[{id:"1-1-1",label:"Async Grandchild Node 1-1-1"},{id:"1-1-2",label:"Async Grandchild Node 1-1-2"}]},{id:"1-2",label:"Async Child Node 1-2",children:[{id:"1-2-1",label:"Async Grandchild Node 1-2-1"}]}]},{id:"2",label:"Async Root Node 2",children:[{id:"2-1",label:"Async Child Node 2-1"},{id:"2-2",label:"Async Child Node 2-2"}]}]),selectMode:"multiple",showCheckboxes:!0},render:e=>{const[r,l]=h.useState([]),[d,a]=h.useState(!1);return s.jsx(g,{...e.data&&{data:e.data},...e.selectMode!==void 0&&{selectMode:e.selectMode},...e.disabled!==void 0&&{disabled:e.disabled},...e.expandable!==void 0&&{expandable:e.expandable},...e.showCheckboxes!==void 0&&{showCheckboxes:e.showCheckboxes},...e.indentSize&&{indentSize:e.indentSize},...e.width&&{width:e.width},...e.height&&{height:e.height},...e.validationMessages&&{validationMessages:e.validationMessages},loading:d,onLoadingChange:a,value:r,onChange:v=>{var I;(I=e.onChange)==null||I.call(e,v),l(v)}})}},U={args:{data:async()=>{throw await new Promise(e=>setTimeout(e,1500)),new Error("Failed to load tree data")},selectMode:"single"},render:e=>{const[r,l]=h.useState([]),[d,a]=h.useState(!1);return s.jsx(g,{...e.data&&{data:e.data},...e.selectMode!==void 0&&{selectMode:e.selectMode},...e.disabled!==void 0&&{disabled:e.disabled},...e.expandable!==void 0&&{expandable:e.expandable},...e.showCheckboxes!==void 0&&{showCheckboxes:e.showCheckboxes},...e.indentSize&&{indentSize:e.indentSize},...e.width&&{width:e.width},...e.height&&{height:e.height},...e.validationMessages&&{validationMessages:e.validationMessages},loading:d,onLoadingChange:a,value:r,onChange:v=>{var I;(I=e.onChange)==null||I.call(e,v),l(v)}})}},X={args:{data:[{id:"1",label:"Documents",hasChildren:!0,loadChildren:async()=>(await new Promise(e=>setTimeout(e,1500)),[{id:"1-1",label:"Work",hasChildren:!0,loadChildren:async()=>(await new Promise(e=>setTimeout(e,1e3)),[{id:"1-1-1",label:"Project A"},{id:"1-1-2",label:"Project B"},{id:"1-1-3",label:"Project C"}])},{id:"1-2",label:"Personal",hasChildren:!0,loadChildren:async()=>(await new Promise(e=>setTimeout(e,1200)),[{id:"1-2-1",label:"Photos"},{id:"1-2-2",label:"Videos"},{id:"1-2-3",label:"Music"}])}])},{id:"2",label:"Applications",hasChildren:!0,loadChildren:async()=>(await new Promise(e=>setTimeout(e,800)),[{id:"2-1",label:"Web Browsers"},{id:"2-2",label:"Development Tools"},{id:"2-3",label:"Media Players"}])},{id:"3",label:"System",hasChildren:!0,loadChildren:async()=>(await new Promise(e=>setTimeout(e,600)),[{id:"3-1",label:"Settings"},{id:"3-2",label:"Logs"}])}],showCheckboxes:!0,selectMode:"multiple"},render:e=>{const[r,l]=h.useState([]);return s.jsx(g,{...e.data&&{data:e.data},...e.selectMode!==void 0&&{selectMode:e.selectMode},...e.disabled!==void 0&&{disabled:e.disabled},...e.expandable!==void 0&&{expandable:e.expandable},...e.showCheckboxes!==void 0&&{showCheckboxes:e.showCheckboxes},...e.indentSize&&{indentSize:e.indentSize},...e.width&&{width:e.width},...e.height&&{height:e.height},...e.validationMessages&&{validationMessages:e.validationMessages},onNodeExpand:d=>{console.log(`Node ${d} expanded`)},onNodeCollapse:d=>{console.log(`Node ${d} collapsed`)},value:r,onChange:d=>{var a;(a=e.onChange)==null||a.call(e,d),l(d)}})}},Y={args:{data:[{id:"1",label:"Documents (Success)",hasChildren:!0,loadChildren:async()=>(await new Promise(e=>setTimeout(e,1e3)),[{id:"1-1",label:"Work"},{id:"1-2",label:"Personal"}])},{id:"2",label:"Applications (Error)",hasChildren:!0,loadChildren:async()=>{throw await new Promise(e=>setTimeout(e,1500)),new Error("Network connection failed")}},{id:"3",label:"System (Timeout)",hasChildren:!0,loadChildren:async()=>{throw await new Promise(e=>setTimeout(e,2e3)),new Error("Request timeout")}},{id:"4",label:"Media (Server Error)",hasChildren:!0,loadChildren:async()=>{throw await new Promise(e=>setTimeout(e,1200)),new Error("Internal server error (500)")}}],showCheckboxes:!0,selectMode:"multiple"},render:e=>{const[r,l]=h.useState([]);return s.jsx(g,{...e.data&&{data:e.data},...e.selectMode!==void 0&&{selectMode:e.selectMode},...e.disabled!==void 0&&{disabled:e.disabled},...e.expandable!==void 0&&{expandable:e.expandable},...e.showCheckboxes!==void 0&&{showCheckboxes:e.showCheckboxes},...e.indentSize&&{indentSize:e.indentSize},...e.width&&{width:e.width},...e.height&&{height:e.height},...e.validationMessages&&{validationMessages:e.validationMessages},onNodeExpand:d=>{console.log(`Node ${d} expanded`)},onNodeCollapse:d=>{console.log(`Node ${d} collapsed`)},value:r,onChange:d=>{var a;(a=e.onChange)==null||a.call(e,d),l(d)}})}},Z={args:{data:[{id:"1",label:"Test Node (Will Error)",hasChildren:!0,loadChildren:async()=>{throw console.log("Loading children for test node..."),await new Promise(e=>setTimeout(e,1e3)),console.log("Throwing error..."),new Error("Test error message")}}],showCheckboxes:!1,selectMode:"single"},render:e=>{const[r,l]=h.useState([]);return s.jsxs("div",{children:[s.jsx("p",{className:"mb-4 text-sm text-gray-600",children:"Click on the expand button to test error handling. Check console for debug logs."}),s.jsx(g,{...e.data&&{data:e.data},...e.selectMode!==void 0&&{selectMode:e.selectMode},...e.disabled!==void 0&&{disabled:e.disabled},...e.expandable!==void 0&&{expandable:e.expandable},...e.showCheckboxes!==void 0&&{showCheckboxes:e.showCheckboxes},...e.indentSize&&{indentSize:e.indentSize},...e.width&&{width:e.width},...e.height&&{height:e.height},...e.validationMessages&&{validationMessages:e.validationMessages},onNodeExpand:d=>{console.log(`Node ${d} expanded`)},onNodeCollapse:d=>{console.log(`Node ${d} collapsed`)},value:r,onChange:d=>{var a;(a=e.onChange)==null||a.call(e,d),l(d)}})]})}},ee={args:{data:[{id:"1",label:"Documents",expanded:!0,children:[{id:"1-1",label:"Work",expanded:!0,children:[{id:"1-1-1",label:"Project A"},{id:"1-1-2",label:"Project B"},{id:"1-1-3",label:"Project C"}]},{id:"1-2",label:"Personal",children:[{id:"1-2-1",label:"Photos"},{id:"1-2-2",label:"Videos"},{id:"1-2-3",label:"Music"}]}]},{id:"2",label:"Applications",children:[{id:"2-1",label:"Web Browsers"},{id:"2-2",label:"Development Tools"},{id:"2-3",label:"Media Players"}]},{id:"3",label:"System",children:[{id:"3-1",label:"Settings"},{id:"3-2",label:"Logs"}]}],showCheckboxes:!0,selectMode:"multiple"},render:e=>{const[r,l]=h.useState(["1-1-1","2-1"]);return s.jsx(g,{...e.data&&{data:e.data},...e.selectMode!==void 0&&{selectMode:e.selectMode},...e.disabled!==void 0&&{disabled:e.disabled},...e.expandable!==void 0&&{expandable:e.expandable},...e.showCheckboxes!==void 0&&{showCheckboxes:e.showCheckboxes},...e.indentSize&&{indentSize:e.indentSize},...e.width&&{width:e.width},...e.height&&{height:e.height},...e.validationMessages&&{validationMessages:e.validationMessages},value:r,onChange:d=>{var a;(a=e.onChange)==null||a.call(e,d),l(d)}})}},ne={args:{data:[{id:"1",label:"This is a very long root node label that should be truncated with ellipsis",expanded:!0,children:[{id:"1-1",label:"This is an extremely long child node label that definitely exceeds the container width",expanded:!0,children:[{id:"1-1-1",label:"Super duper extremely long grandchild node label that needs ellipsis truncation"},{id:"1-1-2",label:"Another very long grandchild node label for testing ellipsis functionality"},{id:"1-1-3",label:"Short"}]},{id:"1-2",label:"Medium length child node",children:[{id:"1-2-1",label:"This is another very long grandchild node label that should be truncated"},{id:"1-2-2",label:"Normal length"}]}]},{id:"2",label:"Another root node with a very long label that should be truncated",children:[{id:"2-1",label:"Child node with extremely long label that exceeds container width"},{id:"2-2",label:"Short child"}]}],showCheckboxes:!0,selectMode:"multiple",width:"200px"},render:e=>{const[r,l]=h.useState(["1-1-1","2-1"]);return s.jsxs("div",{style:{padding:"20px",border:"1px dashed #ccc"},children:[s.jsx("h4",{children:"Tree with Long Labels (Width: 200px)"}),s.jsx(g,{...e.data&&{data:e.data},...e.selectMode!==void 0&&{selectMode:e.selectMode},...e.disabled!==void 0&&{disabled:e.disabled},...e.expandable!==void 0&&{expandable:e.expandable},...e.showCheckboxes!==void 0&&{showCheckboxes:e.showCheckboxes},...e.indentSize&&{indentSize:e.indentSize},...e.width&&{width:e.width},...e.height&&{height:e.height},...e.validationMessages&&{validationMessages:e.validationMessages},value:r,onChange:d=>{var a;(a=e.onChange)==null||a.call(e,d),l(d)}})]})}},de={render:()=>{const[e,r]=h.useState(["1-1-1"]),[l,d]=h.useState(["2-1"]),a=[{id:"1",label:"This is a very long root node label that should be truncated with ellipsis",expanded:!0,children:[{id:"1-1",label:"This is an extremely long child node label that definitely exceeds the container width",expanded:!0,children:[{id:"1-1-1",label:"Super duper extremely long grandchild node label that needs ellipsis truncation"},{id:"1-1-2",label:"Another very long grandchild node label for testing ellipsis functionality"}]}]},{id:"2",label:"Another root node with a very long label that should be truncated",children:[{id:"2-1",label:"Child node with extremely long label that exceeds container width"}]}];return s.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:[s.jsx("h3",{children:"Tree Ellipsis Comparison"}),s.jsxs("div",{style:{border:"1px dashed #ccc",padding:"15px"},children:[s.jsx("h4",{children:"Narrow Width (150px)"}),s.jsx(g,{data:a,selectMode:"multiple",showCheckboxes:!0,width:"150px",value:e,onChange:v=>{r(v)}})]}),s.jsxs("div",{style:{border:"1px dashed #ccc",padding:"15px"},children:[s.jsx("h4",{children:"Medium Width (250px)"}),s.jsx(g,{data:a,selectMode:"multiple",showCheckboxes:!0,width:"250px",value:l,onChange:v=>{d(v)}})]}),s.jsxs("div",{style:{border:"1px dashed #ccc",padding:"15px"},children:[s.jsx("h4",{children:"Wide Width (400px)"}),s.jsx(g,{data:a,selectMode:"multiple",showCheckboxes:!0,width:"400px",value:e,onChange:v=>{r(v)}})]})]})}};var pe,xe,me;q.parameters={...q.parameters,docs:{...(pe=q.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: args => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    return <Tree {...args.data && {
      data: args.data
    }} {...args.selectMode !== undefined && {
      selectMode: args.selectMode
    }} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.expandable !== undefined && {
      expandable: args.expandable
    }} {...args.showCheckboxes !== undefined && {
      showCheckboxes: args.showCheckboxes
    }} {...args.indentSize && {
      indentSize: args.indentSize
    }} {...args.width && {
      width: args.width
    }} {...args.height && {
      height: args.height
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} value={selectedIds} onChange={ids => {
      args.onChange?.(ids);
      setSelectedIds(ids);
    }} />;
  }
}`,...(me=(xe=q.parameters)==null?void 0:xe.docs)==null?void 0:me.source}}};var we,ve,Se;G.parameters={...G.parameters,docs:{...(we=G.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    showCheckboxes: true,
    selectMode: "multiple"
  },
  render: args => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>(["1-1"]);
    return <Tree {...args.data && {
      data: args.data
    }} {...args.selectMode !== undefined && {
      selectMode: args.selectMode
    }} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.expandable !== undefined && {
      expandable: args.expandable
    }} {...args.showCheckboxes !== undefined && {
      showCheckboxes: args.showCheckboxes
    }} {...args.indentSize && {
      indentSize: args.indentSize
    }} {...args.width && {
      width: args.width
    }} {...args.height && {
      height: args.height
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} value={selectedIds} onChange={ids => {
      args.onChange?.(ids);
      setSelectedIds(ids);
    }} />;
  }
}`,...(Se=(ve=G.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};var Ce,fe,Me;V.parameters={...V.parameters,docs:{...(Ce=V.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    selectMode: "single"
  },
  render: args => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>(["1-1"]);
    return <Tree {...args.data && {
      data: args.data
    }} {...args.selectMode !== undefined && {
      selectMode: args.selectMode
    }} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.expandable !== undefined && {
      expandable: args.expandable
    }} {...args.showCheckboxes !== undefined && {
      showCheckboxes: args.showCheckboxes
    }} {...args.indentSize && {
      indentSize: args.indentSize
    }} {...args.width && {
      width: args.width
    }} {...args.height && {
      height: args.height
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} value={selectedIds} onChange={ids => {
      args.onChange?.(ids);
      setSelectedIds(ids);
    }} />;
  }
}`,...(Me=(fe=V.parameters)==null?void 0:fe.docs)==null?void 0:Me.source}}};var ye,ke,Ne;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    selectMode: "none"
  },
  render: args => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    return <Tree {...args.data && {
      data: args.data
    }} {...args.selectMode !== undefined && {
      selectMode: args.selectMode
    }} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.expandable !== undefined && {
      expandable: args.expandable
    }} {...args.showCheckboxes !== undefined && {
      showCheckboxes: args.showCheckboxes
    }} {...args.indentSize && {
      indentSize: args.indentSize
    }} {...args.width && {
      width: args.width
    }} {...args.height && {
      height: args.height
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} value={selectedIds} onChange={ids => {
      args.onChange?.(ids);
      setSelectedIds(ids);
    }} />;
  }
}`,...(Ne=(ke=H.parameters)==null?void 0:ke.docs)==null?void 0:Ne.source}}};var Ie,Te,ze;F.parameters={...F.parameters,docs:{...(Ie=F.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    selectMode: "recursive",
    showCheckboxes: true
  },
  render: args => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>(["1-1"]);
    return <Tree {...args.data && {
      data: args.data
    }} {...args.selectMode !== undefined && {
      selectMode: args.selectMode
    }} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.expandable !== undefined && {
      expandable: args.expandable
    }} {...args.showCheckboxes !== undefined && {
      showCheckboxes: args.showCheckboxes
    }} {...args.indentSize && {
      indentSize: args.indentSize
    }} {...args.width && {
      width: args.width
    }} {...args.height && {
      height: args.height
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} value={selectedIds} onChange={ids => {
      args.onChange?.(ids);
      setSelectedIds(ids);
    }} />;
  }
}`,...(ze=(Te=F.parameters)==null?void 0:Te.docs)==null?void 0:ze.source}}};var je,De,Pe;B.parameters={...B.parameters,docs:{...(je=B.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    expandable: false
  },
  render: args => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    return <Tree {...args.data && {
      data: args.data
    }} {...args.selectMode !== undefined && {
      selectMode: args.selectMode
    }} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.expandable !== undefined && {
      expandable: args.expandable
    }} {...args.showCheckboxes !== undefined && {
      showCheckboxes: args.showCheckboxes
    }} {...args.indentSize && {
      indentSize: args.indentSize
    }} {...args.width && {
      width: args.width
    }} {...args.height && {
      height: args.height
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} value={selectedIds} onChange={ids => {
      args.onChange?.(ids);
      setSelectedIds(ids);
    }} />;
  }
}`,...(Pe=(De=B.parameters)==null?void 0:De.docs)==null?void 0:Pe.source}}};var Ee,Ae,Re;_.parameters={..._.parameters,docs:{...(Ee=_.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    validationMessages: ["Please select at least one item"]
  },
  render: args => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    return <Tree {...args.data && {
      data: args.data
    }} {...args.selectMode !== undefined && {
      selectMode: args.selectMode
    }} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.expandable !== undefined && {
      expandable: args.expandable
    }} {...args.showCheckboxes !== undefined && {
      showCheckboxes: args.showCheckboxes
    }} {...args.indentSize && {
      indentSize: args.indentSize
    }} {...args.width && {
      width: args.width
    }} {...args.height && {
      height: args.height
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} value={selectedIds} onChange={ids => {
      args.onChange?.(ids);
      setSelectedIds(ids);
    }} />;
  }
}`,...(Re=(Ae=_.parameters)==null?void 0:Ae.docs)==null?void 0:Re.source}}};var We,Le,$e;O.parameters={...O.parameters,docs:{...(We=O.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>(["1-1"]);
    return <Tree {...args.data && {
      data: args.data
    }} {...args.selectMode !== undefined && {
      selectMode: args.selectMode
    }} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.expandable !== undefined && {
      expandable: args.expandable
    }} {...args.showCheckboxes !== undefined && {
      showCheckboxes: args.showCheckboxes
    }} {...args.indentSize && {
      indentSize: args.indentSize
    }} {...args.width && {
      width: args.width
    }} {...args.height && {
      height: args.height
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} value={selectedIds} onChange={ids => {
      args.onChange?.(ids);
      setSelectedIds(ids);
    }} />;
  }
}`,...($e=(Le=O.parameters)==null?void 0:Le.docs)==null?void 0:$e.source}}};var qe,Ge,Ve;J.parameters={...J.parameters,docs:{...(qe=J.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    width: "400px",
    height: "300px"
  },
  render: args => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    return <Tree {...args.data && {
      data: args.data
    }} {...args.selectMode !== undefined && {
      selectMode: args.selectMode
    }} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.expandable !== undefined && {
      expandable: args.expandable
    }} {...args.showCheckboxes !== undefined && {
      showCheckboxes: args.showCheckboxes
    }} {...args.indentSize && {
      indentSize: args.indentSize
    }} {...args.width && {
      width: args.width
    }} {...args.height && {
      height: args.height
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} value={selectedIds} onChange={ids => {
      args.onChange?.(ids);
      setSelectedIds(ids);
    }} />;
  }
}`,...(Ve=(Ge=J.parameters)==null?void 0:Ge.docs)==null?void 0:Ve.source}}};var He,Fe,Be;K.parameters={...K.parameters,docs:{...(He=K.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    data: [{
      id: "1",
      label: "Root Node 1",
      expanded: true,
      children: [{
        id: "1-1",
        label: "Child Node 1-1 (Normal)",
        children: [{
          id: "1-1-1",
          label: "Grandchild Node 1-1-1"
        }, {
          id: "1-1-2",
          label: "Grandchild Node 1-1-2 (Disabled)",
          disabled: true
        }]
      }, {
        id: "1-2",
        label: "Child Node 1-2 (Disabled)",
        disabled: true,
        children: [{
          id: "1-2-1",
          label: "Grandchild Node 1-2-1"
        }, {
          id: "1-2-2",
          label: "Grandchild Node 1-2-2"
        }]
      }, {
        id: "1-3",
        label: "Child Node 1-3 (Hidden)",
        visible: false,
        children: [{
          id: "1-3-1",
          label: "Grandchild Node 1-3-1"
        }]
      }]
    }, {
      id: "2",
      label: "Root Node 2 (Disabled)",
      disabled: true,
      children: [{
        id: "2-1",
        label: "Child Node 2-1"
      }, {
        id: "2-2",
        label: "Child Node 2-2"
      }]
    }, {
      id: "3",
      label: "Root Node 3 (Hidden)",
      visible: false,
      children: [{
        id: "3-1",
        label: "Child Node 3-1"
      }]
    }, {
      id: "4",
      label: "Root Node 4 (Normal)",
      children: [{
        id: "4-1",
        label: "Child Node 4-1"
      }, {
        id: "4-2",
        label: "Child Node 4-2 (Disabled)",
        disabled: true
      }, {
        id: "4-3",
        label: "Child Node 4-3 (Hidden)",
        visible: false
      }]
    }],
    selectMode: "multiple",
    showCheckboxes: true
  },
  render: args => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>(["1-1", "4-1"]);
    return <Tree {...args.data && {
      data: args.data
    }} {...args.selectMode !== undefined && {
      selectMode: args.selectMode
    }} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.expandable !== undefined && {
      expandable: args.expandable
    }} {...args.showCheckboxes !== undefined && {
      showCheckboxes: args.showCheckboxes
    }} {...args.indentSize && {
      indentSize: args.indentSize
    }} {...args.width && {
      width: args.width
    }} {...args.height && {
      height: args.height
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} value={selectedIds} onChange={ids => {
      args.onChange?.(ids);
      setSelectedIds(ids);
    }} />;
  }
}`,...(Be=(Fe=K.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};var _e,Oe,Je;Q.parameters={...Q.parameters,docs:{...(_e=Q.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    data: async () => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      return [{
        id: "1",
        label: "Async Root Node 1",
        expanded: true,
        children: [{
          id: "1-1",
          label: "Async Child Node 1-1",
          children: [{
            id: "1-1-1",
            label: "Async Grandchild Node 1-1-1"
          }, {
            id: "1-1-2",
            label: "Async Grandchild Node 1-1-2"
          }]
        }, {
          id: "1-2",
          label: "Async Child Node 1-2",
          children: [{
            id: "1-2-1",
            label: "Async Grandchild Node 1-2-1"
          }]
        }]
      }, {
        id: "2",
        label: "Async Root Node 2",
        children: [{
          id: "2-1",
          label: "Async Child Node 2-1"
        }, {
          id: "2-2",
          label: "Async Child Node 2-2"
        }]
      }];
    },
    selectMode: "multiple",
    showCheckboxes: true
  },
  render: args => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);
    return <Tree {...args.data && {
      data: args.data
    }} {...args.selectMode !== undefined && {
      selectMode: args.selectMode
    }} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.expandable !== undefined && {
      expandable: args.expandable
    }} {...args.showCheckboxes !== undefined && {
      showCheckboxes: args.showCheckboxes
    }} {...args.indentSize && {
      indentSize: args.indentSize
    }} {...args.width && {
      width: args.width
    }} {...args.height && {
      height: args.height
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} loading={isLoading} onLoadingChange={setIsLoading} value={selectedIds} onChange={ids => {
      args.onChange?.(ids);
      setSelectedIds(ids);
    }} />;
  }
}`,...(Je=(Oe=Q.parameters)==null?void 0:Oe.docs)==null?void 0:Je.source}}};var Ke,Qe,Ue;U.parameters={...U.parameters,docs:{...(Ke=U.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    data: async () => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulate API error
      throw new Error("Failed to load tree data");
    },
    selectMode: "single"
  },
  render: args => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);
    return <Tree {...args.data && {
      data: args.data
    }} {...args.selectMode !== undefined && {
      selectMode: args.selectMode
    }} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.expandable !== undefined && {
      expandable: args.expandable
    }} {...args.showCheckboxes !== undefined && {
      showCheckboxes: args.showCheckboxes
    }} {...args.indentSize && {
      indentSize: args.indentSize
    }} {...args.width && {
      width: args.width
    }} {...args.height && {
      height: args.height
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} loading={isLoading} onLoadingChange={setIsLoading} value={selectedIds} onChange={ids => {
      args.onChange?.(ids);
      setSelectedIds(ids);
    }} />;
  }
}`,...(Ue=(Qe=U.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var Xe,Ye,Ze;X.parameters={...X.parameters,docs:{...(Xe=X.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    data: [{
      id: "1",
      label: "Documents",
      hasChildren: true,
      loadChildren: async () => {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        return [{
          id: "1-1",
          label: "Work",
          hasChildren: true,
          loadChildren: async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            return [{
              id: "1-1-1",
              label: "Project A"
            }, {
              id: "1-1-2",
              label: "Project B"
            }, {
              id: "1-1-3",
              label: "Project C"
            }];
          }
        }, {
          id: "1-2",
          label: "Personal",
          hasChildren: true,
          loadChildren: async () => {
            await new Promise(resolve => setTimeout(resolve, 1200));
            return [{
              id: "1-2-1",
              label: "Photos"
            }, {
              id: "1-2-2",
              label: "Videos"
            }, {
              id: "1-2-3",
              label: "Music"
            }];
          }
        }];
      }
    }, {
      id: "2",
      label: "Applications",
      hasChildren: true,
      loadChildren: async () => {
        await new Promise(resolve => setTimeout(resolve, 800));
        return [{
          id: "2-1",
          label: "Web Browsers"
        }, {
          id: "2-2",
          label: "Development Tools"
        }, {
          id: "2-3",
          label: "Media Players"
        }];
      }
    }, {
      id: "3",
      label: "System",
      hasChildren: true,
      loadChildren: async () => {
        await new Promise(resolve => setTimeout(resolve, 600));
        return [{
          id: "3-1",
          label: "Settings"
        }, {
          id: "3-2",
          label: "Logs"
        }];
      }
    }],
    showCheckboxes: true,
    selectMode: "multiple"
  },
  render: args => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    return <Tree {...args.data && {
      data: args.data
    }} {...args.selectMode !== undefined && {
      selectMode: args.selectMode
    }} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.expandable !== undefined && {
      expandable: args.expandable
    }} {...args.showCheckboxes !== undefined && {
      showCheckboxes: args.showCheckboxes
    }} {...args.indentSize && {
      indentSize: args.indentSize
    }} {...args.width && {
      width: args.width
    }} {...args.height && {
      height: args.height
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} onNodeExpand={nodeId => {
      console.log(\`Node \${nodeId} expanded\`);
    }} onNodeCollapse={nodeId => {
      console.log(\`Node \${nodeId} collapsed\`);
    }} value={selectedIds} onChange={ids => {
      args.onChange?.(ids);
      setSelectedIds(ids);
    }} />;
  }
}`,...(Ze=(Ye=X.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var en,nn,dn;Y.parameters={...Y.parameters,docs:{...(en=Y.parameters)==null?void 0:en.docs,source:{originalSource:`{
  args: {
    data: [{
      id: "1",
      label: "Documents (Success)",
      hasChildren: true,
      loadChildren: async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return [{
          id: "1-1",
          label: "Work"
        }, {
          id: "1-2",
          label: "Personal"
        }];
      }
    }, {
      id: "2",
      label: "Applications (Error)",
      hasChildren: true,
      loadChildren: async () => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        throw new Error("Network connection failed");
      }
    }, {
      id: "3",
      label: "System (Timeout)",
      hasChildren: true,
      loadChildren: async () => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        throw new Error("Request timeout");
      }
    }, {
      id: "4",
      label: "Media (Server Error)",
      hasChildren: true,
      loadChildren: async () => {
        await new Promise(resolve => setTimeout(resolve, 1200));
        throw new Error("Internal server error (500)");
      }
    }],
    showCheckboxes: true,
    selectMode: "multiple"
  },
  render: args => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    return <Tree {...args.data && {
      data: args.data
    }} {...args.selectMode !== undefined && {
      selectMode: args.selectMode
    }} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.expandable !== undefined && {
      expandable: args.expandable
    }} {...args.showCheckboxes !== undefined && {
      showCheckboxes: args.showCheckboxes
    }} {...args.indentSize && {
      indentSize: args.indentSize
    }} {...args.width && {
      width: args.width
    }} {...args.height && {
      height: args.height
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} onNodeExpand={nodeId => {
      console.log(\`Node \${nodeId} expanded\`);
    }} onNodeCollapse={nodeId => {
      console.log(\`Node \${nodeId} collapsed\`);
    }} value={selectedIds} onChange={ids => {
      args.onChange?.(ids);
      setSelectedIds(ids);
    }} />;
  }
}`,...(dn=(nn=Y.parameters)==null?void 0:nn.docs)==null?void 0:dn.source}}};var sn,an,tn;Z.parameters={...Z.parameters,docs:{...(sn=Z.parameters)==null?void 0:sn.docs,source:{originalSource:`{
  args: {
    data: [{
      id: "1",
      label: "Test Node (Will Error)",
      hasChildren: true,
      loadChildren: async () => {
        console.log("Loading children for test node...");
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Throwing error...");
        throw new Error("Test error message");
      }
    }],
    showCheckboxes: false,
    selectMode: "single"
  },
  render: args => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    return <div>
        <p className="mb-4 text-sm text-gray-600">
          Click on the expand button to test error handling. Check console for
          debug logs.
        </p>
        <Tree {...args.data && {
        data: args.data
      }} {...args.selectMode !== undefined && {
        selectMode: args.selectMode
      }} {...args.disabled !== undefined && {
        disabled: args.disabled
      }} {...args.expandable !== undefined && {
        expandable: args.expandable
      }} {...args.showCheckboxes !== undefined && {
        showCheckboxes: args.showCheckboxes
      }} {...args.indentSize && {
        indentSize: args.indentSize
      }} {...args.width && {
        width: args.width
      }} {...args.height && {
        height: args.height
      }} {...args.validationMessages && {
        validationMessages: args.validationMessages
      }} onNodeExpand={nodeId => {
        console.log(\`Node \${nodeId} expanded\`);
      }} onNodeCollapse={nodeId => {
        console.log(\`Node \${nodeId} collapsed\`);
      }} value={selectedIds} onChange={ids => {
        args.onChange?.(ids);
        setSelectedIds(ids);
      }} />
      </div>;
  }
}`,...(tn=(an=Z.parameters)==null?void 0:an.docs)==null?void 0:tn.source}}};var ln,on,rn;ee.parameters={...ee.parameters,docs:{...(ln=ee.parameters)==null?void 0:ln.docs,source:{originalSource:`{
  args: {
    data: [{
      id: "1",
      label: "Documents",
      expanded: true,
      children: [{
        id: "1-1",
        label: "Work",
        expanded: true,
        children: [{
          id: "1-1-1",
          label: "Project A"
        }, {
          id: "1-1-2",
          label: "Project B"
        }, {
          id: "1-1-3",
          label: "Project C"
        }]
      }, {
        id: "1-2",
        label: "Personal",
        children: [{
          id: "1-2-1",
          label: "Photos"
        }, {
          id: "1-2-2",
          label: "Videos"
        }, {
          id: "1-2-3",
          label: "Music"
        }]
      }]
    }, {
      id: "2",
      label: "Applications",
      children: [{
        id: "2-1",
        label: "Web Browsers"
      }, {
        id: "2-2",
        label: "Development Tools"
      }, {
        id: "2-3",
        label: "Media Players"
      }]
    }, {
      id: "3",
      label: "System",
      children: [{
        id: "3-1",
        label: "Settings"
      }, {
        id: "3-2",
        label: "Logs"
      }]
    }],
    showCheckboxes: true,
    selectMode: "multiple"
  },
  render: args => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>(["1-1-1", "2-1"]);
    return <Tree {...args.data && {
      data: args.data
    }} {...args.selectMode !== undefined && {
      selectMode: args.selectMode
    }} {...args.disabled !== undefined && {
      disabled: args.disabled
    }} {...args.expandable !== undefined && {
      expandable: args.expandable
    }} {...args.showCheckboxes !== undefined && {
      showCheckboxes: args.showCheckboxes
    }} {...args.indentSize && {
      indentSize: args.indentSize
    }} {...args.width && {
      width: args.width
    }} {...args.height && {
      height: args.height
    }} {...args.validationMessages && {
      validationMessages: args.validationMessages
    }} value={selectedIds} onChange={ids => {
      args.onChange?.(ids);
      setSelectedIds(ids);
    }} />;
  }
}`,...(rn=(on=ee.parameters)==null?void 0:on.docs)==null?void 0:rn.source}}};var cn,hn,un;ne.parameters={...ne.parameters,docs:{...(cn=ne.parameters)==null?void 0:cn.docs,source:{originalSource:`{
  args: {
    data: [{
      id: "1",
      label: "This is a very long root node label that should be truncated with ellipsis",
      expanded: true,
      children: [{
        id: "1-1",
        label: "This is an extremely long child node label that definitely exceeds the container width",
        expanded: true,
        children: [{
          id: "1-1-1",
          label: "Super duper extremely long grandchild node label that needs ellipsis truncation"
        }, {
          id: "1-1-2",
          label: "Another very long grandchild node label for testing ellipsis functionality"
        }, {
          id: "1-1-3",
          label: "Short"
        }]
      }, {
        id: "1-2",
        label: "Medium length child node",
        children: [{
          id: "1-2-1",
          label: "This is another very long grandchild node label that should be truncated"
        }, {
          id: "1-2-2",
          label: "Normal length"
        }]
      }]
    }, {
      id: "2",
      label: "Another root node with a very long label that should be truncated",
      children: [{
        id: "2-1",
        label: "Child node with extremely long label that exceeds container width"
      }, {
        id: "2-2",
        label: "Short child"
      }]
    }],
    showCheckboxes: true,
    selectMode: "multiple",
    width: "200px"
  },
  render: args => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>(["1-1-1", "2-1"]);
    return <div style={{
      padding: "20px",
      border: "1px dashed #ccc"
    }}>
        <h4>Tree with Long Labels (Width: 200px)</h4>
        <Tree {...args.data && {
        data: args.data
      }} {...args.selectMode !== undefined && {
        selectMode: args.selectMode
      }} {...args.disabled !== undefined && {
        disabled: args.disabled
      }} {...args.expandable !== undefined && {
        expandable: args.expandable
      }} {...args.showCheckboxes !== undefined && {
        showCheckboxes: args.showCheckboxes
      }} {...args.indentSize && {
        indentSize: args.indentSize
      }} {...args.width && {
        width: args.width
      }} {...args.height && {
        height: args.height
      }} {...args.validationMessages && {
        validationMessages: args.validationMessages
      }} value={selectedIds} onChange={ids => {
        args.onChange?.(ids);
        setSelectedIds(ids);
      }} />
      </div>;
  }
}`,...(un=(hn=ne.parameters)==null?void 0:hn.docs)==null?void 0:un.source}}};var bn,gn,pn;de.parameters={...de.parameters,docs:{...(bn=de.parameters)==null?void 0:bn.docs,source:{originalSource:`{
  render: () => {
    const [selectedIds1, setSelectedIds1] = React.useState<string[]>(["1-1-1"]);
    const [selectedIds2, setSelectedIds2] = React.useState<string[]>(["2-1"]);
    const longLabelData = [{
      id: "1",
      label: "This is a very long root node label that should be truncated with ellipsis",
      expanded: true,
      children: [{
        id: "1-1",
        label: "This is an extremely long child node label that definitely exceeds the container width",
        expanded: true,
        children: [{
          id: "1-1-1",
          label: "Super duper extremely long grandchild node label that needs ellipsis truncation"
        }, {
          id: "1-1-2",
          label: "Another very long grandchild node label for testing ellipsis functionality"
        }]
      }]
    }, {
      id: "2",
      label: "Another root node with a very long label that should be truncated",
      children: [{
        id: "2-1",
        label: "Child node with extremely long label that exceeds container width"
      }]
    }];
    return <div style={{
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
        <h3>Tree Ellipsis Comparison</h3>

        <div style={{
        border: "1px dashed #ccc",
        padding: "15px"
      }}>
          <h4>Narrow Width (150px)</h4>
          <Tree data={longLabelData} selectMode="multiple" showCheckboxes={true} width="150px" value={selectedIds1} onChange={ids => {
          setSelectedIds1(ids);
        }} />
        </div>

        <div style={{
        border: "1px dashed #ccc",
        padding: "15px"
      }}>
          <h4>Medium Width (250px)</h4>
          <Tree data={longLabelData} selectMode="multiple" showCheckboxes={true} width="250px" value={selectedIds2} onChange={ids => {
          setSelectedIds2(ids);
        }} />
        </div>

        <div style={{
        border: "1px dashed #ccc",
        padding: "15px"
      }}>
          <h4>Wide Width (400px)</h4>
          <Tree data={longLabelData} selectMode="multiple" showCheckboxes={true} width="400px" value={selectedIds1} onChange={ids => {
          setSelectedIds1(ids);
        }} />
        </div>
      </div>;
  }
}`,...(pn=(gn=de.parameters)==null?void 0:gn.docs)==null?void 0:pn.source}}};const En=["Default","WithCheckboxes","SingleSelection","NoSelection","RecursiveSelection","NonExpandable","WithValidation","Disabled","WithCustomSize","WithDisabledAndHidden","WithAsyncData","WithAsyncDataError","DynamicLoading","DynamicLoadingWithErrors","SimpleErrorTest","LargeTree","EllipsisWithLongLabels","EllipsisComparison"];export{q as Default,O as Disabled,X as DynamicLoading,Y as DynamicLoadingWithErrors,de as EllipsisComparison,ne as EllipsisWithLongLabels,ee as LargeTree,H as NoSelection,B as NonExpandable,F as RecursiveSelection,Z as SimpleErrorTest,V as SingleSelection,Q as WithAsyncData,U as WithAsyncDataError,G as WithCheckboxes,J as WithCustomSize,K as WithDisabledAndHidden,_ as WithValidation,En as __namedExportsOrder,Pn as default};
