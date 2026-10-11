import { useEffect, useState } from "react"

export const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(response => response.json())
        //     .then(data => {
        //         setUsers(data)
        //         // console.log(data);

        //     })
        //     .catch(error => console.log(error)
        //     )
        async function fetchUsers() {
            try {
                setLoading(true)
                setError("")
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await response.json()
                setUsers(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchUsers()
    }, [])
    if (loading) return <h1>User is loading</h1>
    if (error) return <h1>{error}</h1>
    return (
        <>
            {users.map((user) => {
                return <p key={user.id}>{user.name}             -                {user.email}</p>
            })}
        </>
    )
}