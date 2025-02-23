import { useParams } from 'wouter';

export const Contact = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Contact</h1>
      {/* Display item-specific content here */}
    </div>
  );
};
