import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


class DishDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedDish : null
        };
    }

   
    renderComments(comments) {
        const coments = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'

                    }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {coments}
                </ul>

            </div>
        )
    }
    
    renderDish(dish) {
        if (dish != null)
            return(
                <Card  className="col-12 col-sm-5">
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    render() {
        const dish = this.props.dish
        if (dish == null) {
            return (<div></div>)
        }
         
       
        return (
            
            <div className="row">
                {this.renderDish(dish)}
                {this.renderComments(dish.comments)}
            </div>
           
                
        )
    }
}
export default DishDetail;