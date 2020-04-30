export const getInitData = (setCategories) => fetch('graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: '{ categories { id, name, items { id, name, price } } }' }),
    })
    .then(res => res.json())
    .then(res => setCategories(res.categories));