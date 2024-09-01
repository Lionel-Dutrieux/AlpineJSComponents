import{c as s}from"./handlebarsHelper-BTGPQz6o.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a=`<div\r
	class="bg-white w-full rounded-xl font-montserrat shadow-xl hover:scale-95 transition-all duration-500 max-w-80"\r
	filter-size="{{size}}"\r
	filter-name="{{name}}"\r
	filter-price="{{price}}"\r
	filter-tag="{{tag}}"\r
>\r
	<div class="aspect-square relative">\r
		<div class="absolute inset-0 p-4 flex justify-between flex-col">\r
			<div>\r
				<div\r
					class="bg-white inline-block rounded-md px-3 py-1 text-xs text-green-600 font-semibold"\r
				>\r
					{{tag}}\r
				</div>\r
			</div>\r
			<div class="flex flex-row-reverse gap-2">\r
				<div\r
					class="bg-white bg-opacity-70 backdrop-blur inline-block rounded-md px-4 border text-sm border-black py-1 text-black font-semibold"\r
				>\r
					{{size}}\r
				</div>\r
			</div>\r
		</div>\r
		<img\r
			src="{{image}}"\r
			alt="News Image"\r
			class="w-full h-full object-cover object-center rounded-t-xl"\r
		/>\r
	</div>\r
	<div class="p-4">\r
		<h2 class="font-bold text-lg h-14 line-clamp-2 mb-1">{{name}}</h2>\r
		<div class="flex justify-between items-end">\r
			<div>\r
				<div class="text-sm text-gray-500 font-medium">Price</div>\r
				<div class="font-bold text-lg">{{price}}€</div>\r
			</div>\r
			<button\r
				class="bg-red-600 text-white flex items-center justify-center size-10 rounded-xl hover:bg-red-800 transition-all"\r
				title="Add to basket"\r
			>\r
				<i class="fa-solid fa-cart-shopping"></i>\r
			</button>\r
		</div>\r
	</div>\r
</div>\r
`,l={title:"Components/Cards/Product Card",parameters:{layout:"centered",version:"1.0.0"}},t=i=>s(a,i);t.args={image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Nike Air Max 270",size:"41",price:"120",tag:"New"};var r,e,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  return compileTemplate(ProductCardTemplate, args);
}`,...(n=(e=t.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const c=["productCard"];export{c as __namedExportsOrder,l as default,t as productCard};
