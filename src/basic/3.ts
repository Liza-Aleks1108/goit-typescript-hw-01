// Створіть змінну, яка може містити або рядок, або число (union type)? Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

// Зміна,яка містить або рядок, або число
let type: string | number;

// Змінна, яка може містити лише 'enable' або 'disable'
let status: "enable" | "disable";
