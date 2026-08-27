import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
    const x = ref(0)
    const y = ref(0)

    function update(event: { pageX: number; pageY: number }): void {
        x.value = event.pageX
        y.value = event.pageY
    }

    onMounted(():void => window.addEventListener('mousemove', update))
    onUnmounted(():void => window.removeEventListener('mousemove', update))

    return { x, y }
}