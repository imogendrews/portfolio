// ItemPage.js
import { useParams } from 'wouter';

export const ItemPage = () => {
  const { id } = useParams(); // `id` comes from the URL parameter

  return (
    <div>
      <h1>Item Details</h1>
      <p>Viewing details for item with ID: {id}</p>
      {/* Add your content logic here */}
    </div>
  );
};
