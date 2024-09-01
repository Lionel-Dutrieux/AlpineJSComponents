import{c as s}from"./handlebarsHelper-BTGPQz6o.js";import"./_commonjsHelpers-Cpj98o6Y.js";const m=`{{#if (eq elementType "a")}}\r
<a\r
	href="#"\r
	class="base-button"\r
	x-data="baseButton({isDisabled : {{isDisabled}} })"\r
>\r
	<span>{{text}}</span>\r
</a>\r
{{else}}\r
<button class="base-button" x-data="baseButton({isDisabled : {{isDisabled}} })">\r
	<span>{{text}}</span>\r
</button>\r
{{/if}}\r
`,B=`{{#if (eq elementType "a")}}\r
<a\r
	href="#"\r
	class="base-button"\r
	x-data="baseButton({isDisabled : {{isDisabled}} })"\r
>\r
	<i class="{{icon}}"></i>\r
	<span>{{text}}</span>\r
</a>\r
{{else}}\r
<button class="base-button" x-data="baseButton({isDisabled : {{isDisabled}} })">\r
	<i class="{{icon}}"></i>\r
	<span>{{text}}</span>\r
</button>\r
{{/if}}\r
`,T={title:"Base Components/Buttons/Base Button",parameters:{layout:"centered",version:"1.0.0",docs:{description:{component:`This component renders a primary button.\r
Developers can modify the button element to an \`<a>\` link if needed.\r

This component provides a button with customizable enable and disable functionality.\r
It listens for a custom event named \`baseButton\` with details containing the button's ID and the method (\`enable\` or \`disable\`) to be executed.\r
\r
The button also supports \`isPressed\` and \`isDisabled\` states in the \`x-data\` context.\r

Example of firing a custom event to toggle the button's state using vanilla JavaScript:\r

\`\`\`javascript\r
const event = new CustomEvent('baseButton', {\r
    detail: {\r
        id: 'buttonId',\r
        method: 'disable',\r
    }\r
});\r
document.dispatchEvent(event);\r
\`\`\`\r

The button can also bind to an Alpine.js store for reactivity.\r
Example of using the store-based functionality:\r

\`\`\`html\r
<div x-data="{ isButtonEnabled: true }">\r
    <button x-data="baseButton({ storeName: 'myStore', storeProperty: 'isButtonEnabled' })" id="buttonId">\r
        Base Button\r
    </button>\r
    <button @click="$store.myStore.isButtonEnabled = !$store.myStore.isButtonEnabled">\r
        Toggle Button State\r
    </button>\r
</div>\r
\`\`\``}}},tags:["autodocs"],argTypes:{elementType:{control:"select",options:["a","button"]}}},e=t=>s(m,t);e.args={text:"Base Button",elementType:"button",isDisabled:!1};const n=t=>s(m,t);n.args={text:"Base Button Disabled",elementType:"button",isDisabled:!0};const a=t=>s(B,t);a.args={text:"Base Button Icon",elementType:"button",icon:"fa-solid fa-magnifying-glass",isDisabled:!1};var o,r,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  return compileTemplate(BaseButtonTemplate, args);
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var u,l,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return compileTemplate(BaseButtonTemplate, args);
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,b,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return compileTemplate(BaseButtonIconTemplate, args);
}`,...(p=(b=a.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};const x=["baseButton","baseButtonDisabled","baseButtonIcon"];export{x as __namedExportsOrder,e as baseButton,n as baseButtonDisabled,a as baseButtonIcon,T as default};
