import React from 'react'
import type Item from '../models/Item.js';
interface Props {
    items: Item[]
}

function ShoppingList(props: Props): React.JSX.Element {
    const { items } = props
    const getRenderItems = (): React.JSX.Element[] => {
        return items.map((item) => {
            return <li key={item.id}>{item.name} - {item.quantity}</li>
        })
    };

    return (
        <div>
            <ul>
                {getRenderItems()}
            </ul>
        </div>
    )
}

export default ShoppingList
