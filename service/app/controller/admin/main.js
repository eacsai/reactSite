/* eslint-disable strict */
const Controller = require("egg").Controller;
const jsonwebtoken = require('jsonwebtoken');

class MainController extends Controller {
  async index() {
    // 首页的文章列表数据
    this.ctx.body = "hi api";
  }

  // 判断用户名密码是否正确
  async checkLogin() {
    const { ctx, app } = this;
    const userName = ctx.request.body.userName;
    const password = ctx.request.body.password;
    const secret = 'demo';
    const token = jsonwebtoken.sign({ userName }, secret, { expiresIn: '1d' });
    const sql = `SELECT userName FROM admin_user WHERE userName = "${userName}" AND password = "${password}"`;
    const res = await app.mysql.query(sql);
    if (res.length > 0) {
      ctx.body = { data: "登录成功", token, userName };
    } else {
      ctx.body = { data: "登录失败" };
    }
  }
  // 后台文章分类信息
  async getTypeInfo() {
    const resType = await this.app.mysql.select("type");
    this.ctx.body = { data: resType };
  }
  //添加文章
  async addArticle() {
    let tmpArticle = this.ctx.request.body;
    // tmpArticle.
    const result = await this.app.mysql.insert("article", tmpArticle);
    const insertSuccess = result.affectedRows === 1;
    const insertId = result.insertId;

    this.ctx.body = {
      isScuccess: insertSuccess,
      insertId: insertId,
    };
  }
  //修改文章
  async updateArticle() {
    let tmpArticle = this.ctx.request.body;

    const result = await this.app.mysql.update("article", tmpArticle);
    const updateSuccess = result.affectedRows === 1;
    console.log(updateSuccess);
    this.ctx.body = {
      isScuccess: updateSuccess,
    };
  }

  //获得文章列表
  async getArticleList() {
    let sql = `SELECT article.id as id,
      article.title as title,
      article.introduce as introduce,
      article.date as addTime, 
      type.type as typeName  
      FROM article LEFT JOIN type ON article.type_id = type.Id 
      ORDER BY article.id DESC`;

    const resList = await this.app.mysql.query(sql);
    this.ctx.body = { list: resList };
  }

  //删除文章
  async delArticle() {
    let id = this.ctx.params.id;
    const res = await this.app.mysql.delete("article", { id: id });
    this.ctx.body = { data: res };
  }

  //根据文章ID得到文章详情，用于修改文章
  async getArticleById() {
    let id = this.ctx.params.id;

    let sql = `SELECT article.id as id,
    article.title as title,
    article.introduce as introduce,
    article.date as addTime, 
    article.pic as picture,
    article.avatar as avatar,
    article.content as content,
    type.type as typeName,
    type.id as typeId  
    FROM article LEFT JOIN type ON article.type_id = type.Id
    WHERE article.id = "${id}"`;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }
}

module.exports = MainController;
