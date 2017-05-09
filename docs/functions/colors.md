# Function: Color

## `color($name, $opacity: false)`

With the color function you can easily use the defined colors from the `$fw-colors` variable.

The `$opacity` parameter is optional. You can use it to set the opacity of the given color.

### Usage

You can use the color function like any other function in scss. Replace `$name` with the name of the color as defined in the `$fw-colors` variable. Use the optional `$opacity` parameter to set the opacity of the given color.

```scss
.foo {
	color: color($name, $opacity: false);
}
```

### Examples

#### Example 1

Set the `background-color` to `black`.

```scss
.foo {
	background-color: color('black');
}
```

**Compiled CSS**

```css
.foo {
	background-color: #000000;
}
```

#### Example 2

Set the `background-color` to `black` with an opacity of 50%.

```scss
.foo {
	background-color: color('black', 0.5);
}
```

**Compiled CSS**

```css
.foo {
	background-color: rgba(0, 0, 0, 0.5);
}
```
