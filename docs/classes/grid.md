# Classes: Grid

The frameworks grid system is based on the CSS flex box model.

## `.fw-o-grid`

This is the main grid class which creates the basic grid wrapper.

### Usage

Simply create a `<div>` element with the `.fw-o-grid` class. By default the grid wrapper has a fixed width, which is defined in the configuration variable [`$fw-grid-fixed-widths`](/docs/configuration.md#fw-grid-fixed-widths).

```html
<div class="fw-o-grid">
	<!-- Grid Row's goes here... -->
</div>
```

### Options/Modifiers

#### `.fw-o-grid--fluid`

To disable the default fixed width, simply add the `.fw-o-grid--fluid` modifier class.

```html
<div class="fw-o-grid fw-o-grid--fluid">
	<!-- Grid Row's goes here... -->
</div>
```

## `.fw-o-grid__row`

This class defines each row in the grid system and is the wrapper for all `.fw-o-grid__col` classes.

### Usage

Create a `<div>` element with the `.fw-o-grid__row` class inside the `.fw-o-grid` container. It is also possible to nest the grid by putting this class inside a `.fw-o-grid__col` element.

```html
<div class="fw-o-grid">
	<div class="fw-o-grid__row">
		<!-- Grid Col's goes here... -->
	</div>
</div>
```

### Options/Modifiers

There are two modifier groups for the rows. Horizontal and vertical positioning. Each modifier overwrites the other modifiers in it's group, so only one horizontal and one vertical modifier class can be used together on the same breakpoint.

#### `.fw-o-grid__row--start`

Default value. Cols are positioned at the beginning of the row (`justify-content: flex-start;`).

```html
<div class="fw-o-grid__row fw-o-grid__row--start">
	<!-- Grid Col's goes here... -->
</div>
```

#### `.fw-o-grid__row--center`

Cols are positioned at the center of the row (`justify-content: center;`).

```html
<div class="fw-o-grid__row fw-o-grid__row--center">
	<!-- Grid Col's goes here... -->
</div>
```

#### `.fw-o-grid__row--end`

Cols are positioned at the end of the row (`justify-content: flex-end;`).

```html
<div class="fw-o-grid__row fw-o-grid__row--end">
	<!-- Grid Col's goes here... -->
</div>
```

#### `.fw-o-grid__row--around`

Cols are positioned with space before, between, and after (`justify-content: space-around;`).

```html
<div class="fw-o-grid__row fw-o-grid__row--around">
	<!-- Grid Col's goes here... -->
</div>
```

#### `.fw-o-grid__row--between`

Cols are positioned with space between (`justify-content: space-between;`).

```html
<div class="fw-o-grid__row fw-o-grid__row--between">
	<!-- Grid Col's goes here... -->
</div>
```

#### `.fw-o-grid__row--top`

Cols are positioned at the vertical beginning of the row (`align-items: flex-start;`).

```html
<div class="fw-o-grid__row fw-o-grid__row--top">
	<!-- Grid Col's goes here... -->
</div>
```

#### `.fw-o-grid__row--middle`

Cols are positioned at the vertical center of the row (`align-items: center;`).

```html
<div class="fw-o-grid__row fw-o-grid__row--middle">
	<!-- Grid Col's goes here... -->
</div>
```

#### `.fw-o-grid__row--bottom`

Cols are positioned at the vertical end of the row (`align-items: flex-end;`).

```html
<div class="fw-o-grid__row fw-o-grid__row--bottom">
	<!-- Grid Col's goes here... -->
</div>
```

#### `.fw-o-grid__row--*@<breakpoint>`

Applies the modifier only after the specified breakpoint, overrides previous styles on each breakpoint.

```html
<div class="fw-o-grid__row fw-o-grid__row--start fw-o-grid__row--center@xl">
	<!-- Grid Col's goes here... -->
</div>
```

*Cols are aligned left and aligned center after the `xl` breakpoint.*


## `.fw-o-grid__col`

This is the main grid col, there the content can be placed.

### Usage

Place one or more `<div>` element(s) with the `.fw-o-grid__col` in the `.fw-o-grid__row` wrapper.

```html
<div class="fw-o-grid">
	<div class="fw-o-grid__row">
		<div class="fw-o-grid__col">
			<!-- Content Element goes here... -->
		</div>
	</div>
</div>
```

### Options/Modifiers

#### `.fw-o-grid__col--first`

Col is positioned as first element in the row. Can be used with the `@<breakpoint>` notation.

```html
<div class="fw-o-grid">
	<div class="fw-o-grid__row">
		<div class="fw-o-grid__col fw-o-grid__col--first@m">
			<!-- Content Element goes here... -->
		</div>
	</div>
</div>
```

#### `.fw-o-grid__col--last`

Col is positioned as first element in the row. Can be used with the `@<breakpoint>` notation.

```html
<div class="fw-o-grid">
	<div class="fw-o-grid__row">
		<div class="fw-o-grid__col fw-o-grid__col--last@m">
			<!-- Content Element goes here... -->
		</div>
	</div>
</div>
```

#### `.fw-o-grid__col--offset:<size>`

Offset from the left side of the col (value from 1 to the defined number of cols in [`$fw-grid-cols`](/docs/configuration.md#fw-grid-cols)).

```html
<div class="fw-o-grid">
	<div class="fw-o-grid__row">
		<div class="fw-o-grid__col fw-o-grid__col--offset:4">
			<!-- Content Element goes here... -->
		</div>
	</div>
</div>
```

#### `.fw-o-grid__col:<size>`

Size of the col (value from 1 to the defined number of cols in [`$fw-grid-cols`](/docs/configuration.md#fw-grid-cols)).

```html
<div class="fw-o-grid">
	<div class="fw-o-grid__row">
		<div class="fw-o-grid__col fw-o-grid__col:6">
			<!-- Content Element goes here... -->
		</div>
	</div>
</div>
```

#### `.fw-o-grid__col*@<breakpoint>`

Applies the modifier only after the specified breakpoint, overrides previous styles on each breakpoint.

```html
<div class="fw-o-grid">
	<div class="fw-o-grid__row">
		<div class="fw-o-grid__col fw-o-grid__col:6 fw-o-grid__col:4@l">
			<!-- Content Element goes here... -->
		</div>
	</div>
</div>
```

*Col is 6 cols wide and 4 cols wide after the `l` breakpoint.*
