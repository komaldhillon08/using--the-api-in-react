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