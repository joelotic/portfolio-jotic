const BackMobile = ({ changeMobileMenu, mobileMenu }) => {
  return (
    <span
      className="back-mobile"
      id="back-mobile"
      onClick={() => changeMobileMenu(false)}
    >
      <i className="fa fa-arrow-right" />
      {/* joel */}
    </span>
  );
};
export default BackMobile;
