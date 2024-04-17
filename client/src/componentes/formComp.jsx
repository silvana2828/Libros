export  const FormComp = ({children}) =>{
    return (
        <div className="inputDiv">
          <input className="inputBox" type="text" required />
          <label className="absolute">{children}</label>
        </div>
    );
}
