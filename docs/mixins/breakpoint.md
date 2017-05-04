# Mixin: Breakpoint

## `breakpoint($query, $query-max: false)`

With the breakpoint mixin you can easily use the defined breakpoints from the `$fw-breakpoints-sizes` variable or set some custom breakpoint queries.

The `$query-max` parameter is optional. You can use it to generate a media query for a specific size range. See Example 3 for more details.

Generated media queries are based on `min-width`.

### Usage

You can use the breakpoint mixin like any other mixin in scss. Replace `$query` with the name of the breakpoint as defined in the `$fw-breakpoints-sizes` variable or with a specific size. If you need to define a specific range between two breakpoints, you can use the optional `$query-max` parameter. It takes the same values as the `$query` parameter.

```scss
@include breakpoint($query, $query-max: false) {
	// Your styles here...
}
```

### Examples

#### Example 1

Change the `background-color` from `red` to `blue` at the `'m'` breakpoint.

```scss
.foo {
	background-color: red;
	
	@include breakpoint('m') {
		background-color: blue;
	}
}
```

**Compiled CSS**

```css
.foo {
	background-color: red;
}

@media screen and (min-width: 768px) {
	.foo {
		background-color: blue;
	}
}
```

#### Example 2

Change the `background-color` from `red` to `blue` at `1050px`.

```scss
.foo {
	background-color: red;

	@include breakpoint(1050px) {
		background-color: blue;
	}
}
```

**Compiled CSS**

```css
.foo {
	background-color: red;
}

@media screen and (min-width: 1050px) {
	.foo {
		background-color: blue;
	}
}
```

#### Example 3

Change the `background-color` from `red` to `blue` only between the `'m'` breakpoint and `1050px`.

```scss
.foo {
	background-color: red;

	@include breakpoint('m', 1050px) {
		background-color: blue;
	}
}
```

**Compiled CSS**

```css
.foo {
	background-color: red;
}

@media screen and (min-width: 768px) and (max-width: 1050px) {
	.foo {
		background-color: blue;
	}
}
```
