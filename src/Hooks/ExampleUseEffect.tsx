import { useEffect, useState } from "react"

interface Users {
    id: number,
    login: string
}

export const ExampleUseEffect = () => {
    const [name, setName] = useState("Grijesh");
    const [admin, setAdmin] = useState(false);
    const [users, setUsers] = useState<Users[]>();

    useEffect(() => {
        // This will only call during load or when name changes
        console.log(`Hello ${name}`);
    }, [name]);

    useEffect(() => {
        // This will only call during load or when admin changes
        console.log(`User is ${admin ? "admin" : "not admin"}.`);
    }, [admin])


    useEffect(() => {
        fetch(`https://api.github.com/users`)
        .then((response) => response.json())
        .then(setUsers)
    }, []);

    if (!users) {
        return (
            <div>
                Loading.....
            </div>
        )
    }

    return (
        <section>
            <p>Hello {name}</p>
            <button onClick={() => setName("Saini")}>Change Name</button>
            <p>
                {admin ? "User is Admin" : "User is Not Admin"}
            </p>
            <button onClick={() => setAdmin(true)}>Admin</button>
            <ul>
                {
                    users.slice(0, 10).map((user) => (
                        <li key={user.id}>{user.login}</li>
                    ))
                }
             </ul>
        </section>
    )
    
}