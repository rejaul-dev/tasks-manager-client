import React from 'react';

const AddTasks = () => {
    return (
        <div className='max-w-[1240px] mx-auto text-white'>
            <div className='w-[400px] mx-auto'>
            <h1 className='md:text-4xl font-bold'>Add Your Tasks</h1>
                <input className='py-2 px-4 text-black' type="text" name="text" id="" placeholder='Add Tasks' />
                <button type="submit" className='bg-black py-3 px-8 ml-2 rounded-lg cursor-pointer'>Add Tasks</button>
            </div>
        </div>
    );
};

export default AddTasks;