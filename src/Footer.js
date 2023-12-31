import React, { useState } from 'react';
import { GithubIcon, LinkedinIcon, MediumIcon, YoutubeIcon, EmailIcon } from './icons';

const Footer = ( {children} ) => {

    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('sadovsd@miamioh.edu');
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1600);
    };

    return(
        // Make sure the footer appears at very bottom of screen
        <div className='flex flex-col min-h-screen'>
            <div className='flex-grow'>{children}</div>
            <div className='flex flex-row justify-center items-center gap-5 relative mt-40 mb-4'>
                <button className='' onClick={handleCopyEmail}>
                    <EmailIcon className='relative h-[2.7rem] w-[2.7rem] text-materialUI hover:text-neutral-500' />
                </button>

                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/davyd-sadovskyy-84678a105'>
                    <LinkedinIcon className='h-[2.7rem] w-[2.7rem] text-materialUI hover:text-linkedIn' />
                </a>

                <a target="_blank" rel="noreferrer" href='https://github.com/sadovsd'>
                    <GithubIcon className='h-[2.7rem] w-[2.7rem] text-materialUI hover:text-neutral-950' />
                </a>
                <a target="_blank" rel="noreferrer" href='https://medium.com/'>
                    <MediumIcon className='h-[3.2rem] w-[3.2rem] text-materialUI hover:text-neutral-950' />
                </a>

                <a target="_blank" rel="noreferrer" href='https://www.youtube.com/'>
                    <YoutubeIcon className='h-[2.7rem] w-[2.7rem] text-materialUI hover:text-red-600' />
                </a>
                {copied && 
                (<p className='absolute left-[47rem] text-md text-neutral-100 bg-neutral-600 px-2 py-1 rounded shadow'>
                Email copied!</p>
                )}
            </div>
            <p className='mb-4 text-neutral-600'>Designed and Developed by Davyd Sadovskyy © 2023</p>
        </div>



    )
}

export default Footer;