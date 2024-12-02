import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PlaceDetails = () => {
    const spotsData = useLoaderData();
    console.log(spotsData)
  return (
    <div>
      hello from details page.
    </div>
  );
};

export default PlaceDetails;