import{c as i}from"./handlebarsHelper-BTGPQz6o.js";import"./_commonjsHelpers-Cpj98o6Y.js";const d=`<div class="w-96">\r
	<div\r
		class="bg-gray-200 h-2 rounded w-full"\r
		x-data="baseProgress({ initialProgress: {{initialProgress}}, storeName: 'myStore', storeProperty: 'myProperty' })"\r
		id="myProgressBar"\r
	>\r
		<div\r
			class="bg-green-400 h-2 rounded transition-all duration-500"\r
			:style="'width: ' + progress + '%'"\r
		></div>\r
	</div>\r
</div>\r
\r
{{#if showControls}}\r
<!-- EXAMPLE Controls -->\r
<div class="flex flex-col gap-4 mt-4 bg-gray-100 p-4 rounded" x-data="">\r
	<div>\r
		<h1 class="mb-2 text-lg font-semibold">Event Based</h1>\r
		<div class="flex gap-3">\r
			<button\r
				class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"\r
				@click="$dispatch('baseProgress', { id: 'myProgressBar', method: 'updateProgress', progress: 0 })"\r
			>\r
				Set to 0%\r
			</button>\r
			<button\r
				class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"\r
				@click="$dispatch('baseProgress', { id: 'myProgressBar', method: 'updateProgress', progress: 50 })"\r
			>\r
				Set to 50%\r
			</button>\r
			<button\r
				class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"\r
				@click="$dispatch('baseProgress', { id: 'myProgressBar', method: 'updateProgress', progress: 100 })"\r
			>\r
				Set to 100%\r
			</button>\r
		</div>\r
	</div>\r
\r
	<div>\r
		<h1 class="mb-2 text-lg font-semibold">Store Based</h1>\r
		<div class="flex gap-3">\r
			<button\r
				class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"\r
				@click="$store.myStore.myProperty = 0"\r
			>\r
				Set to 0%\r
			</button>\r
			<button\r
				class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"\r
				@click="$store.myStore.myProperty = 50"\r
			>\r
				Set to 50%\r
			</button>\r
			<button\r
				class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"\r
				@click="$store.myStore.myProperty = 100"\r
			>\r
				Set to 100%\r
			</button>\r
		</div>\r
	</div>\r
</div>\r
<!-- EXAMPLE Controls -->\r
{{/if}}\r
`,p={title:"Base Components/Progressbars/Base Progress",parameters:{layout:"centered",version:"1.0.0"},tags:["autodocs"],argTypes:{initialProgress:{control:"number"},showControls:{control:"boolean"}}},t=a=>i(d,a);t.args={initialProgress:50,showControls:!1};var r,e,s,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  return compileTemplate(BaseProgressTemplate, args);
}`,...(s=(e=t.parameters)==null?void 0:e.docs)==null?void 0:s.source},description:{story:`This component renders a progress bar with customizable progress value.\r
It listens for a custom event named \`baseProgress\` with details containing the progress value to be set.\r
Optionally, it can bind to an Alpine.js store for reactivity.\r

Example of firing a custom event to update the progress bar's value using vanilla JavaScript:\r

\`\`\`javascript\r
const event = new CustomEvent('baseProgress', {\r
    detail: {\r
        id: 'progressBarId',\r
        method: 'updateProgress',\r
        progress: 75,\r
    }\r
});\r
document.dispatchEvent(event);\r
\`\`\`\r

The progress bar can also bind to an Alpine.js store for reactivity.\r
Example of using the store-based functionality:\r

\`\`\`html\r
<div x-data="">\r
    <div x-data="baseProgress({ storeName: 'myStore', storeProperty: 'progressValue' })" id="progressBarId">\r
        <!-- Progress bar content -->\r
    </div>\r
    <button @click="$store.myStore.progressValue = 75">\r
        Set Progress to 75%\r
    </button>\r
</div>\r
\`\`\``,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.description}}};const c=["baseProgress"];export{c as __namedExportsOrder,t as baseProgress,p as default};
