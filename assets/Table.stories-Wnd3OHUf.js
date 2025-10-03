import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{R as h}from"./index-DpTt3J-R.js";import{V as je}from"./ValidationMessages-DkT8DR7l.js";import{T as Ne}from"./TextBox-DoTSKBYZ.js";import{S as qe}from"./SelectBox-qxA2r7T9.js";import{C as Ie}from"./CheckBox-XtxcCkuZ.js";import{C as De}from"./CheckBoxGroup-dibTUBOw.js";import"./index-D9ZhQrDp.js";function C(a){const{columns:l,data:p,rowKey:y,width:i,height:u,visible:g=!0,className:w="",style:m,striped:fe=!0,bordered:Ce=!0,hoverable:Se=!0,emptyText:Re="No data",validationMessages:P,onInitialized:W,editing:_=!1,onCellChange:K}=a,H=h.useMemo(()=>Array.isArray(P)&&P.length>0,[P]),F=h.useRef(null);if(h.useEffect(()=>{W==null||W(F.current)},[]),!g)return null;const O={...m,...i!=null?{width:i}:{width:"100%"},...u!=null?{height:u}:{}},[A,U]=h.useState(null),Be=h.useCallback((o,s)=>!!(A&&A.rowIndex===o&&A.colIndex===s),[A]),J=(o,s)=>()=>{_&&U({rowIndex:o,colIndex:s})},Pe=o=>{const s=o.relatedTarget;o.currentTarget.contains(s)||U(null)};return r.jsxs("div",{ref:F,className:`min-ui-table-wrapper ${w}`.trim(),style:{width:O.width},children:[r.jsx("div",{className:`min-ui-table-container ${H?"min-ui-table-invalid":""}`.trim(),style:{height:O.height},children:r.jsxs("table",{className:`min-ui-table ${fe?"min-ui-table-striped":""} ${Ce?"min-ui-table-bordered":""} ${Se?"min-ui-table-hover":""} ${H?"min-ui-table-invalid":""}`.trim(),children:[r.jsx("colgroup",{children:l.map((o,s)=>r.jsx("col",{style:{width:o.width}},s))}),r.jsx("thead",{className:"min-ui-table-thead",children:r.jsx("tr",{children:l.map((o,s)=>r.jsx("th",{className:`min-ui-table-th min-ui-text-${o.align??"left"}`,children:o.header},s))})}),r.jsx("tbody",{className:"min-ui-table-tbody",children:p.length===0?r.jsx("tr",{className:"min-ui-table-empty-row",children:r.jsx("td",{className:"min-ui-table-empty",colSpan:l.length,children:Re})}):p.map((o,s)=>{const Ae=y?y(o,s):s;return r.jsx("tr",{className:"min-ui-table-tr",children:l.map((T,S)=>{const e=o[T.key],d=T.edit,R=T.render?T.render(e,o,s):e,E=(()=>{if(!d)return"none";const n=d.editor;return typeof n=="function"?n(o,s,e):n})(),Q=(()=>{if(!d)return R;if(d.displayValue)return d.displayValue(e,o,s);const n={...d.editoProps??{},...d.editorProps??{}},b=()=>{if(e==null)return"";if(Array.isArray(e))return e.join(", ");if(typeof e=="object"){const x=Array.isArray(n==null?void 0:n.items)?n.items:[];if(x.length>0){const k=x.map(t=>typeof t=="object"&&t!==null?t:{value:t,display:String(t)}),v=e,c=k.filter(t=>(v==null?void 0:v[t.value])===!0).map(t=>t.display);if(c.length)return c.join(", ")}try{return JSON.stringify(e)}catch{return String(e)}}return String(e)};switch(E){case"TextBox":return e==null?"":String(e);case"SelectBox":{const k=(Array.isArray(n.items)?n.items:[]).map(c=>typeof c=="object"&&c!==null?c:{value:c,display:String(c)});if(n.multiple){const t=(Array.isArray(e)?e:[]).map(B=>{var Y;return((Y=k.find(Ee=>String(Ee.value)===String(B)))==null?void 0:Y.display)??String(B)}).filter(B=>B!=null&&B!=="");return t.length?t.join(", "):""}const v=k.find(c=>String(c.value)===String(e));return v?v.display:e==null?"":String(e)}case"none":return h.isValidElement(R)?R:b();case"CheckBox":return String(!!e);case"CheckBoxGroup":{const k=(Array.isArray(n.items)?n.items:[]).map(t=>typeof t=="object"&&t!==null?t:{value:t,display:String(t)}),v=e||{},c=k.filter(t=>v[t.value]===!0).map(t=>t.display);return c.length?c.join(", "):""}default:return h.isValidElement(R)?R:b()}})(),j=(()=>{const n={width:"100%"},b=(d==null?void 0:d.editoProps)??{},x=(d==null?void 0:d.editorProps)??{},k={width:"100%",minWidth:0,...(b==null?void 0:b.style)??{},...(x==null?void 0:x.style)??{}};return{...n,...b,...x,style:k}})(),N=n=>{K==null||K({rowIndex:s,colIndex:S,column:T,key:T.key,value:n,row:o})};let f=Q;const X=_&&d&&E!=="none"&&Be(s,S);if(X&&d)switch(E){case"TextBox":{f=r.jsx(Ne,{text:e==null?"":String(e),onChange:n=>N(n.target.value),...j});break}case"SelectBox":{f=r.jsx(qe,{value:e,onChange:n=>N(n),...j});break}case"CheckBox":{f=r.jsx(Ie,{value:!!e,onChange:n=>N(n.target.checked),...j});break}case"CheckBoxGroup":{f=r.jsx(De,{value:e??{},onChange:n=>N(n),...j});break}default:f=Q}const L=["min-ui-table-td",`min-ui-text-${T.align??"left"}`];return X&&L.push("min-ui-table-td-editing"),E==="SelectBox"&&L.push("min-ui-table-td-overflow-visible"),r.jsx("td",{className:L.join(" "),tabIndex:_&&d?0:void 0,onFocus:J(s,S),onClick:J(s,S),onBlur:Pe,children:f},S)})},Ae)})})]})}),r.jsx(je,{visible:H,messages:P})]})}C.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn",elements:[{name:"T"}],raw:"TableColumn<T>"}],raw:"TableColumn<T>[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, index: number) => React.Key",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"ReactKey",raw:"React.Key"}}},description:""},width:{required:!1,tsType:{name:'ReactCSSProperties["width"]',raw:'React.CSSProperties["width"]'},description:""},height:{required:!1,tsType:{name:'ReactCSSProperties["height"]',raw:'React.CSSProperties["height"]'},description:""},visible:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},striped:{required:!1,tsType:{name:"boolean"},description:""},bordered:{required:!1,tsType:{name:"boolean"},description:""},hoverable:{required:!1,tsType:{name:"boolean"},description:""},emptyText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},validationMessages:{required:!1,tsType:{name:"union",raw:"string[] | null | undefined",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"},{name:"undefined"}]},description:""},onInitialized:{required:!1,tsType:{name:"signature",type:"function",raw:"(el: HTMLDivElement | null) => void",signature:{arguments:[{type:{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]},name:"el"}],return:{name:"void"}}},description:""},editing:{required:!1,tsType:{name:"boolean"},description:"전체 편집 모드 여부"},onCellChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(args: {
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
}`,signature:{properties:[{key:"rowIndex",value:{name:"number",required:!0}},{key:"colIndex",value:{name:"number",required:!0}},{key:"column",value:{name:"TableColumn",elements:[{name:"T"}],raw:"TableColumn<T>",required:!0}},{key:"key",value:{name:"union",raw:"keyof T | string",elements:[{name:"T"},{name:"string"}],required:!0}},{key:"value",value:{name:"any",required:!0}},{key:"row",value:{name:"T",required:!0}}]}},name:"args"}],return:{name:"void"}}},description:"셀 값 변경 알림"}}};const $e=[{id:1,name:"Alice",age:28,email:"alice@example.com",active:!0,permissions:{read:!0,write:!1,execute:null}},{id:2,name:"Bob",age:34,email:"bob@example.com",active:!1,permissions:{read:!0,write:!0,execute:!1}},{id:3,name:"Charlie",age:22,email:"charlie@example.com",active:!0,permissions:{read:!0,write:null,execute:!1}}],Fe={title:"Components/Table",component:C,tags:["autodocs"],args:{columns:[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160},{key:"age",header:"Age",width:80,align:"center"},{key:"email",header:"Email",width:220}],data:$e,striped:!0,bordered:!0,hoverable:!0,width:"100%",height:void 0,validationMessages:null},argTypes:{onInitialized:{action:"initialized"},validationMessages:{control:"object"}}},q={},I={args:{data:[],emptyText:"데이터가 없습니다."}},D={args:{columns:[{key:"id",header:"#",width:60,align:"right"},{key:"name",header:"User",width:200},{key:"age",header:"Age",width:100,align:"center",render:a=>a>=30?`🔥 ${a}`:a},{key:"email",header:"Email",width:240,render:(a,l)=>`${l.name} <${a}>`}]}},$={args:{validationMessages:["필수 값을 입력하세요.","이메일 형식이 올바르지 않습니다."]}},M={render:a=>{const[l,p]=h.useState(a.data),y=[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160,edit:{editor:"TextBox",editorProps:{placeholder:"이름"}}},{key:"age",header:"Age",width:100,align:"center",edit:{editor:"SelectBox",editorProps:{items:[20,25,30,35,40]}}},{key:"email",header:"Email",width:220,edit:{editor:"TextBox",editorProps:{placeholder:"이메일"}}}];return r.jsx(C,{...a,columns:y,data:l,editing:!0,onCellChange:({rowIndex:i,key:u,value:g})=>{p(w=>{const m=[...w];return m[i][u]=g,m})}})}},V={render:a=>{const[l,p]=h.useState(a.data),y=[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160,edit:{editor:"TextBox",editorProps:{placeholder:"이름"}}},{key:"age",header:"Age",width:100,align:"center",edit:{editor:"SelectBox",editorProps:{items:[20,25,30,35,40]}}},{key:"email",header:"Email",width:220,edit:{editor:"TextBox",editorProps:{placeholder:"이메일"}}},{key:"active",header:"Active",width:100,align:"center",edit:{editor:"CheckBox"}},{key:"permissions",header:"Permissions",width:260,edit:{editor:i=>i.id%2===0?"none":"CheckBoxGroup",editorProps:{items:[{value:"read",display:"Read"},{value:"write",display:"Write"},{value:"execute",display:"Execute"}],enableThreeState:!0,direction:"horizontal"}}}];return r.jsx(C,{...a,columns:y,data:l,editing:!0,onCellChange:({rowIndex:i,key:u,value:g})=>{p(w=>{const m=[...w];return m[i][u]=g,m})}})}},z={render:a=>{const[l,p]=h.useState(a.data),y=[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name",width:160,edit:{editor:i=>i.id%2===0?"none":"TextBox",editorProps:{placeholder:"이름"}}},{key:"age",header:"Age",width:100,align:"center",edit:{editor:i=>i.age<30?"SelectBox":"TextBox",editorProps:{items:[20,22,24,26,28,30,32,34,36]}}},{key:"email",header:"Email",width:220,edit:{editor:"TextBox",editorProps:{placeholder:"이메일"}}},{key:"active",header:"Active",width:100,align:"center",edit:{editor:"CheckBox"}},{key:"permissions",header:"Permissions",width:280,edit:{editor:i=>i.id%2===1?"CheckBoxGroup":"none",editorProps:{items:[{value:"read",display:"Read"},{value:"write",display:"Write"},{value:"execute",display:"Execute"}],enableThreeState:!0,direction:"horizontal"}}}];return r.jsx(C,{...a,columns:y,data:l,editing:!0,onCellChange:({rowIndex:i,key:u,value:g})=>{p(w=>{const m=[...w];return m[i][u]=g,m})}})}},G={render:a=>{const[l,p]=h.useState(a.data),y=[{key:"id",header:"ID",width:60,align:"right"},{key:"name",header:"Name (Row-specific)",width:200,edit:{editor:(i,u)=>u===0?"TextBox":u===1?"SelectBox":"none",editorProps:{items:["Alice","Bob","Charlie","Dana"]}}},{key:"age",header:"Age",width:100,align:"center"},{key:"email",header:"Email",width:240}];return r.jsx(C,{...a,columns:y,data:l,editing:!0,onCellChange:({rowIndex:i,key:u,value:g})=>{p(w=>{const m=[...w];return m[i][u]=g,m})}})}};var Z,ee,ne;q.parameters={...q.parameters,docs:{...(Z=q.parameters)==null?void 0:Z.docs,source:{originalSource:"{}",...(ne=(ee=q.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,re,ae;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    data: [],
    emptyText: "데이터가 없습니다."
  }
}`,...(ae=(re=I.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ie,se,oe;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(oe=(se=D.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var de,le,ce;$.parameters={...$.parameters,docs:{...(de=$.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    validationMessages: ["필수 값을 입력하세요.", "이메일 형식이 올바르지 않습니다."]
  }
}`,...(ce=(le=$.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ue,me,he;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(he=(me=M.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var pe,ye,ge;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(ye=V.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var we,xe,ke;z.parameters={...z.parameters,docs:{...(we=z.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ke=(xe=z.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};var ve,Te,be;G.parameters={...G.parameters,docs:{...(ve=G.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(be=(Te=G.parameters)==null?void 0:Te.docs)==null?void 0:be.source}}};const Oe=["Basic","Empty","CustomCells","WithValidation","Editing","EditingAll","PerColumnEditors","RowSpecificEditors"];export{q as Basic,D as CustomCells,M as Editing,V as EditingAll,I as Empty,z as PerColumnEditors,G as RowSpecificEditors,$ as WithValidation,Oe as __namedExportsOrder,Fe as default};
