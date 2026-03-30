export const Sum = ({ a = 0, b = 0 }) => {
  return (
    <p>
      Sum of <strong>{a}</strong> and <strong>{b}</strong>
      is <strong>{a + b}</strong>
    </p>
  );
};
