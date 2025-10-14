import {ref} from 'vue'

export function useFeatures() {
    const features = ref([])
    const isLoading = ref(true)
    const error = ref(null)

    async function loadFeatures() {
        try {
            const res = await fetch('/data/features.json')
            features.value = await res.json()
        } catch (err) {
            error.value = err
        } finally {
            isLoading.value = false
        }
    }

    loadFeatures()

    return {features, isLoading, error}
}
