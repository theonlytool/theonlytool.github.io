import {ref} from 'vue'

export function useTechnologies() {
    const technologies = ref([])
    const isLoading = ref(true)
    const error = ref(null)

    async function loadTechnologies() {
        try {
            const res = await fetch('/data/technologies.json')
            technologies.value = await res.json()
        } catch (err) {
            error.value = err
        } finally {
            isLoading.value = false
        }
    }

    loadTechnologies()

    return {technologies, isLoading, error}
}
