import{c as n}from"./handlebarsHelper-BTGPQz6o.js";import"./_commonjsHelpers-Cpj98o6Y.js";const l=`<div\r
	class="bg-white w-full rounded-lg font-montserrat shadow-xl hover:scale-95 transition-all duration-500 max-w-96"\r
>\r
	<div class="aspect-video">\r
		<img\r
			src="{{image}}"\r
			alt="News Image"\r
			class="w-full h-full object-cover object-center rounded-t-lg"\r
		/>\r
	</div>\r
	<div class="px-8 py-4">\r
		<div class="flex justify-between items-center mb-4">\r
			<div class="text-gray-400 font-semibold text-xs">{{date}}</div>\r
			<div\r
				class="uppercase bg-green-600 text-white rounded-full px-3 py-1 text-xs"\r
			>\r
				{{tag}}\r
			</div>\r
		</div>\r
		<h2 class="font-bold text-lg h-14 line-clamp-2 mb-1">{{title}}</h2>\r
		<p class="line-clamp-2 text-sm text-gray-500 h-10 mb-4">\r
			{{description}}\r
		</p>\r
		<div class="flex flex-row-reverse">\r
			<a\r
				href="#"\r
				class="text-gray-600 flex gap-2 items-center hover:translate-x-1 focus:translate-x-1 transition-all"\r
			>\r
				<span class="underline text-xs font-semibold uppercase"\r
					>Read more</span\r
				>\r
				<div\r
					class="bg-gray-100 size-5 rounded-full flex items-center justify-center"\r
				>\r
					<i class="fa-solid fa-angle-right text-xs"></i>\r
				</div>\r
			</a>\r
		</div>\r
	</div>\r
</div>\r
`,d={title:"Components/Cards/News Card",parameters:{layout:"centered",version:"1.0.0"},argTypes:{date:{control:"text"}}},t=s=>n(l,s);t.args={date:"June 4, 2020",tag:"Animals",title:"Hero dog protected human",description:"A hero dog saved a human from a burning building. The dog was awarded a medal of honor.",image:"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"};var e,r,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
  return compileTemplate(NewsCardTemplate, args);
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const c=["newsCard"];export{c as __namedExportsOrder,d as default,t as newsCard};
