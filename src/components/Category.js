import { useSelector } from 'react-redux';

const Category = () => {
  const { design } = useSelector((store) => store.categories);

  const headingStyle = {
    display: 'flex',
    color: '#0290ff',
    marginTop: '2rem',
    justifyContent: 'center',
  };
  return <h3 style={headingStyle}>{design}</h3>;
};
export default Category;
