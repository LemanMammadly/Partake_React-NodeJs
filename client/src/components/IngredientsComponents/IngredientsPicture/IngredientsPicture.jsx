import React, { useEffect, useRef, useState } from 'react'
import './IngredientsPicture.css'

const IngredientsPicture = () => {
    const [gingers, setGinger] = useState("none");
    const [vanillas,setVanillas]=useState('none')
    const [oats,setOats]=useState('none')
    const [flax,setFlax]=useState('none')
    const [roses,setRose]=useState('none')
    const [cinnamons,setCinnamon]=useState('none')
    const [oatflour,setOatflour]=useState('none')
    const [chocolate,setChocolate]=useState('none')
    const [buckwheat,setBuckwheat]=useState('none')
    const [cassava,setCassava]=useState('none')
    const [sugar,setSugar]=useState('none')
    const [cane,setCane]=useState('none')


    const [icon1,setIcon1]=useState("openTextnone")
    const [icon2,setIcon2]=useState("openTextnone")
    const [icon3,setIcon3]=useState("openTextnone")
    const [icon4,setIcon4]=useState("openTextnone")
    const [icon5,setIcon5]=useState("openTextnone")
    const [icon6,setIcon6]=useState("openTextnone")
    const [icon7,setIcon7]=useState("openTextnone")
    const [icon8,setIcon8]=useState("openTextnone")
    const [icon9,setIcon9]=useState("openTextnone")
    const [icon10,setIcon10]=useState("openTextnone")
    const [icon11,setIcon11]=useState("openTextnone")
    const [icon12,setIcon12]=useState("openTextnone")
  
  
    useEffect(() => {
      document.addEventListener("click", handleClickOutside1, true);
    }, []);
  
    useEffect(()=>{
      document.addEventListener("click", handleClickOutside2, true);
    },[])
  
    useEffect(()=>{
      document.addEventListener("click", handleClickOutside3, true);
    },[])
  
    useEffect(()=>{
      document.addEventListener("click", handleClickOutside4, true);
    },[])
  
    useEffect(()=>{
      document.addEventListener("click", handleClickOutside5, true);
    },[])
  
    useEffect(()=>{
      document.addEventListener("click", handleClickOutside6, true);
    },[])
    useEffect(()=>{
        document.addEventListener("click", handleClickOutside7, true);
    },[])
      
    useEffect(()=>{
        document.addEventListener("click", handleClickOutside8, true);
    },[])

    useEffect(()=>{
        document.addEventListener("click", handleClickOutside9, true);
    },[])

    useEffect(()=>{
        document.addEventListener("click", handleClickOutside10, true);
    },[])

    useEffect(()=>{
        document.addEventListener("click", handleClickOutside11, true);
    },[])

    useEffect(()=>{
        document.addEventListener("click", handleClickOutside12, true);
    },[])


    const refOne = useRef(null);
    const refTwo = useRef(null);
    const refThree = useRef(null);
    const refFour = useRef(null);
    const refFive = useRef(null);
    const refSix = useRef(null);
    const refSeven = useRef(null);
    const refEight = useRef(null);
    const refNine = useRef(null);
    const refTen = useRef(null);
    const refEleven = useRef(null);
    const refTwelve = useRef(null);
  
  
    const handleClickOutside1 = (e) => {
      if (!refOne.current.contains(e.target)) {
        setGinger("none");
        setIcon1("openTextnone")
      }
    }
  
    const handleClickOutside2 = (e) => {
      if (!refTwo.current.contains(e.target)) {
          setVanillas("none");
          setIcon2("openTextnone")
      }
    }
  
    const handleClickOutside3 = (e) => {
      if (!refThree.current.contains(e.target)) {
          setOats("none");
          setIcon3("openTextnone")
      }
    }
  
    const handleClickOutside4 = (e) => {
      if (!refFour.current.contains(e.target)) {
          setFlax("none");
          setIcon4("openTextnone")
      }
    }
  
    const handleClickOutside5 = (e) => {
      if (!refFive.current.contains(e.target)) {
          setRose("none");
          setIcon5("openTextnone")
      }
    }
  
    const handleClickOutside6 = (e) => {
      if (!refSix.current.contains(e.target)) {
          setCinnamon("none");
          setIcon6("openTextnone")
      }
    }

    const handleClickOutside7 = (e) => {
        if (!refSeven.current.contains(e.target)) {
            setOatflour("none");
            setIcon7("openTextnone")
        }
    }
  
    const handleClickOutside8 = (e) => {
        if (!refEight.current.contains(e.target)) {
            setChocolate("none");
            setIcon8("openTextnone")
        }
    }
    
    const handleClickOutside9 = (e) => {
        if (!refNine.current.contains(e.target)) {
            setBuckwheat("none");
            setIcon9("openTextnone")
        }
    }

    const handleClickOutside10 = (e) => {
        if (!refTen.current.contains(e.target)) {
            setCassava("none");
            setIcon10("openTextnone")
        }
    }
  
    const handleClickOutside11 = (e) => {
        if (!refEleven.current.contains(e.target)) {
            setSugar("none");
            setIcon11("openTextnone")
        }
    }

    const handleClickOutside12 = (e) => {
        if (!refTwelve.current.contains(e.target)) {
            setCane("none");
            setIcon12("openTextnone")
        }
    }

    const clickGinger = () => {
      if (gingers === "none") {
        setGinger("block");
        setIcon1("openTextblock")
      } else {
        setGinger("none");
        setIcon1("openTextnone")
      }
    };
  
    const clickVanilla = () => {
      if (vanillas === "none") {
        setVanillas("block");
        setIcon2("openTextblock")
      } else {
        setVanillas("none");
        setIcon2("openTextnone")
      }
    };
  
    const clickOat = () => {
      if (oats === "none") {
        setOats("block");
        setIcon3("openTextblock")
      } else {
        setOats("none");
        setIcon3("openTextnone")
      }
    };
  
    const clickFlax = () => {
      if (flax === "none") {
        setFlax("block");
        setIcon4("openTextblock")
      } else {
        setFlax("none");
        setIcon4("openTextnone")
      }
    };
  
    const clickRose = () => {
      if (roses === "none") {
        setRose("block");
        setIcon5("openTextblock")
      } else {
        setRose("none");
        setIcon5("openTextnone")
      }
    };
  
    const clickCinnamon = () => {
      if (cinnamons === "none") {
        setCinnamon("block");
        setIcon6("openTextblock")
      } else {
        setCinnamon("none");
        setIcon6("openTextnone")
      }
    };

    const clickOatFlour = () => {
        if (oatflour === "none") {
          setOatflour("block");
          setIcon7("openTextblock")
        } else {
          setOatflour("none");
          setIcon7("openTextnone")
        }
    };

    const clickChocolate = () => {
        if (chocolate === "none") {
          setChocolate("block");
          setIcon8("openTextblock")
        } else {
          setChocolate("none");
          setIcon8("openTextnone")
        }
    };

    const clickBuckwheat = () => {
        if (buckwheat === "none") {
          setBuckwheat("block");
          setIcon9("openTextblock")
        } else {
          setBuckwheat("none");
          setIcon9("openTextnone")
        }
    };


    const clickCassava = () => {
        if (cassava === "none") {
          setCassava("block");
          setIcon10("openTextblock")
        } else {
          setCassava("none");
          setIcon10("openTextnone")
        }
    };

    const clickSugar = () => {
        if (sugar === "none") {
          setSugar("block");
          setIcon11("openTextblock")
        } else {
          setSugar("none");
          setIcon11("openTextnone")
        }
    };
  
    const clickCane = () => {
        if (cane === "none") {
          setCane("block");
          setIcon12("openTextblock")
        } else {
          setCane("none");
          setCane("openTextnone")
        }
    };
  
  
  return (
    <section className='ingredientspicture'>
        <div className="allingredientspicture col-lg-12 col-12">
          <div ref={refOne}  className="imgdiv imgbox1" onClick={clickGinger} >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-ginger_f08ff2d2-b048-47de-85cc-f427b88c2984.png?v=1640590204"
              alt=""
            />
            <i id="openText1" className={`fa-solid fa-plus openText ${icon1}`}></i>
            <div
              id="gingersdiv"
              className={`ginger text-center ${gingers}`}
            >
              <div className="textdivopen">
              <h5>Ginger</h5>
              <span className="fromdiv">Origin India</span>
              <p>
                A commonly used herbal medicine, ginger’s bioactive compound
                gingerol is known for its anti-inflammatory and antioxidant
                effects.
              </p>
              </div>
            </div>
          </div>
          <div ref={refTwo} className="imgdiv imgbox2" onClick={clickVanilla} >
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-vanilla_21d36f6a-863f-42cd-96b7-0a0b2c0c9125.png?v=1642486572"
              alt=""
            />
            <i id="openText2" className={`fa-solid fa-plus openText ${icon2}`}></i>
            <div
              id="vanillasdiv"
              className={`vanilla text-center ${vanillas}`}
            >
              <div className="textdivopen">
              <h5>Vanilla</h5>
              <span className="fromdiv">Origin Indonesia</span>
              <p>
              The vanilla bean is known for its fragrance and flavor, but it is also used to make medicine.
              </p>
              </div>
            </div>
          </div>
          <div ref={refThree} className="imgdiv imgbox3" onClick={clickOat}>
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-oats_240x_bf7129c1-26c5-4357-9778-53db870d9308.png?v=1640667412"
              alt=""
            />
            <i id="openText3" className={`fa-solid fa-plus openText ${icon3}`}></i>
            <div
              id="oatsdiv"
              className={`oat text-center ${oats}`}
            >
              <div className="textdivopen">
              <h5>Quick Rolled Oats</h5>
              <span className="fromdiv">Origin Canada</span>
              <p>
              Sustainably grown and harvested from non-GMO seed.
              </p>
              </div>
            </div>
          </div>
          <div ref={refFour} className="imgdiv imgbox4" onClick={clickFlax}>
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-Flax_240x_aff2738b-af33-4ee1-99de-f47adb1bc9b8.png?v=1640667941"
              alt=""
            />
            <i id="openText4" className={`fa-solid fa-plus openText ${icon4}`}></i>
            <div
              id="flaxsdiv"
              className={`flax text-center ${flax}`}
            >
              <div className="textdivopen">
              <h5>Flax</h5>
              <span className="fromdiv">Origin U.S.</span>
              <p>
              These mighty seeds are packed with numerous nutrients, omega-3 fatty acids and fiber.
              </p>
              </div>
            </div>
          </div>
          <div ref={refFive} className="imgdiv imgbox5" onClick={clickRose}>
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/rosemary_c8ac195c-64d6-4964-987d-abf6337bd71c.png?v=1642487662"
              alt=""
            />
            <i id="openText5" className={`fa-solid fa-plus openText ${icon5}`}></i>
            <div
              id="rosesdiv"
              className={`rose text-center ${roses}`}
            >
              <div className="textdivopen">
              <h5>Rosemary</h5>
              <span className="fromdiv">Origin U.S.</span>
              <p>
              With a very distinct flavor, rosemary is full of antioxidants and anti-inflammatory compounds.
              </p>
              </div>
            </div>
          </div>
          <div ref={refSix} className="imgdiv imgbox6" onClick={clickCinnamon}>
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-cinammon_240x_4e7dcc87-d964-487d-8697-69dafed1e5ca.png?v=1640667337"
              alt=""
            />
            <i id="openText6" className={`fa-solid fa-plus openText ${icon6}`}></i>
            <div
              id="cinnamon"
              className={`cinnamon text-center ${cinnamons}`}
            >
              <div className="textdivopen">
              <h5>Cinnamon</h5>
              <span className="fromdiv">Origin Indonesia</span>
              <p>
              Traced back to Ancient Egypt, Cinnamon has been used for thousands of years as medicine and is now the 2nd most commonly used spice in the U.S.
              </p>
              </div>
            </div>
          </div>
          <div ref={refSeven} className="imgdiv imgbox7" onClick={clickOatFlour}>
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/oat_flour_240x.png?v=1614334423"
              alt=""
            />
            <i id="openText7" className={`fa-solid fa-plus openText ${icon7}`}></i>
            <div
              id="oatflour"
              className={`oatflour text-center ${oatflour}`}
            >
              <div className="textdivopen">
              <h5>Oat Flour</h5>
              <span className="fromdiv">Origin Canada</span>
              <p>
              Sustainably grown and harvested from non-GMO seed, our oat ingredients are gluten-free.
              </p>
              </div>
            </div>
          </div>
          <div ref={refEight} className="imgdiv imgbox8" onClick={clickChocolate}>
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/chocolate_240x.png?v=1614334423"
              alt=""
            />
            <i id="openText8" className={`fa-solid fa-plus openText ${icon8}`}></i>
            <div
              id="chocolate"
              className={`chocolate text-center ${chocolate}`}
            >
              <div className="textdivopen">
              <h5>Chocolate</h5>
              <span className="fromdiv">Origin U.S., Brazil, France, Germany</span>
              <p>
              While known mostly as a sweet treat, the cocoa in chocolate offers nutritional benefits from minerals including iron, magnesium and zinc.
              </p>
              </div>
            </div>
          </div>
          <div ref={refNine} className="imgdiv imgbox9" onClick={clickBuckwheat}>
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/HP-Buckwheat_240x.png?v=1614334423"
              alt=""
            />
            <i id="openText9" className={`fa-solid fa-plus openText ${icon9}`}></i>
            <div
              id="buckwheat"
              className={`buckwheat text-center ${buckwheat}`}
            >
              <div className="textdivopen">
              <h5>Organic Buckwheat</h5>
              <span className="fromdiv">Origin U.S.</span>
              <p>
              This nutritious, nutty seed is packed with insoluble fiber.
              </p>
              </div>
            </div>
          </div>
          <div ref={refTen} className="imgdiv imgbox10" onClick={clickCassava}>
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/cassava_flour_240x.png?v=1614334423"
              alt=""
            />
            <i id="openText10" className={`fa-solid fa-plus openText ${icon10}`}></i>
            <div
              id="cassava"
              className={`cassava text-center ${cassava}`}
            >
              <div className="textdivopen">
              <h5>Cassava Flour</h5>
              <span className="fromdiv">Origin Brazil</span>
              <p>
              This grain-free, naturally gluten-free flour is made from the whole cassava root that’s been peeled, dried and ground.
              </p>
              </div>
            </div>
          </div>
          <div ref={refEleven} className="imgdiv imgbox11" onClick={clickSugar}>
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/brown_sugar_240x.png?v=1614334423"
              alt=""
            />
            <i id="openText11" className={`fa-solid fa-plus openText ${icon11}`}></i>
            <div
              id="sugar"
              className={`sugar text-center ${sugar}`}
            >
              <div className="textdivopen">
              <h5>Organic Brown Sugar</h5>
              <span className="fromdiv">Origin U.S.</span>
              <p>
              With the inclusion of rich molasses, our organic brown sugar is unrefined, pesticide-free and minimally processed.
              </p>
              </div>
            </div>
          </div>
          <div ref={refTwelve} className="imgdiv imgbox12" onClick={clickCane}>
            <img
              src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/organic_cane_sugar_240x.png?v=1614334423"
              alt=""
            />
            <i id="openText12" className={`fa-solid fa-plus openText ${icon12}`}></i>
            <div
              id="cane"
              className={`cane text-center ${cane}`}
            >
              <div className="textdivopen">
              <h5>Organic Fair Trade Cane Sugar</h5>
              <span className="fromdiv">Origin Paraguay</span>
              <p>
              Unrefined, pesticide-free and minimally processed. Our fair trade organic cane sugar retains many of the nutrients found in cane juice.
              </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default IngredientsPicture