type UserLogin = {
    user_id: number, 
    username: string, 
    password: string, 
    role_id: number, 
    role_name: string | unknown, 
    subsidiary_name: string, 
    subsidiary_id: number | string
};

export default UserLogin;