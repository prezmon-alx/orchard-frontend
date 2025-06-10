import { useEffect, useState } from 'react'

export default function useApi(endpoint, { withAuth = false } = {}) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const BASE_URL = import.meta.env.VITE_API_URL

        fetch(`${BASE_URL}/${endpoint}`)
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch')
                return res.json()
            })
            .then((json) => {
                setData(json)
            })
            .catch((err) => {
                setError(err)
                console.error(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [endpoint, withAuth])

    return { data, loading, error }
}