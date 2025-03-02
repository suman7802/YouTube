import { SearchIcon } from 'lucide-react';
import React from 'react';

export const SearchInput = () => {
    return (
        <form className='relative flex w-full max-w-[600px]'>
            <input
                type='text'
                autoComplete='off'
                placeholder='Search for videos'
                className='w-full rounded-l-full border border-gray-100 px-4 py-2 focus:border-gray-300 focus:outline-none'
            />

            <button className='rounded-r-full bg-gray-100 px-4 py-2 hover:bg-gray-200'>
                <SearchIcon className='size-5' />
            </button>
        </form>
    );
};
