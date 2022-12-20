export var exercises = [
    { name: 'Pullups' },
    { name: 'Deadlifts' },
    { name: 'Bench press' },
    { name: 'Overhead press' },
]

exercises = exercises.sort((a, b) =>
    a.name.localeCompare(b.name));