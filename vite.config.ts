import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

const customComponents: string [] = [
    'StateManagement',
]

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => customComponents.includes(tag),
                }
            }
        })
    ]
})
