# React Homework — Todo App

**Dərs 15–16:** React State, Hooks & Forms

## Məqsəd

React ilə gündəlik tapşırıqları idarə etmək üçün Todo App hazırlayın. Tətbiqi ayrı-ayrı komponentlərə bölün və komponentlər arasında məlumatları props vasitəsilə ötürün.

## Funksional tələblər

1. Bütün tapşırıqları siyahı şəklində göstərin.
2. Form vasitəsilə yeni tapşırıq əlavə edin. Boş və yalnız boşluqlardan ibarət mətn qəbul edilməməlidir. Əlavə etdikdən sonra input təmizlənməlidir.
3. Hər tapşırığı tamamlanmış və ya tamamlanmamış vəziyyətə keçirmək mümkün olmalıdır. Tamamlanmış tapşırığın mətni üstündən xətt çəkilmiş formada göstərilməlidir.
4. Hər tapşırığı ayrıca silmək mümkün olmalıdır.
5. All, Active və Completed düymələri ilə siyahını filterləyin.
6. Ümumi, tamamlanmış və tamamlanmamış tapşırıqların sayını göstərin.
7. Seçilmiş filterə uyğun tapşırıq olmadıqda `No tasks found` mesajını göstərin.
8. `useEffect` vasitəsilə tapşırıqları `localStorage` ilə sinxronlaşdırın. Səhifə yeniləndikdə əvvəlki məlumatlar bərpa edilməlidir. İlk açılışda hazır array-dən istifadə edin; saxlanmış boş siyahı da qorunmalıdır.

## Komponent strukturu

```text
src/
├── components/
│   ├── Header.jsx
│   ├── TodoForm.jsx
│   ├── TodoList.jsx
│   ├── TodoItem.jsx
│   ├── TodoFilter.jsx
│   └── TodoStats.jsx
├── App.jsx
└── main.jsx
```

| Komponent | Vəzifəsi |
| --- | --- |
| App | Tapşırıqların və seçilmiş filterin state-ini idarə edir. |
| Header | Tətbiqin başlığını göstərir. |
| TodoForm | Yeni tapşırıq əlavə etmək üçün formu idarə edir. |
| TodoList | Filterlənmiş tapşırıqları göstərir. |
| TodoItem | Bir tapşırığı, onun statusunu və silmə düyməsini göstərir. |
| TodoFilter | Filter düymələrini göstərir və seçimi dəyişir. |
| TodoStats | Tapşırıq saylarını göstərir. |

## Hazır data

```javascript
const initialTodos = [
  { id: 1, title: "Learn React", completed: true },
  { id: 2, title: "Practice useState", completed: false },
  { id: 3, title: "Build React components", completed: true },
  { id: 4, title: "Practice useEffect", completed: false },
  { id: 5, title: "Complete homework", completed: false }
];
```

## Texniki tələblər

- Components, Props və Lifting State Up istifadə edin.
- `useState` ilə state-i idarə edin; array-i birbaşa dəyişdirməyin.
- `onClick`, `onChange`, `onSubmit` event-lərindən istifadə edin.
- Controlled input və `event.preventDefault()` tətbiq edin.
- `map()` və `filter()` metodlarından istifadə edin. Hər element üçün unikal və sabit `key` verin.
- Conditional Rendering və `useEffect` tətbiq edin.
- Filterlənmiş siyahını və sayları mövcud state əsasında hesablayın.
- Tapşırığın mətnini redaktə etmək.
- Bütün tamamlanmış tapşırıqları bir düymə ilə silmək.
- Dizayn sərbəstdir. API, React Router və əlavə kitabxana tələb olunmur.

## Bonus (məcburi deyil)
- Responsive dizayn hazırlamaq.

## Təhvil

Layihəni GitHub repository-yə yükləyin və linkini təqdim edin.
