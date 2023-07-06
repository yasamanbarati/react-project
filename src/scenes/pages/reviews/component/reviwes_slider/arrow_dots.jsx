const ArrowStyle = {
  display: "block",
  color: "red",
};

export const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return <div className={className} style={ArrowStyle} onClick={onClick} />;
};

export const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return <div className={className} style={ArrowStyle} onClick={onClick} />;
};
