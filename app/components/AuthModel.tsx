"use server"

import Image from 'next/image'
import React from 'react'
import Logo from '@/public/logo-N.png'
import { signIn } from '../utils/auth'
import { Button } from '@/components/ui/Button'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'


export default async function AuthModel() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Try For Free</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[360px]">
                <DialogHeader className="flex flex-row justify-center items-center gap-2">
                    <Image src="/path-to-your-logo" alt="Logo" className='size-10' />
                    <h4 className="text-3xl font-semibold">
                        Cal<span className="text-primary">Enderly</span>
                    </h4>
                </DialogHeader>
                <div className="flex flex-col mt-5 gap-3">
                    {/* <form 
                        action={async (formData) => {
                            "use server"; // Ensure this directive is at the top inside the async function
                            
                            await signIn("github"); // Await the signIn function to handle server-side authentication
                        }}
                        className='w-full'>
                    </form> */}
                    <Button>Sign in with Google</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}