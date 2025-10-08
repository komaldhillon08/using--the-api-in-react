export interface GetUser {
    id: number;
    name: string;
    email: string;
}
// fetch user 
export const fetchUsers = async (): Promise<GetUser[]> => {
    try {
        const response = await fetch("https://68e5fc2c21dd31f22cc3a1e0.mockapi.io/api/v1/user/User")
        if (!response.ok) {
            throw new Error("failed to fetch data")
        }
        const data: GetUser[] = await response.json();
        return data
    } catch (error) {
        console.error("api error", error)
        return [];
    }
};


// post api in login 
export interface PostUserApi {
    id: number;
    name: string;
    email: string;
    password: string;
    avatar?: any;
}
export const addUser = async (user: {
    name: string;
    email: string;
    password: string;
    avatar?: any;
}): Promise<PostUserApi | null> => {


    try {
        const formData = new FormData();
        formData.append("name", user.name);
        formData.append("email", user.email);
        formData.append("password", user.password);
        if (user.avatar) formData.append("avatar", user.avatar)

        const response = await fetch("https://68e5fc2c21dd31f22cc3a1e0.mockapi.io/api/v1/user/User", {
            method: "POST",
            body: formData
        })
        if (!response.ok) throw new Error("Failed to add user")
        return await response.json();
    } catch (error) {
        console.error("Add User Error:", error);
        return null;
    }
}



// delete api 
export const userDelete = async (id: number): Promise<void> => {
    try {
        const response = await fetch(`https://68e5fc2c21dd31f22cc3a1e0.mockapi.io/api/v1/user/User/${id} `,
            { method: "DELETE", })

        if (!response.ok) {
            throw new Error("failed to delete  user")
        }
        console.log(`User with ID ${id} deleted successfully`);
    } catch (error) {
        console.error("user not delete" , error)
    }
};
