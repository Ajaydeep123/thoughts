import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import {z} from "zod";
import { usernameValidation } from "@/schemas/signUpSchema";

const UsernameQuerySchema = z.object({
    username: usernameValidation
})

export async function GET(request: Request) {

    /* 
    - connect with db
    - Since we want to check uniqueness of username in the realtime, we will hook it up with the query params in the client side
    and in the api we will extract the username from the query params
    - Validate the username with zod schema, if invalid then we return response with invalid query parameter
    - Destructure the username from the result of zod validated data 
    - check if the username already exists in the db
    - If it doesn't exist then return response with 200 status code and " username is unique " message
    */
    await dbConnect();
    
    try{
        const {searchParams} = new URL(request.url)
        const queryParams = {
            username: searchParams.get('username')
        }

        const result = UsernameQuerySchema.safeParse(queryParams); // Validate the username with zod schema
console.log(result)
        if(!result.success){
            const usernameErrors = result.error.format().username?._errors || [];
            return Response.json({
                success: false,
                message: usernameErrors?.length>0 ? usernameErrors.join(", "): 'Invalid query parameter',
            },{status:400});
        }

        const {username} = result.data;

        const existingVerifiedUser = await UserModel.findOne({
            username,
            isVerified: true,
        });

        if (existingVerifiedUser) {
            return Response.json(
              {
                success: false,
                message: 'Username is already taken',
              },
              { status: 200 }
            );
        }
        return Response.json(
            {
              success: true,
              message: 'Username is unique',
            },
            { status: 200 }
        );
    }catch(error){
        console.error('Error checking username:', error);
        return Response.json({
            success: false,
            message:"Error checking username"
        },{
            status:500
        })       
    }

}
