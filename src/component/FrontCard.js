import React from 'react';
import { Card, Icon, Segment } from 'semantic-ui-react'

const FrontCard = (props) => {

    return (
        <Card className="ui centered">
            <Card.Content onClick={props.handleCardFlip}>
                    <Card.Description>
                        <h2>
                            {props.question}
                        </h2>
                    </Card.Description>
                <Icon onClick={props.previousCard} name="angle left" />
                <Icon onClick={props.nextCard} name="angle right" />
            </Card.Content>
        </Card>
    )
}

export default FrontCard;