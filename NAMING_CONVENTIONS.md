# SymbolKit Naming Conventions

SymbolKit follows a specific naming convention to make it easy for users to understand the icons and their intended use. The convention consists of three parts: Object, Modifier, and Container, separated by hyphens. 

### Hierarchy 

The convention starts with the [Object], which can contain one or more objects. Then, [Modifier] is added as a additional and unique element, typically a secondary object, such as -minus, -plus, or -warning. Finally, [Container] is used as a shape that acts as a container for the object, such as -square or -circle. Note that if a shape is part of the object, it's not considered a container.

For example, the user-minus icon contains a user object with a minus modifier, while minus-square contains a minus object within a square container.

### Object-oriented Naming

With few exceptions, icons follow an object-oriented naming convention and should not embed actions in their names. Instead of using remove-user, use user-minus to follow the convention.

### Physical Actions

However, icons that represent physical actions or movements can include that action in their name. For example, walking, running, vehicle-fast, and crane-lifting are correctly named.

### Most-used Modifiers and Shapes

The most commonly used modifiers include -plus, -minus, -warning, -check, -xmark, -tag, -ban, and -slash. Note that -plus-in and -minus-in are used when the icon has a larger plus or minus symbol inside the object.

The most commonly used shapes are -square and -circle.

Additionally, -no-access is used when the icon contains a restrict symbol in a corner.

### Extra

If you come across an icon that does not follow these conventions, please open a new issue on Github.
