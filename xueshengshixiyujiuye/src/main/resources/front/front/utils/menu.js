const menu = {
    list() {
        return [
    {
        "backMenu":[
        ],
        "frontMenu":[
        ],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"辅导教师留言信息",
                        "menuJump":"列表",
                        "tableName":"fudaojiaoshiLiuyan"
                    }
                ],
                "menu":"我的辅导教师留言信息"
            }
            ,
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"公告信息"
            }
			,
			{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"申请实习",
                        "menuJump":"列表",
                        "tableName":"toudi"
                    }
                ],
                "menu":"申请实习"
            }
			,
			{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"职位招聘",
                        "menuJump":"列表",
                        "tableName":"zhaopin"
                    }
                ],
                "menu":"职位招聘"
            }
            ,
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"职位收藏管理",
                        "menuJump":"列表",
                        "tableName":"zhaopinCollection"
                    }
                ],
                "menu":"我的职位收藏"
            }
            ,
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"职位留言信息",
                        "menuJump":"列表",
                        "tableName":"zhaopinLiuyan"
                    }
                ],
                "menu":"我的职位留言信息"
            }
        ],
        "frontMenu":[
        ],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"是",
        "hasFrontRegister":"是",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]

	}
}
export default menu;
