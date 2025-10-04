import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as c}from"./index-DpTt3J-R.js";import{V as st}from"./ValidationMessages-DkT8DR7l.js";import{T as ot}from"./TextBox-DoTSKBYZ.js";import{S as lt}from"./SelectBox-qxA2r7T9.js";import{C as be}from"./CheckBox-XtxcCkuZ.js";import{C as dt}from"./CheckBoxGroup-dibTUBOw.js";import"./index-D9ZhQrDp.js";function T(t){const{columns:s,data:a,rowKey:i,width:o,height:m,visible:w=!0,className:x="",style:S,striped:we=!0,bordered:G=!0,hoverable:Qn=!0,emptyText:Xn="No data",validationMessages:H,onInitialized:ke,editing:xe=!1,onCellChange:ve,selectMode:v="none",selectedRowKeys:q=[],onRowSelectionChange:D}=t,Re=c.useMemo(()=>Array.isArray(H)&&H.length>0,[H]),Ae=c.useRef(null);if(c.useEffect(()=>{ke==null||ke(Ae.current)},[]),!w)return null;const Be={...S,...o!=null?{width:o}:{width:"100%"},...m!=null?{height:m}:{}},Se=l=>{const n=[];return l.forEach(r=>{r.children&&r.children.length>0?n.push(...Se(r.children)):n.push(r)}),n},Ke=l=>{let n=1;return l.forEach(r=>{r.children&&r.children.length>0&&(n=Math.max(n,1+Ke(r.children)))}),n},Yn=(l,n,r)=>{const h=Array.from({length:r},()=>[]),f=(k,R,u)=>{var p;const C=k.headerAlign??k.align??"left",N=k.children&&k.children.length>0,F=N?Se([k]).length:1,d=N?1:r-u+1;(p=h[u-1])==null||p.push(e.jsx("th",{className:`min-ui-table-th min-ui-text-${C}`,colSpan:F,rowSpan:d,children:k.header},`${u}-${R}`)),N&&k.children&&k.children.forEach((E,J)=>{f(E,J,u+1)})};return l.forEach((k,R)=>f(k,R,n)),h},O=c.useMemo(()=>Se(s),[s]),fe=c.useMemo(()=>Ke(s),[s]),Zn=c.useMemo(()=>Yn(s,1,fe),[s,fe]),[A,je]=c.useState(null),P=c.useMemo(()=>q?Array.isArray(q)?q:[q]:[],[q]),B=c.useCallback((l,n)=>i?i(l,n):n,[i]),et=c.useCallback((l,n)=>{const r=B(l,n);return P.includes(r)},[P,B]),De=c.useCallback((l,n)=>{if(v==="none"||!D)return;const r=B(l,n),h=[...P],f=h.indexOf(r);if(v==="single")D({selectedRowKeys:[r],selectedRows:[l],selectMode:v});else if(v==="multiple"){f===-1?h.push(r):h.splice(f,1);const k=h.map(R=>a.find((u,C)=>B(u,C)===R)).filter(Boolean);D({selectedRowKeys:h,selectedRows:k,selectMode:v})}},[v,D,P,B,a]),nt=c.useCallback(()=>{if(v!=="multiple"||!D)return;const l=a.map((r,h)=>B(r,h)),n=l.every(r=>P.includes(r));D(n?{selectedRowKeys:[],selectedRows:[],selectMode:v}:{selectedRowKeys:l,selectedRows:a,selectMode:v})},[v,D,P,a,B]),Pe=c.useMemo(()=>{if(v!=="multiple"||a.length===0)return{checked:!1,indeterminate:!1};const l=a.map((h,f)=>B(h,f)),n=P.length,r=l.length;return n===0?{checked:!1,indeterminate:!1}:n===r?{checked:!0,indeterminate:!1}:{checked:!1,indeterminate:!0}},[v,P,a,B]),tt=c.useCallback((l,n)=>!!(A&&A.rowIndex===l&&A.colIndex===n),[A]),rt=c.useCallback((l,n,r,h)=>{if(!A)return!1;const f=A.rowIndex>=l&&A.rowIndex<l+r,k=A.colIndex>=n&&A.colIndex<n+h;return f&&k},[A]),Ee=(l,n)=>()=>{xe&&je({rowIndex:l,colIndex:n})},W=c.useRef(null);c.useEffect(()=>()=>{W.current&&clearTimeout(W.current)},[]);const at=l=>{const n=l.relatedTarget;W.current&&clearTimeout(W.current),!(l.currentTarget.contains(n)||n instanceof Element&&n.closest(".min-ui-table-td"))&&(W.current=setTimeout(()=>{const h=document.activeElement,f=h==null?void 0:h.closest(".min-ui-selectbox-dropdown"),k=h==null?void 0:h.closest(".min-ui-table-td");!f&&!k&&je(null)},150))};return e.jsxs("div",{ref:Ae,className:`min-ui-table-wrapper ${x}`.trim(),style:{width:Be.width},children:[e.jsx("div",{className:`min-ui-table-container ${Re?"min-ui-table-invalid":""}`.trim(),style:{height:Be.height},children:e.jsxs("table",{className:`min-ui-table ${we?"min-ui-table-striped":""} ${G?"min-ui-table-bordered":""} ${Qn?"min-ui-table-hover":""} ${Re?"min-ui-table-invalid":""}`.trim(),children:[e.jsxs("colgroup",{children:[v==="multiple"&&e.jsx("col",{style:{width:"40px"}},"select"),O.map((l,n)=>e.jsx("col",{style:{width:l.width}},n))]}),e.jsx("thead",{className:"min-ui-table-thead",children:Zn.map((l,n)=>e.jsxs("tr",{children:[n===0&&v==="multiple"&&e.jsx("th",{className:"min-ui-table-th min-ui-table-select-header",rowSpan:fe,children:e.jsx(be,{value:Pe.indeterminate?null:Pe.checked,enableThreeState:!0,onChange:nt})}),l]},n))}),e.jsx("tbody",{className:"min-ui-table-tbody",children:a.length===0?e.jsx("tr",{className:"min-ui-table-empty-row",children:e.jsx("td",{className:"min-ui-table-empty",colSpan:O.length+(v==="multiple"?1:0),children:Xn})}):(()=>{const l=new Set;return a.forEach((n,r)=>{O.forEach((h,f)=>{var C;const k=h.dataField??h.key,R=n[k],u=(C=h.getCellMerge)==null?void 0:C.call(h,R,n,r);if(u){const N=u.rowSpan??1,F=u.colSpan??1;for(let d=0;d<N;d++)for(let p=0;p<F;p++)(d!==0||p!==0)&&l.add(`${r+d}-${f+p}`)}})}),a.map((n,r)=>{const h=i?i(n,r):r,f=et(n,r),k=v!=="none",R=n.disabled===!0;return e.jsxs("tr",{className:`min-ui-table-tr ${f?"min-ui-table-tr-selected":""} ${k&&v!=="multiple"&&!R?"min-ui-table-tr-clickable":""} ${R?"min-ui-table-tr-disabled":""}`.trim(),onClick:v!=="multiple"&&!R?()=>De(n,r):void 0,children:[v==="multiple"&&e.jsx("td",{className:"min-ui-table-td min-ui-table-select-cell",onClick:u=>{u.stopPropagation()},children:e.jsx(be,{value:f,disabled:R,onChange:u=>{u.stopPropagation(),R||De(n,r)},onClick:u=>{u.stopPropagation()}})}),O.map((u,C)=>{var $e;const N=`${r}-${C}`;if(l.has(N))return null;const F=u.dataField??u.key,d=n[F],p=u.edit,E=($e=u.getCellMerge)==null?void 0:$e.call(u,d,n,r),J=(E==null?void 0:E.rowSpan)??1,Me=(E==null?void 0:E.colSpan)??1,z=u.render?u.render(d,n,r):d,L=(()=>{if(!p)return"none";const g=p.editor;return typeof g=="function"?g(n,r,d):g})(),Ie=(()=>{if(!p)return z;if(p.displayValue)return p.displayValue(d,n,r);const g={...p.editoProps??{},...p.editorProps??{}},K=()=>{if(d==null)return"";if(Array.isArray(d))return d.join(", ");if(typeof d=="object"){const j=Array.isArray(g==null?void 0:g.items)?g.items:[];if(j.length>0){const M=j.map(y=>typeof y=="object"&&y!==null?y:{value:y,display:String(y)}),I=d,b=M.filter(y=>(I==null?void 0:I[y.value])===!0).map(y=>y.display);if(b.length)return b.join(", ")}try{return JSON.stringify(d)}catch{return String(d)}}return String(d)};switch(L){case"TextBox":return d==null?"":String(d);case"SelectBox":{const M=(Array.isArray(g.items)?g.items:[]).map(b=>typeof b=="object"&&b!==null?b:{value:b,display:String(b)});if(g.multiple){const y=(Array.isArray(d)?d:[]).map(V=>{var qe;return((qe=M.find(it=>String(it.value)===String(V)))==null?void 0:qe.display)??String(V)}).filter(V=>V!=null&&V!=="");return y.length?y.join(", "):""}const I=M.find(b=>String(b.value)===String(d));return I?I.display:d==null?"":String(d)}case"none":return c.isValidElement(z)?z:K();case"CheckBox":return String(!!d);case"CheckBoxGroup":{const M=(Array.isArray(g.items)?g.items:[]).map(y=>typeof y=="object"&&y!==null?y:{value:y,display:String(y)}),I=d||{},b=M.filter(y=>I[y.value]===!0).map(y=>y.display);return b.length?b.join(", "):""}default:return c.isValidElement(z)?z:K()}})(),_=(()=>{const g={width:"100%"},K=(p==null?void 0:p.editoProps)??{},j=(p==null?void 0:p.editorProps)??{},M={width:"100%",minWidth:0,...(K==null?void 0:K.style)??{},...(j==null?void 0:j.style)??{}};return{...g,...K,...j,style:M}})(),U=g=>{const K=u.dataField??u.key;ve==null||ve({rowIndex:r,colIndex:C,column:u,key:K,value:g,row:n})};let $=Ie;const Ne=xe&&!R&&p&&L!=="none"&&(tt(r,C)||rt(r,C,J,Me));if(Ne&&p)switch(L){case"TextBox":{$=e.jsx(ot,{text:d==null?"":String(d),onChange:g=>U(g.target.value),..._});break}case"SelectBox":{$=e.jsx(lt,{value:d,onChange:g=>U(g),..._});break}case"CheckBox":{$=e.jsx(be,{value:!!d,onChange:g=>U(g.target.checked),..._});break}case"CheckBoxGroup":{$=e.jsx(dt,{value:d??{},onChange:g=>U(g),..._});break}default:$=Ie}const Ce=["min-ui-table-td",`min-ui-text-${u.align??"left"}`];return Ne&&Ce.push("min-ui-table-td-editing"),L==="SelectBox"&&Ce.push("min-ui-table-td-overflow-visible"),e.jsx("td",{className:Ce.join(" "),rowSpan:J,colSpan:Me,tabIndex:xe&&p&&!R?0:void 0,onFocus:R?void 0:Ee(r,C),onClick:R?void 0:Ee(r,C),onBlur:R?void 0:at,children:$},C)})]},h)})})()})]})}),e.jsx(st,{visible:Re,messages:H})]})}T.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn",elements:[{name:"T"}],raw:"TableColumn<T>"}],raw:"TableColumn<T>[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, index: number) => React.Key",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"ReactKey",raw:"React.Key"}}},description:""},width:{required:!1,tsType:{name:'ReactCSSProperties["width"]',raw:'React.CSSProperties["width"]'},description:""},height:{required:!1,tsType:{name:'ReactCSSProperties["height"]',raw:'React.CSSProperties["height"]'},description:""},visible:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},striped:{required:!1,tsType:{name:"boolean"},description:""},bordered:{required:!1,tsType:{name:"boolean"},description:""},hoverable:{required:!1,tsType:{name:"boolean"},description:""},emptyText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},validationMessages:{required:!1,tsType:{name:"union",raw:"string[] | null | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"},{name:"undefined"}]},description:""},onInitialized:{required:!1,tsType:{name:"signature",type:"function",raw:"(el: HTMLDivElement | null) => void",signature:{arguments:[{type:{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]},name:"el"}],return:{name:"void"}}},description:""},editing:{required:!1,tsType:{name:"boolean"},description:"전체 편집 모드 여부"},onCellChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(args: {
  rowIndex: number;
  colIndex: number;
  column: TableColumn<T>;
  key: keyof T | string;
  value: any;
  row: T;
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  rowIndex: number;
  colIndex: number;
  column: TableColumn<T>;
  key: keyof T | string;
  value: any;
  row: T;
}`,signature:{properties:[{key:"rowIndex",value:{name:"number",required:!0}},{key:"colIndex",value:{name:"number",required:!0}},{key:"column",value:{name:"TableColumn",elements:[{name:"T"}],raw:"TableColumn<T>",required:!0}},{key:"key",value:{name:"union",raw:"keyof T | string",elements:[{name:"T"},{name:"string"}],required:!0}},{key:"value",value:{name:"any",required:!0}},{key:"row",value:{name:"T",required:!0}}]}},name:"args"}],return:{name:"void"}}},description:"셀 값 변경 알림"},selectMode:{required:!1,tsType:{name:"union",raw:'"single" | "multiple" | "none"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'},{name:"literal",value:'"none"'}]},description:"행 선택 모드"},selectedRowKeys:{required:!1,tsType:{name:"union",raw:"React.Key | React.Key[]",elements:[{name:"ReactKey",raw:"React.Key"},{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"}]},description:"선택된 행들의 키 값들 (multiple일 때 배열, single일 때 단일 값)"},onRowSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(args: {
  selectedRowKeys: React.Key[];
  selectedRows: T[];
  selectMode: SelectMode;
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  selectedRowKeys: React.Key[];
  selectedRows: T[];
  selectMode: SelectMode;
}`,signature:{properties:[{key:"selectedRowKeys",value:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]",required:!0}},{key:"selectedRows",value:{name:"Array",elements:[{name:"T"}],raw:"T[]",required:!0}},{key:"selectMode",value:{name:"union",raw:'"single" | "multiple" | "none"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'},{name:"literal",value:'"none"'}],required:!0}}]}},name:"args"}],return:{name:"void"}}},description:"행 선택 변경 알림"}}};const ct=[{id:1,name:"Alice",age:28,email:"alice@example.com",active:!0,permissions:{read:!0,write:!1,execute:null}},{id:2,name:"Bob",age:34,email:"bob@example.com",active:!1,permissions:{read:!0,write:!0,execute:!1}},{id:3,name:"Charlie",age:22,email:"charlie@example.com",active:!0,permissions:{read:!0,write:null,execute:!1}}],Te=[{id:1,name:"Alice",age:28,email:"alice@example.com",active:!0,permissions:{read:!0,write:!1,execute:null}},{id:2,name:"Bob",age:34,email:"bob@example.com",active:!1,permissions:{read:!0,write:!0,execute:!1},disabled:!0},{id:3,name:"Charlie",age:22,email:"charlie@example.com",active:!0,permissions:{read:!0,write:null,execute:!1}}],vt={title:"Components/Table",component:T,tags:["autodocs"],args:{columns:[{key:"id",header:"ID",width:60,align:"right",headerAlign:"center"},{key:"name",header:"Name",width:160},{key:"age",header:"Age",width:80,align:"center"},{key:"email",header:"Email",width:220}],data:ct,striped:!0,bordered:!0,hoverable:!0,width:"100%",height:void 0,validationMessages:null},argTypes:{onInitialized:{action:"initialized"},validationMessages:{control:"object"}}},Q={},X={args:{data:[],emptyText:"데이터가 없습니다."}},Y={args:{columns:[{key:"id",header:"#",width:60,align:"right"},{key:"name",header:"User",width:200},{key:"age",header:"Age",width:100,align:"center",render:t=>t>=30?`🔥 ${t}`:t},{key:"email",header:"Email",width:240,render:(t,s)=>`${s.name} <${t}>`}]}},Z={args:{validationMessages:["필수 값을 입력하세요.","이메일 형식이 올바르지 않습니다."]}},ee={render:t=>{const[s,a]=c.useState(t.data),i=[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160,edit:{editor:"TextBox",editorProps:{placeholder:"이름"}}},{key:"age",header:"Age",width:100,align:"center",edit:{editor:"SelectBox",editorProps:{items:[20,25,30,35,40]}}},{key:"email",header:"Email",width:220,edit:{editor:"TextBox",editorProps:{placeholder:"이메일"}}}];return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"10px",padding:"10px",background:"#f0f0f0"},children:[e.jsx("strong",{children:"현재 데이터:"}),e.jsx("pre",{children:JSON.stringify(s,null,2)})]}),e.jsx(T,{...t,columns:i,data:s,editing:!0,onCellChange:({rowIndex:o,key:m,value:w})=>{console.log("onCellChange:",{rowIndex:o,key:m,value:w}),a(x=>{const S=[...x];return S[o][m]=w,console.log("Updated rows:",S),S})}})]})}},ne={render:t=>{const[s,a]=c.useState(t.data),i=[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160,edit:{editor:"TextBox",editorProps:{placeholder:"이름"}}},{key:"age",header:"Age",width:100,align:"center",edit:{editor:"SelectBox",editorProps:{items:[20,25,30,35,40]}}},{key:"email",header:"Email",width:220,edit:{editor:"TextBox",editorProps:{placeholder:"이메일"}}},{key:"active",header:"Active",width:100,align:"center",edit:{editor:"CheckBox"}},{key:"permissions",header:"Permissions",width:260,edit:{editor:o=>o.id%2===0?"none":"CheckBoxGroup",editorProps:{items:[{value:"read",display:"Read"},{value:"write",display:"Write"},{value:"execute",display:"Execute"}],enableThreeState:!0,direction:"horizontal"}}}];return e.jsx(T,{...t,columns:i,data:s,editing:!0,onCellChange:({rowIndex:o,key:m,value:w})=>{a(x=>{const S=[...x];return S[o][m]=w,S})}})}},te={render:t=>{const[s,a]=c.useState(t.data),i=[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160,edit:{editor:o=>o.id%2===0?"none":"TextBox",editorProps:{placeholder:"이름"}}},{key:"age",header:"Age",width:100,align:"center",edit:{editor:o=>o.age<30?"SelectBox":"TextBox",editorProps:{items:[20,22,24,26,28,30,32,34,36]}}},{key:"email",header:"Email",width:220,edit:{editor:"TextBox",editorProps:{placeholder:"이메일"}}},{key:"active",header:"Active",width:100,align:"center",edit:{editor:"CheckBox"}},{key:"permissions",header:"Permissions",width:280,edit:{editor:o=>o.id%2===1?"CheckBoxGroup":"none",editorProps:{items:[{value:"read",display:"Read"},{value:"write",display:"Write"},{value:"execute",display:"Execute"}],enableThreeState:!0,direction:"horizontal"}}}];return e.jsx(T,{...t,columns:i,data:s,editing:!0,onCellChange:({rowIndex:o,key:m,value:w})=>{a(x=>{const S=[...x];return S[o][m]=w,S})}})}},re={render:t=>{const[s,a]=c.useState(t.data),i=[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name (Row-specific)",width:200,edit:{editor:(o,m)=>m===0?"TextBox":m===1?"SelectBox":"none",editorProps:{items:["Alice","Bob","Charlie","Dana"]}}},{key:"age",header:"Age",width:100,align:"center"},{key:"email",header:"Email",width:240}];return e.jsx(T,{...t,columns:i,data:s,editing:!0,onCellChange:({rowIndex:o,key:m,value:w})=>{a(x=>{const S=[...x];return S[o][m]=w,S})}})}},ae={render:t=>{const[s,a]=c.useState(1);return e.jsxs("div",{children:[e.jsxs("p",{children:["선택된 행: ",s]}),e.jsx(T,{...t,rowKey:i=>i.id,selectMode:"single",selectedRowKeys:s,onRowSelectionChange:({selectedRowKeys:i,selectedRows:o})=>{const m=i[0];a(m),console.log("선택된 행:",o)}})]})}},ie={render:t=>{const[s,a]=c.useState([1,3]);return e.jsxs("div",{children:[e.jsxs("p",{children:["선택된 행 IDs: ",s.join(", ")]}),e.jsx(T,{...t,rowKey:i=>i.id,selectMode:"multiple",selectedRowKeys:s,onRowSelectionChange:({selectedRowKeys:i,selectedRows:o})=>{a(i),console.log("선택된 행:",o)}})]})}},se={render:t=>{const[s,a]=c.useState(t.data),[i,o]=c.useState([1]),m=[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160,edit:{editor:"TextBox",editorProps:{placeholder:"이름"}}},{key:"age",header:"Age",width:100,align:"center"},{key:"email",header:"Email",width:220},{key:"active",header:"Active",width:100,align:"center",edit:{editor:"CheckBox"}}];return e.jsxs("div",{children:[e.jsxs("p",{children:["선택된 행 IDs: ",i.join(", ")]}),e.jsx(T,{...t,columns:m,rowKey:w=>w.id,data:s,selectMode:"multiple",selectedRowKeys:i,editing:!0,onRowSelectionChange:({selectedRowKeys:w,selectedRows:x})=>{o(w),console.log("선택된 행:",x)},onCellChange:({rowIndex:w,key:x,value:S})=>{a(we=>{const G=[...we];return G[w][x]=S,G})}})]})}},oe={args:{columns:[{key:"id",header:"ID",width:80,align:"right",headerAlign:"center"},{key:"name",header:"이름",width:150,align:"left",headerAlign:"center"},{key:"age",header:"나이",width:100,align:"center",headerAlign:"center"},{key:"email",header:"이메일",width:250,align:"left"}]}},le={args:{columns:[{key:"id",header:"ID",width:60,align:"right",headerAlign:"center"},{key:"user-info",header:"사용자 정보",headerAlign:"center",children:[{key:"name",header:"이름",width:120,align:"left"},{key:"age",header:"나이",width:80,align:"center"}]},{key:"contact",header:"연락처",headerAlign:"center",children:[{key:"email",header:"이메일",width:200,align:"left"}]},{key:"active",header:"활성",width:80,align:"center",headerAlign:"center",render:t=>t?"✓":"✗"}]}},de={args:{columns:[{key:"id",header:"ID",width:60,align:"right",headerAlign:"center"},{key:"personal",header:"개인 정보",headerAlign:"center",children:[{key:"basic",header:"기본 정보",headerAlign:"center",children:[{key:"name",header:"이름",width:100},{key:"age",header:"나이",width:60,align:"center"}]},{key:"email",header:"이메일",width:180}]},{key:"active",header:"상태",width:80,align:"center",headerAlign:"center",render:t=>t?"활성":"비활성"}]}},ce={args:{columns:[{key:"user-id",header:"ID",dataField:"id",width:60,align:"right",headerAlign:"center"},{key:"user-name",header:"사용자 이름",dataField:"name",width:150},{key:"user-age",header:"나이",dataField:"age",width:80,align:"center"},{key:"user-email",header:"이메일 주소",dataField:"email",width:220},{key:"user-status",header:"상태",dataField:"active",width:100,align:"center",render:t=>t?"✓ 활성":"✗ 비활성"}]}},he={args:{data:Te,columns:[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160},{key:"age",header:"Age",width:80,align:"center"},{key:"email",header:"Email",width:220},{key:"active",header:"Active",width:100,align:"center",render:t=>t?"✓":"✗"}]}},ue={render:t=>{const[s,a]=c.useState([1]);return e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:"10px"},children:[e.jsx("strong",{children:"선택된 행 IDs:"})," ",s.join(", "),e.jsx("br",{}),e.jsx("small",{children:"(2번 행은 비활성화되어 선택할 수 없습니다)"})]}),e.jsx(T,{...t,data:Te,rowKey:i=>i.id,selectMode:"multiple",selectedRowKeys:s,onRowSelectionChange:({selectedRowKeys:i,selectedRows:o})=>{a(i),console.log("선택된 행:",o)},columns:[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160},{key:"age",header:"Age",width:80,align:"center"},{key:"email",header:"Email",width:220},{key:"active",header:"Active",width:100,align:"center",render:i=>i?"✓":"✗"}]})]})}},me={render:t=>{const[s,a]=c.useState(Te);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"10px"},children:e.jsx("small",{children:"(2번 행은 비활성화되어 편집할 수 없습니다)"})}),e.jsx(T,{...t,data:s,editing:!0,onCellChange:({rowIndex:i,key:o,value:m})=>{a(w=>{const x=[...w];return x[i][o]=m,x})},columns:[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160,edit:{editor:"TextBox",editorProps:{placeholder:"이름"}}},{key:"age",header:"Age",width:100,align:"center",edit:{editor:"SelectBox",editorProps:{items:[20,25,30,35,40]}}},{key:"email",header:"Email",width:220,edit:{editor:"TextBox",editorProps:{placeholder:"이메일"}}},{key:"active",header:"Active",width:100,align:"center",edit:{editor:"CheckBox"}}]})]})}},Un=[{id:1,category:"Electronics",product:"Laptop",price:1200,stock:50},{id:2,category:"Electronics",product:"Mouse",price:25,stock:200},{id:3,category:"Electronics",product:"Keyboard",price:75,stock:150},{id:4,category:"Books",product:"Novel",price:15,stock:100},{id:5,category:"Books",product:"Magazine",price:5,stock:300},{id:6,category:"Clothing",product:"T-Shirt",price:20,stock:500}],ge={args:{data:Un,columns:[{key:"id",header:"ID",width:60,align:"right",headerAlign:"center"},{key:"category",header:"Category",width:150,align:"center",getCellMerge:(t,s,a)=>a===0?{rowSpan:3}:a===3?{rowSpan:2}:a===5?{rowSpan:1}:null},{key:"product",header:"Product",width:150},{key:"price",header:"Price",width:100,align:"right",render:t=>`$${t}`},{key:"stock",header:"Stock",width:100,align:"center"}]}},pe={args:{data:[{id:1,col1:"A",col2:"B",col3:"C",col4:"D"},{id:2,col1:"A",col2:"E",col3:"F",col4:"G"},{id:3,col1:"H",col2:"I",col3:"J",col4:"K"},{id:4,col1:"L",col2:"M",col3:"N",col4:"O"}],columns:[{key:"id",header:"ID",width:60,align:"center"},{key:"col1",header:"Column 1",width:150,align:"center",getCellMerge:(t,s,a)=>a===0?{rowSpan:2}:null},{key:"col2",header:"Column 2",width:150,align:"center"},{key:"col3",header:"Column 3-4",width:150,align:"center",getCellMerge:(t,s,a)=>({colSpan:2})},{key:"col4",header:"Hidden",width:150,align:"center"}]}},ye={render:t=>{const[s,a]=c.useState(Un);return e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:"10px"},children:[e.jsx("strong",{children:"병합된 셀에서도 편집 가능합니다"}),e.jsx("br",{}),e.jsx("small",{children:"Category 컬럼은 병합되어 있지만, 병합된 첫 번째 셀에서 편집할 수 있습니다."})]}),e.jsx("div",{style:{marginBottom:"10px",fontSize:"12px"},children:e.jsx("pre",{children:JSON.stringify(s,null,2)})}),e.jsx(T,{...t,data:s,editing:!0,onCellChange:({rowIndex:i,key:o,value:m})=>{console.log("Cell changed:",{rowIndex:i,key:o,value:m}),a(w=>{const x=[...w];return x[i][o]=m,x})},columns:[{key:"id",header:"ID",width:60,align:"right",headerAlign:"center"},{key:"category",header:"Category",width:150,align:"center",getCellMerge:(i,o,m)=>m===0?{rowSpan:3}:m===3?{rowSpan:2}:m===5?{rowSpan:1}:null,edit:{editor:"TextBox",editorProps:{placeholder:"카테고리"}}},{key:"product",header:"Product",width:150,edit:{editor:"TextBox",editorProps:{placeholder:"제품명"}}},{key:"price",header:"Price",width:100,align:"right",render:i=>`$${i}`,edit:{editor:"TextBox",editorProps:{placeholder:"가격"}}},{key:"stock",header:"Stock",width:100,align:"center",edit:{editor:"SelectBox",editorProps:{items:[50,100,150,200,300,500]}}}]})]})}};var We,Fe,ze;Q.parameters={...Q.parameters,docs:{...(We=Q.parameters)==null?void 0:We.docs,source:{originalSource:"{}",...(ze=(Fe=Q.parameters)==null?void 0:Fe.docs)==null?void 0:ze.source}}};var Ve,Ge,He;X.parameters={...X.parameters,docs:{...(Ve=X.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    data: [],
    emptyText: "데이터가 없습니다."
  }
}`,...(He=(Ge=X.parameters)==null?void 0:Ge.docs)==null?void 0:He.source}}};var Oe,Je,Le;Y.parameters={...Y.parameters,docs:{...(Oe=Y.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: "id",
      header: "#",
      width: 60,
      align: "right"
    }, {
      key: "name",
      header: "User",
      width: 200
    }, {
      key: "age",
      header: "Age",
      width: 100,
      align: "center",
      render: (v: any) => v >= 30 ? \`🔥 \${v}\` : v
    }, {
      key: "email",
      header: "Email",
      width: 240,
      render: (v: any, row: Row) => \`\${row.name} <\${v}>\`
    }]
  }
}`,...(Le=(Je=Y.parameters)==null?void 0:Je.docs)==null?void 0:Le.source}}};var _e,Ue,Qe;Z.parameters={...Z.parameters,docs:{...(_e=Z.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    validationMessages: ["필수 값을 입력하세요.", "이메일 형식이 올바르지 않습니다."]
  }
}`,...(Qe=(Ue=Z.parameters)==null?void 0:Ue.docs)==null?void 0:Qe.source}}};var Xe,Ye,Ze;ee.parameters={...ee.parameters,docs:{...(Xe=ee.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: args => {
    const [rows, setRows] = React.useState<Row[]>(args.data as Row[]);
    const columns = [{
      key: "id",
      header: "ID",
      width: 60,
      align: "right" as const
      // ID는 편집 불가
    }, {
      key: "name",
      header: "Name",
      width: 160,
      edit: {
        editor: "TextBox",
        editorProps: {
          placeholder: "이름"
        }
      }
    }, {
      key: "age",
      header: "Age",
      width: 100,
      align: "center" as const,
      edit: {
        editor: "SelectBox",
        editorProps: {
          items: [20, 25, 30, 35, 40]
        }
      }
    }, {
      key: "email",
      header: "Email",
      width: 220,
      edit: {
        editor: "TextBox",
        editorProps: {
          placeholder: "이메일"
        }
      }
    }];
    return <div>
        <div style={{
        marginBottom: "10px",
        padding: "10px",
        background: "#f0f0f0"
      }}>
          <strong>현재 데이터:</strong>
          <pre>{JSON.stringify(rows, null, 2)}</pre>
        </div>
        <Table<Row> {...args} columns={columns as any} data={rows} editing onCellChange={({
        rowIndex,
        key,
        value
      }) => {
        console.log("onCellChange:", {
          rowIndex,
          key,
          value
        });
        setRows(prev => {
          const next = [...prev];
          (next[rowIndex] as any)[key as any] = value;
          console.log("Updated rows:", next);
          return next;
        });
      }} />
      </div>;
  }
}`,...(Ze=(Ye=ee.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var en,nn,tn;ne.parameters={...ne.parameters,docs:{...(en=ne.parameters)==null?void 0:en.docs,source:{originalSource:`{
  render: args => {
    const [rows, setRows] = React.useState<Row[]>(args.data as Row[]);
    const columns = [{
      key: "id",
      header: "ID",
      width: 60,
      align: "right" as const
    }, {
      key: "name",
      header: "Name",
      width: 160,
      edit: {
        editor: "TextBox",
        editorProps: {
          placeholder: "이름"
        }
      }
    }, {
      key: "age",
      header: "Age",
      width: 100,
      align: "center" as const,
      edit: {
        editor: "SelectBox",
        editorProps: {
          items: [20, 25, 30, 35, 40]
        }
      }
    }, {
      key: "email",
      header: "Email",
      width: 220,
      edit: {
        editor: "TextBox",
        editorProps: {
          placeholder: "이메일"
        }
      }
    }, {
      key: "active",
      header: "Active",
      width: 100,
      align: "center" as const,
      edit: {
        editor: "CheckBox"
      }
    }, {
      key: "permissions",
      header: "Permissions",
      width: 260,
      edit: {
        editor: (row: Row) => row.id % 2 === 0 ? "none" : "CheckBoxGroup",
        editorProps: {
          items: [{
            value: "read",
            display: "Read"
          }, {
            value: "write",
            display: "Write"
          }, {
            value: "execute",
            display: "Execute"
          }],
          enableThreeState: true,
          direction: "horizontal"
        }
      }
    }];
    return <Table<Row> {...args} columns={columns as any} data={rows} editing onCellChange={({
      rowIndex,
      key,
      value
    }) => {
      setRows(prev => {
        const next = [...prev];
        (next[rowIndex] as any)[key as any] = value;
        return next;
      });
    }} />;
  }
}`,...(tn=(nn=ne.parameters)==null?void 0:nn.docs)==null?void 0:tn.source}}};var rn,an,sn;te.parameters={...te.parameters,docs:{...(rn=te.parameters)==null?void 0:rn.docs,source:{originalSource:`{
  render: args => {
    const [rows, setRows] = React.useState<Row[]>(args.data as Row[]);
    const columns = [{
      key: "id",
      header: "ID",
      width: 60,
      align: "right" as const
    }, {
      key: "name",
      header: "Name",
      width: 160,
      // 짝수 id는 편집 비활성화, 홀수 id는 TextBox
      edit: {
        editor: (row: Row) => row.id % 2 === 0 ? "none" : "TextBox",
        editorProps: {
          placeholder: "이름"
        }
      }
    }, {
      key: "age",
      header: "Age",
      width: 100,
      align: "center" as const,
      // 나이에 따라 에디터 타입 다르게: 30 미만 SelectBox, 그 외 TextBox
      edit: {
        editor: (row: Row) => row.age < 30 ? "SelectBox" : "TextBox",
        editorProps: {
          items: [20, 22, 24, 26, 28, 30, 32, 34, 36]
        }
      }
    }, {
      key: "email",
      header: "Email",
      width: 220,
      edit: {
        editor: "TextBox",
        editorProps: {
          placeholder: "이메일"
        }
      }
    }, {
      key: "active",
      header: "Active",
      width: 100,
      align: "center" as const,
      edit: {
        editor: "CheckBox"
      }
    }, {
      key: "permissions",
      header: "Permissions",
      width: 280,
      // 홀수 id 행만 그룹 편집, 짝수 id는 none
      edit: {
        editor: (row: Row) => row.id % 2 === 1 ? "CheckBoxGroup" : "none",
        editorProps: {
          items: [{
            value: "read",
            display: "Read"
          }, {
            value: "write",
            display: "Write"
          }, {
            value: "execute",
            display: "Execute"
          }],
          enableThreeState: true,
          direction: "horizontal"
        }
      }
    }];
    return <Table<Row> {...args} columns={columns as any} data={rows} editing onCellChange={({
      rowIndex,
      key,
      value
    }) => {
      setRows(prev => {
        const next = [...prev];
        (next[rowIndex] as any)[key as any] = value;
        return next;
      });
    }} />;
  }
}`,...(sn=(an=te.parameters)==null?void 0:an.docs)==null?void 0:sn.source}}};var on,ln,dn;re.parameters={...re.parameters,docs:{...(on=re.parameters)==null?void 0:on.docs,source:{originalSource:`{
  render: args => {
    const [rows, setRows] = React.useState<Row[]>(args.data as Row[]);
    const columns = [{
      key: "id",
      header: "ID",
      width: 60,
      align: "right" as const
    }, {
      key: "name",
      header: "Name (Row-specific)",
      width: 200,
      edit: {
        editor: (_row: Row, rowIndex: number) => rowIndex === 0 ? "TextBox" : rowIndex === 1 ? "SelectBox" : "none",
        editorProps: {
          items: ["Alice", "Bob", "Charlie", "Dana"]
        }
      }
    }, {
      key: "age",
      header: "Age",
      width: 100,
      align: "center" as const
    }, {
      key: "email",
      header: "Email",
      width: 240
    }];
    return <Table<Row> {...args} columns={columns as any} data={rows} editing onCellChange={({
      rowIndex,
      key,
      value
    }) => {
      setRows(prev => {
        const next = [...prev];
        (next[rowIndex] as any)[key as any] = value;
        return next;
      });
    }} />;
  }
}`,...(dn=(ln=re.parameters)==null?void 0:ln.docs)==null?void 0:dn.source}}};var cn,hn,un;ae.parameters={...ae.parameters,docs:{...(cn=ae.parameters)==null?void 0:cn.docs,source:{originalSource:`{
  render: args => {
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<number>(1);
    return <div>
        <p>선택된 행: {selectedRowKeys}</p>
        <Table<Row> {...args} rowKey={row => row.id} selectMode="single" selectedRowKeys={selectedRowKeys} onRowSelectionChange={({
        selectedRowKeys,
        selectedRows
      }) => {
        const id = selectedRowKeys[0];
        setSelectedRowKeys(id as number);
        console.log("선택된 행:", selectedRows);
      }} />
      </div>;
  }
}`,...(un=(hn=ae.parameters)==null?void 0:hn.docs)==null?void 0:un.source}}};var mn,gn,pn;ie.parameters={...ie.parameters,docs:{...(mn=ie.parameters)==null?void 0:mn.docs,source:{originalSource:`{
  render: args => {
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<number[]>([1, 3]);
    return <div>
        <p>선택된 행 IDs: {selectedRowKeys.join(", ")}</p>
        <Table<Row> {...args} rowKey={row => row.id} selectMode="multiple" selectedRowKeys={selectedRowKeys} onRowSelectionChange={({
        selectedRowKeys,
        selectedRows
      }) => {
        setSelectedRowKeys(selectedRowKeys as number[]);
        console.log("선택된 행:", selectedRows);
      }} />
      </div>;
  }
}`,...(pn=(gn=ie.parameters)==null?void 0:gn.docs)==null?void 0:pn.source}}};var yn,wn,kn;se.parameters={...se.parameters,docs:{...(yn=se.parameters)==null?void 0:yn.docs,source:{originalSource:`{
  render: args => {
    const [rows, setRows] = React.useState<Row[]>(args.data as Row[]);
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<number[]>([1]);
    const columns = [{
      key: "id",
      header: "ID",
      width: 60,
      align: "right" as const
    }, {
      key: "name",
      header: "Name",
      width: 160,
      edit: {
        editor: "TextBox",
        editorProps: {
          placeholder: "이름"
        }
      }
    }, {
      key: "age",
      header: "Age",
      width: 100,
      align: "center" as const
    }, {
      key: "email",
      header: "Email",
      width: 220
    }, {
      key: "active",
      header: "Active",
      width: 100,
      align: "center" as const,
      edit: {
        editor: "CheckBox"
      }
    }];
    return <div>
        <p>선택된 행 IDs: {selectedRowKeys.join(", ")}</p>
        <Table<Row> {...args} columns={columns as any} rowKey={row => row.id} data={rows} selectMode="multiple" selectedRowKeys={selectedRowKeys} editing onRowSelectionChange={({
        selectedRowKeys,
        selectedRows
      }) => {
        setSelectedRowKeys(selectedRowKeys as number[]);
        console.log("선택된 행:", selectedRows);
      }} onCellChange={({
        rowIndex,
        key,
        value
      }) => {
        setRows(prev => {
          const next = [...prev];
          (next[rowIndex] as any)[key as any] = value;
          return next;
        });
      }} />
      </div>;
  }
}`,...(kn=(wn=se.parameters)==null?void 0:wn.docs)==null?void 0:kn.source}}};var xn,vn,Rn;oe.parameters={...oe.parameters,docs:{...(xn=oe.parameters)==null?void 0:xn.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: "id",
      header: "ID",
      width: 80,
      align: "right",
      headerAlign: "center"
    }, {
      key: "name",
      header: "이름",
      width: 150,
      align: "left",
      headerAlign: "center"
    }, {
      key: "age",
      header: "나이",
      width: 100,
      align: "center",
      headerAlign: "center"
    }, {
      key: "email",
      header: "이메일",
      width: 250,
      align: "left"
    }]
  }
}`,...(Rn=(vn=oe.parameters)==null?void 0:vn.docs)==null?void 0:Rn.source}}};var Sn,fn,Cn;le.parameters={...le.parameters,docs:{...(Sn=le.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: "id",
      header: "ID",
      width: 60,
      align: "right",
      headerAlign: "center"
    }, {
      key: "user-info",
      header: "사용자 정보",
      headerAlign: "center",
      children: [{
        key: "name",
        header: "이름",
        width: 120,
        align: "left"
      }, {
        key: "age",
        header: "나이",
        width: 80,
        align: "center"
      }]
    }, {
      key: "contact",
      header: "연락처",
      headerAlign: "center",
      children: [{
        key: "email",
        header: "이메일",
        width: 200,
        align: "left"
      }]
    }, {
      key: "active",
      header: "활성",
      width: 80,
      align: "center",
      headerAlign: "center",
      render: (v: any) => v ? "✓" : "✗"
    }]
  }
}`,...(Cn=(fn=le.parameters)==null?void 0:fn.docs)==null?void 0:Cn.source}}};var bn,Tn,An;de.parameters={...de.parameters,docs:{...(bn=de.parameters)==null?void 0:bn.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: "id",
      header: "ID",
      width: 60,
      align: "right",
      headerAlign: "center"
    }, {
      key: "personal",
      header: "개인 정보",
      headerAlign: "center",
      children: [{
        key: "basic",
        header: "기본 정보",
        headerAlign: "center",
        children: [{
          key: "name",
          header: "이름",
          width: 100
        }, {
          key: "age",
          header: "나이",
          width: 60,
          align: "center"
        }]
      }, {
        key: "email",
        header: "이메일",
        width: 180
      }]
    }, {
      key: "active",
      header: "상태",
      width: 80,
      align: "center",
      headerAlign: "center",
      render: (v: any) => v ? "활성" : "비활성"
    }]
  }
}`,...(An=(Tn=de.parameters)==null?void 0:Tn.docs)==null?void 0:An.source}}};var Bn,Kn,jn;ce.parameters={...ce.parameters,docs:{...(Bn=ce.parameters)==null?void 0:Bn.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: "user-id",
      header: "ID",
      dataField: "id",
      width: 60,
      align: "right",
      headerAlign: "center"
    }, {
      key: "user-name",
      header: "사용자 이름",
      dataField: "name",
      width: 150
    }, {
      key: "user-age",
      header: "나이",
      dataField: "age",
      width: 80,
      align: "center"
    }, {
      key: "user-email",
      header: "이메일 주소",
      dataField: "email",
      width: 220
    }, {
      key: "user-status",
      header: "상태",
      dataField: "active",
      width: 100,
      align: "center",
      render: (v: any) => v ? "✓ 활성" : "✗ 비활성"
    }]
  }
}`,...(jn=(Kn=ce.parameters)==null?void 0:Kn.docs)==null?void 0:jn.source}}};var Dn,Pn,En;he.parameters={...he.parameters,docs:{...(Dn=he.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
  args: {
    data: sampleDataWithDisabled,
    columns: [{
      key: "id",
      header: "ID",
      width: 60,
      align: "right"
    }, {
      key: "name",
      header: "Name",
      width: 160
    }, {
      key: "age",
      header: "Age",
      width: 80,
      align: "center"
    }, {
      key: "email",
      header: "Email",
      width: 220
    }, {
      key: "active",
      header: "Active",
      width: 100,
      align: "center",
      render: (v: any) => v ? "✓" : "✗"
    }]
  }
}`,...(En=(Pn=he.parameters)==null?void 0:Pn.docs)==null?void 0:En.source}}};var Mn,In,Nn;ue.parameters={...ue.parameters,docs:{...(Mn=ue.parameters)==null?void 0:Mn.docs,source:{originalSource:`{
  render: args => {
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<number[]>([1]);
    return <div>
        <p style={{
        marginBottom: "10px"
      }}>
          <strong>선택된 행 IDs:</strong> {selectedRowKeys.join(", ")}
          <br />
          <small>(2번 행은 비활성화되어 선택할 수 없습니다)</small>
        </p>
        <Table {...args} data={sampleDataWithDisabled} rowKey={(row: any) => row.id} selectMode="multiple" selectedRowKeys={selectedRowKeys} onRowSelectionChange={({
        selectedRowKeys,
        selectedRows
      }) => {
        setSelectedRowKeys(selectedRowKeys as number[]);
        console.log("선택된 행:", selectedRows);
      }} columns={[{
        key: "id",
        header: "ID",
        width: 60,
        align: "right"
      }, {
        key: "name",
        header: "Name",
        width: 160
      }, {
        key: "age",
        header: "Age",
        width: 80,
        align: "center"
      }, {
        key: "email",
        header: "Email",
        width: 220
      }, {
        key: "active",
        header: "Active",
        width: 100,
        align: "center",
        render: (v: any) => v ? "✓" : "✗"
      }]} />
      </div>;
  }
}`,...(Nn=(In=ue.parameters)==null?void 0:In.docs)==null?void 0:Nn.source}}};var $n,qn,Wn;me.parameters={...me.parameters,docs:{...($n=me.parameters)==null?void 0:$n.docs,source:{originalSource:`{
  render: args => {
    const [rows, setRows] = React.useState(sampleDataWithDisabled);
    return <div>
        <p style={{
        marginBottom: "10px"
      }}>
          <small>(2번 행은 비활성화되어 편집할 수 없습니다)</small>
        </p>
        <Table {...args} data={rows} editing onCellChange={({
        rowIndex,
        key,
        value
      }) => {
        setRows(prev => {
          const next = [...prev];
          (next[rowIndex] as any)[key as any] = value;
          return next;
        });
      }} columns={[{
        key: "id",
        header: "ID",
        width: 60,
        align: "right"
      }, {
        key: "name",
        header: "Name",
        width: 160,
        edit: {
          editor: "TextBox",
          editorProps: {
            placeholder: "이름"
          }
        }
      }, {
        key: "age",
        header: "Age",
        width: 100,
        align: "center",
        edit: {
          editor: "SelectBox",
          editorProps: {
            items: [20, 25, 30, 35, 40]
          }
        }
      }, {
        key: "email",
        header: "Email",
        width: 220,
        edit: {
          editor: "TextBox",
          editorProps: {
            placeholder: "이메일"
          }
        }
      }, {
        key: "active",
        header: "Active",
        width: 100,
        align: "center",
        edit: {
          editor: "CheckBox"
        }
      }]} />
      </div>;
  }
}`,...(Wn=(qn=me.parameters)==null?void 0:qn.docs)==null?void 0:Wn.source}}};var Fn,zn,Vn;ge.parameters={...ge.parameters,docs:{...(Fn=ge.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
  args: {
    data: mergeData as any,
    columns: [{
      key: "id",
      header: "ID",
      width: 60,
      align: "right",
      headerAlign: "center"
    }, {
      key: "category",
      header: "Category",
      width: 150,
      align: "center",
      // 같은 카테고리를 병합
      getCellMerge: (value: any, row: MergeData, rowIndex: number) => {
        if (rowIndex === 0) {
          // Electronics: 3행
          return {
            rowSpan: 3
          };
        } else if (rowIndex === 3) {
          // Books: 2행
          return {
            rowSpan: 2
          };
        } else if (rowIndex === 5) {
          // Clothing: 1행
          return {
            rowSpan: 1
          };
        }
        return null;
      }
    }, {
      key: "product",
      header: "Product",
      width: 150
    }, {
      key: "price",
      header: "Price",
      width: 100,
      align: "right",
      render: (v: any) => \`$\${v}\`
    }, {
      key: "stock",
      header: "Stock",
      width: 100,
      align: "center"
    }]
  }
}`,...(Vn=(zn=ge.parameters)==null?void 0:zn.docs)==null?void 0:Vn.source}}};var Gn,Hn,On;pe.parameters={...pe.parameters,docs:{...(Gn=pe.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
  args: {
    data: [{
      id: 1,
      col1: "A",
      col2: "B",
      col3: "C",
      col4: "D"
    }, {
      id: 2,
      col1: "A",
      col2: "E",
      col3: "F",
      col4: "G"
    }, {
      id: 3,
      col1: "H",
      col2: "I",
      col3: "J",
      col4: "K"
    }, {
      id: 4,
      col1: "L",
      col2: "M",
      col3: "N",
      col4: "O"
    }],
    columns: [{
      key: "id",
      header: "ID",
      width: 60,
      align: "center"
    }, {
      key: "col1",
      header: "Column 1",
      width: 150,
      align: "center",
      // 첫 두 행 병합
      getCellMerge: (value: any, row: any, rowIndex: number) => {
        if (rowIndex === 0) {
          return {
            rowSpan: 2
          };
        }
        return null;
      }
    }, {
      key: "col2",
      header: "Column 2",
      width: 150,
      align: "center"
    }, {
      key: "col3",
      header: "Column 3-4",
      width: 150,
      align: "center",
      // 2열 병합
      getCellMerge: (value: any, row: any, rowIndex: number) => {
        return {
          colSpan: 2
        };
      }
    }, {
      key: "col4",
      header: "Hidden",
      width: 150,
      align: "center"
    }]
  }
}`,...(On=(Hn=pe.parameters)==null?void 0:Hn.docs)==null?void 0:On.source}}};var Jn,Ln,_n;ye.parameters={...ye.parameters,docs:{...(Jn=ye.parameters)==null?void 0:Jn.docs,source:{originalSource:`{
  render: (args: any) => {
    const [rows, setRows] = React.useState(mergeData);
    return <div>
        <p style={{
        marginBottom: "10px"
      }}>
          <strong>병합된 셀에서도 편집 가능합니다</strong>
          <br />
          <small>
            Category 컬럼은 병합되어 있지만, 병합된 첫 번째 셀에서 편집할 수
            있습니다.
          </small>
        </p>
        <div style={{
        marginBottom: "10px",
        fontSize: "12px"
      }}>
          <pre>{JSON.stringify(rows, null, 2)}</pre>
        </div>
        <Table {...args} data={rows} editing onCellChange={({
        rowIndex,
        key,
        value
      }: any) => {
        console.log("Cell changed:", {
          rowIndex,
          key,
          value
        });
        setRows((prev: any) => {
          const next = [...prev];
          (next[rowIndex] as any)[key as any] = value;
          return next;
        });
      }} columns={[{
        key: "id",
        header: "ID",
        width: 60,
        align: "right",
        headerAlign: "center"
      }, {
        key: "category",
        header: "Category",
        width: 150,
        align: "center",
        // 같은 카테고리를 병합하고 편집 가능하게
        getCellMerge: (value: any, row: any, rowIndex: number) => {
          if (rowIndex === 0) {
            return {
              rowSpan: 3
            }; // Electronics: 3행
          } else if (rowIndex === 3) {
            return {
              rowSpan: 2
            }; // Books: 2행
          } else if (rowIndex === 5) {
            return {
              rowSpan: 1
            }; // Clothing: 1행
          }
          return null;
        },
        edit: {
          editor: "TextBox",
          editorProps: {
            placeholder: "카테고리"
          }
        }
      }, {
        key: "product",
        header: "Product",
        width: 150,
        edit: {
          editor: "TextBox",
          editorProps: {
            placeholder: "제품명"
          }
        }
      }, {
        key: "price",
        header: "Price",
        width: 100,
        align: "right",
        render: (v: any) => \`$\${v}\`,
        edit: {
          editor: "TextBox",
          editorProps: {
            placeholder: "가격"
          }
        }
      }, {
        key: "stock",
        header: "Stock",
        width: 100,
        align: "center",
        edit: {
          editor: "SelectBox",
          editorProps: {
            items: [50, 100, 150, 200, 300, 500]
          }
        }
      }]} />
      </div>;
  }
}`,...(_n=(Ln=ye.parameters)==null?void 0:Ln.docs)==null?void 0:_n.source}}};const Rt=["Basic","Empty","CustomCells","WithValidation","Editing","EditingAll","PerColumnEditors","RowSpecificEditors","SingleSelection","MultipleSelection","SelectionWithEditing","CustomAlignment","NestedColumns","ComplexNestedColumns","WithDataField","WithDisabledRows","WithDisabledRowsAndSelection","WithDisabledRowsAndEditing","WithCellMerge","WithComplexMerge","WithMergeAndEditing"];export{Q as Basic,de as ComplexNestedColumns,oe as CustomAlignment,Y as CustomCells,ee as Editing,ne as EditingAll,X as Empty,ie as MultipleSelection,le as NestedColumns,te as PerColumnEditors,re as RowSpecificEditors,se as SelectionWithEditing,ae as SingleSelection,ge as WithCellMerge,pe as WithComplexMerge,ce as WithDataField,he as WithDisabledRows,me as WithDisabledRowsAndEditing,ue as WithDisabledRowsAndSelection,ye as WithMergeAndEditing,Z as WithValidation,Rt as __namedExportsOrder,vt as default};
