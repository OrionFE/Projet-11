import { useState } from "react";
interface Props {
  list: string | string[]
  type: string
  title: string
  page: string
}

const DisplayList = ({ list, type, title, page }: Props) => {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const getList = () => {
    if(type === "string"){
      return <p className="desc-dropdown">{list}</p>
    }
    if(type === "list"){
      return <ul className="desc-dropdown">
        {
          returnMap()
        }
      </ul>
    }
  }

  const returnMap = () => {
    if(list instanceof Array){
      return list.map((item: string, index: number) => (
        <li key={index}>{item}</li>
      ))
    }
  }

  return (
    
    <div className={`dropdown-container ${page}`}>
      <div className="dropdown">
      <p className="dropdown-title">{title}</p>
      {isOpen ?  <i
          className="fa-solid fa-chevron-up btn-dropdown-up"
          onClick={() => setIsOpen(false)}
        ></i> :
        <i
          className="fa-solid fa-chevron-down btn-dropdown-down"
          onClick={() => setIsOpen(true)}
        ></i>
         }
      </div>
         {isOpen && getList()}
    </div>
  );
};

export default DisplayList;
