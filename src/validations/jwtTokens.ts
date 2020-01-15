



const jwt= require('jsonwebtoken');

export function TokenEncode(payload:any) {
    //time in seconds or  '1h'
    return jwt.sign({data: payload}, "nikhil",
        {expiresIn: 3600})

}


export function TokenDecode(token:string) {
    return jwt.verify(token, "nikhil")

}

