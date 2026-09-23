Проект: `/media/Apacer1Tb/work26/angular-examples/directive-demo2`

Angular 19 standalone-приложение для демонстрации поддержки `@Input` / `@Output` в плагине.

Что смотреть в IDE:

1. **Компонент `LikeBoxComponent`** (`src/app/like-box.component.ts`)
   - `[title]` → `@Input() title`
   - `[caption]` → `@Input('caption') label` (алиас)
   - `(liked)` → `@Output() liked`

2. **Директива `ClickTrackerDirective`** (`src/app/click-tracker.directive.ts`)
   - селектор `[appClickTracker]`
   - `[appClickTracker]="'paragraph'"` должен открывать **поле** `@Input() appClickTracker`, не только литерал `selector`
   - `[pulseColor]` — второй input (completion атрибутов)
   - `(tracked)` — output

3. **Директива `SizeBadgeDirective`** — биндинги в метаданных:
   `inputs: ['size: hostSize']`, `outputs: ['resized']`

4. **Неизвестное свойство:** откройте `src/app/unknown-binding.sample.html`
   (файл не подключён как template, чтобы `ng build` проходил).
   `[noSuchInput]` / `(noSuchOutput)` — warning; известные биндинги — нет.

5. **Completion:** в `app.component.html` после имени тега (`<p |`, `<app-like-box |`)
   должны предлагаться `[title]`, `[caption]`, `(liked)`, `appClickTracker`, `[pulseColor]`, `(tracked)`.

Запуск:

```
cd /media/Apacer1Tb/work26/angular-examples/directive-demo2
npm start
```

http://localhost:4200 — клик по like-box, абзацу и кнопке, двойной клик по бейджу.
