import React from 'react';
import './Post.scss';
import minhaImagem from '../assets/img/yoda1.png';
import minhaImagem1 from '../assets/img/post-yoda.jpeg';
import minhaImagem2 from '../assets/img/comentario-post.jpeg';


class Post extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      like: false,
    }
  }

  render() {
    const { like } = this.state;

    return (
      <article className="post">
        <header className="post__header">
          <div className="user">
            <a href="index2.html" className="user__thumb">
            <img src={minhaImagem} alt="Descrição da imagem" />
            </a>

            <a href="#" className="user__name">Mestre Yoda</a>
          </div>

          <button className="post__context">
            <i className="fas fa-ellipsis-h"/>
          </button>
        </header>

        <figure className="post__figure">
        <img src={minhaImagem1} alt="Descrição da imagem" />
        </figure>

        <nav className="post__controls">
          <button 
          className="post__control"
          onClick={ () => this.setState ({ like: !like  })}
          
          >
            {
              this.state.like ? <i className='fas fa-heart' /> : <i className='far fa-heart' />
            }
          </button>

          <button 
            className="post__control"
          >
            <i className="far fa-comment"/>
            <span className="comments__counter">
              
            </span>
          </button>

          <button className="post__control">
            <i className="far fa-bookmark"/>
          </button>
        </nav>


        
          <div className="post__status">
            <div className="user">
              <a href="#" className="user__thumb">
              <img src={minhaImagem2} alt="Descrição da imagem" />
              </a>

              <span>
               comentado por <a href="#"> pessoa(s)</a>
            </span>
            </div>
          </div>
       
      </article>
    );
  }
  
}

export default Post;