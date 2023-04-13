<style>
	b {color: blue}
</style>

# Содержание

### [1. CSS](#css)

### [2. GIT](#git)

<br />

<a id='css'></a>

# 1. CSS

В проекте будем использовать определённый шаг для отсутпов и шрифтов - **4px**. Будем использовать только **верхние** и **левые** отступы.

Написал **UI-Kit** для **CSS**.

```scss
@mixin ui-margin($direction, $size) {...}
@mixin ui-padding($direction, $size) {...}
@mixin ui-font($size) {...}
```

Пример использования:

```scss
.selector {
	@include ui-font(2);
	@include ui-margin(top, 2);
	@include ui-padding(top, 4);
}
```

1. `ui-margin` первым аргументом принимает направление отступа (в нашем случае - `top`), вторым - размер. `ui-padding` - также

2. `ui-font` принимает аргументом только размер

<br />

<a id='git'></a>

# 2. GIT

### Шаблон для коммитов

```
Feat (scope): action
```

1. Первое слово:

   - **Feat** - изменение
   - **Fix** - багфикс
   - **Merge** - мёрдж

<br />

2. Второе слово - скоуп, в котором было сделано изменение
3. Третье слово - само изменение