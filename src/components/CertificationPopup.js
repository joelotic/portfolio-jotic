const CertificationPopup = ({ open, close, data }) => {
  console.log( 'CertificationPopup' + data)
  function handleDownload() {
    // Replace 'file_url' with the actual URL of your CV file
    const fileUrl =  data.img;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.split(/(\\|\/)/g).pop() ; // Specify the filename for the downloaded file
  
    // Simulate a click on the link to trigger the download
    link.click();
  }
  return (
    <div className="modal__container">
      <div className={`istambul_tm_modalbox ${open ? "opened" : ""}`}>
        <div className="box_inner">
          <div className="close">   
            <a href="#" onClick={() => close()}>
              <i className="fa fa-times" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="news_popup_details">
              <div className="top_image">
                <img src="img/4-2.jpg" alt="" />
                <div
                  className="main"
                  data-img-url={data && data.img}
                  style={{ backgroundImage: `url(${data && data.img})` }}
                  
                />
              </div>
              <div className="news_main_title">
                <h3>{data && data.title ? data.title : "title"}</h3>
                <span>
                  <a href="#">{data && data.tag}</a>
                  &nbsp; &nbsp; &nbsp; 
                  <a
                      href="#"
                      onClick={handleDownload}
                      className="btn readmore"
                    >
                      <span>  download</span>
                      
                    </a>
                </span>
                <div />
              </div>
              <div className="text">
                {data &&
                  data.des &&
                  data.des.map((des, i) => <p key={i}>{des}</p>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CertificationPopup;
