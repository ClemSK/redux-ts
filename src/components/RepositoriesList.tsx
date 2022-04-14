import { useState } from 'react';

const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
