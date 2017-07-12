# Classes: Colors

The framework comes with some useful color classes, to set the `background-color`, `border-color` or `color`.

## `.u-color-bg:$name`

This class is used to set the `background-color` of the element to the value defined by `$name`.

### Usage

Use it on any element by adding the `.u-color-bg:$name` class. Replace `$name` with your color name as defined in [`$fw-colors`](/docs/configuration.md#fw-colors)).

If [`$fw-colors-responsive`](/docs/configuration.md#fw-colors-responsive) is set to true, you can override the color on any given breakpoint by adding the `@b$breakpoint` modifier.

```html
<div class="u-color-bg:black">
	<!-- Div background color is black. -->
</div>
```

```html
<div class="u-color-bg:black u-color-bg:white@xxl">
	<!-- Div background color is black and white at the xxl breakpoint. -->
</div>
```

## `.u-color-bo:$name`

This class is used to set the `border-color` of the element to the value defined by `$name`.

### Usage

Use it on any element by adding the `.u-color-bo:$name` class. Replace `$name` with your color name as defined in [`$fw-colors`](/docs/configuration.md#fw-colors)).

If [`$fw-colors-responsive`](/docs/configuration.md#fw-colors-responsive) is set to true, you can override the color on any given breakpoint by adding the `@b$breakpoint` modifier.

```html
<div class="u-color-bo:black">
	<!-- Div border color is black. -->
</div>
```

```html
<div class="u-color-bo:black u-color-bo:white@xxl">
	<!-- Div border color is black and white at the xxl breakpoint. -->
</div>
```

## `.u-color-c:$name`

This class is used to set the `color` of the element to the value defined by `$name`.

### Usage

Use it on any element by adding the `.u-color-c:$name` class. Replace `$name` with your color name as defined in [`$fw-colors`](/docs/configuration.md#fw-colors)).

If [`$fw-colors-responsive`](/docs/configuration.md#fw-colors-responsive) is set to true, you can override the color on any given breakpoint by adding the `@b$breakpoint` modifier.

```html
<div class="u-color-c:black">
	<!-- Div text color is black. -->
</div>
```

```html
<div class="u-color-c:black u-color-c:white@xxl">
	<!-- Div text color is black and white at the xxl breakpoint. -->
</div>
```
