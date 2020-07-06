import React from 'react';

const AddComment = ({ addComment }) => {
    
    return (
        <div>
            <p>Ваше имя:</p>
            <input
                type = 'text'
                name = 'newUser'

            />
            <p>Введите комментарий:</p>
            <textarea
                type = 'text'
                name = 'newComment'   
            />
            <div>
                <button 
                    className="button"
                    onClick={(ev) => {

                        const user = document.querySelector('[name="newUser"]');
                        const comment = document.querySelector('[name="newComment"]');
                                             
                        if (user.value && comment.value) {
                            addComment(user.value, comment.value);
                            user.value = '';
                            comment.value = '';
                        } else {
                            alert('Проверьте правильность заполнения полей. Одно из полей не заполенно.')
                        }
                        
                    }}
                >
                    Добавить
                </button>
            </div>
        </div>
    )
}

export default AddComment;