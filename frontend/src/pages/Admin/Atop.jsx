import React from 'react'
import ava from '@/assets/images/logo3.png'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from '@/components/Mode-Toggle'
import { Bell } from 'lucide-react'

export const Atop = () => {
  return (
    <div className='h-[4rem] w-full bg-zinc-700 flex justify-center items-center '>
    <div className='w-[95%] h-full flex items-center justify-end gap-4'>
        <ModeToggle/>
        <h6 className='text-white'><Bell/></h6>
        <h6 className='text-white text-xl'>Admin</h6>
        <Avatar>
            <AvatarImage src={ava} alt="@shadcn" />
            <AvatarFallback>MM</AvatarFallback>
        </Avatar>
    </div>
</div>
  )
}
