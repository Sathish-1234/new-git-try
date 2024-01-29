import React, { useState } from 'react';
import '../App.css';

function Navtrip() {
  const [content, setContent] = useState('select');
  const [selectio, setSelectio] = useState('RoundTrip');
  const [fromOption, setFromOption] = useState('');
  const [toOption, setToOption] = useState('');
  const [imageSrc, setImageSrc] = useState('https://www.droptaxi.in/assets/images/suv_black.png');
  const [imageSr, setImageSr] = useState('https://www.droptaxi.in/assets/images/sedan_black.png');
  const [imageS, setImageS] = useState('https://www.droptaxi.in/assets/images/suv_black.png');
  const [fromOption1, setFromOption1] = useState('');
  const [fromOption2, setFromOption2] = useState('');
  const [fromOption3, setFromOption3] = useState('');



  const handleFromChange1 = (event) => {
    setFromOption1(event.target.value);
  };

  const handleFromChange2 = (event) => {
    setFromOption2(event.target.value);
  };

  const handleFromChange3 = (event) => {
    setFromOption3(event.target.value);
  };


  const handleChangeContent = (newContent) => {
    setContent(newContent);
  };

  const handleChang = (value) => {
    setSelectio(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('From Option:', fromOption);
    console.log('To Option:', toOption);
  };

  const handleFromChange = (event) => {
    setFromOption(event.target.value);
  };

  const handleToChange = (event) => {
    setToOption(event.target.value);
  };



  const handleImageClick = () => {
    setImageSrc(imageSrc === 'https://www.droptaxi.in/assets/images/suv_yellow.png'
      ? 'https://www.droptaxi.in/assets/images/suv_black.png'
      : 'https://www.droptaxi.in/assets/images/suv_yellow.png');
    setImageSr('https://www.droptaxi.in/assets/images/sedan_black.png');
    setImageS('https://www.droptaxi.in/assets/images/suv_black.png')
  };




  const handleImageClic = () => {
    setImageSr(imageSr === 'https://www.droptaxi.in/assets/images/sedan_black.png'
      ? 'https://www.droptaxi.in/assets/images/sedan_yellow.png'
      : 'https://www.droptaxi.in/assets/images/sedan_black.png');
    setImageS('https://www.droptaxi.in/assets/images/suv_black.png')
    setImageSrc('https://www.droptaxi.in/assets/images/suv_black.png')
  };


  const handleImageCli = () => {
    setImageS(imageS === 'https://www.droptaxi.in/assets/images/suv_black.png'
      ? 'https://www.droptaxi.in/assets/images/suv_yellow.png'
      : 'https://www.droptaxi.in/assets/images/suv_black.png');
    setImageSrc('https://www.droptaxi.in/assets/images/suv_black.png')
    setImageSr('https://www.droptaxi.in/assets/images/sedan_black.png');

  };

  return (
   <div className='mai'>
     <div className="App">
      <div className="buttons">
        <button onClick={() => handleChangeContent('select')}>Drop Trip</button>
        <button onClick={() => handleChangeContent('details')}>Round Trip</button>
        <button onClick={() => handleChangeContent('selection')}>Packages</button>
      </div>
      {content === 'select' && (
        <div className="form_parent">
          {/* Your select form content here */}
          <form onSubmit={handleSubmit}>
            <div className="form">
              <div className="mb-3">
                <div className="select">
                  <label htmlFor="fromOption" className="form-label">From</label>
                  <select
                    className="form-select"
                    id="fromOption"
                    value={fromOption}
                    onChange={handleFromChange}
                  >
                    <option value="">Select From</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <div className="select">
                  <label htmlFor="toOption" className="form-label">To</label>
                  <select
                    className="form-select"
                    id="toOption"
                    value={toOption}
                    onChange={handleToChange}
                  >
                    <option value="">Select To</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
          <div className="App">
          <div className='app_img'>
                <div><img
                  src={imageSrc}
                  alt="Car"
                  style={{ cursor: 'pointer' }}
                  onClick={handleImageClick}
                />
                  <p>Sedan

                    ₹ 14/km</p></div>
                <div>
                  <img
                    src={imageSr}
                    alt="Car"
                    style={{ cursor: 'pointer' }}
                    onClick={handleImageClic}
                  />
                  <p>MUV-Xylo

                    ₹ 18/km</p>
                </div>
                <div>
                  <img
                    src={imageS}
                    alt="Car"
                    style={{ cursor: 'pointer' }}
                    onClick={handleImageCli}
                  />
                  <p>MUV-Innova

                  </p></div>
              </div>

          </div>
        </div>
      )}
      {content === 'details' && (
        <div className="form_parent">
          {/* Your details form content here */}
          <form onSubmit={handleSubmit}>
  <div className="sle">
    <label htmlFor="fromOption1" className="form-label">From</label>
    <select
      className="form-select s"
      id="fromOption1"
      value={fromOption1} // Use separate state variable
      onChange={handleFromChange1} // Use separate handler
    >
      <option value="">Select From</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  </div>
  <div className="form">
    <div className="mb-3">
      <div className="select">
        <label htmlFor="fromOption2" className="form-label">From</label>
        <select
          className="form-select"
          id="fromOption2"
          value={fromOption2} // Use separate state variable
          onChange={handleFromChange2} // Use separate handler
        >
          <option value="">Select From</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
    <div className="mb-3">
      <div className="select">
        <label htmlFor="fromOption3" className="form-label">From</label>
        <select
          className="form-select"
          id="fromOption3"
          value={fromOption3} // Use separate state variable
          onChange={handleFromChange3} // Use separate handler
        >
          <option value="">Select From</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
  </div>
</form>


          <div className="App">
          <div className='app_img'>
                <div>
                  <img
                    src={imageSrc}
                    alt="Car"
                    style={{ cursor: 'pointer' }}
                    onClick={handleImageClick}
                  />
                  <p>Sedan

                    ₹12.00/km</p>
                </div>
                <div>
                  <img
                    src={imageSr}
                    alt="Car"
                    style={{ cursor: 'pointer' }}
                    onClick={handleImageClic}

                  />
                  <p>MUV (Innova / Xylo)

                    ₹16.00/km</p>
                </div>
              </div>

          </div>
        </div>
      )}
      {content === 'selection' && (
        <div>
          <form style={{ gap: '20px' }} onSubmit={handleSubmit}>
           <div className='danger_p'>
           <button className="danger btn btn-danger" onClick={() => handleChang('RoundTrip')}>Round Trip</button>
            <button className="danger btn btn-danger" onClick={() => handleChang('Packages')}>Packages</button>
           </div>
            {selectio === 'Packages' && (
              <div className="form">
                <div className="mb-3" style={{ marginRight: '1rem' }}>
                  <div className="select">
                    <label htmlFor="fromOption" className="form-label">From</label>
                    <select
                      className="form-select"
                      id="fromOption"
                      value={fromOption}
                      onChange={handleFromChange}
                    >
                      <option value="">Select From</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="select">
                    <label htmlFor="toOption" className="form-label">To</label>
                    <select
                      className="form-select"
                      id="toOption"
                      value={toOption}
                      onChange={handleToChange}
                    >
                      <option value="">Select To</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
            {selectio === 'RoundTrip' && (
              <div className="form">
                <div className="mb-3" style={{ marginRight: '1rem' }}>
                  <div className="select">
                    <label htmlFor="fromOption" className="form-label">Package Type</label>
                    <select
                      className="form-select"
                      id="fromOption"
                      value={fromOption}
                      onChange={handleFromChange}
                    >
                      <option value="">Select From</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="select">
                    <label htmlFor="toOption" className="form-label">Pick-up City</label>
                    <select
                      className="form-select"
                      id="toOption"
                      value={toOption}
                      onChange={handleToChange}
                    >
                      <option value="">Select To</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
   </div>
  );
}

export default Navtrip;
