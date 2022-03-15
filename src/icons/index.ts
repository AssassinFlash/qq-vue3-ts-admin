// 全局注册 el-icon 图标
import * as Icons from '@element-plus/icons-vue'

// Object.keys()返回属性名，这里特指返回图标名称
export default (app: any) => {
  Object.keys(Icons).forEach((icon) => {
    app.component(icon, Icons[icon as keyof typeof Icons])
  })
}

// const Person = {
//   name: 'jzh',
//   age: 25
// }
// type Person1 = typeof Person // {name: string, age: number}
// type Person2 = keyof Person1 // "name" | "age"
// 所以这里 keyof typeof 是为了获取属性名
