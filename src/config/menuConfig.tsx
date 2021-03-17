import plantformIcon from '@/assets/layout/plantformIcon.png'

const menuList = [
    {
      title: "工作台",
      key: '/orderPage',
      icon:plantformIcon
    }, 
    {
      title: "工作台医生",
      key: '/orderPageDoctor',
      icon:plantformIcon
    },  
    {
        title: "首页",
        key: '/home'
    },
    {
        title:"页面1",
        key: "/admin",
        children:[
            {
                title:"子页面1",
                key:"/page1"
            },
        ]
    }
];

export default menuList;