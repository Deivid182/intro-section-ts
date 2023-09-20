import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { ListTodo, Calendar, Bell, Clock, Menu } from 'lucide-react';
import { iconArrowDown, iconArrowUp } from '@/assets/images'
import { Button } from './ui/button'
import { useState } from 'react'

const MobileSidebar = () => {

  const [activeFeatures, setActiveFeatures] = useState(false)
  const [activeCompany, setActiveCompany] = useState(false)

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div className='flex items-center justify-center p-2 hover:bg-neutral-300 rounded-md'>
            <Menu className='w-8 h-8' />
          </div>
        </SheetTrigger>
        <SheetContent side={'right'} className='p-0 h-full'>
          <div className='overflow-y-auto mt-12 space-y-4 p-4 flex flex-col h-full'>
            <div className='relative gap-y-6 flex flex-col items-start'>
              <Button
                onClick={() => setActiveFeatures(!activeFeatures)}
                variant={'ghost'}
                className='font-medium text-lg text-neutral-500 hover:text-black p-2 transition-colors'
              >
                Features
                <img
                  src={activeFeatures ? iconArrowUp : iconArrowDown}
                  alt='arrow'
                  className='ml-2 w-3 h-3 object-contain'
                  width={12}
                  height={12}
                />
              </Button>
              {activeFeatures && (
                <div className='ml-8 max-w-sm text-lg'>
                  <div className='flex flex-col gap-y-4'>
                    <div className="px-4 py-2 hover:bg-neutral-100 rounded-md transition-colors flex items-center gap-x-4">
                      <ListTodo className='w-5 h-5 mr-2 text-blue-700' />
                      Todo List
                    </div>
                    <div className="px-4 py-2 hover:bg-neutral-100 rounded-md transition-colors flex items-center gap-x-4">
                      <Calendar className='w-5 h-5 mr-2 text-sky-600' />
                      Calendar
                    </div>
                    <div className="px-4 py-2 hover:bg-neutral-100 rounded-md transition-colors flex items-center gap-x-4">
                      <Bell className='w-5 h-5 mr-2 text-yellow-600' />
                      Reminders
                    </div>
                    <div className="px-4 py-2 hover:bg-neutral-100 rounded-md transition-colors flex items-center gap-x-4">
                      <Clock className='w-5 h-5 mr-2 text-purple-800' />
                      Planing
                    </div>
                  </div>
                </div>
              )}
              <Button
                onClick={() => setActiveCompany(!activeCompany)}
                variant={'ghost'}
                className='font-medium text-lg text-neutral-500 p-2 hover:text-black transition-colors'
              >
                Company
                <img
                  src={activeCompany ? iconArrowUp : iconArrowDown}
                  alt='arrow'
                  className='ml-2 w-3 h-3 object-contain'
                  width={12}
                  height={12}
                />
              </Button>
              {activeCompany && (
                <div className='ml-8 max-w-sm'>
                  <div className='flex flex-col gap-y-4'>
                    <div className="px-4 py-2 texl-lg rounded-md hover:bg-neutral-100 transition-colors ">
                      History
                    </div>
                    <div className="px-4 py-2 text-lg rounded-md hover:bg-neutral-100 transition-colors ">
                      Our Team
                    </div>
                    <div className="px-4 py-2 text-lg rounded-md hover:bg-neutral-100 transition-colors ">
                      Blog
                    </div>
                  </div>
                </div>
              )}
              <Button
                variant={'ghost'}
                className='font-medium text-lg text-neutral-500 hover:text-black transition-colors p-2 hover:bg-accent hover:text-accent-foreground rounded-md'
              >
                Careers
              </Button>
              <Button
                variant={'ghost'}
                className='font-medium text-lg text-neutral-500 hover:text-black transition-colors p-2 hover:bg-accent hover:text-accent-foreground rounded-md'
              >
                About
              </Button>
            </div>
            <div className='gap-y-6 flex flex-col items-center'>
              <Button size={'lg'} variant={'ghost'} className='w-full'>
                Login
              </Button>
              <Button size={'lg'} className='w-full' variant={'outline'}>
                Register
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileSidebar