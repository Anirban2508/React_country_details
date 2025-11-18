import footerContact from "../../api/footerApi.json"
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
export const Footers = () =>{

    const footerIcon ={ 
        //our react icons means the icons are used here those are components and we cannot compose components into loops (here meens footerApi.json)
        //so we pass the component value from footerapi as a string and get the coorosponding component via footericon object.
        MdPlace: <MdPlace/>,
        TbMailPlus:<TbMailPlus/>,
        IoCallSharp: <IoCallSharp/>

    };
    return(
        <footer className="footer-section">
            <div className="container grid grid-three-cols">
                {
                    footerContact.map((curData, index) =>{
                        const {icon,title,details} = curData;
                        return(
                            <div className="footer-contact" key={index}>
                            <div className="icon">{footerIcon[icon]}</div> {/* here icon value is located dynamically as [third bracket] */}
                            <div className="footer-contact-text">
                                <p>{title}</p>
                                <p>{details}</p>
                            </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2025, All Right Reserved
                <NavLink to="https://github.com/Anirban2508" target="_blank">
                  CodingxAN
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.instagram.com/_anirban.003_"
                    target="_blank"
                  >
                    Social
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

        </footer>
    )
}