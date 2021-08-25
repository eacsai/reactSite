"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const result = await this.app.mysql.get("blog_content", {});
    this.ctx.body = result;
  }
  async getArticleList() {
    const id = 4
    let sql = `SELECT article.id as id,
    article.title as title,
    article.content as content,
    article.date as date,
    article.pic as pic,
    article.avatar as avatar,
    article.introduce as introduce,
    type.type as type,
    type.id as typeId 
    FROM article LEFT JOIN type ON article.type_id = type.Id 
    ORDER BY article.id DESC`
    const results = await this.app.mysql.query(sql);
    this.ctx.body = { data: results };
  }
}

module.exports = HomeController;
