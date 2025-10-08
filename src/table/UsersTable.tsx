import React, { useEffect, useState } from "react";
import { Table } from "../components/UserTable.tsx";
import type { TableColumn } from "../components/UserTable";
import { fetchUsers, userDelete } from "../api/UserApi.tsx";
import type { GetUser } from "../api/UserApi.tsx";

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
            render: (row) => (
                <div className="flex gap-1">
                    <button
                        className="text-blue-600 hover:underline"
                        // onClick={() => alert(`Edit ${row.name}`)}
                        // onClick={() => handleDelete(row.id)}
                        onClick={() => handleDelete(row.id)}
                    >
                        delete /
                    </button>

                    <button
                        className="text-blue-600 hover:underline"
                    // onClick={() => alert(`Edit ${row.name}`)}
                    >
                        edit
                    </button>
                </div>

            ),

        },
    ];

    // get user in get api 
    useEffect(() => {
        const getUser = async () => {
            const users = await fetchUsers();
            setData(users)
            setLoading(false)
        }
        getUser();
    }, [])


    // delete  user 

    const handleDelete = async (id: number) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;
        await userDelete(id);
        alert("User deleted successfully!");
        fetchUsers(); // Refresh table
    };


    if (loading) return <p>Loading user....</p>
    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Users</h1>
            <Table columns={columns} data={data} />
        </div>
    );
}
