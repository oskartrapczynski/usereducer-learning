const CourseInfo = ({ id, onClickHandler, title }) => {
  const handleOnClick = () =>
    onClickHandler({
      id,
      type: 'REMOVE',
    });

  return (
    <>
      <p>{title}</p>
      <button onClick={handleOnClick}>Usun kurs</button>
    </>
  );
};

export default CourseInfo;
