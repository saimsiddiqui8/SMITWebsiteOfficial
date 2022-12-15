import './style.css';
const ContextHeading = ({ content, classes }: { content: string, classes?: string }) => {
  return (
    <>
      <h1 className={classes} id='contextHeading'>{content}</h1>
    </>
  );
}

export default ContextHeading;
