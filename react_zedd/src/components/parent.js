import React from 'react';

export default function Parent({ data }) {
  return (
    <div className="font-semibold font-mono text-center space-y-4 md:text-2xl">
      <p>
        This is parent Component You have entered: {data} in child component
      </p>
    </div>
  );
}
