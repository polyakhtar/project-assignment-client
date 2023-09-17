import React from 'react';
import logo from '../../../assets/Logo.png'

const ProjectNav = () => {
    return (
        <div className='flex justify-between px-10 border-b-2' style={{backgroundColor:' #F3F4F6',}}>
        <div className='flex items-center py-4' style={{width:'45%'}}>
            <span className='mr-6'>
            <img className='' src={logo} />
            </span>  
            <span className='' style={{color:'#111827'}}>My Projects</span>
        </div>
        <div className='' style={{width:'45%'}}>

        </div>
        </div>
    );
};

export default ProjectNav;