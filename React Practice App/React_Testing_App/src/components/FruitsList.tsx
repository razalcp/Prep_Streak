const FruitsList = () => {
    const items = [
        { id: 1, value: 'Apple' },
        { id: 2, value: 'Banana' },
        { id: 3, value: 'Orange' },
        { id: 4, value: 'Mango' },
        { id: 5, value: 'Grapes' },
        { id: 6, value: 'Watermelon' },
        { id: 7, value: 'Pineapple' },
        { id: 8, value: 'Strawberry' },
        { id: 9, value: 'Blueberry' },
        { id: 10, value: 'Raspberry' },
        { id: 11, value: 'Papaya' },
        { id: 12, value: 'Guava' },
        { id: 13, value: 'Pomegranate' },
        { id: 14, value: 'Kiwi' },
        { id: 15, value: 'Peach' },
        { id: 16, value: 'Pear' },
        { id: 17, value: 'Plum' },
        { id: 18, value: 'Cherry' },
        { id: 19, value: 'Coconut' },
        { id: 20, value: 'Lemon' },
    ];
    return (
        <>
            <ul>
                {items.map((item) => {
                    return (
                        <li key={item.id}>{item.value}</li>
                    )
                })}
            </ul>

        </>
    )
}

export default FruitsList;