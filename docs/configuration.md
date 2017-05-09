# Framework Configuration

## `$fw-features-enabled`

Disable single features from this framework, to use only what you need.

### Default

```scss
$fw-features-enabled: (
	'grid': true
);
```

## `$fw-breakpoints-sizes`

Define each breakpoint for the project.

### Default

```scss
$fw-breakpoints-sizes: (
    'xs': 500px,
    'sm': 700px,
    'md': 900px,
    'lg': 1100px,
    'xl': 1300px,
    'xxl': 1700px
);
```

## `$fw-grid-cols`

Define the number of cols the grid should have.

### Default

```scss
$fw-grid-cols: 12;
```

## `$fw-grid-gutter`

Define the padding on each side of the grid col's.

### Default

```scss
$fw-grid-gutter: 15px;
```

## `$fw-grid-fixed-widths`

Define the max-width's for each breakpoint.

### Default

```scss
$fw-grid-fixed-widths: (
    'xs': 960px,
    'sm': 960px,
    'md': 960px,
    'lg': 960px,
    'xl': 1100px,
    'xxl': 1200px
);
```

## `$fw-colors`

Define the color set for the project.

### Default

```scss
$fw-colors: (
    'black': #000000,
    'white': #ffffff
);
```

## `$fw-colors-responsive`

Set to false to disable the responsive modifier's (e.g. `.u-color-c:black@xxl`) for color classes.

### Default

```scss
$fw-colors-responsive: true;
```
