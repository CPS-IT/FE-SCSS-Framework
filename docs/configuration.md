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
    's': 576px,
    'm': 768px,
    'l': 992px,
    'xl': 1200px,
    'xxl': 1600px
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
    's': 540px,
    'm': 720px,
    'l': 960px,
    'xl': 1140px,
    'xxl': 1540px
);
```
