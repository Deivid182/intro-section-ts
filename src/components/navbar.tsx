
import { Button } from './ui/button';
import { ListTodo, Calendar, Bell, Clock } from 'lucide-react';
import { iconArrowDown, iconArrowUp } from '@/assets/images';

import { useState } from 'react';
import MobileSidebar from './mobile-sidebar';

const Navbar = () => {

  const [activeFeatures, setActiveFeatures] = useState(false)
  const [activeCompany, setActiveCompany] = useState(false)

  return (
    <header className='w-full sm:px-8 px-4'>
      <nav className='flex justify-between items-center py-6'>
        <div className='flex items-center gap-x-6'>
          <h1 className='text-4xl font-bold font-Epilogue'>snap</h1>
          <div className='relative items-center gap-x-6 lg:flex hidden'>
            <Button 
              onClick={() => setActiveFeatures(!activeFeatures)}
              variant={'ghost'}
              className='font-medium text-neutral-500 hover:text-black p-0 transition-colors'
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
              <div className='absolute rounded-md shadow-md max-w-sm bg-white top-14 left-0 text-sm'>
                <div className='flex flex-col '>
                  <div className="px-4 py-2 hover:bg-neutral-100 transition-colors flex items-center gap-x-4">
                    <ListTodo className='w-5 h-5 mr-2 text-blue-700'/>
                    Todo List
                  </div>
                  <div className="px-4 py-2 hover:bg-neutral-100 transition-colors flex items-center gap-x-4">
                    <Calendar className='w-5 h-5 mr-2 text-sky-600'/>
                    Calendar
                  </div>
                  <div className="px-4 py-2 hover:bg-neutral-100 transition-colors flex items-center gap-x-4">
                    <Bell className='w-5 h-5 mr-2 text-yellow-600'/>
                    Reminders
                  </div>
                  <div className="px-4 py-2 hover:bg-neutral-100 transition-colors flex items-center gap-x-4">
                    <Clock className='w-5 h-5 mr-2 text-purple-800'/>
                    Planing
                  </div>
                </div>
              </div>
            )}
            <Button 
              onClick={() => setActiveCompany(!activeCompany)}
              variant={'ghost'}
              className='font-medium text-neutral-500 p-2 hover:text-black transition-colors'
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
              <div className='absolute rounded-md shadow-md max-w-sm bg-white top-14 left-[108px] text-sm'>
                <div className='flex flex-col '>
                  <div className="px-4 py-2 hover:bg-neutral-100 transition-colors ">
                    History
                  </div>
                  <div className="px-4 py-2 hover:bg-neutral-100 transition-colors ">
                    Our Team
                  </div>
                  <div className="px-4 py-2 hover:bg-neutral-100 transition-colors ">
                    Blog
                  </div>
                </div>
              </div>
            )}
            
            <Button
              variant={'ghost'}
              className='font-medium text-neutral-500 hover:text-black transition-colors p-2 hover:bg-accent hover:text-accent-foreground rounded-md'
            >
              Careers
            </Button>
            <Button
              variant={'ghost'}
              className='font-medium text-neutral-500 hover:text-black transition-colors p-2 hover:bg-accent hover:text-accent-foreground rounded-md'
            >
              About
            </Button>
          </div>
        </div>
        <div className='lg:flex hidden gap-x-8 items-center'>
          <Button variant={'ghost'}>
            Login
          </Button>
          <Button variant={'outline'}>
            Register
          </Button>
        </div>
        <div className='lg:hidden flex'>
          <MobileSidebar />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
