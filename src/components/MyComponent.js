import Title from './Title';
export default function MyComponent({ title, handleChange }) {
  return (
    <>
      <h1>My First Component</h1>
      <Title title={title} />
    </>
  );
}
