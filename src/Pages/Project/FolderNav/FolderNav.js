import React from 'react';
import folderImage from '../../../assets/folder.png';

const FolderNav = () => {
    return (
        <div className='py-6 h-screen flex justify-center' style={{width:'12%',backgroundColor:'#F3F4F6'}}>
            <div className='rounded-md' style={{width:'38%',backgroundColor:'#FDF7FE',height:'12%'}}>
                 <div className='flex flex-col items-center pt-2'> 
            <span>
                <img className='' src={folderImage}  />
            </span>
            <span className=''>
            <span className='font-semibold px-1' style={{color:'#B225EB'}}>Project</span>
            </span>
             </div> 
            </div>
        </div>
    );
};

export default FolderNav;