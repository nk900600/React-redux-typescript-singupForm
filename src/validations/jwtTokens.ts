

interface Payload {
    username: string,
    password : string

}

const jwt= require('jsonwebtoken');

export function TokenEncode(payload:any) {
    //time in seconds or  '1h'
    return jwt.sign({data: payload}, "nikhil",
        {expiresIn: "1h"})

}


export function TokenDecode(token: string | null) {
    return jwt.verify(token, "nikhil")

}

