import {staffData,simpleStaffMenu} from '../data/staffData.js'
import {homepageData} from '../data/homepageData.js'
import {menuData, menuNav} from '../data/menuData.js'
import {galleryData, galleryNav} from '../data/galleryData.js';
import {commonSlideData} from '../data/commonSlidData.js'
import {locationData} from "../data/locationData.js"
import {reservationData} from "../data/reservationData.js"
import {newsData} from "../data/newsData.js"




export const loadHomepage = (req, res)=>{
    res.render('index', {
        homepageData
    })
}

export const loadArchivePage = (req, res)=>{
    res.render('archive', {
        commonSlideData
    })
}
export const loadGalleryPage = (req, res)=>{
    res.render('gallery', {
        galleryData,
        galleryNav
    })
}
export const loadMenuPage = (req, res)=>{
    res.render('menu', {
        menuData,
        menuNav
    })
}
export const loadLocationPage = (req, res)=>{
    res.render('location', {
        locationData
    })
}
export const loadReservationPage = (req, res)=>{
    res.render('reservation', {
        reservationData
    })
}
export const loadNewsPage = (req, res)=>{
    res.render('news',{
      newsData,
        commonSlideData
    })
}
export const loadStaffPage = (req, res)=>{
    res.render('staff', {
        simpleStaffMenu,
        staffData
    })
}

export const loadLayoutPage = (req, res)=>{
res.render('layout')
}




