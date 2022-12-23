import React from 'react';

interface Props{
  tags: string[]
}

const Tags = ({tags}: Props) => {
  
  return (
    <ul className='list-tags'>

    {tags.map((tag, index) => (
      <li className='tags' key={index}>
        {tag}
      </li>
    ))}
      
    </ul>
  );
};

export default Tags;