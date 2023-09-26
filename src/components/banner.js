import React from 'react';
import './banner.css';
import p1 from "../assets/Screenshot 2023-09-22 230716.png"
import p2 from "../assets/Screenshot 2023-09-22 230831.png"
import p3 from "../assets/Screenshot 2023-09-22 230924.png"
import p4 from "../assets/Screenshot 2023-09-22 231019.png"
import p5 from "../assets/Screenshot 2023-09-22 231054.png"
import p6 from "../assets/Screenshot 2023-09-22 231121.png"
import p7 from "../assets/Screenshot 2023-09-22 231153.png"
import p9 from "../assets/Screenshot 2023-09-22 231235.png"
import p10 from "../assets/Screenshot 2023-09-22 231328.png"
import p8 from "../assets/Screenshot 2023-09-22 231436.png"
import p11 from "../assets/collage.avif";
import p12 from "../assets/temp.png";
import {useEffect,useState} from 'react';

export default function Banner() {


  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const offset=-window.outerWidth / 100 * 9 + 3;
  const tempPosition = scrollY * (-offset / 200) ;
  


  return (
    <div>
      
     <div className="parallax">
        <div className='heading'>

        Parallax
        </div>
        <div className="temp2">

        <img src={p11} className='re' style={{ transform: `translateX( calc(${offset}px + ${tempPosition}px ))` }} />

        </div>
        <img src={p12} className='temp'/>



     </div>
     <div className="second">
      <div className="bakchodi">

        Lorem ipsum, dolor sit amet consectetur 
        adipisicing elit. Adipisci, praesentium,
         ex consequatur illo soluta dignissimos
          laboriosam incidunt inventore repellat
           mollitia necessitatibus obcaecati exercitationem
            cupiditate. Animi in repellat, praesentium
             laudantium pariatur labore totam necessitatibus 
             culpa adipisci assumenda dolore eligendi reiciendis 
             facere accusantium incidunt, beatae veniam libero 
             quod, non debitis voluptates ad aperiam perferendis.
              Voluptates laudantium vero labore? Nisi nesciunt 
              tempore praesentium vel ex provident amet enim minus,
               numquam ipsa quidem officia quisquam voluptatem 
               reprehenderit deserunt illo consequatur repellendus
                impedit laudantium modi?Lorem ipsum, dolor sit amet consectetur 
        adipisicing elit. Adipisci, praesentium,
         ex consequatur illo soluta dignissimos
          laboriosam incidunt inventore repellat
           mollitia necessitatibus obcaecati exercitationem
            cupiditate. Animi in repellat, praesentium
             laudantium pariatur labore totam necessitatibus 
             culpa adipisci assumenda dolore eligendi reiciendis 
             facere accusantium incidunt, beatae veniam libero 
             quod, non debitis voluptates ad aperiam perferendis.
              Voluptates laudantium vero labore? Nisi nesciunt 
              tempore praesentium vel ex provident amet enim minus,
               numquam ipsa quidem officia quisquam voluptatem 
               reprehenderit deserunt illo consequatur repellendus
                impedit laudantium modi?

      </div>
     </div>

    </div>
  )
}
