class Comment {
    constructor(user_id, point_id, title, comment, rating){
        this.user_id = user_id;
        this.point_id = point_id;
        this.title = title;
        this.comment = comment;
        this.rating = rating;
    }
}

module.exports = Comment;