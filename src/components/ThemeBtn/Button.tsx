import { MouseEventHandler } from 'react';
import Button from 'react-bootstrap/Button';
import "./style.css"

const ThemeButton = ({ data, classes, clickFunc, disable}: { data: string, clickFunc?: any, classes?: string, disable?: boolean }) => {

  return (
    <>
      <Button className={classes} disabled={disable} id='btn' onClick={clickFunc} variant="primary">{data}</Button>{' '}
    </>
  );
}

export default ThemeButton;