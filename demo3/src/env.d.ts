
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}


// 这里配置能够识别Vue 类型文件，如果没有此 env.d.ts 文件，建议手动添加上