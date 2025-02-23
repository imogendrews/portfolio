import { useParams } from 'wouter';

export const ItemPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Item: {id}</h1>
      {/* Display item-specific content here */}
    </div>
  );
};
