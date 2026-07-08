import React, { useRef } from 'react';

interface ShoppingListFormProps {
    onAdd(name: string, qty: number): void
}

function ShoppingListForm(props: ShoppingListFormProps) {

    const { onAdd } = props;
    const itemDataRefs = useRef<{
        name: HTMLInputElement | null;
        quantity: HTMLInputElement | null;
    }>({
        name: null,
        quantity: null
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
         if(itemDataRefs.current['name'] && itemDataRefs.current['quantity']){ 
         const name = itemDataRefs.current['name']?.value || "";
        const qty= Number(itemDataRefs.current['quantity']?.value) || 0;

        itemDataRefs.current['name'].value = "";
        itemDataRefs.current['quantity'].value = "";
        onAdd(name, qty);
         }
    };

    return (
        <form onSubmit={handleSubmit}>
           <label>
            <span>Item name:</span>
            <input ref={(el) => {
                itemDataRefs.current['name'] = el;
            }} type="text" placeholder='item name' />
           </label>

            <label>
            <span>Item quantity:</span>
            <input type="number"
                ref={(el) => {
                    itemDataRefs.current['quantity'] = el;
                }}
                placeholder='item name' />
           </label>
           <button type='submit'>Submit</button>
        </form>
    )
}

export default ShoppingListForm
