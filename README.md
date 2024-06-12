
```
// 新增功能配置
chart: {
	text: {
  	ellipsis: true, // 字体展示在图形上 超出省略展示
  	style: { // 字体颜色配置
  		color: '#fff',
  		wordBreak: 'break-all'
  	}
  }
}



taskList: {
        ...
	columns: [
		{
			id: 99,
			label: 'fixed',
			// value: 'test', // value不生效 有render时
			fixed: 'right', // 列会靠右侧
			width: 90,
			render: (val, row) => {
			// val 为 value的值， row 是整行数据； render函数可以替换 原有的html:true
			return (
				<el-button size="mini" type="text">
					编辑
				</el-button>
				);
		}
	  }
	]
}
```

### uglifyjs

If you are using uglifyjs in your project be sure to have es6 compatible version like [uglify-es](https://www.npmjs.com/package/uglify-es)

### Licensce

MIT
