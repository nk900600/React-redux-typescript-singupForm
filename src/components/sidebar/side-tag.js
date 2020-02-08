import React from 'react'
import {
    Container,
    Step,
} from 'semantic-ui-react'

const style = {
    h1: {
        marginTop: '3em',
    },
    h2: {
        margin: '4em 0em 2em',
    },
    h3: {
        marginTop: '2em',
        padding: '2em 0em',
    },
    last: {
        marginBottom: '300px',
    },
};

const ResponsiveLayout = () => (
    <div>
        <Container>
            <Step.Group fluid>
                <Step icon='plane' title='Shipping' description='Choose your shipping options' />
                <Step active icon='dollar' title='Billing' description='Enter billing information' />
                <Step
                    // disabled
                    icon='info circle'
                    title='Confirm Order'
                    description='Verify order details'
                />
            </Step.Group>
        </Container>
    </div>
);

export default ResponsiveLayout
