const menuList = [
    {
        title: "首页",
        key: '/home'
    },
    {
        title:"页面1",
        key: "/admin",
        children:[
            {
                title:"页面11",
                key:"/admin"
            },
            {
                title:"页面12",
                key:"/page1"
            },
        ]
    }
];

export default menuList;