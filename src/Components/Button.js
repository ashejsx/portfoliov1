import React from 'react';

function MyButton({ url }) {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <button
      className="
        border-2 border-dark text-dark
        dark:border-dark-2 dark:text-white
        bg-transparent dark:bg-dark-2
        rounded-full inline-flex items-center justify-center
        py-3 px-7 text-center text-base font-medium
        hover:bg-body-color hover:border-body-color
        disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5
        transition-colors
      "
      onClick={handleClick}
    >
      Get my resume
    </button>
  );
}

export default MyButton;