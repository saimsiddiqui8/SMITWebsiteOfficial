import Button from 'react-bootstrap/Button';
import "./style.css"

const ThemeButton = ({ data, classes, clickFunc}: { data: string, clickFunc?: React.MouseEventHandler, classes?: string }) => {
  return (
    <>
      <Button className={classes} id='btn' onClick={clickFunc} variant="primary">{data}</Button>{' '}
    </>
  );
}

export default ThemeButton;