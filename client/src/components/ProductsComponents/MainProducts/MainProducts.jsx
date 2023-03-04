import React from 'react'
import './MainProducts.css'
import {Link} from 'react-router-dom'
import CrunchyCookies from '../CrunchyCookies/CrunchyCookies'

const MainProducts = () => {
    const showdrop=()=>{
        if(document.querySelector('.secondul').style.opacity==='0'){
            document.getElementById('icon').style.transform='rotate(180deg)'
            document.getElementById('icon').style.transition='.5s'
            document.querySelector('.secondul').style.height='100%'
            document.querySelector('.secondul').style.transition='.5s'
            document.querySelector('.secondul').style.opacity='1'
        }
        else{
            document.getElementById('icon').style.transform='rotate(0deg)'
            document.getElementById('icon').style.transition='.5s'
            document.querySelector('.secondul').style.opacity='0'
            document.querySelector('.secondul').style.height='0'
            document.querySelector('.secondul').style.transition='.2s'
        }
    }

    const shopmediadrop=()=>{
        if(document.querySelector('.mainul').style.opacity==='0'){
            document.getElementById('iconmedia').style.transform='rotate(180deg)'
            document.getElementById('iconmedia').style.transition='.5s'
            document.querySelector('.mainul').style.height='100%'
            document.querySelector('.mainul').style.transition='.5s'
            document.querySelector('.mainul').style.opacity='1'
        }else{
            document.getElementById('iconmedia').style.transform='rotate(0deg)'
            document.getElementById('iconmedia').style.transition='.5s'
            document.querySelector('.mainul').style.opacity='0'
            document.querySelector('.mainul').style.height='0'
            document.querySelector('.mainul').style.transition='.2s'
        }
    }

  return (
    <section className='mainproducts'>
     <div className="allmainproducts d-flex">
     <div className="leftmainproducts col-lg-3 col-12">
        <div className="selectiondiv" onClick={shopmediadrop}>
            <Link>Category Selection <i id='iconmedia' class="fa-solid fa-caret-down ml-3"></i></Link>
        </div>
        <ul className='mainul' style={{opacity: window.screen.width <= 576 ? '0' : '1'}}>
            <li className='cookies'><Link onClick={showdrop} >Cookies <i id='icon' class="fa-solid fa-caret-down ml-2"></i></Link></li>
            <ul className='secondul' style={{opacity:'0', height:'0'}}>
                <li><a href='#crunchy'>Crunchy Cookies</a></li>
                <li><Link>Soft Baked Cookies</Link></li>
            </ul>
            <li><Link>Baking Mixes</Link></li>
            <li><Link>Breakfast Mixes</Link></li>
            <li><Link>Variety Packs</Link></li>
            <li><Link>Snack Packs</Link></li>
            <li><Link>Gifts</Link></li>
            <li><Link>Merch</Link></li>
        </ul>
      </div>
      <div className="rightmainproducts col-lg-9 col-12">
        <CrunchyCookies/>
      </div>
     </div>
    </section>
  )
}

export default MainProducts