const Jumbotron = ({ children, ...rest }) => {
  const styling = {
    padding: "2rem 1rem",
    marginBottom: "2rem",
    backgroundColor: "#f9f9fa",
    borderRadius: ".3rem",
  };

  return (
    <div style={styling} {...rest}>
      {children}
    </div>
  );
};

export default Jumbotron;
