export const port="8080"
export const base_url =`http://localhost:${port}/file`

export const login = base_url+"/login"
export const register = base_url+"/register"
export const details = base_url
export const picture = base_url

export const URL_DETAILS={
    login:{
        url:login,
        method:"POST"
    },
    register:{
        url:register,
        method:"POST"
    },
    getDetails:{
        url:details,
        method:"GET"
    },
    getPicture:{
        url:picture,
        method:"GET"
    }
}