import {staffData,} from '../data/staffData.js'
import {homepageData} from '../data/homepageData.js'
import {menuData, menuNav} from '../data/menuData.js'


export const loadHomepage = (req, res)=>{
    res.render('index', {
        homepageData
    })
}

export const loadArchivePage = (req, res)=>{
    res.render('archive')
}
export const loadGalleryPage = (req, res)=>{
    res.render('gallery')
}
export const loadMenuPage = (req, res)=>{
    res.render('menu', {
        menuData,
        menuNav
    })
}
export const loadLocationPage = (req, res)=>{
    res.render('location')
}
export const loadReservationPage = (req, res)=>{
    res.render('reservation')
}
export const loadNewsPage = (req, res)=>{
    res.render('news')
}
export const loadStaffPage = (req, res)=>{
    res.render('staff', {
        staffData,
    })
}

export const loadLayoutPage = (req, res)=>{
res.render('layout')
}




