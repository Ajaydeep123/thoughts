import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import {z} from "zod";
import { verifySchema } from "@/schemas/verifySchema";


export async function POST(request: Request) {
    await dbConnect()

    try{
        // Get username and code from the request body
        
        const {username, code} = await request.json()

        // Validate the verification code using Zod schema
        const validation = verifySchema.safeParse({ code });

        if (!validation.success) {
          // If validation fails, return a 400 response with error details
          const codeErrors = validation.error.format().code?._errors || [];
          return new Response(
            JSON.stringify({
              success: false,
              message: codeErrors.length > 0 ? codeErrors.join(', ') : 'Invalid verification code',
            }),
            { status: 400 }
          );
        }

        const decodedUsername = decodeURIComponent(username);
        const user = await UserModel.findOne({username: decodedUsername});

        if(!user){
            return Response.json(
                { success: false, message: 'User not found' },
                { status: 404 }
            )
        }
        // Check if the verification code matches the one in the database and is not expired

        const isCodeValid = user.verifyCode === code;

        const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date();

        if(isCodeValid && isCodeNotExpired){
          user.isVerified = true;
          await user.save();

          return Response.json({
            success: true,
            message: 'User verified successfully',
          },{status :200})
        }

        if(!isCodeNotExpired){
          return Response.json(
            {
              success: false,
              message:
                'Verification code has expired. Please sign up again to get a new code.',
            },
            { status: 400 }
          );
        }else{
          return Response.json(
            { success: false, message: 'Incorrect verification code' },
            { status: 400 }
          );
        }
    }catch(error){
        console.error('Error verifying the user', error);

        return Response.json(
            { success: false, message: 'Error verifying user' },
            { status: 500 }
        )
    }
}