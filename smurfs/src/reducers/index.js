const intialState = {
  smurfArray: [
    {
      "name": "Brainey",
      "age": 200,
      "height": "5cm",
      "id": 0
    }
  ]
}

const reducer = (state = intialState, action) => {
  console.log('reducer action: ', action)
  switch(action.type) {
    default:
      return state
  }
}

export default reducer