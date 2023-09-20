import Container from './container';
import {
  imageHeroDesktop,
  imageHeroMobile,
  clientAudiophile,
  clientDatabiz,
  clientMaker,
  clientMeet,
} from '@/assets/images';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className='sm:py-16 py-8'>
      <Container>
        <div className='flex items-center max-lg:gap-y-8 lg:gap-x-16 max-lg:flex-col-reverse'>
          <div className='space-y-20'>
            <div className='flex flex-col gap-y-12 max-lg:items-center flex-1 max-lg:px-4 '>
              <h2 className='text-3xl max-lg:text-center lg:text-6xl font-bold w-full lg:w-[90%]'>
                Make remote work
              </h2>
              <p className='w-full lg:max-w-lg max-lg:text-center max-lg:text-[15px] text-neutral-500 leading-6'>
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals and watch productivity soar.
              </p>
              <Button className='w-fit'>Learn more</Button>
            </div>
            <div className='flex items-center max-lg:justify-between lg:gap-x-6 flex-wrap max-lg:px-4'>
              <img src={clientAudiophile} className='w-16 lg:w-20 object-contain' width={'100px'} height={'100px'} alt='clientAudiophile' />
              <img src={clientDatabiz} className='w-16 lg:w-20 object-contain' width={'100px'} height={'100px'} alt='clientDatabiz' />
              <img src={clientMaker} className='w-16 lg:w-20 object-contain' width={'100px'} height={'100px'} alt='clientMaker' />
              <img src={clientMeet} className='w-16 lg:w-20 object-contain' width={'100px'} height={'100px'} alt='clientMeet' />
            </div>
          </div>
          <div className='flex-1'>
            <img
              src={imageHeroDesktop}
              alt=''
              className='w-full lg:flex hidden'
            />
            <img src={imageHeroMobile} alt='' className='w-full lg:hidden' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
