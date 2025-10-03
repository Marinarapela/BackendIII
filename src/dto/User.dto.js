export default class UserDTO {
    //para tokens
    static getUserTokenFrom = (user) =>{
        return {
            name: `${user.first_name} ${user.last_name}`,
            role: user.role,
            email:user.email
        }
    }

    //para mock useres
    static fromMockUser = (user) => {
        return {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            role: user.role,
            pets: user.pets
        }
    }
}

