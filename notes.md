# Notes

## Enums
We mainly use enums to signal to other devs what we're trying to get here.

Enums...

- Follow near-identical syntax rules as normal objects
- Creates an object with the same keys and values when converted from ts to js
- Primary goal is to signal to other engineers that these are all closely related values
- Use whenever we have a small fixed set of values that are all closely related and known at compile time

## Inheritance vs Composition

- Use inheritance when it's characterized by an '**is a**' relationship between two classes
- Use composition when it's characterized by a '**has a**' relationship between two classes

There is a misconception around composition. 

In the book 'Design Patterns', it says 
> Favor composition over inheritance

However, when the book talks about composition, it's saying specifically *delagation* to implement composition. This means we have some class that has a reference to another object, and anytime some request comes in that class is going to delegate that off to the other object. 

The following is not composition by the book definition.
```js
const rectagular = (state) => {
  return {
    area: () => {
      return state.height * state.width
    }
  }
}

const openable = (state) => {
  return {
    toggleOpen: () => {
      state.open = !state.open
    }
  }
}

const buildRectagularWindow = (state) => {
  return Object.assign(state, rectangular(state), openable(state))
}

const rectangleWindow = buildRectangularWindow({
  height: 20,
  width: 20,
  open: false
})

rectangleWindow.open  // false
rectangleWindow.toggleOpen()
rectangleWindow.open  // true
```

In english, sure, this is composed. But it's just not by the book definition. It's also very fragile (you cannot combine objects with the same method name otherwise it only takes one based on position of objet assignment). This is really just multiple inheritance.

Copy paste methods are basically inheritance. 