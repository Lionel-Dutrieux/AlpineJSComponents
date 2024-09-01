import{c as l}from"./handlebarsHelper-BTGPQz6o.js";import{productCard as e}from"./ProductCard.stories-B_Y7_END.js";import"./_commonjsHelpers-Cpj98o6Y.js";const o=`<div class="bg-white rounded-xl font-montserrat shadow-xl p-4 mb-8">\r
	<div x-data="{ nameFilter: '', sizeFilter: '', priceFilter: '' }">\r
		<!-- Name Filter -->\r
		<div class="mb-4">\r
			<label for="nameFilter" class="block font-semibold mb-2"\r
				>Name Filter</label\r
			>\r
			<input\r
				type="text"\r
				id="nameFilter"\r
				class="border border-black rounded-md px-4 py-2 font-semibold w-full"\r
				placeholder="Enter name"\r
				x-model="nameFilter"\r
			/>\r
		</div>\r
\r
		<!-- Size Filter -->\r
		<div class="mb-4">\r
			<label for="sizeFilter" class="block font-semibold mb-2"\r
				>Size Filter</label\r
			>\r
			<select\r
				id="sizeFilter"\r
				class="border border-black rounded-md px-4 py-2 font-semibold w-full"\r
				x-model="sizeFilter"\r
			>\r
				<option value="">Select size</option>\r
				<option value="40">40</option>\r
				<option value="41">41</option>\r
				<option value="42">42</option>\r
				<option value="43">43</option>\r
				<option value="44">44</option>\r
			</select>\r
		</div>\r
\r
		<!-- Price Filter -->\r
		<div class="mb-4">\r
			<label for="priceFilter" class="block font-semibold mb-2"\r
				>Price Filter</label\r
			>\r
			<select\r
				id="priceFilter"\r
				class="border border-black rounded-md px-4 py-2 font-semibold w-full"\r
				x-model="priceFilter"\r
			>\r
				<option value="">Select price range</option>\r
				<option value="lessThan,75">Less than 75</option>\r
				<option value="between,50,100">50 - 100</option>\r
			</select>\r
		</div>\r
\r
		<!-- Apply Filters Button -->\r
		<button\r
			class="border border-black rounded-md px-4 py-2 font-semibold w-full mb-4"\r
			@click="\r
                if (nameFilter) {\r
                    $dispatch('baseFilter', { id: 'myFilterContainer', method: 'addFilter', name: 'name', condition: 'contain', value: nameFilter.toLowerCase() });\r
                } else {\r
                    $dispatch('baseFilter', { id: 'myFilterContainer', method: 'removeFilter', name: 'name' });\r
                }\r
                if (sizeFilter) {\r
                    $dispatch('baseFilter', { id: 'myFilterContainer', method: 'addFilter', name: 'size', condition: 'numberEqual', value: sizeFilter });\r
                } else {\r
                    $dispatch('baseFilter', { id: 'myFilterContainer', method: 'removeFilter', name: 'size' });\r
                }\r
                if (priceFilter) {\r
                    const [condition, ...values] = priceFilter.split(',');\r
                    $dispatch('baseFilter', { id: 'myFilterContainer', method: 'addFilter', name: 'price', condition, value: values.join(',') });\r
                } else {\r
                    $dispatch('baseFilter', { id: 'myFilterContainer', method: 'removeFilter', name: 'price' });\r
                }\r
            "\r
		>\r
			Apply Filters\r
		</button>\r
\r
		<!-- Clear Filters Button -->\r
		<button\r
			class="border border-black rounded-md px-4 py-2 font-semibold w-full"\r
			@click="$dispatch('baseFilter', { id: 'myFilterContainer', method: 'resetFilter' })"\r
		>\r
			Clear Filters\r
		</button>\r
	</div>\r
</div>\r
\r
<div\r
	id="myFilterContainer"\r
	class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"\r
	x-data="{...baseFilter() }"\r
>\r
	{{{card1}}} {{{card2}}} {{{card3}}} {{{card4}}} {{{card5}}} {{{card6}}}\r
</div>\r
`,m={title:"Base Components/Filters/Base Filter",parameters:{layout:"centered",version:"1.0.0",docs:{description:{component:`### Examples to Fire Events\r

#### 1. **Firing an \`addFilter\` Event**\r
The \`addFilter\` event is used to add a new filter to the base filter.\r
\r
Available conditions:\r
- CONTAIN: 'contain'\r
- GREATER_THAN: 'greaterThan'\r
- LESS_THAN: 'lessThan'\r
- NUMBER_EQUAL: 'numberEqual'\r
- BETWEEN: 'between'\r

\`\`\`javascript\r
const event = new CustomEvent('baseFilter', {\r
    detail: {\r
        id: 'your-element-id',        // The ID of the element where the baseFilter is applied.\r
        method: 'addFilter',          // Method to add a filter.\r
        name: 'your-filter-name',     // The name of the filter (e.g., 'category', 'price').\r
        condition: 'contain',         // The condition for the filter (e.g., 'contain', 'greaterThan').\r
        value: 'your-filter-value'    // The value to filter by (e.g., 'electronics', '50').\r
    }\r
});\r
document.dispatchEvent(event);\r
\`\`\`\r

##### Example Usage:\r

\`\`\`javascript\r
const event = new CustomEvent('baseFilter', {\r
    detail: {\r
        id: 'base-filter-12345',\r
        method: 'addFilter',\r
        name: 'category',\r
        condition: 'contain',\r
        value: 'electronics'\r
    }\r
});\r
document.dispatchEvent(event);\r
\`\`\`\r

This will add a filter that checks if the \`category\` attribute of an element contains the value "electronics".\r

#### 2. **Firing a \`removeFilter\` Event**\r
The \`removeFilter\` event removes a specific filter that has been added.\r

\`\`\`javascript\r
const event = new CustomEvent('baseFilter', {\r
    detail: {\r
        id: 'your-element-id',        // The ID of the element where the baseFilter is applied.\r
        method: 'removeFilter',       // Method to remove a filter.\r
        name: 'your-filter-name',     // The name of the filter (e.g., 'category', 'price').\r
        value: 'your-filter-value'    // The value of the filter to be removed (e.g., 'electronics', '50').\r
    }\r
});\r
document.dispatchEvent(event);\r
\`\`\`\r

##### Example Usage:\r

\`\`\`javascript\r
const event = new CustomEvent('baseFilter', {\r
    detail: {\r
        id: 'base-filter-12345',\r
        method: 'removeFilter',\r
        name: 'category',\r
        value: 'electronics'\r
    }\r
});\r
document.dispatchEvent(event);\r
\`\`\`\r

This will remove the filter for the \`category\` attribute with the value "electronics".\r

#### 3. **Firing a \`resetFilter\` Event**\r
The \`resetFilter\` event resets all filters, clearing them and restoring the original elements.\r

\`\`\`javascript\r
const event = new CustomEvent('baseFilter', {\r
    detail: {\r
        id: 'your-element-id',        // The ID of the element where the baseFilter is applied.\r
        method: 'resetFilter'         // Method to reset all filters.\r
    }\r
});\r
document.dispatchEvent(event);\r
\`\`\`\r

##### Example Usage:\r

\`\`\`javascript\r
const event = new CustomEvent('baseFilter', {\r
    detail: {\r
        id: 'base-filter-12345',\r
        method: 'resetFilter'\r
    }\r
});\r
document.dispatchEvent(event);\r
\`\`\`\r

This will reset all the filters and restore the original DOM elements.\r

### Important Notes\r

- **Element ID**: Replace \`'your-element-id'\` with the actual ID of the element where the \`baseFilter\` is initialized. If the ID is not set manually, it will be auto-generated (e.g., \`base-filter-abc123\`).\r
- **Filter Conditions**: The conditions must match those defined in the \`FILTER_CONDITIONS\` enum (\`contain\`, \`greaterThan\`, \`lessThan\`, \`numberEqual\`, \`between\`).\r

These examples demonstrate how to trigger each available method in your \`baseFilter\` implementation using events.\r
\r
![Base Filter Example](https://i.lionel-dutrieux.com/u/pMfOjY.gif)`}}},tags:["autodocs"]},t=a=>l(o,a);t.args={text:"Primary",card1:e({image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Nike Air Max 270",size:"41",price:"120",tag:"New"}),card2:e({name:"Fila Disruptor II",price:"150",size:"42",image:"https://images.unsplash.com/photo-1579446565308-427218a2c60e?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tag:"Promo"}),card3:e({name:"Puma RS-X",price:"110",size:"43",image:"https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tag:"New"}),card4:e({name:"Reebok Classic Leather",price:"90",size:"40",image:"https://images.unsplash.com/photo-1704951108136-0153f403c5cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tag:"Exclusive"}),card5:e({name:"Converse Chuck Taylor",price:"70",size:"44",image:"https://images.unsplash.com/photo-1556048219-bb6978360b84?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tag:"New"}),card6:e({name:"Vans Old Skool",price:"65",size:"41",image:"https://images.unsplash.com/photo-1512990414788-d97cb4a25db3?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tag:"Promo"})};var r,n,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  return compileTemplate(BaseFilterTemplate, args);
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const p=["baseFilter"];export{p as __namedExportsOrder,t as baseFilter,m as default};
