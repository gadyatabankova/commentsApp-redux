import React from 'react';

const CommentList = (props) => {
    const {items, delComment} = props;

    return (
        <div>
            {
                items.map(item => {
                    return (
                        <div
                        className="commentBlock"
                        key={item.id}
                        >
                            <span><b>Пользователь:</b> {item.user}</span>
                            <span><b>Дата/время:</b> {item.time}</span>
                            <span>
                                <button
                                    onClick={ev => delComment(item.id)}
                                >
                                DEL
                                </button>
                            </span>
                            <div>
                                <b>Комментарий: </b>
                                <span dangerouslySetInnerHTML={{ __html: item.comment}}></span>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default CommentList;