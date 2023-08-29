import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categorySlice';

const Category = () => {
  const { design } = useSelector((store) => store.categories);
  const dispatch = useDispatch();

  dispatch(checkStatus());

  const headingStyle = {
    display: 'flex',
    color: '#0290ff',
    marginTop: '2rem',
    justifyContent: 'center',
  };

  return (
    <>
      <h3 style={headingStyle}>{design}</h3>
    </>

  );
};
export default Category;
