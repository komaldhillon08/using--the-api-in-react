import React, { useEffect, useState } from "react";
import { Table } from "../components/UserTable.tsx";
import type { TableColumn } from "../components/UserTable";
import { fetchUsers  } from "../api/UserApi.tsx";
import type  { GetUser } from "../api/UserApi.tsx";




export default function UsersTable() {

    const [data, setData] = useState<GetUser[]>([]);
    const [loading, setLoading] = useState(true);




    /* interface User {
      id: number;
      name: string;
      email: string;
    }
    
    const data: User[] = [
      { id: 1, name: "user 1", email: "acb@example.com" },
      { id: 2, name: "user 2", email: "abcd@example.com" },
    ]; */

    const columns: TableColumn<GetUser>[] = [
        { header: "ID", accessor: "id" },
        { header: "Name", accessor: "name" },
        { header: "Email", accessor: "email" },
        {
            header: "Action",
            accessor: "action",
            render: () => (
                <button
                    className="text-blue-600 hover:underline"
                // onClick={() => alert(`Edit ${row.name}`)}
                >
                    delete
                </button>
            ),
        },
    ];


    useEffect(() => {
        const getUser = async () => {
            const users = await fetchUsers();
            setData(users)
            setLoading(false)
        }
        getUser();
    }, [])
    

    if (loading) return <p>Loading user....</p>
    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Users</h1>
            <Table columns={columns} data={data} />
        </div>
    );
}
