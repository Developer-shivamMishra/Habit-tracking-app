# Monthly Habit Tracker

A modern habit-tracking web application built with React and Redux that helps users track daily habits, monitor monthly progress, and maintain consistency.

## Features

- Track daily habit completion
- Monthly calendar-based habit view
- Habit statistics dashboard
- Monthly completion percentage
- Add and delete habits
- Navigate between months
- Persistent data storage using Local Storage
- Responsive and clean dark UI

## Component Architecture

### HabitTracker

Main container that manages the application layout and connects Redux state.

### MonthHeader

Displays the current month and provides navigation between months.

### StatsCards

Shows:

- Total Habits
- Total Completions
- Monthly Completion Rate

### CalendarHeader

Displays weekday labels (Sun–Sat).

### HabitList

Renders all habits for the selected month.

### HabitItem

Represents a single habit and its daily completion status.

### EmptyState

Displayed when no habits exist.

### AddHabitButton

Opens the habit creation modal.

### AddHabitModal

Handles habit creation and user input.

## Redux Store Structure

```javascript
{
  currentMonth: {
    month: 5,
    year: 2026
  },

  habits: [
    {
      id: 1,
      name: "Workout",
      completedDays: [1, 2, 5, 10]
    }
  ]
}
```

## Tech Stack

- React
- Redux Toolkit
- JavaScript
- CSS
- Local Storage

## Future Enhancements

- Habit streak tracking
- Weekly analytics
- Categories and tags
- Data export/import
- Cloud synchronization
- Theme customization
