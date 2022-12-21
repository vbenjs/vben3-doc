# Fetch功能扩展
支持调用接口请求数据，表单项组件，如select、tree等等
api传入接口函数 
> getSelectData 是函数，getSelectData()是函数返回值，所以api传入getSelectData即可
> params为接口参数，接口参数变化会重新请求

```ts
 {
    field: 'sex.aa.bb', 
    label: 'Select',
    component: 'Select',
    componentProps: {
        placeholder: '基本的 Select',
        api: getSelectData,
        params: selectParams,
        afterFetch:(result)=>{
            // DO SOMETING
            return result
        }    
    },
},
```
### Fetch Props
```ts
// 请求props定义
export const fetchProps = {
    // 请求函数
  api: {
    type: Function,
    default: null,
  },
    // 请求参数
  params: {
    type: Object,
    default: {},
  },
    //立即请求
  immediate: {
    type: Boolean,
    default: true,
  },
    // 请求后处理
  afterFetch: {
    type: Function,
    default: null,
  },
    //请求结果key
  resultField: {
    type: String,
    default: 'options',
  },
}
```
