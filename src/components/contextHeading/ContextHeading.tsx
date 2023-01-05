import './style.css';

const ContextHeading= ({ contentOne, contentTwo, coloredHeading, classes }: { contentOne: string, contentTwo?: string, coloredHeading?: string, classes?: string }) => {
  return (
    <>
      <h1 className={` text-center display-5 fw-bold ${classes}`}>{contentOne} <span style={{color: "#8AC642"}}>{coloredHeading}</span> {contentTwo}</h1>
    </>
  );
}

export default ContextHeading
