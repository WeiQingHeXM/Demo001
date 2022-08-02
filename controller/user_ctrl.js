import db from "../db/index.js"

 export async function getAllUser(req,res){
   const [rows] = await db.query('SELECT * FROM tb_user LIMIT 100;')
   res.send({
      status: 0,
      message:'获取用户列表成功！',
      data: rows,
   })
}

