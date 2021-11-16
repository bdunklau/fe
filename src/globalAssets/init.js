
depp.define({
	'userbase': '//cdn.jsdelivr.net/npm/userbase-js@2.8.0/dist/userbase.cjs.min.js',
	'mustache':'//cdn.jsdelivr.net/npm/mustache@4.2.0/mustache.min.js',
	'listjs': '//cdn.jsdelivr.net/npm/list.js@1.5.0/dist/list.min.js',
	'eventflux' :'//cdn.jsdelivr.net/npm/eventflux-cdn@0.5.2/public/EventFlux.min.js',
	'debugcss':'//cdn.jsdelivr.net/npm/eventflux-cdn@0.5.2/public/debug.css',

	'jquery': '//cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js',
	'slickCarousel': ['jquery', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css'],
	'sweetA':'//cdn.jsdelivr.net/npm/sweetalert2@11',

    'onepage': ['#jquery','//cdn.jsdelivr.net/npm/onepage-scroll@1.3.1/onepage-scroll.css', '//cdn.jsdelivr.net/npm/onepage-scroll@1.3.1/jquery.onepage-scroll.min.js'],
	'fontfaceobserver': '//cdn.jsdelivr.net/npm/fontfaceobserver@2.1.0/fontfaceobserver.standalone.min.js',
    'instantpage': '//cdn.jsdelivr.net/npm/instant.page@5.1.0/instantpage.min.js',

	'datatables': ['#jquery','//cdn.datatables.net/v/dt/dt-1.11.3/datatables.css','//cdn.datatables.net/v/dt/dt-1.11.3/datatables.min.js'],
	'validator': '//cdn.jsdelivr.net/npm/validator@13.6.0/validator.min.js',
	'trace': '//cdn.jsdelivr.net/npm/tracekit@0.4.6/tracekit.min.js',
})

// utils
class TBC {
    _start
    constructor() {
        this._start = Date.now()
        console.log('ToolBelt class init')

        document.addEventListener('deviceready', this.onDOM_, false)
        document.addEventListener('DOMContentLoaded', this.onDOM_, false)
    }

    supportsES6() {
        try {
            new Function("(a = 0) => a")
            return true
        }
        catch (err) {
            return false
        }
    }

    onDOM_() {
        console.log('onDOM')
    }

    //- eg addScript('bla.js', null, 'api-key', 'key123')  so you can control your own sequence
    addScript(src, callback, attr, attrValue, id) {
        const s = document.createElement('script')
        s.setAttribute('src', src)
        if (attr) s.setAttribute(attr, attrValue)
        if (id) s.id = id
        if (callback) s.onload = callback
        s.async = true // it does it anyway, as the script is async, so use callback
        document.getElementsByTagName('body')[0].appendChild(s)
    }

    // get style value
    getStyle(el, styleProp) {
        let y
        if (el.currentStyle)
            y = el.currentStyle[styleProp]
        else if (window.getComputedStyle)
            y = document.defaultView.getComputedStyle(el, null).getPropertyValue(styleProp)
        return y
    }
	removeStyle(id, style) {
		const el = document.getElementById(id)
		el.classList.remove(style)
	}

	isHidden(id) {
		const el = document.getElementById(id)
		return window.getComputedStyle(el).visibility == "hidden"
	}
	hide(id) {
		const el = document.getElementById(id)
		el.style.visibility = "hidden"
	}
	unHide(id){
		const el = document.getElementById(id)
		el.style.visibility = "visible"
	}
}
const TB = new TBC()
