let images = [
  'https://dummyimage.com/1200x440/000/ffff00',
  'https://dummyimage.com/1200x440/000/ff00ff',
  'https://dummyimage.com/1200x440/000/aaaa00',
  'https://dummyimage.com/1200x440/000/ff0000',

]
let which_image = 0
let btns_container = document.getElementById("big-slider-btns-control")
let image_link_container = document.getElementById("big-slider-link")
let image_container = document.getElementById("big-slider-image")
function change(n) {

}
function initing_slider() {
  let result = []
  
  for(let yy = 0; yy < images.length;yy++){
    let btn = document.createElement('button');
    btn.id = `slider-btn${yy}`
    btn.onclick = () => {set_image(yy)}
    btn.className = `slider-btn`
    console.log(btn)
    result.push(btn)
  }
  btns_container.append(...result)
  let btn_under_slider = document.getElementById(`slider-btn${which_image}`);
  btn_under_slider.className += " active"
  image_container.src = images[which_image]
}
function image_change(n){
  let gg = which_image + n;
  if(gg == images.length)
    gg = 0;
  if(gg == -1)
    gg = images.length-1;
    which_image = gg
    image_container.src = images[gg]
    let asssd = document.getElementsByClassName(`slider-btn`)
    for(let yy = 0; yy < asssd.length; yy++){
      asssd[yy].className = "slider-btn"
    }
    let asd = document.getElementById(`slider-btn${which_image}`)
    asd.className +=" active"
} 

function set_image(n ){
  let gg =  n;
  console.log(1)
    which_image = gg
    image_container.src = images[gg]
    let asssd = document.getElementsByClassName(`slider-btn`)
    for(let yy = 0; yy < asssd.length; yy++){
      asssd[yy].className = "slider-btn"
    }
    let asd = document.getElementById(`slider-btn${which_image}`)
    asd.className +=" active"
}
initing_slider()


let menu_obj = [
  {
    name_of_category: "category1",
    svg_icon: `    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 477.534 477.534" style="enable-background:new 0 0 477.534 477.534;" xml:space="preserve"><g>	<g>		<path d="M438.482,58.61c-24.7-26.549-59.311-41.655-95.573-41.711c-36.291,0.042-70.938,15.14-95.676,41.694l-8.431,8.909			l-8.431-8.909C181.284,5.762,98.662,2.728,45.832,51.815c-2.341,2.176-4.602,4.436-6.778,6.778			c-52.072,56.166-52.072,142.968,0,199.134l187.358,197.581c6.482,6.843,17.284,7.136,24.127,0.654			c0.224-0.212,0.442-0.43,0.654-0.654l187.29-197.581C490.551,201.567,490.551,114.77,438.482,58.61z M413.787,234.226h-0.017			L238.802,418.768L63.818,234.226c-39.78-42.916-39.78-109.233,0-152.149c36.125-39.154,97.152-41.609,136.306-5.484			c1.901,1.754,3.73,3.583,5.484,5.484l20.804,21.948c6.856,6.812,17.925,6.812,24.781,0l20.804-21.931			c36.125-39.154,97.152-41.609,136.306-5.484c1.901,1.754,3.73,3.583,5.484,5.484C453.913,125.078,454.207,191.516,413.787,234.226			z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`,
    podcategoryes: [
      {
        "podcategory_name":"podcategory1",
        "links_of_podcategory": [
          {
            "name_of_podcategory": "link1",
            "link_of_podcategory": "link1"
          },
          {
            "name_of_podcategory": "link2",
            "link_of_podcategory": "link2"
          },
          {
            "name_of_podcategory": "link3",
            "link_of_podcategory": "link3"
          },
          {
            "name_of_podcategory": "link4",
            "link_of_podcategory": "link4"
          },
        ]
      },
      {
        "podcategory_name":"podcategory1",
        "links_of_podcategory": [
          {
            "name_of_podcategory": "link1",
            "link_of_podcategory": "link1"
          },
          {
            "name_of_podcategory": "link2",
            "link_of_podcategory": "link2"
          },
          {
            "name_of_podcategory": "link3",
            "link_of_podcategory": "link3"
          },
          {
            "name_of_podcategory": "link4",
            "link_of_podcategory": "link4"
          },
        ]
      },
      {
        "podcategory_name":"podcategory1",
        "links_of_podcategory": [
          {
            "name_of_podcategory": "link1",
            "link_of_podcategory": "link1"
          },
          {
            "name_of_podcategory": "link2",
            "link_of_podcategory": "link2"
          },
          {
            "name_of_podcategory": "link3",
            "link_of_podcategory": "link3"
          },
          {
            "name_of_podcategory": "link4",
            "link_of_podcategory": "link4"
          },
        ]
      }
    ]
  },
  {
    name_of_category: "category1",
    svg_icon: `    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 477.534 477.534" style="enable-background:new 0 0 477.534 477.534;" xml:space="preserve"><g>	<g>		<path d="M438.482,58.61c-24.7-26.549-59.311-41.655-95.573-41.711c-36.291,0.042-70.938,15.14-95.676,41.694l-8.431,8.909			l-8.431-8.909C181.284,5.762,98.662,2.728,45.832,51.815c-2.341,2.176-4.602,4.436-6.778,6.778			c-52.072,56.166-52.072,142.968,0,199.134l187.358,197.581c6.482,6.843,17.284,7.136,24.127,0.654			c0.224-0.212,0.442-0.43,0.654-0.654l187.29-197.581C490.551,201.567,490.551,114.77,438.482,58.61z M413.787,234.226h-0.017			L238.802,418.768L63.818,234.226c-39.78-42.916-39.78-109.233,0-152.149c36.125-39.154,97.152-41.609,136.306-5.484			c1.901,1.754,3.73,3.583,5.484,5.484l20.804,21.948c6.856,6.812,17.925,6.812,24.781,0l20.804-21.931			c36.125-39.154,97.152-41.609,136.306-5.484c1.901,1.754,3.73,3.583,5.484,5.484C453.913,125.078,454.207,191.516,413.787,234.226			z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`,
    podcategoryes: [
      {
        "podcategory_name":"podcategory1",
        "links_of_podcategory": [
          {
            "name_of_podcategory": "link1",
            "link_of_podcategory": "link1"
          },
          {
            "name_of_podcategory": "link2",
            "link_of_podcategory": "link2"
          },
          {
            "name_of_podcategory": "link3",
            "link_of_podcategory": "link3"
          },
          {
            "name_of_podcategory": "link4",
            "link_of_podcategory": "link4"
          },
        ]
      },
      {
        "podcategory_name":"podcategory1",
        "links_of_podcategory": [
          {
            "name_of_podcategory": "link1",
            "link_of_podcategory": "link1"
          },
          {
            "name_of_podcategory": "link2",
            "link_of_podcategory": "link2"
          },
          {
            "name_of_podcategory": "link3",
            "link_of_podcategory": "link3"
          },
          {
            "name_of_podcategory": "link4",
            "link_of_podcategory": "link4"
          },
        ]
      },
      {
        "podcategory_name":"podcategory1",
        "links_of_podcategory": [
          {
            "name_of_podcategory": "link1",
            "link_of_podcategory": "link1"
          },
          {
            "name_of_podcategory": "link2",
            "link_of_podcategory": "link2"
          },
          {
            "name_of_podcategory": "link3",
            "link_of_podcategory": "link3"
          },
          {
            "name_of_podcategory": "link4",
            "link_of_podcategory": "link4"
          },
        ]
      }
    ]
  }
]

document.getElementById("menu-btn").onclick = () => {
  document.getElementById("main-menu").className = "main-menu-shell"
  let menu = document.getElementById("main-menu")
  
}
