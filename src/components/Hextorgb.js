import {useState} from "react";  

  const Hextorgb = () => {
      const [inputField, setInputField] = useState('');
      const [rgbColor, setRgbColor] = useState('');
  
      const handleColorChange = (evt) => {
          const { value } = evt.target;
          setInputField(value);
  
          let rgb = '';
          if (value.length === 7) {
              const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
              rgb = result ? `
                  rgb(${parseInt(result[1], 16)},
                  ${parseInt(result[2], 16)},
                  ${parseInt(result[3], 16)})
              `
                  : 'Ошибка!';
          } else if (value.length > 7) {
              rgb = 'Ошибка!';
          }
  
          setRgbColor(rgb);
      }
  
      const handleSubmit = (evt) => {
          evt.preventDefault();
      }
  
      return (
          <div
              className="app"
              style={(rgbColor === 'Ошибка!') ? {backgroundColor: 'red'} : {backgroundColor: rgbColor}}
          >
              <div className="form">
                  <form id="colorForm" onSubmit={handleSubmit}>
                      <input type="text" name="hexColor" value={inputField} onChange={handleColorChange} />
                  </form>
                  <div help="rgbField">{rgbColor}</div>
              </div>
          </div>
      )
  }
  
  export default Hextorgb;