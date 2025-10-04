import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as c}from"./index-DpTt3J-R.js";import{V as zn}from"./ValidationMessages-DkT8DR7l.js";import{T as Vn}from"./TextBox-DoTSKBYZ.js";import{S as Gn}from"./SelectBox-qxA2r7T9.js";import{C as ke}from"./CheckBox-XtxcCkuZ.js";import{C as _n}from"./CheckBoxGroup-dibTUBOw.js";import"./index-D9ZhQrDp.js";function S(a){const{columns:i,data:l,rowKey:r,width:s,height:y,visible:w=!0,className:k="",style:R,striped:ce=!0,bordered:F=!0,hoverable:En=!0,emptyText:Pn="No data",validationMessages:z,onInitialized:me,editing:ue=!1,onCellChange:he,selectMode:p="none",selectedRowKeys:M=[],onRowSelectionChange:B}=a,ge=c.useMemo(()=>Array.isArray(z)&&z.length>0,[z]),ve=c.useRef(null);if(c.useEffect(()=>{me==null||me(ve.current)},[]),!w)return null;const fe={...R,...s!=null?{width:s}:{width:"100%"},...y!=null?{height:y}:{}},ye=t=>{const n=[];return t.forEach(d=>{d.children&&d.children.length>0?n.push(...ye(d.children)):n.push(d)}),n},be=t=>{let n=1;return t.forEach(d=>{d.children&&d.children.length>0&&(n=Math.max(n,1+be(d.children)))}),n},In=(t,n,d)=>{const v=Array.from({length:d},()=>[]),T=(u,g,b)=>{var I;const W=u.headerAlign??u.align??"left",o=u.children&&u.children.length>0,x=o?ye([u]).length:1,P=o?1:d-b+1;(I=v[b-1])==null||I.push(e.jsx("th",{className:`min-ui-table-th min-ui-text-${W}`,colSpan:x,rowSpan:P,children:u.header},`${b}-${g}`)),o&&u.children&&u.children.forEach((Ke,G)=>{T(Ke,G,b+1)})};return t.forEach((u,g)=>T(u,g,n)),v},pe=c.useMemo(()=>ye(i),[i]),we=c.useMemo(()=>be(i),[i]),Nn=c.useMemo(()=>In(i,1,we),[i,we]),[V,Se]=c.useState(null),j=c.useMemo(()=>M?Array.isArray(M)?M:[M]:[],[M]),C=c.useCallback((t,n)=>r?r(t,n):n,[r]),Mn=c.useCallback((t,n)=>{const d=C(t,n);return j.includes(d)},[j,C]),Ce=c.useCallback((t,n)=>{if(p==="none"||!B)return;const d=C(t,n),v=[...j],T=v.indexOf(d);if(p==="single")B({selectedRowKeys:[d],selectedRows:[t],selectMode:p});else if(p==="multiple"){T===-1?v.push(d):v.splice(T,1);const u=v.map(g=>l.find((b,W)=>C(b,W)===g)).filter(Boolean);B({selectedRowKeys:v,selectedRows:u,selectMode:p})}},[p,B,j,C,l]),qn=c.useCallback(()=>{if(p!=="multiple"||!B)return;const t=l.map((d,v)=>C(d,v)),n=t.every(d=>j.includes(d));B(n?{selectedRowKeys:[],selectedRows:[],selectMode:p}:{selectedRowKeys:t,selectedRows:l,selectMode:p})},[p,B,j,l,C]),Te=c.useMemo(()=>{if(p!=="multiple"||l.length===0)return{checked:!1,indeterminate:!1};const t=l.map((v,T)=>C(v,T)),n=j.length,d=t.length;return n===0?{checked:!1,indeterminate:!1}:n===d?{checked:!0,indeterminate:!1}:{checked:!1,indeterminate:!0}},[p,j,l,C]),Wn=c.useCallback((t,n)=>!!(V&&V.rowIndex===t&&V.colIndex===n),[V]),Ae=(t,n)=>()=>{ue&&Se({rowIndex:t,colIndex:n})},q=c.useRef(null);c.useEffect(()=>()=>{q.current&&clearTimeout(q.current)},[]);const $n=t=>{const n=t.relatedTarget;q.current&&clearTimeout(q.current),!t.currentTarget.contains(n)&&(q.current=setTimeout(()=>{const d=document.activeElement;(d==null?void 0:d.closest(".min-ui-selectbox-dropdown"))||Se(null)},150))};return e.jsxs("div",{ref:ve,className:`min-ui-table-wrapper ${k}`.trim(),style:{width:fe.width},children:[e.jsx("div",{className:`min-ui-table-container ${ge?"min-ui-table-invalid":""}`.trim(),style:{height:fe.height},children:e.jsxs("table",{className:`min-ui-table ${ce?"min-ui-table-striped":""} ${F?"min-ui-table-bordered":""} ${En?"min-ui-table-hover":""} ${ge?"min-ui-table-invalid":""}`.trim(),children:[e.jsxs("colgroup",{children:[p==="multiple"&&e.jsx("col",{style:{width:"40px"}},"select"),pe.map((t,n)=>e.jsx("col",{style:{width:t.width}},n))]}),e.jsx("thead",{className:"min-ui-table-thead",children:Nn.map((t,n)=>e.jsxs("tr",{children:[n===0&&p==="multiple"&&e.jsx("th",{className:"min-ui-table-th min-ui-table-select-header",rowSpan:we,children:e.jsx(ke,{value:Te.indeterminate?null:Te.checked,enableThreeState:!0,onChange:qn})}),t]},n))}),e.jsx("tbody",{className:"min-ui-table-tbody",children:l.length===0?e.jsx("tr",{className:"min-ui-table-empty-row",children:e.jsx("td",{className:"min-ui-table-empty",colSpan:pe.length+(p==="multiple"?1:0),children:Pn})}):l.map((t,n)=>{const d=r?r(t,n):n,v=Mn(t,n),T=p!=="none",u=t.disabled===!0;return e.jsxs("tr",{className:`min-ui-table-tr ${v?"min-ui-table-tr-selected":""} ${T&&p!=="multiple"&&!u?"min-ui-table-tr-clickable":""} ${u?"min-ui-table-tr-disabled":""}`.trim(),onClick:p!=="multiple"&&!u?()=>Ce(t,n):void 0,children:[p==="multiple"&&e.jsx("td",{className:"min-ui-table-td min-ui-table-select-cell",onClick:g=>{g.stopPropagation()},children:e.jsx(ke,{value:v,disabled:u,onChange:g=>{g.stopPropagation(),u||Ce(t,n)},onClick:g=>{g.stopPropagation()}})}),pe.map((g,b)=>{const W=g.dataField??g.key,o=t[W],x=g.edit,P=g.render?g.render(o,t,n):o,I=(()=>{if(!x)return"none";const m=x.editor;return typeof m=="function"?m(t,n,o):m})(),G=(()=>{if(!x)return P;if(x.displayValue)return x.displayValue(o,t,n);const m={...x.editoProps??{},...x.editorProps??{}},A=()=>{if(o==null)return"";if(Array.isArray(o))return o.join(", ");if(typeof o=="object"){const K=Array.isArray(m==null?void 0:m.items)?m.items:[];if(K.length>0){const D=K.map(h=>typeof h=="object"&&h!==null?h:{value:h,display:String(h)}),E=o,f=D.filter(h=>(E==null?void 0:E[h.value])===!0).map(h=>h.display);if(f.length)return f.join(", ")}try{return JSON.stringify(o)}catch{return String(o)}}return String(o)};switch(I){case"TextBox":return o==null?"":String(o);case"SelectBox":{const D=(Array.isArray(m.items)?m.items:[]).map(f=>typeof f=="object"&&f!==null?f:{value:f,display:String(f)});if(m.multiple){const h=(Array.isArray(o)?o:[]).map($=>{var je;return((je=D.find(Fn=>String(Fn.value)===String($)))==null?void 0:je.display)??String($)}).filter($=>$!=null&&$!=="");return h.length?h.join(", "):""}const E=D.find(f=>String(f.value)===String(o));return E?E.display:o==null?"":String(o)}case"none":return c.isValidElement(P)?P:A();case"CheckBox":return String(!!o);case"CheckBoxGroup":{const D=(Array.isArray(m.items)?m.items:[]).map(h=>typeof h=="object"&&h!==null?h:{value:h,display:String(h)}),E=o||{},f=D.filter(h=>E[h.value]===!0).map(h=>h.display);return f.length?f.join(", "):""}default:return c.isValidElement(P)?P:A()}})(),_=(()=>{const m={width:"100%"},A=(x==null?void 0:x.editoProps)??{},K=(x==null?void 0:x.editorProps)??{},D={width:"100%",minWidth:0,...(A==null?void 0:A.style)??{},...(K==null?void 0:K.style)??{}};return{...m,...A,...K,style:D}})(),H=m=>{const A=g.dataField??g.key;he==null||he({rowIndex:n,colIndex:b,column:g,key:A,value:m,row:t})};let N=G;const Be=ue&&!u&&x&&I!=="none"&&Wn(n,b);if(Be&&x)switch(I){case"TextBox":{N=e.jsx(Vn,{text:o==null?"":String(o),onChange:m=>H(m.target.value),..._});break}case"SelectBox":{N=e.jsx(Gn,{value:o,onChange:m=>H(m),..._});break}case"CheckBox":{N=e.jsx(ke,{value:!!o,onChange:m=>H(m.target.checked),..._});break}case"CheckBoxGroup":{N=e.jsx(_n,{value:o??{},onChange:m=>H(m),..._});break}default:N=G}const xe=["min-ui-table-td",`min-ui-text-${g.align??"left"}`];return Be&&xe.push("min-ui-table-td-editing"),I==="SelectBox"&&xe.push("min-ui-table-td-overflow-visible"),e.jsx("td",{className:xe.join(" "),tabIndex:ue&&x&&!u?0:void 0,onFocus:u?void 0:Ae(n,b),onClick:u?void 0:Ae(n,b),onBlur:u?void 0:$n,children:N},b)})]},d)})})]})}),e.jsx(zn,{visible:ge,messages:z})]})}S.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn",elements:[{name:"T"}],raw:"TableColumn<T>"}],raw:"TableColumn<T>[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, index: number) => React.Key",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"ReactKey",raw:"React.Key"}}},description:""},width:{required:!1,tsType:{name:'ReactCSSProperties["width"]',raw:'React.CSSProperties["width"]'},description:""},height:{required:!1,tsType:{name:'ReactCSSProperties["height"]',raw:'React.CSSProperties["height"]'},description:""},visible:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},striped:{required:!1,tsType:{name:"boolean"},description:""},bordered:{required:!1,tsType:{name:"boolean"},description:""},hoverable:{required:!1,tsType:{name:"boolean"},description:""},emptyText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},validationMessages:{required:!1,tsType:{name:"union",raw:"string[] | null | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"},{name:"undefined"}]},description:""},onInitialized:{required:!1,tsType:{name:"signature",type:"function",raw:"(el: HTMLDivElement | null) => void",signature:{arguments:[{type:{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]},name:"el"}],return:{name:"void"}}},description:""},editing:{required:!1,tsType:{name:"boolean"},description:"전체 편집 모드 여부"},onCellChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(args: {
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
}`,signature:{properties:[{key:"selectedRowKeys",value:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]",required:!0}},{key:"selectedRows",value:{name:"Array",elements:[{name:"T"}],raw:"T[]",required:!0}},{key:"selectMode",value:{name:"union",raw:'"single" | "multiple" | "none"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'},{name:"literal",value:'"none"'}],required:!0}}]}},name:"args"}],return:{name:"void"}}},description:"행 선택 변경 알림"}}};const Hn=[{id:1,name:"Alice",age:28,email:"alice@example.com",active:!0,permissions:{read:!0,write:!1,execute:null}},{id:2,name:"Bob",age:34,email:"bob@example.com",active:!1,permissions:{read:!0,write:!0,execute:!1}},{id:3,name:"Charlie",age:22,email:"charlie@example.com",active:!0,permissions:{read:!0,write:null,execute:!1}}],Re=[{id:1,name:"Alice",age:28,email:"alice@example.com",active:!0,permissions:{read:!0,write:!1,execute:null}},{id:2,name:"Bob",age:34,email:"bob@example.com",active:!1,permissions:{read:!0,write:!0,execute:!1},disabled:!0},{id:3,name:"Charlie",age:22,email:"charlie@example.com",active:!0,permissions:{read:!0,write:null,execute:!1}}],et={title:"Components/Table",component:S,tags:["autodocs"],args:{columns:[{key:"id",header:"ID",width:60,align:"right",headerAlign:"center"},{key:"name",header:"Name",width:160},{key:"age",header:"Age",width:80,align:"center"},{key:"email",header:"Email",width:220}],data:Hn,striped:!0,bordered:!0,hoverable:!0,width:"100%",height:void 0,validationMessages:null},argTypes:{onInitialized:{action:"initialized"},validationMessages:{control:"object"}}},O={},U={args:{data:[],emptyText:"데이터가 없습니다."}},J={args:{columns:[{key:"id",header:"#",width:60,align:"right"},{key:"name",header:"User",width:200},{key:"age",header:"Age",width:100,align:"center",render:a=>a>=30?`🔥 ${a}`:a},{key:"email",header:"Email",width:240,render:(a,i)=>`${i.name} <${a}>`}]}},L={args:{validationMessages:["필수 값을 입력하세요.","이메일 형식이 올바르지 않습니다."]}},Q={render:a=>{const[i,l]=c.useState(a.data),r=[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160,edit:{editor:"TextBox",editorProps:{placeholder:"이름"}}},{key:"age",header:"Age",width:100,align:"center",edit:{editor:"SelectBox",editorProps:{items:[20,25,30,35,40]}}},{key:"email",header:"Email",width:220,edit:{editor:"TextBox",editorProps:{placeholder:"이메일"}}}];return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"10px",padding:"10px",background:"#f0f0f0"},children:[e.jsx("strong",{children:"현재 데이터:"}),e.jsx("pre",{children:JSON.stringify(i,null,2)})]}),e.jsx(S,{...a,columns:r,data:i,editing:!0,onCellChange:({rowIndex:s,key:y,value:w})=>{console.log("onCellChange:",{rowIndex:s,key:y,value:w}),l(k=>{const R=[...k];return R[s][y]=w,console.log("Updated rows:",R),R})}})]})}},X={render:a=>{const[i,l]=c.useState(a.data),r=[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160,edit:{editor:"TextBox",editorProps:{placeholder:"이름"}}},{key:"age",header:"Age",width:100,align:"center",edit:{editor:"SelectBox",editorProps:{items:[20,25,30,35,40]}}},{key:"email",header:"Email",width:220,edit:{editor:"TextBox",editorProps:{placeholder:"이메일"}}},{key:"active",header:"Active",width:100,align:"center",edit:{editor:"CheckBox"}},{key:"permissions",header:"Permissions",width:260,edit:{editor:s=>s.id%2===0?"none":"CheckBoxGroup",editorProps:{items:[{value:"read",display:"Read"},{value:"write",display:"Write"},{value:"execute",display:"Execute"}],enableThreeState:!0,direction:"horizontal"}}}];return e.jsx(S,{...a,columns:r,data:i,editing:!0,onCellChange:({rowIndex:s,key:y,value:w})=>{l(k=>{const R=[...k];return R[s][y]=w,R})}})}},Y={render:a=>{const[i,l]=c.useState(a.data),r=[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160,edit:{editor:s=>s.id%2===0?"none":"TextBox",editorProps:{placeholder:"이름"}}},{key:"age",header:"Age",width:100,align:"center",edit:{editor:s=>s.age<30?"SelectBox":"TextBox",editorProps:{items:[20,22,24,26,28,30,32,34,36]}}},{key:"email",header:"Email",width:220,edit:{editor:"TextBox",editorProps:{placeholder:"이메일"}}},{key:"active",header:"Active",width:100,align:"center",edit:{editor:"CheckBox"}},{key:"permissions",header:"Permissions",width:280,edit:{editor:s=>s.id%2===1?"CheckBoxGroup":"none",editorProps:{items:[{value:"read",display:"Read"},{value:"write",display:"Write"},{value:"execute",display:"Execute"}],enableThreeState:!0,direction:"horizontal"}}}];return e.jsx(S,{...a,columns:r,data:i,editing:!0,onCellChange:({rowIndex:s,key:y,value:w})=>{l(k=>{const R=[...k];return R[s][y]=w,R})}})}},Z={render:a=>{const[i,l]=c.useState(a.data),r=[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name (Row-specific)",width:200,edit:{editor:(s,y)=>y===0?"TextBox":y===1?"SelectBox":"none",editorProps:{items:["Alice","Bob","Charlie","Dana"]}}},{key:"age",header:"Age",width:100,align:"center"},{key:"email",header:"Email",width:240}];return e.jsx(S,{...a,columns:r,data:i,editing:!0,onCellChange:({rowIndex:s,key:y,value:w})=>{l(k=>{const R=[...k];return R[s][y]=w,R})}})}},ee={render:a=>{const[i,l]=c.useState(1);return e.jsxs("div",{children:[e.jsxs("p",{children:["선택된 행: ",i]}),e.jsx(S,{...a,rowKey:r=>r.id,selectMode:"single",selectedRowKeys:i,onRowSelectionChange:({selectedRowKeys:r,selectedRows:s})=>{const y=r[0];l(y),console.log("선택된 행:",s)}})]})}},ne={render:a=>{const[i,l]=c.useState([1,3]);return e.jsxs("div",{children:[e.jsxs("p",{children:["선택된 행 IDs: ",i.join(", ")]}),e.jsx(S,{...a,rowKey:r=>r.id,selectMode:"multiple",selectedRowKeys:i,onRowSelectionChange:({selectedRowKeys:r,selectedRows:s})=>{l(r),console.log("선택된 행:",s)}})]})}},te={render:a=>{const[i,l]=c.useState(a.data),[r,s]=c.useState([1]),y=[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160,edit:{editor:"TextBox",editorProps:{placeholder:"이름"}}},{key:"age",header:"Age",width:100,align:"center"},{key:"email",header:"Email",width:220},{key:"active",header:"Active",width:100,align:"center",edit:{editor:"CheckBox"}}];return e.jsxs("div",{children:[e.jsxs("p",{children:["선택된 행 IDs: ",r.join(", ")]}),e.jsx(S,{...a,columns:y,rowKey:w=>w.id,data:i,selectMode:"multiple",selectedRowKeys:r,editing:!0,onRowSelectionChange:({selectedRowKeys:w,selectedRows:k})=>{s(w),console.log("선택된 행:",k)},onCellChange:({rowIndex:w,key:k,value:R})=>{l(ce=>{const F=[...ce];return F[w][k]=R,F})}})]})}},ae={args:{columns:[{key:"id",header:"ID",width:80,align:"right",headerAlign:"center"},{key:"name",header:"이름",width:150,align:"left",headerAlign:"center"},{key:"age",header:"나이",width:100,align:"center",headerAlign:"center"},{key:"email",header:"이메일",width:250,align:"left"}]}},re={args:{columns:[{key:"id",header:"ID",width:60,align:"right",headerAlign:"center"},{key:"user-info",header:"사용자 정보",headerAlign:"center",children:[{key:"name",header:"이름",width:120,align:"left"},{key:"age",header:"나이",width:80,align:"center"}]},{key:"contact",header:"연락처",headerAlign:"center",children:[{key:"email",header:"이메일",width:200,align:"left"}]},{key:"active",header:"활성",width:80,align:"center",headerAlign:"center",render:a=>a?"✓":"✗"}]}},ie={args:{columns:[{key:"id",header:"ID",width:60,align:"right",headerAlign:"center"},{key:"personal",header:"개인 정보",headerAlign:"center",children:[{key:"basic",header:"기본 정보",headerAlign:"center",children:[{key:"name",header:"이름",width:100},{key:"age",header:"나이",width:60,align:"center"}]},{key:"email",header:"이메일",width:180}]},{key:"active",header:"상태",width:80,align:"center",headerAlign:"center",render:a=>a?"활성":"비활성"}]}},se={args:{columns:[{key:"user-id",header:"ID",dataField:"id",width:60,align:"right",headerAlign:"center"},{key:"user-name",header:"사용자 이름",dataField:"name",width:150},{key:"user-age",header:"나이",dataField:"age",width:80,align:"center"},{key:"user-email",header:"이메일 주소",dataField:"email",width:220},{key:"user-status",header:"상태",dataField:"active",width:100,align:"center",render:a=>a?"✓ 활성":"✗ 비활성"}]}},oe={args:{data:Re,columns:[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160},{key:"age",header:"Age",width:80,align:"center"},{key:"email",header:"Email",width:220},{key:"active",header:"Active",width:100,align:"center",render:a=>a?"✓":"✗"}]}},de={render:a=>{const[i,l]=c.useState([1]);return e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:"10px"},children:[e.jsx("strong",{children:"선택된 행 IDs:"})," ",i.join(", "),e.jsx("br",{}),e.jsx("small",{children:"(2번 행은 비활성화되어 선택할 수 없습니다)"})]}),e.jsx(S,{...a,data:Re,rowKey:r=>r.id,selectMode:"multiple",selectedRowKeys:i,onRowSelectionChange:({selectedRowKeys:r,selectedRows:s})=>{l(r),console.log("선택된 행:",s)},columns:[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160},{key:"age",header:"Age",width:80,align:"center"},{key:"email",header:"Email",width:220},{key:"active",header:"Active",width:100,align:"center",render:r=>r?"✓":"✗"}]})]})}},le={render:a=>{const[i,l]=c.useState(Re);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"10px"},children:e.jsx("small",{children:"(2번 행은 비활성화되어 편집할 수 없습니다)"})}),e.jsx(S,{...a,data:i,editing:!0,onCellChange:({rowIndex:r,key:s,value:y})=>{l(w=>{const k=[...w];return k[r][s]=y,k})},columns:[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160,edit:{editor:"TextBox",editorProps:{placeholder:"이름"}}},{key:"age",header:"Age",width:100,align:"center",edit:{editor:"SelectBox",editorProps:{items:[20,25,30,35,40]}}},{key:"email",header:"Email",width:220,edit:{editor:"TextBox",editorProps:{placeholder:"이메일"}}},{key:"active",header:"Active",width:100,align:"center",edit:{editor:"CheckBox"}}]})]})}};var De,Ee,Pe;O.parameters={...O.parameters,docs:{...(De=O.parameters)==null?void 0:De.docs,source:{originalSource:"{}",...(Pe=(Ee=O.parameters)==null?void 0:Ee.docs)==null?void 0:Pe.source}}};var Ie,Ne,Me;U.parameters={...U.parameters,docs:{...(Ie=U.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    data: [],
    emptyText: "데이터가 없습니다."
  }
}`,...(Me=(Ne=U.parameters)==null?void 0:Ne.docs)==null?void 0:Me.source}}};var qe,We,$e;J.parameters={...J.parameters,docs:{...(qe=J.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...($e=(We=J.parameters)==null?void 0:We.docs)==null?void 0:$e.source}}};var Fe,ze,Ve;L.parameters={...L.parameters,docs:{...(Fe=L.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    validationMessages: ["필수 값을 입력하세요.", "이메일 형식이 올바르지 않습니다."]
  }
}`,...(Ve=(ze=L.parameters)==null?void 0:ze.docs)==null?void 0:Ve.source}}};var Ge,_e,He;Q.parameters={...Q.parameters,docs:{...(Ge=Q.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(He=(_e=Q.parameters)==null?void 0:_e.docs)==null?void 0:He.source}}};var Oe,Ue,Je;X.parameters={...X.parameters,docs:{...(Oe=X.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Je=(Ue=X.parameters)==null?void 0:Ue.docs)==null?void 0:Je.source}}};var Le,Qe,Xe;Y.parameters={...Y.parameters,docs:{...(Le=Y.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Xe=(Qe=Y.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ye,Ze,en;Z.parameters={...Z.parameters,docs:{...(Ye=Z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(en=(Ze=Z.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};var nn,tn,an;ee.parameters={...ee.parameters,docs:{...(nn=ee.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
}`,...(an=(tn=ee.parameters)==null?void 0:tn.docs)==null?void 0:an.source}}};var rn,sn,on;ne.parameters={...ne.parameters,docs:{...(rn=ne.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
}`,...(on=(sn=ne.parameters)==null?void 0:sn.docs)==null?void 0:on.source}}};var dn,ln,cn;te.parameters={...te.parameters,docs:{...(dn=te.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
}`,...(cn=(ln=te.parameters)==null?void 0:ln.docs)==null?void 0:cn.source}}};var mn,un,hn;ae.parameters={...ae.parameters,docs:{...(mn=ae.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(hn=(un=ae.parameters)==null?void 0:un.docs)==null?void 0:hn.source}}};var gn,yn,pn;re.parameters={...re.parameters,docs:{...(gn=re.parameters)==null?void 0:gn.docs,source:{originalSource:`{
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
}`,...(pn=(yn=re.parameters)==null?void 0:yn.docs)==null?void 0:pn.source}}};var wn,xn,kn;ie.parameters={...ie.parameters,docs:{...(wn=ie.parameters)==null?void 0:wn.docs,source:{originalSource:`{
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
}`,...(kn=(xn=ie.parameters)==null?void 0:xn.docs)==null?void 0:kn.source}}};var Rn,vn,fn;se.parameters={...se.parameters,docs:{...(Rn=se.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
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
}`,...(fn=(vn=se.parameters)==null?void 0:vn.docs)==null?void 0:fn.source}}};var bn,Sn,Cn;oe.parameters={...oe.parameters,docs:{...(bn=oe.parameters)==null?void 0:bn.docs,source:{originalSource:`{
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
}`,...(Cn=(Sn=oe.parameters)==null?void 0:Sn.docs)==null?void 0:Cn.source}}};var Tn,An,Kn;de.parameters={...de.parameters,docs:{...(Tn=de.parameters)==null?void 0:Tn.docs,source:{originalSource:`{
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
}`,...(Kn=(An=de.parameters)==null?void 0:An.docs)==null?void 0:Kn.source}}};var Bn,jn,Dn;le.parameters={...le.parameters,docs:{...(Bn=le.parameters)==null?void 0:Bn.docs,source:{originalSource:`{
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
}`,...(Dn=(jn=le.parameters)==null?void 0:jn.docs)==null?void 0:Dn.source}}};const nt=["Basic","Empty","CustomCells","WithValidation","Editing","EditingAll","PerColumnEditors","RowSpecificEditors","SingleSelection","MultipleSelection","SelectionWithEditing","CustomAlignment","NestedColumns","ComplexNestedColumns","WithDataField","WithDisabledRows","WithDisabledRowsAndSelection","WithDisabledRowsAndEditing"];export{O as Basic,ie as ComplexNestedColumns,ae as CustomAlignment,J as CustomCells,Q as Editing,X as EditingAll,U as Empty,ne as MultipleSelection,re as NestedColumns,Y as PerColumnEditors,Z as RowSpecificEditors,te as SelectionWithEditing,ee as SingleSelection,se as WithDataField,oe as WithDisabledRows,le as WithDisabledRowsAndEditing,de as WithDisabledRowsAndSelection,L as WithValidation,nt as __namedExportsOrder,et as default};
