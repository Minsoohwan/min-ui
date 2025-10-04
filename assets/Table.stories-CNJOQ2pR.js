import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{R as l}from"./index-DpTt3J-R.js";import{V as An}from"./ValidationMessages-DkT8DR7l.js";import{T as Kn}from"./TextBox-DoTSKBYZ.js";import{S as Bn}from"./SelectBox-qxA2r7T9.js";import{C as pe}from"./CheckBox-XtxcCkuZ.js";import{C as jn}from"./CheckBoxGroup-dibTUBOw.js";import"./index-D9ZhQrDp.js";function A(r){const{columns:d,data:u,rowKey:m,width:o,height:p,visible:w=!0,className:v="",style:x,striped:se=!0,bordered:W=!0,hoverable:xn=!0,emptyText:kn="No data",validationMessages:z,onInitialized:oe,editing:le=!1,onCellChange:de,selectMode:y="none",selectedRowKeys:q=[],onRowSelectionChange:K}=r,ce=l.useMemo(()=>Array.isArray(z)&&z.length>0,[z]),we=l.useRef(null);if(l.useEffect(()=>{oe==null||oe(we.current)},[]),!w)return null;const xe={...x,...o!=null?{width:o}:{width:"100%"},...p!=null?{height:p}:{}},ue=t=>{const e=[];return t.forEach(i=>{i.children&&i.children.length>0?e.push(...ue(i.children)):e.push(i)}),e},ke=t=>{let e=1;return t.forEach(i=>{i.children&&i.children.length>0&&(e=Math.max(e,1+ke(i.children)))}),e},Rn=(t,e,i)=>{const k=Array.from({length:i},()=>[]),b=(s,f,j)=>{var ge;const a=s.headerAlign??s.align??"left",g=s.children&&s.children.length>0,D=g?ue([s]).length:1,N=g?1:i-j+1;(ge=k[j-1])==null||ge.push(n.jsx("th",{className:`min-ui-table-th min-ui-text-${a}`,colSpan:D,rowSpan:N,children:s.header},`${j}-${f}`)),g&&s.children&&s.children.forEach((G,I)=>{b(G,I,j+1)})};return t.forEach((s,f)=>b(s,f,e)),k},me=l.useMemo(()=>ue(d),[d]),he=l.useMemo(()=>ke(d),[d]),vn=l.useMemo(()=>Rn(d,1,he),[d,he]),[V,Re]=l.useState(null),B=l.useMemo(()=>q?Array.isArray(q)?q:[q]:[],[q]),S=l.useCallback((t,e)=>m?m(t,e):e,[m]),fn=l.useCallback((t,e)=>{const i=S(t,e);return B.includes(i)},[B,S]),ve=l.useCallback((t,e)=>{if(y==="none"||!K)return;const i=S(t,e),k=[...B],b=k.indexOf(i);if(y==="single")K({selectedRowKeys:[i],selectedRows:[t],selectMode:y});else if(y==="multiple"){b===-1?k.push(i):k.splice(b,1);const s=k.map(f=>u.find((j,a)=>S(j,a)===f)).filter(Boolean);K({selectedRowKeys:k,selectedRows:s,selectMode:y})}},[y,K,B,S,u]),Sn=l.useCallback(()=>{if(y!=="multiple"||!K)return;const t=u.map((i,k)=>S(i,k)),e=t.every(i=>B.includes(i));K(e?{selectedRowKeys:[],selectedRows:[],selectMode:y}:{selectedRowKeys:t,selectedRows:u,selectMode:y})},[y,K,B,u,S]),fe=l.useMemo(()=>{if(y!=="multiple"||u.length===0)return{checked:!1,indeterminate:!1};const t=u.map((k,b)=>S(k,b)),e=B.length,i=t.length;return e===0?{checked:!1,indeterminate:!1}:e===i?{checked:!0,indeterminate:!1}:{checked:!1,indeterminate:!0}},[y,B,u,S]),bn=l.useCallback((t,e)=>!!(V&&V.rowIndex===t&&V.colIndex===e),[V]),Se=(t,e)=>()=>{le&&Re({rowIndex:t,colIndex:e})},$=l.useRef(null);l.useEffect(()=>()=>{$.current&&clearTimeout($.current)},[]);const Cn=t=>{const e=t.relatedTarget;$.current&&clearTimeout($.current),!t.currentTarget.contains(e)&&($.current=setTimeout(()=>{const i=document.activeElement;(i==null?void 0:i.closest(".min-ui-selectbox-dropdown"))||Re(null)},150))};return n.jsxs("div",{ref:we,className:`min-ui-table-wrapper ${v}`.trim(),style:{width:xe.width},children:[n.jsx("div",{className:`min-ui-table-container ${ce?"min-ui-table-invalid":""}`.trim(),style:{height:xe.height},children:n.jsxs("table",{className:`min-ui-table ${se?"min-ui-table-striped":""} ${W?"min-ui-table-bordered":""} ${xn?"min-ui-table-hover":""} ${ce?"min-ui-table-invalid":""}`.trim(),children:[n.jsxs("colgroup",{children:[y==="multiple"&&n.jsx("col",{style:{width:"40px"}},"select"),me.map((t,e)=>n.jsx("col",{style:{width:t.width}},e))]}),n.jsx("thead",{className:"min-ui-table-thead",children:vn.map((t,e)=>n.jsxs("tr",{children:[e===0&&y==="multiple"&&n.jsx("th",{className:"min-ui-table-th min-ui-table-select-header",rowSpan:he,children:n.jsx(pe,{value:fe.indeterminate?null:fe.checked,enableThreeState:!0,onChange:Sn})}),t]},e))}),n.jsx("tbody",{className:"min-ui-table-tbody",children:u.length===0?n.jsx("tr",{className:"min-ui-table-empty-row",children:n.jsx("td",{className:"min-ui-table-empty",colSpan:me.length+(y==="multiple"?1:0),children:kn})}):u.map((t,e)=>{const i=m?m(t,e):e,k=fn(t,e),b=y!=="none";return n.jsxs("tr",{className:`min-ui-table-tr ${k?"min-ui-table-tr-selected":""} ${b&&y!=="multiple"?"min-ui-table-tr-clickable":""}`.trim(),onClick:y!=="multiple"?()=>ve(t,e):void 0,children:[y==="multiple"&&n.jsx("td",{className:"min-ui-table-td min-ui-table-select-cell",onClick:s=>{s.stopPropagation()},children:n.jsx(pe,{value:k,onChange:s=>{s.stopPropagation(),ve(t,e)},onClick:s=>{s.stopPropagation()}})}),me.map((s,f)=>{const j=s.dataField??s.key,a=t[j],g=s.edit,D=s.render?s.render(a,t,e):a,N=(()=>{if(!g)return"none";const c=g.editor;return typeof c=="function"?c(t,e,a):c})(),G=(()=>{if(!g)return D;if(g.displayValue)return g.displayValue(a,t,e);const c={...g.editoProps??{},...g.editorProps??{}},C=()=>{if(a==null)return"";if(Array.isArray(a))return a.join(", ");if(typeof a=="object"){const T=Array.isArray(c==null?void 0:c.items)?c.items:[];if(T.length>0){const E=T.map(h=>typeof h=="object"&&h!==null?h:{value:h,display:String(h)}),P=a,R=E.filter(h=>(P==null?void 0:P[h.value])===!0).map(h=>h.display);if(R.length)return R.join(", ")}try{return JSON.stringify(a)}catch{return String(a)}}return String(a)};switch(N){case"TextBox":return a==null?"":String(a);case"SelectBox":{const E=(Array.isArray(c.items)?c.items:[]).map(R=>typeof R=="object"&&R!==null?R:{value:R,display:String(R)});if(c.multiple){const h=(Array.isArray(a)?a:[]).map(F=>{var Ce;return((Ce=E.find(Tn=>String(Tn.value)===String(F)))==null?void 0:Ce.display)??String(F)}).filter(F=>F!=null&&F!=="");return h.length?h.join(", "):""}const P=E.find(R=>String(R.value)===String(a));return P?P.display:a==null?"":String(a)}case"none":return l.isValidElement(D)?D:C();case"CheckBox":return String(!!a);case"CheckBoxGroup":{const E=(Array.isArray(c.items)?c.items:[]).map(h=>typeof h=="object"&&h!==null?h:{value:h,display:String(h)}),P=a||{},R=E.filter(h=>P[h.value]===!0).map(h=>h.display);return R.length?R.join(", "):""}default:return l.isValidElement(D)?D:C()}})(),I=(()=>{const c={width:"100%"},C=(g==null?void 0:g.editoProps)??{},T=(g==null?void 0:g.editorProps)??{},E={width:"100%",minWidth:0,...(C==null?void 0:C.style)??{},...(T==null?void 0:T.style)??{}};return{...c,...C,...T,style:E}})(),_=c=>{const C=s.dataField??s.key;de==null||de({rowIndex:e,colIndex:f,column:s,key:C,value:c,row:t})};let M=G;const be=le&&g&&N!=="none"&&bn(e,f);if(be&&g)switch(N){case"TextBox":{M=n.jsx(Kn,{text:a==null?"":String(a),onChange:c=>_(c.target.value),...I});break}case"SelectBox":{M=n.jsx(Bn,{value:a,onChange:c=>_(c),...I});break}case"CheckBox":{M=n.jsx(pe,{value:!!a,onChange:c=>_(c.target.checked),...I});break}case"CheckBoxGroup":{M=n.jsx(jn,{value:a??{},onChange:c=>_(c),...I});break}default:M=G}const ye=["min-ui-table-td",`min-ui-text-${s.align??"left"}`];return be&&ye.push("min-ui-table-td-editing"),N==="SelectBox"&&ye.push("min-ui-table-td-overflow-visible"),n.jsx("td",{className:ye.join(" "),tabIndex:le&&g?0:void 0,onFocus:Se(e,f),onClick:Se(e,f),onBlur:Cn,children:M},f)})]},i)})})]})}),n.jsx(An,{visible:ce,messages:z})]})}A.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn",elements:[{name:"T"}],raw:"TableColumn<T>"}],raw:"TableColumn<T>[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, index: number) => React.Key",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"ReactKey",raw:"React.Key"}}},description:""},width:{required:!1,tsType:{name:'ReactCSSProperties["width"]',raw:'React.CSSProperties["width"]'},description:""},height:{required:!1,tsType:{name:'ReactCSSProperties["height"]',raw:'React.CSSProperties["height"]'},description:""},visible:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},striped:{required:!1,tsType:{name:"boolean"},description:""},bordered:{required:!1,tsType:{name:"boolean"},description:""},hoverable:{required:!1,tsType:{name:"boolean"},description:""},emptyText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},validationMessages:{required:!1,tsType:{name:"union",raw:"string[] | null | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"},{name:"undefined"}]},description:""},onInitialized:{required:!1,tsType:{name:"signature",type:"function",raw:"(el: HTMLDivElement | null) => void",signature:{arguments:[{type:{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]},name:"el"}],return:{name:"void"}}},description:""},editing:{required:!1,tsType:{name:"boolean"},description:"전체 편집 모드 여부"},onCellChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(args: {
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
}`,signature:{properties:[{key:"selectedRowKeys",value:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]",required:!0}},{key:"selectedRows",value:{name:"Array",elements:[{name:"T"}],raw:"T[]",required:!0}},{key:"selectMode",value:{name:"union",raw:'"single" | "multiple" | "none"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'},{name:"literal",value:'"none"'}],required:!0}}]}},name:"args"}],return:{name:"void"}}},description:"행 선택 변경 알림"}}};const En=[{id:1,name:"Alice",age:28,email:"alice@example.com",active:!0,permissions:{read:!0,write:!1,execute:null}},{id:2,name:"Bob",age:34,email:"bob@example.com",active:!1,permissions:{read:!0,write:!0,execute:!1}},{id:3,name:"Charlie",age:22,email:"charlie@example.com",active:!0,permissions:{read:!0,write:null,execute:!1}}],Wn={title:"Components/Table",component:A,tags:["autodocs"],args:{columns:[{key:"id",header:"ID",width:60,align:"right",headerAlign:"center"},{key:"name",header:"Name",width:160},{key:"age",header:"Age",width:80,align:"center"},{key:"email",header:"Email",width:220}],data:En,striped:!0,bordered:!0,hoverable:!0,width:"100%",height:void 0,validationMessages:null},argTypes:{onInitialized:{action:"initialized"},validationMessages:{control:"object"}}},H={},O={args:{data:[],emptyText:"데이터가 없습니다."}},U={args:{columns:[{key:"id",header:"#",width:60,align:"right"},{key:"name",header:"User",width:200},{key:"age",header:"Age",width:100,align:"center",render:r=>r>=30?`🔥 ${r}`:r},{key:"email",header:"Email",width:240,render:(r,d)=>`${d.name} <${r}>`}]}},J={args:{validationMessages:["필수 값을 입력하세요.","이메일 형식이 올바르지 않습니다."]}},L={render:r=>{const[d,u]=l.useState(r.data),m=[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160,edit:{editor:"TextBox",editorProps:{placeholder:"이름"}}},{key:"age",header:"Age",width:100,align:"center",edit:{editor:"SelectBox",editorProps:{items:[20,25,30,35,40]}}},{key:"email",header:"Email",width:220,edit:{editor:"TextBox",editorProps:{placeholder:"이메일"}}}];return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"10px",padding:"10px",background:"#f0f0f0"},children:[n.jsx("strong",{children:"현재 데이터:"}),n.jsx("pre",{children:JSON.stringify(d,null,2)})]}),n.jsx(A,{...r,columns:m,data:d,editing:!0,onCellChange:({rowIndex:o,key:p,value:w})=>{console.log("onCellChange:",{rowIndex:o,key:p,value:w}),u(v=>{const x=[...v];return x[o][p]=w,console.log("Updated rows:",x),x})}})]})}},Q={render:r=>{const[d,u]=l.useState(r.data),m=[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160,edit:{editor:"TextBox",editorProps:{placeholder:"이름"}}},{key:"age",header:"Age",width:100,align:"center",edit:{editor:"SelectBox",editorProps:{items:[20,25,30,35,40]}}},{key:"email",header:"Email",width:220,edit:{editor:"TextBox",editorProps:{placeholder:"이메일"}}},{key:"active",header:"Active",width:100,align:"center",edit:{editor:"CheckBox"}},{key:"permissions",header:"Permissions",width:260,edit:{editor:o=>o.id%2===0?"none":"CheckBoxGroup",editorProps:{items:[{value:"read",display:"Read"},{value:"write",display:"Write"},{value:"execute",display:"Execute"}],enableThreeState:!0,direction:"horizontal"}}}];return n.jsx(A,{...r,columns:m,data:d,editing:!0,onCellChange:({rowIndex:o,key:p,value:w})=>{u(v=>{const x=[...v];return x[o][p]=w,x})}})}},X={render:r=>{const[d,u]=l.useState(r.data),m=[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160,edit:{editor:o=>o.id%2===0?"none":"TextBox",editorProps:{placeholder:"이름"}}},{key:"age",header:"Age",width:100,align:"center",edit:{editor:o=>o.age<30?"SelectBox":"TextBox",editorProps:{items:[20,22,24,26,28,30,32,34,36]}}},{key:"email",header:"Email",width:220,edit:{editor:"TextBox",editorProps:{placeholder:"이메일"}}},{key:"active",header:"Active",width:100,align:"center",edit:{editor:"CheckBox"}},{key:"permissions",header:"Permissions",width:280,edit:{editor:o=>o.id%2===1?"CheckBoxGroup":"none",editorProps:{items:[{value:"read",display:"Read"},{value:"write",display:"Write"},{value:"execute",display:"Execute"}],enableThreeState:!0,direction:"horizontal"}}}];return n.jsx(A,{...r,columns:m,data:d,editing:!0,onCellChange:({rowIndex:o,key:p,value:w})=>{u(v=>{const x=[...v];return x[o][p]=w,x})}})}},Y={render:r=>{const[d,u]=l.useState(r.data),m=[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name (Row-specific)",width:200,edit:{editor:(o,p)=>p===0?"TextBox":p===1?"SelectBox":"none",editorProps:{items:["Alice","Bob","Charlie","Dana"]}}},{key:"age",header:"Age",width:100,align:"center"},{key:"email",header:"Email",width:240}];return n.jsx(A,{...r,columns:m,data:d,editing:!0,onCellChange:({rowIndex:o,key:p,value:w})=>{u(v=>{const x=[...v];return x[o][p]=w,x})}})}},Z={render:r=>{const[d,u]=l.useState(1);return n.jsxs("div",{children:[n.jsxs("p",{children:["선택된 행: ",d]}),n.jsx(A,{...r,rowKey:m=>m.id,selectMode:"single",selectedRowKeys:d,onRowSelectionChange:({selectedRowKeys:m,selectedRows:o})=>{const p=m[0];u(p),console.log("선택된 행:",o)}})]})}},ee={render:r=>{const[d,u]=l.useState([1,3]);return n.jsxs("div",{children:[n.jsxs("p",{children:["선택된 행 IDs: ",d.join(", ")]}),n.jsx(A,{...r,rowKey:m=>m.id,selectMode:"multiple",selectedRowKeys:d,onRowSelectionChange:({selectedRowKeys:m,selectedRows:o})=>{u(m),console.log("선택된 행:",o)}})]})}},ne={render:r=>{const[d,u]=l.useState(r.data),[m,o]=l.useState([1]),p=[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160,edit:{editor:"TextBox",editorProps:{placeholder:"이름"}}},{key:"age",header:"Age",width:100,align:"center"},{key:"email",header:"Email",width:220},{key:"active",header:"Active",width:100,align:"center",edit:{editor:"CheckBox"}}];return n.jsxs("div",{children:[n.jsxs("p",{children:["선택된 행 IDs: ",m.join(", ")]}),n.jsx(A,{...r,columns:p,rowKey:w=>w.id,data:d,selectMode:"multiple",selectedRowKeys:m,editing:!0,onRowSelectionChange:({selectedRowKeys:w,selectedRows:v})=>{o(w),console.log("선택된 행:",v)},onCellChange:({rowIndex:w,key:v,value:x})=>{u(se=>{const W=[...se];return W[w][v]=x,W})}})]})}},te={args:{columns:[{key:"id",header:"ID",width:80,align:"right",headerAlign:"center"},{key:"name",header:"이름",width:150,align:"left",headerAlign:"center"},{key:"age",header:"나이",width:100,align:"center",headerAlign:"center"},{key:"email",header:"이메일",width:250,align:"left"}]}},re={args:{columns:[{key:"id",header:"ID",width:60,align:"right",headerAlign:"center"},{key:"user-info",header:"사용자 정보",headerAlign:"center",children:[{key:"name",header:"이름",width:120,align:"left"},{key:"age",header:"나이",width:80,align:"center"}]},{key:"contact",header:"연락처",headerAlign:"center",children:[{key:"email",header:"이메일",width:200,align:"left"}]},{key:"active",header:"활성",width:80,align:"center",headerAlign:"center",render:r=>r?"✓":"✗"}]}},ae={args:{columns:[{key:"id",header:"ID",width:60,align:"right",headerAlign:"center"},{key:"personal",header:"개인 정보",headerAlign:"center",children:[{key:"basic",header:"기본 정보",headerAlign:"center",children:[{key:"name",header:"이름",width:100},{key:"age",header:"나이",width:60,align:"center"}]},{key:"email",header:"이메일",width:180}]},{key:"active",header:"상태",width:80,align:"center",headerAlign:"center",render:r=>r?"활성":"비활성"}]}},ie={args:{columns:[{key:"user-id",header:"ID",dataField:"id",width:60,align:"right",headerAlign:"center"},{key:"user-name",header:"사용자 이름",dataField:"name",width:150},{key:"user-age",header:"나이",dataField:"age",width:80,align:"center"},{key:"user-email",header:"이메일 주소",dataField:"email",width:220},{key:"user-status",header:"상태",dataField:"active",width:100,align:"center",render:r=>r?"✓ 활성":"✗ 비활성"}]}};var Te,Ae,Ke;H.parameters={...H.parameters,docs:{...(Te=H.parameters)==null?void 0:Te.docs,source:{originalSource:"{}",...(Ke=(Ae=H.parameters)==null?void 0:Ae.docs)==null?void 0:Ke.source}}};var Be,je,Ee;O.parameters={...O.parameters,docs:{...(Be=O.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    data: [],
    emptyText: "데이터가 없습니다."
  }
}`,...(Ee=(je=O.parameters)==null?void 0:je.docs)==null?void 0:Ee.source}}};var Pe,De,Ne;U.parameters={...U.parameters,docs:{...(Pe=U.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ne=(De=U.parameters)==null?void 0:De.docs)==null?void 0:Ne.source}}};var Ie,Me,qe;J.parameters={...J.parameters,docs:{...(Ie=J.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    validationMessages: ["필수 값을 입력하세요.", "이메일 형식이 올바르지 않습니다."]
  }
}`,...(qe=(Me=J.parameters)==null?void 0:Me.docs)==null?void 0:qe.source}}};var $e,Fe,We;L.parameters={...L.parameters,docs:{...($e=L.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(We=(Fe=L.parameters)==null?void 0:Fe.docs)==null?void 0:We.source}}};var ze,Ve,Ge;Q.parameters={...Q.parameters,docs:{...(ze=Q.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ge=(Ve=Q.parameters)==null?void 0:Ve.docs)==null?void 0:Ge.source}}};var _e,He,Oe;X.parameters={...X.parameters,docs:{...(_e=X.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Oe=(He=X.parameters)==null?void 0:He.docs)==null?void 0:Oe.source}}};var Ue,Je,Le;Y.parameters={...Y.parameters,docs:{...(Ue=Y.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Le=(Je=Y.parameters)==null?void 0:Je.docs)==null?void 0:Le.source}}};var Qe,Xe,Ye;Z.parameters={...Z.parameters,docs:{...(Qe=Z.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ye=(Xe=Z.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,en,nn;ee.parameters={...ee.parameters,docs:{...(Ze=ee.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(nn=(en=ee.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var tn,rn,an;ne.parameters={...ne.parameters,docs:{...(tn=ne.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(an=(rn=ne.parameters)==null?void 0:rn.docs)==null?void 0:an.source}}};var sn,on,ln;te.parameters={...te.parameters,docs:{...(sn=te.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
}`,...(ln=(on=te.parameters)==null?void 0:on.docs)==null?void 0:ln.source}}};var dn,cn,un;re.parameters={...re.parameters,docs:{...(dn=re.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
}`,...(un=(cn=re.parameters)==null?void 0:cn.docs)==null?void 0:un.source}}};var mn,hn,gn;ae.parameters={...ae.parameters,docs:{...(mn=ae.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(gn=(hn=ae.parameters)==null?void 0:hn.docs)==null?void 0:gn.source}}};var yn,pn,wn;ie.parameters={...ie.parameters,docs:{...(yn=ie.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
}`,...(wn=(pn=ie.parameters)==null?void 0:pn.docs)==null?void 0:wn.source}}};const zn=["Basic","Empty","CustomCells","WithValidation","Editing","EditingAll","PerColumnEditors","RowSpecificEditors","SingleSelection","MultipleSelection","SelectionWithEditing","CustomAlignment","NestedColumns","ComplexNestedColumns","WithDataField"];export{H as Basic,ae as ComplexNestedColumns,te as CustomAlignment,U as CustomCells,L as Editing,Q as EditingAll,O as Empty,ee as MultipleSelection,re as NestedColumns,X as PerColumnEditors,Y as RowSpecificEditors,ne as SelectionWithEditing,Z as SingleSelection,ie as WithDataField,J as WithValidation,zn as __namedExportsOrder,Wn as default};
